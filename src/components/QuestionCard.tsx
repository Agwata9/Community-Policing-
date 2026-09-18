import React from 'react';
import { QuestionItem, TraineeResponse, UserRating } from '../types';
import { Eye, EyeOff, Check, AlertCircle, HelpCircle, FileText, CheckCheck } from 'lucide-react';

interface QuestionCardProps {
  question: QuestionItem;
  displayIndex: number;
  response: TraineeResponse;
  onUpdateAnswer: (questionId: string, answerText: string) => void;
  onToggleAnswer: (questionId: string) => void;
  onSetRating: (questionId: string, rating: UserRating) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  displayIndex,
  response,
  onUpdateAnswer,
  onToggleAnswer,
  onSetRating,
}) => {
  const isAnswered = Boolean(response.answer && response.answer.trim().length > 0);
  const wordCount = response.answer ? response.answer.trim().split(/\s+/).filter(Boolean).length : 0;

  // Question type color styling
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'define':
        return { label: 'Definition', bg: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      case 'list':
        return { label: 'List / Name', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'explain':
        return { label: 'Explain', bg: 'bg-sky-50 text-sky-700 border-sky-200' };
      case 'state':
        return { label: 'State', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'distinguish':
        return { label: 'Distinguish / Compare', bg: 'bg-purple-50 text-purple-700 border-purple-200' };
      case 'law':
        return { label: 'Legal Provision / Law', bg: 'bg-rose-50 text-rose-700 border-rose-200' };
      case 'scenario':
        return { label: 'Scenario / Application', bg: 'bg-orange-50 text-orange-700 border-orange-200' };
      case 'essay':
        return { label: 'Essay / Section II', bg: 'bg-blue-900 text-white border-blue-950' };
      default:
        return { label: 'Question', bg: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  const badge = getTypeBadge(question.questionType);

  return (
    <article
      id={`question-${question.id}`}
      className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors duration-150 overflow-hidden mb-4"
    >
      {/* Question Header Bar */}
      <div className="bg-[#f8fafc] border-b border-slate-200/80 px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold text-sm bg-slate-800 text-amber-400 px-2 py-0.5 rounded-md">
            Q{displayIndex}
          </span>
          <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${badge.bg}`}>
            {badge.label}
          </span>
          {question.paperContext && (
            <span className="text-[11px] font-medium text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded">
              {question.paperContext}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {question.marks && (
            <span className="text-xs font-bold text-amber-800 bg-amber-100/70 border border-amber-300/60 px-2 py-0.5 rounded-md">
              {question.marks} Marks
            </span>
          )}
          {isAnswered ? (
            <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Answered ({wordCount} words)
            </span>
          ) : (
            <span className="text-[11px] text-slate-400 font-medium">Unanswered</span>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Question Text */}
        <div className="text-slate-900 font-semibold text-sm sm:text-base leading-relaxed whitespace-pre-line font-serif">
          {question.questionText}
        </div>

        {/* Trainee Answer Workspace */}
        <div className="mt-3.5">
          <label
            htmlFor={`input-${question.id}`}
            className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5"
          >
            Trainee Workspace (Type your answer before checking):
          </label>
          <textarea
            id={`input-${question.id}`}
            rows={question.questionType === 'essay' ? 6 : 3}
            value={response.answer || ''}
            onChange={(e) => onUpdateAnswer(question.id, e.target.value)}
            placeholder="Type your complete answer here under exam conditions..."
            className="w-full text-sm p-3 bg-amber-50/20 text-slate-800 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition placeholder:text-slate-400 font-sans"
          />
        </div>

        {/* Action button: Show / Hide Answer */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={() => onToggleAnswer(question.id)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition shadow-2xs cursor-pointer ${
              response.isAnswerVisible
                ? 'bg-slate-700 hover:bg-slate-800 text-white'
                : 'bg-amber-600 hover:bg-amber-700 text-white'
            }`}
          >
            {response.isAnswerVisible ? (
              <>
                <EyeOff className="w-4 h-4" />
                <span>Hide Answer</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span>Show Answer</span>
              </>
            )}
          </button>

          {/* Self-assessment rating (shown when answer is revealed) */}
          {response.isAnswerVisible && (
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-500 font-medium text-[11px] mr-1 hidden sm:inline">
                Self Assessment:
              </span>
              <button
                type="button"
                onClick={() =>
                  onSetRating(question.id, response.rating === 'full' ? null : 'full')
                }
                className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 transition ${
                  response.rating === 'full'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                }`}
                title="I scored full marks against marking points"
              >
                <Check className="w-3 h-3" />
                <span>Full Marks</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onSetRating(question.id, response.rating === 'partial' ? null : 'partial')
                }
                className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 transition ${
                  response.rating === 'partial'
                    ? 'bg-amber-600 text-white'
                    : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
                }`}
                title="Partial answer / missed some points"
              >
                <AlertCircle className="w-3 h-3" />
                <span>Partial</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onSetRating(question.id, response.rating === 'review' ? null : 'review')
                }
                className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 transition ${
                  response.rating === 'review'
                    ? 'bg-rose-600 text-white'
                    : 'bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100'
                }`}
                title="Needs study / incorrect"
              >
                <HelpCircle className="w-3 h-3" />
                <span>Review</span>
              </button>
            </div>
          )}
        </div>

        {/* Revealed Model Answer and Marking Points */}
        {response.isAnswerVisible && (
          <div className="mt-4 pt-4 border-t border-slate-200/90 animate-in fade-in slide-in-from-top-1 duration-200">
            {/* Model Answer Box */}
            <div className="bg-[#fffbeb] border border-amber-300/80 rounded-lg p-3.5 sm:p-4 text-slate-800 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-amber-700" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
                  Model Answer (NPC Kiganjo Manual)
                </h4>
              </div>
              <div className="text-xs sm:text-sm leading-relaxed text-slate-800 font-serif whitespace-pre-line bg-white/70 p-3 rounded border border-amber-200/70">
                {question.modelAnswer}
              </div>
            </div>

            {/* Key Marking Points Box */}
            <div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-3.5 sm:p-4">
              <div className="flex items-center gap-2 mb-2.5">
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  Key Marking Points & Evaluation Guide
                </h4>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {question.markingPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
