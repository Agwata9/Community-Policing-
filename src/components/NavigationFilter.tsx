import React from 'react';
import { TOPIC_SECTIONS } from '../data/questionsData';
import { Layers, Search, Filter, CheckCircle2 } from 'lucide-react';
import { TraineeResponse } from '../types';

interface NavigationFilterProps {
  selectedTopicId: string;
  onSelectTopic: (topicId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  responses: Record<string, TraineeResponse>;
  allQuestionsCount: number;
}

export const NavigationFilter: React.FC<NavigationFilterProps> = ({
  selectedTopicId,
  onSelectTopic,
  searchQuery,
  onSearchChange,
  responses,
  allQuestionsCount,
}) => {
  return (
    <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 py-3">
        {/* Search & Topic Selector row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Quick Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search questions (e.g. SARA, Art. 244, Sec. 41, 4 Cs)..."
              className="w-full pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick select dropdown for compact mobile selection */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500 hidden sm:block" />
            <select
              value={selectedTopicId}
              onChange={(e) => onSelectTopic(e.target.value)}
              className="w-full sm:w-auto text-xs sm:text-sm bg-slate-50 border border-slate-300 text-slate-700 font-medium py-1.5 px-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            >
              <option value="all">★ All Questions (Full Mock Revision — {allQuestionsCount} Qs)</option>
              <optgroup label="Syllabus Topics (1 – 15)">
                {TOPIC_SECTIONS.filter((t) => t.number <= 15).map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.number}. {topic.title}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Full Examination Papers">
                <option value="mock-paper-1">Mock Paper 1 (Section I & II · 100 Marks)</option>
                <option value="mock-paper-2">Mock Paper 2 (Section I & II · 100 Marks)</option>
              </optgroup>
            </select>
          </div>
        </div>

        {/* Scrollable pill tags for fast one-tap switching */}
        <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto pb-1.5 pt-0.5 scrollbar-thin scrollbar-thumb-slate-300">
          <button
            onClick={() => onSelectTopic('all')}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer flex items-center gap-1 ${
              selectedTopicId === 'all'
                ? 'bg-slate-900 text-amber-300 shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-3 h-3" />
            <span>All Questions</span>
          </button>

          {/* Papers highlight pills */}
          <button
            onClick={() => onSelectTopic('mock-paper-1')}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer border ${
              selectedTopicId === 'mock-paper-1'
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
          >
            Mock Paper 1 (100 Mks)
          </button>

          <button
            onClick={() => onSelectTopic('mock-paper-2')}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer border ${
              selectedTopicId === 'mock-paper-2'
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
            }`}
          >
            Mock Paper 2 (100 Mks)
          </button>

          <span className="text-slate-300 px-1">|</span>

          {TOPIC_SECTIONS.filter((t) => t.number <= 15).map((topic) => {
            const isSelected = selectedTopicId === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium transition cursor-pointer ${
                  isSelected
                    ? 'bg-blue-900 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {topic.number}. {topic.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
