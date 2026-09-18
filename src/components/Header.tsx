import React from 'react';
import { Shield, BookOpen, Award, GraduationCap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-b from-[#0f172a] via-[#172554] to-[#1e293b] text-white border-b-4 border-amber-500 shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            {/* Crest / Emblem inspired by Kiganjo booklet */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg flex-shrink-0">
              <div className="w-full h-full bg-[#0f172a] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/10 rotate-45 transform scale-75"></div>
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400 relative z-10 drop-shadow" />
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-amber-400/90 text-xs font-bold tracking-widest uppercase">
                <span>National Police College</span>
                <span className="text-amber-500">•</span>
                <span>Kiganjo</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white font-serif mt-0.5">
                COMMUNITY POLICING — REVISION & EXAM
              </h1>
              <p className="text-xs sm:text-sm font-medium text-slate-300 tracking-wider uppercase mt-0.5">
                2025 | NPC MC KIGANJO | MANUAL FOR ORDINARY SOIP COURSE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-amber-200 bg-amber-950/40 border border-amber-500/30 px-3 py-1.5 rounded-lg">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span className="font-semibold">SOIP Course Exam Revision</span>
          </div>
        </div>

        {/* Instructions banner */}
        <div className="mt-5 bg-slate-800/90 border-l-4 border-amber-400 rounded-r-lg p-3.5 sm:p-4 text-slate-200 shadow-inner">
          <div className="flex items-start gap-2.5">
            <BookOpen className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold text-amber-300 uppercase tracking-wide mr-1.5">
                Instructions:
              </span>
              Attempt each question in the blank workspace before clicking{' '}
              <strong className="text-white font-semibold">"Show Answer"</strong>. Compare your response with the model answer and key marking points for rigorous self-assessment.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
