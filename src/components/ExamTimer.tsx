import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw } from 'lucide-react';

export const ExamTimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(3 * 3600); // default 3 hours
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, secondsLeft]);

  const formatTime = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleReset = (durationHours: number) => {
    setIsRunning(false);
    setSecondsLeft(durationHours * 3600);
  };

  return (
    <div className="relative inline-block text-xs">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md border border-slate-300 font-medium transition cursor-pointer"
          title="Open Exam Countdown Timer"
        >
          <Clock className="w-3.5 h-3.5 text-amber-600" />
          <span>Exam Timer</span>
        </button>
      ) : (
        <div className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-lg border border-slate-700 shadow-md">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono font-bold text-amber-300 text-sm tracking-wider">
            {formatTime(secondsLeft)}
          </span>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1 hover:bg-slate-800 rounded text-slate-200 hover:text-white"
            title={isRunning ? 'Pause' : 'Start'}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
          </button>

          <button
            onClick={() => handleReset(3)}
            className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-slate-200"
            title="Reset to 3 Hours"
          >
            <RotateCcw className="w-3 h-3" />
          </button>

          <button
            onClick={() => setIsOpen(false)}
            className="text-[10px] text-slate-400 hover:text-slate-200 ml-1 px-1 border-l border-slate-700"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};
