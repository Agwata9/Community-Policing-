import React, { useState, useEffect, useMemo } from 'react';
import { ALL_QUESTIONS, TOPIC_SECTIONS } from './data/questionsData';
import { TraineeResponse, UserRating, QuestionItem } from './types';
import { Header } from './components/Header';
import { NavigationFilter } from './components/NavigationFilter';
import { StatsBar } from './components/StatsBar';
import { QuestionCard } from './components/QuestionCard';
import { ResetModal } from './components/ResetModal';
import { ChevronDown, ChevronUp, BookOpen, Layers, CheckCircle } from 'lucide-react';

const STORAGE_KEY = 'soip_cp_exam_responses_v1';

export default function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

  // Initialize responses from localStorage
  const [responses, setResponses] = useState<Record<string, TraineeResponse>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {};
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
    } catch {
      // ignore
    }
  }, [responses]);

  // Update a trainee's typed answer
  const handleUpdateAnswer = (questionId: string, answerText: string) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: {
        answer: answerText,
        isAnswerVisible: prev[questionId]?.isAnswerVisible || false,
        rating: prev[questionId]?.rating || null,
        lastUpdated: Date.now(),
      },
    }));
  };

  // Toggle model answer visibility
  const handleToggleAnswer = (questionId: string) => {
    setResponses((prev) => {
      const current = prev[questionId] || {
        answer: '',
        isAnswerVisible: false,
        rating: null,
      };
      return {
        ...prev,
        [questionId]: {
          ...current,
          isAnswerVisible: !current.isAnswerVisible,
        },
      };
    });
  };

  // Set self-rating (Mastered, Partial, Review)
  const handleSetRating = (questionId: string, rating: UserRating) => {
    setResponses((prev) => {
      const current = prev[questionId] || {
        answer: '',
        isAnswerVisible: true,
      };
      return {
        ...prev,
        [questionId]: {
          ...current,
          rating,
        },
      };
    });
  };

  // Show all answers in the current view
  const handleShowAll = () => {
    setResponses((prev) => {
      const updated = { ...prev };
      filteredQuestions.forEach((q) => {
        updated[q.id] = {
          answer: updated[q.id]?.answer || '',
          isAnswerVisible: true,
          rating: updated[q.id]?.rating || null,
        };
      });
      return updated;
    });
  };

  // Hide all answers in current view
  const handleHideAll = () => {
    setResponses((prev) => {
      const updated = { ...prev };
      filteredQuestions.forEach((q) => {
        if (updated[q.id]) {
          updated[q.id] = {
            ...updated[q.id],
            isAnswerVisible: false,
          };
        }
      });
      return updated;
    });
  };

  // Reset entire exam
  const handleConfirmReset = () => {
    setResponses({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  // Toggle collapsing of a section
  const toggleSectionCollapse = (sectionId: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Filter questions based on selected topic and search query
  const filteredQuestions = useMemo(() => {
    let list = ALL_QUESTIONS;

    if (selectedTopicId !== 'all') {
      list = list.filter((q) => q.topicId === selectedTopicId);
    }

    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase().trim();
      list = list.filter(
        (q) =>
          q.questionText.toLowerCase().includes(qLower) ||
          q.modelAnswer.toLowerCase().includes(qLower) ||
          q.topicName.toLowerCase().includes(qLower) ||
          (q.paperContext && q.paperContext.toLowerCase().includes(qLower)) ||
          q.markingPoints.some((p) => p.toLowerCase().includes(qLower))
      );
    }

    return list;
  }, [selectedTopicId, searchQuery]);

  // Group filtered questions by topic section
  const groupedSections = useMemo(() => {
    const groups: {
      topic: (typeof TOPIC_SECTIONS)[0];
      questions: QuestionItem[];
    }[] = [];

    TOPIC_SECTIONS.forEach((topic) => {
      const qs = filteredQuestions.filter((q) => q.topicId === topic.id);
      if (qs.length > 0) {
        groups.push({
          topic,
          questions: qs,
        });
      }
    });

    return groups;
  }, [filteredQuestions]);

  // Global counts for current filtered view
  const currentTotal = filteredQuestions.length;
  const currentAnsweredCount = filteredQuestions.filter(
    (q) => responses[q.id]?.answer && responses[q.id].answer.trim().length > 0
  ).length;
  const currentRevealedCount = filteredQuestions.filter(
    (q) => responses[q.id]?.isAnswerVisible
  ).length;

  // Selected topic name for banner
  const selectedTopic = TOPIC_SECTIONS.find((t) => t.id === selectedTopicId);
  const currentTopicTitle =
    selectedTopicId === 'all'
      ? 'All Questions (Full Course Revision)'
      : selectedTopic
      ? `${selectedTopic.number}. ${selectedTopic.title}`
      : 'Revision Questions';

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f7f4] text-slate-800 font-sans">
      {/* Top Header */}
      <Header />

      {/* Sticky Navigation & Search Filter */}
      <NavigationFilter
        selectedTopicId={selectedTopicId}
        onSelectTopic={setSelectedTopicId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        responses={responses}
        allQuestionsCount={ALL_QUESTIONS.length}
      />

      {/* Progress & Quick Actions Bar */}
      <StatsBar
        totalQuestions={currentTotal}
        answeredCount={currentAnsweredCount}
        revealedCount={currentRevealedCount}
        onShowAll={handleShowAll}
        onHideAll={handleHideAll}
        onOpenReset={() => setIsResetModalOpen(true)}
        currentTopicTitle={currentTopicTitle}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-6 sm:py-8">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200 p-8 shadow-xs">
            <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700">No questions match your filter</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search terms or switch to "All Questions".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTopicId('all');
              }}
              className="mt-4 px-4 py-2 bg-slate-900 text-amber-400 font-medium text-xs rounded-lg hover:bg-slate-800 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {groupedSections.map(({ topic, questions }) => {
              const isCollapsed = Boolean(collapsedSections[topic.id]);
              const topicAnswered = questions.filter(
                (q) => responses[q.id]?.answer && responses[q.id].answer.trim().length > 0
              ).length;

              return (
                <section
                  key={topic.id}
                  id={`topic-section-${topic.id}`}
                  className="bg-white/70 rounded-xl border border-slate-200/90 shadow-xs overflow-hidden"
                >
                  {/* Topic Collapsible Section Header */}
                  <div
                    onClick={() => toggleSectionCollapse(topic.id)}
                    className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-between cursor-pointer hover:bg-slate-800 transition select-none"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="w-7 h-7 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 sm:mt-0">
                        {topic.number}
                      </div>
                      <div>
                        <h2 className="text-sm sm:text-base font-bold text-white font-serif tracking-tight">
                          {topic.title}
                        </h2>
                        <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                          {topic.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 flex-shrink-0 ml-2">
                      <span className="text-xs text-slate-300 font-mono bg-slate-800 px-2 py-1 rounded border border-slate-700 hidden sm:inline">
                        {topicAnswered}/{questions.length} Attempted
                      </span>
                      <div className="p-1 rounded bg-slate-800 text-slate-300">
                        {isCollapsed ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronUp className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Question Cards List within Topic */}
                  {!isCollapsed && (
                    <div className="p-4 sm:p-5 bg-slate-50/50 space-y-4">
                      {questions.map((q, idx) => (
                        <QuestionCard
                          key={q.id}
                          question={q}
                          displayIndex={q.questionNumber}
                          response={
                            responses[q.id] || {
                              answer: '',
                              isAnswerVisible: false,
                              rating: null,
                            }
                          }
                          onUpdateAnswer={handleUpdateAnswer}
                          onToggleAnswer={handleToggleAnswer}
                          onSetRating={handleSetRating}
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </main>

      {/* Examination Reset Confirmation Dialog */}
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
        answeredCount={Object.values(responses).filter((r) => r.answer?.trim()).length}
      />

      {/* Academic Footer */}
      <footer className="mt-12 bg-slate-900 text-slate-400 border-t border-slate-800 py-6 text-center text-xs">
        <div className="max-w-4xl mx-auto px-4 space-y-1.5">
          <p className="font-semibold text-slate-300 tracking-wide uppercase">
            National Police College · Kiganjo
          </p>
          <p className="text-slate-400">
            Community Policing: The Complete Revision & Examination Booklet · Ordinary SOIP Course (2025)
          </p>
          <p className="text-slate-500 text-[11px] pt-2">
            Compiled for exam revision and self-assessment strictly based on the NPC Kiganjo Community Policing Course Manual.
          </p>
        </div>
      </footer>
    </div>
  );
}
