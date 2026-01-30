"use client";

import { useState, useEffect, useRef } from "react";

const WORDS = [
  "remote",
  "origin",
  "add",
  "commit",
  "config",
  "user",
  "repository",
  "create",
  "read",
  "update",
  "delete",
  "final",
];

type GamePhase = "start" | "playing" | "result";
type ClassType = "core" | "advanced";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const [phase, setPhase] = useState<GamePhase>("start");
  const [name, setName] = useState("");
  const [classType, setClassType] = useState<ClassType>("core");
  const [startInput, setStartInput] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  const timeLimit = classType === "core" ? 4000 : 2000;
  const currentWord = words[currentIndex] || "";

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const moveToNext = (won: boolean) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    clearTimer();
    setIsCorrect(won);
    if (won) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setInput("");
        setIsCorrect(null);
        setTimeLeft(timeLimit);
      } else {
        setPhase("result");
      }
      isTransitioningRef.current = false;
    }, 300);
  };

  const startGame = () => {
    if (!name.trim()) return;
    isTransitioningRef.current = false;
    setWords(shuffleArray(WORDS));
    setCurrentIndex(0);
    setScore(0);
    setInput("");
    setIsCorrect(null);
    setTimeLeft(timeLimit);
    setPhase("playing");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isTransitioningRef.current) return;

    const value = e.target.value;
    setInput(value);

    if (value === currentWord) {
      moveToNext(true);
    }
  };

  const resetGame = () => {
    clearTimer();
    isTransitioningRef.current = false;
    setPhase("start");
    setName("");
    setClassType("core");
    setScore(0);
    setCurrentIndex(0);
    setInput("");
    setIsCorrect(null);
  };

  useEffect(() => {
    if (phase === "playing" && !isTransitioningRef.current) {
      inputRef.current?.focus();
      setTimeLeft(timeLimit);

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 100) {
            if (!isTransitioningRef.current) {
              moveToNext(false);
            }
            return 0;
          }
          return prev - 100;
        });
      }, 100);

      return () => {
        clearTimer();
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, currentIndex]);

  if (phase === "start") {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
          <h1 className="text-3xl font-bold text-center mb-2 text-white">
            스파르타 타자 연습
          </h1>
          <p className="text-slate-400 text-center mb-8">
            Git 명령어를 빠르게 타이핑하세요!
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력하세요"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                반 선택
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setClassType("core")}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    classType === "core"
                      ? "bg-blue-600 text-white ring-2 ring-blue-400"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Core (4초)
                </button>
                <button
                  onClick={() => setClassType("advanced")}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    classType === "advanced"
                      ? "bg-purple-600 text-white ring-2 ring-purple-400"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Advanced (2초)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                아래에 <span className="text-green-400 font-mono">start</span>를 입력하면 게임이 시작됩니다
              </label>
              <input
                type="text"
                value={startInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setStartInput(value);
                  if (value === "start" && name.trim()) {
                    startGame();
                    setStartInput("");
                  }
                }}
                placeholder="start"
                disabled={!name.trim()}
                className="w-full px-4 py-4 bg-slate-700 border-2 border-slate-600 rounded-lg text-white text-center text-xl font-mono placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
              {!name.trim() && (
                <p className="mt-2 text-sm text-slate-500">먼저 이름을 입력하세요</p>
              )}
            </div>
          </div>

          <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
            <h3 className="text-sm font-medium text-slate-300 mb-2">
              연습 단어 (12개)
            </h3>
            <div className="flex flex-wrap gap-2">
              {WORDS.map((word) => (
                <span
                  key={word}
                  className="px-2 py-1 bg-slate-600 text-slate-300 text-xs rounded font-mono"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (phase === "playing") {
    const progress = (timeLeft / timeLimit) * 100;
    const isUrgent = progress < 30;

    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center mb-6 text-slate-400">
            <span className="font-medium">{name}</span>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                classType === "core"
                  ? "bg-blue-600/20 text-blue-400"
                  : "bg-purple-600/20 text-purple-400"
              }`}
            >
              {classType === "core" ? "Core" : "Advanced"}
            </span>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-400">
                {currentIndex + 1} / {words.length}
              </span>
              <span className="text-2xl font-bold text-white">
                {score}점
              </span>
            </div>

            <div className="relative h-2 bg-slate-700 rounded-full mb-8 overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full rounded-full transition-all duration-100 ${
                  isUrgent
                    ? "bg-gradient-to-r from-red-500 to-orange-500"
                    : "bg-gradient-to-r from-green-500 to-blue-500"
                }`}
                style={{ width: `${progress}%` }}
              />
              {isUrgent && (
                <div className="absolute inset-0 bg-red-500/20 animate-pulse" />
              )}
            </div>

            <div className="text-center mb-8">
              <div
                className={`text-6xl md:text-7xl font-mono font-bold tracking-wider transition-all duration-200 ${
                  isCorrect === true
                    ? "text-green-400 scale-105"
                    : isCorrect === false
                    ? "text-red-400 scale-95"
                    : isUrgent
                    ? "text-orange-400"
                    : "text-white"
                }`}
              >
                {currentWord}
              </div>
              <div className="mt-4 text-5xl font-mono text-slate-500">
                {(timeLeft / 1000).toFixed(1)}s
              </div>
            </div>

            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                className={`w-full px-6 py-4 text-2xl font-mono text-center bg-slate-700 border-2 rounded-xl focus:outline-none transition-all ${
                  isCorrect === true
                    ? "border-green-500 bg-green-500/10"
                    : isCorrect === false
                    ? "border-red-500 bg-red-500/10"
                    : input && !currentWord.startsWith(input)
                    ? "border-red-500 text-red-400"
                    : "border-slate-600 focus:border-blue-500 text-white"
                }`}
                placeholder="여기에 입력하세요"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {words.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx < currentIndex
                      ? "bg-slate-500"
                      : idx === currentIndex
                      ? "bg-blue-500 scale-125"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">
            {score >= 10 ? "🎉" : score >= 6 ? "👏" : "💪"}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">연습 완료!</h2>
          <p className="text-slate-400">{name}님의 결과</p>
        </div>

        <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
          <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {score}
          </div>
          <div className="text-slate-400 mt-2">/ 12점</div>
        </div>

        <div className="mb-6 p-4 bg-slate-700/30 rounded-lg">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              classType === "core"
                ? "bg-blue-600/20 text-blue-400"
                : "bg-purple-600/20 text-purple-400"
            }`}
          >
            {classType === "core" ? "Core (4초)" : "Advanced (2초)"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setWords(shuffleArray(WORDS));
              setCurrentIndex(0);
              setScore(0);
              setInput("");
              setIsCorrect(null);
              setTimeLeft(timeLimit);
              setPhase("playing");
            }}
            className="py-3 px-4 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-all"
          >
            다시 하기
          </button>
          <button
            onClick={resetGame}
            className="py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            처음으로
          </button>
        </div>
      </div>
    </main>
  );
}
