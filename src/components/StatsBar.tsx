import React from 'react';
import { Eye, EyeOff, RotateCcw, CheckCircle2, Award, ListChecks } from 'lucide-react';
import { ExamTimer } from './ExamTimer';

interface StatsBarProps {
  totalQuestions: number;
  answeredCount: number;
  revealedCount: number;
  onShowAll: () => void;
  onHideAll: () => void;
  onOpenReset: () => void;
  currentTopicTitle: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({
  totalQuestions,
  answeredCount,
  revealedCount,
  onShowAll,
  onHideAll,
  onOpenReset,
  currentTopicTitle,
}) => {
  const percentage = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div className="bg-[#f1f5f9] border-b border-slate-200 py-3 px-4 shadow-xs">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Progress & Current Context */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-800 font-semibold truncate">
              {currentTopicTitle}
            </span>
            <span className="text-slate-600 font-mono">
              Attempted: <strong className="text-emerald-700">{answeredCount}</strong> / {totalQuestions} ({percentage}%)
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1.5">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>{answeredCount} Answered</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-amber-600" />
              <span>{revealedCount} Revealed</span>
            </span>
          </div>
        </div>

        {/* Global Action Controls */}
        <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 pt-1 md:pt-0">
          <ExamTimer />

          <button
            type="button"
            onClick={onShowAll}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition shadow-2xs cursor-pointer"
            title="Reveal all model answers in current view"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>Show All</span>
          </button>

          <button
            type="button"
            onClick={onHideAll}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition shadow-2xs cursor-pointer"
            title="Hide all model answers in current view"
          >
            <EyeOff className="w-3.5 h-3.5 text-slate-600" />
            <span>Hide All</span>
          </button>

          <button
            type="button"
            onClick={onOpenReset}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-md transition cursor-pointer"
            title="Clear all typed answers and reset examination state"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-600" />
            <span>Reset Exam</span>
          </button>
        </div>
      </div>
    </div>
  );
};
