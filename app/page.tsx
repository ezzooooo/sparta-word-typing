"use client";

import { useState, useEffect, useRef } from "react";
import { DEV_WORDS } from "./dev-words";

// 키보드 레이아웃 정의
const KEYBOARD_ROWS = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
];

// 손가락 매핑 (어떤 손가락으로 누를지)
type FingerType = "pinky-l" | "ring-l" | "middle-l" | "index-l" | "index-r" | "middle-r" | "ring-r" | "pinky-r";

const KEY_TO_FINGER: Record<string, FingerType> = {
  // 왼손 새끼
  "`": "pinky-l", "1": "pinky-l", "q": "pinky-l", "a": "pinky-l", "z": "pinky-l",
  // 왼손 약지
  "2": "ring-l", "w": "ring-l", "s": "ring-l", "x": "ring-l",
  // 왼손 중지
  "3": "middle-l", "e": "middle-l", "d": "middle-l", "c": "middle-l",
  // 왼손 검지
  "4": "index-l", "5": "index-l", "r": "index-l", "t": "index-l",
  "f": "index-l", "g": "index-l", "v": "index-l", "b": "index-l",
  // 오른손 검지
  "6": "index-r", "7": "index-r", "y": "index-r", "u": "index-r",
  "h": "index-r", "j": "index-r", "n": "index-r", "m": "index-r",
  // 오른손 중지
  "8": "middle-r", "i": "middle-r", "k": "middle-r", ",": "middle-r",
  // 오른손 약지
  "9": "ring-r", "o": "ring-r", "l": "ring-r", ".": "ring-r",
  // 오른손 새끼
  "0": "pinky-r", "-": "pinky-r", "=": "pinky-r", "p": "pinky-r",
  "[": "pinky-r", "]": "pinky-r", "\\": "pinky-r", ";": "pinky-r",
  "'": "pinky-r", "/": "pinky-r",
};

const FINGER_COLORS: Record<FingerType, { bg: string; border: string; text: string }> = {
  "pinky-l": { bg: "bg-pink-500/30", border: "border-pink-400", text: "text-pink-300" },
  "ring-l": { bg: "bg-orange-500/30", border: "border-orange-400", text: "text-orange-300" },
  "middle-l": { bg: "bg-green-500/30", border: "border-green-400", text: "text-green-300" },
  "index-l": { bg: "bg-blue-500/30", border: "border-blue-400", text: "text-blue-300" },
  "index-r": { bg: "bg-purple-500/30", border: "border-purple-400", text: "text-purple-300" },
  "middle-r": { bg: "bg-green-500/30", border: "border-green-400", text: "text-green-300" },
  "ring-r": { bg: "bg-orange-500/30", border: "border-orange-400", text: "text-orange-300" },
  "pinky-r": { bg: "bg-pink-500/30", border: "border-pink-400", text: "text-pink-300" },
};

const FINGER_NAMES: Record<FingerType, string> = {
  "pinky-l": "왼손 새끼",
  "ring-l": "왼손 약지",
  "middle-l": "왼손 중지",
  "index-l": "왼손 검지",
  "index-r": "오른손 검지",
  "middle-r": "오른손 중지",
  "ring-r": "오른손 약지",
  "pinky-r": "오른손 새끼",
};

// 키보드 가이드 컴포넌트
function KeyboardGuide({ nextChar }: { nextChar: string }) {
  const lowerNextChar = nextChar.toLowerCase();
  const finger = KEY_TO_FINGER[lowerNextChar];
  const fingerColor = finger ? FINGER_COLORS[finger] : null;
  const fingerName = finger ? FINGER_NAMES[finger] : null;

  return (
    <div className="mt-6">
      {/* 손가락 안내 */}
      {finger && fingerName && fingerColor && (
        <div className={`mb-4 text-center py-2 px-4 rounded-lg ${fingerColor.bg} border ${fingerColor.border}`}>
          <span className={`text-sm font-medium ${fingerColor.text}`}>
            다음 키: <span className="font-mono font-bold text-lg">{nextChar}</span> → {fingerName}
          </span>
        </div>
      )}

      {/* 키보드 레이아웃 */}
      <div className="bg-slate-800 rounded-xl p-4 border border-slate-600">
        {KEYBOARD_ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center gap-1 mb-1"
            style={{ marginLeft: rowIndex === 1 ? "12px" : rowIndex === 2 ? "24px" : rowIndex === 3 ? "36px" : "0" }}
          >
            {row.map((key) => {
              const keyFinger = KEY_TO_FINGER[key];
              const isActive = key === lowerNextChar;
              const keyFingerColor = keyFinger ? FINGER_COLORS[keyFinger] : null;

              return (
                <div
                  key={key}
                  className={`
                    w-8 h-8 flex items-center justify-center rounded text-xs font-mono transition-all duration-150
                    ${isActive
                      ? `${keyFingerColor?.bg} ${keyFingerColor?.border} border-2 scale-125 shadow-lg ${keyFingerColor?.text} font-bold`
                      : `bg-slate-700 border border-slate-600 text-slate-400 hover:bg-slate-600`
                    }
                  `}
                >
                  {key === " " ? "␣" : key}
                </div>
              );
            })}
          </div>
        ))}
        {/* 스페이스바 */}
        <div className="flex justify-center mt-1">
          <div className="w-48 h-8 flex items-center justify-center rounded bg-slate-700 border border-slate-600 text-slate-400 text-xs font-mono">
            Space
          </div>
        </div>
      </div>

      {/* 손가락 색상 범례 */}
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-pink-500/50 border border-pink-400"></div>
          <span className="text-slate-400">새끼</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-orange-500/50 border border-orange-400"></div>
          <span className="text-slate-400">약지</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-green-500/50 border border-green-400"></div>
          <span className="text-slate-400">중지</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-blue-500/50 border border-blue-400"></div>
          <span className="text-slate-400">검지(좌)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-purple-500/50 border border-purple-400"></div>
          <span className="text-slate-400">검지(우)</span>
        </div>
      </div>
    </div>
  );
}

const SPARTA_WORDS = [
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
type ClassType = "core" | "intermediate" | "advanced";
type GameMode = "sparta" | "dev";

const GITHUB_URL = "https://github.com/ezzooooo/sparta-word-typing";

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
  const [gameMode, setGameMode] = useState<GameMode>("sparta");
  const [name, setName] = useState("");
  const [classType, setClassType] = useState<ClassType>("core");
  const [startInput, setStartInput] = useState("");
  const [words, setWords] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [completedAt, setCompletedAt] = useState<Date | null>(null);
  // 개발 모드 전용 상태
  const [devTotalTyped, setDevTotalTyped] = useState(0);
  const [devStartTime, setDevStartTime] = useState<Date | null>(null);
  const [devWordStartTime, setDevWordStartTime] = useState<Date | null>(null);
  const [devWPMHistory, setDevWPMHistory] = useState<number[]>([]);
  const [devElapsedSeconds, setDevElapsedSeconds] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const devTimerRef = useRef<NodeJS.Timeout | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  const timeLimit = classType === "core" ? 4000 : classType === "intermediate" ? 3000 : 2000;
  const currentWord = words[currentIndex] || "";

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // 스파르타 모드 전용: 다음 단어로 이동
  const moveToNextSparta = (won: boolean) => {
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
        setCompletedAt(new Date());
        setPhase("result");
      }
      isTransitioningRef.current = false;
    }, 300);
  };

  // 타자 속도 계산 함수 (분당 글자 수)
  const calculateSpeed = (wordLength: number, timeMs: number): number => {
    if (timeMs <= 0) return 0;
    const minutes = timeMs / 60000;
    return Math.round(wordLength / minutes);
  };

  // 개발 모드 전용: 다음 단어로 이동 (무한 반복)
  const moveToNextDev = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    // 타자 속도 계산
    if (devWordStartTime && currentWord) {
      const typingTime = Date.now() - devWordStartTime.getTime();
      const speed = calculateSpeed(currentWord.length, typingTime);
      if (speed > 0 && speed < 2000) { // 비정상적인 값 필터링
        setDevWPMHistory((prev) => [...prev, speed]);
      }
    }

    setIsCorrect(true);
    setDevTotalTyped((prev) => prev + 1);

    setTimeout(() => {
      if (currentIndex < words.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // 단어를 다 쳤으면 새로운 세트로
        setWords(shuffleArray(DEV_WORDS));
        setCurrentIndex(0);
      }
      setInput("");
      setIsCorrect(null);
      setDevWordStartTime(null); // 첫 글자 입력 시 설정됨
      isTransitioningRef.current = false;
      inputRef.current?.focus();
    }, 100);
  };

  const startGame = () => {
    if (!name.trim()) return;
    isTransitioningRef.current = false;

    if (gameMode === "sparta") {
      setWords(shuffleArray(SPARTA_WORDS));
      setTimeLeft(timeLimit);
    } else {
      setWords(shuffleArray(DEV_WORDS));
      setDevTotalTyped(0);
      setDevStartTime(new Date());
      setDevWordStartTime(null); // 첫 글자 입력 시 설정됨
      setDevWPMHistory([]);
      setDevElapsedSeconds(0);
    }

    setCurrentIndex(0);
    setScore(0);
    setInput("");
    setIsCorrect(null);
    setPhase("playing");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isTransitioningRef.current) return;

    const value = e.target.value;
    setInput(value);

    // 개발 모드: 첫 글자 입력 시 시간 측정 시작
    if (gameMode === "dev" && input === "" && value.length === 1) {
      setDevWordStartTime(new Date());
    }

    if (value === currentWord) {
      if (gameMode === "sparta") {
        moveToNextSparta(true);
      } else {
        moveToNextDev();
      }
    }
  };

  const clearDevTimer = () => {
    if (devTimerRef.current) {
      clearInterval(devTimerRef.current);
      devTimerRef.current = null;
    }
  };

  const resetGame = () => {
    clearTimer();
    clearDevTimer();
    isTransitioningRef.current = false;
    setPhase("start");
    setName("");
    setClassType("core");
    setScore(0);
    setCurrentIndex(0);
    setInput("");
    setIsCorrect(null);
    setDevTotalTyped(0);
    setDevStartTime(null);
    setDevWordStartTime(null);
    setDevWPMHistory([]);
    setDevElapsedSeconds(0);
  };

  const stopDevPractice = () => {
    clearTimer();
    clearDevTimer();
    setPhase("start");
  };

  // 스파르타 모드 타이머
  useEffect(() => {
    if (phase === "playing" && gameMode === "sparta" && !isTransitioningRef.current) {
      inputRef.current?.focus();
      setTimeLeft(timeLimit);

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 100) {
            if (!isTransitioningRef.current) {
              moveToNextSparta(false);
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
  }, [phase, currentIndex, gameMode]);

  // 개발 모드 포커스
  useEffect(() => {
    if (phase === "playing" && gameMode === "dev") {
      inputRef.current?.focus();
    }
  }, [phase, gameMode, currentIndex]);

  // 개발 모드 경과 시간 타이머
  useEffect(() => {
    if (phase === "playing" && gameMode === "dev" && devStartTime) {
      devTimerRef.current = setInterval(() => {
        setDevElapsedSeconds(Math.floor((Date.now() - devStartTime.getTime()) / 1000));
      }, 1000);

      return () => {
        if (devTimerRef.current) {
          clearInterval(devTimerRef.current);
          devTimerRef.current = null;
        }
      };
    }
  }, [phase, gameMode, devStartTime]);

  if (phase === "start") {
    return (
      <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-slate-800">
        {/* 상단 메뉴 */}
        <header className="w-full border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setGameMode("sparta")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  gameMode === "sparta"
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                스파르타 연습
              </button>
              <button
                onClick={() => setGameMode("dev")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  gameMode === "dev"
                    ? "bg-green-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                개발 단어 연습
              </button>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              GitHub
            </a>
          </div>
        </header>

        {/* 메인 컨텐츠 */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
            <h1 className="text-3xl font-bold text-center mb-2 text-white">
              {gameMode === "sparta" ? "스파르타 타자 연습" : "개발 단어 연습"}
            </h1>
            <p className="text-slate-400 text-center mb-8">
              {gameMode === "sparta"
                ? "개발 단어를 빠르게 타이핑하세요!"
                : `${DEV_WORDS.length.toLocaleString()}개의 개발 단어로 자유롭게 연습하세요!`}
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

              {gameMode === "sparta" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    반 선택
                  </label>
                  <div className="grid grid-cols-3 gap-3">
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
                      onClick={() => setClassType("intermediate")}
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        classType === "intermediate"
                          ? "bg-teal-600 text-white ring-2 ring-teal-400"
                          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                    >
                      중급 (3초)
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
              )}

              {gameMode === "dev" && (
                <div className="p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <p className="text-green-400 text-sm">
                    시간 제한 없이 자유롭게 연습할 수 있습니다.
                    <br />
                    단어를 입력하면 자동으로 다음 단어가 나타납니다.
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  아래에 <span className="text-green-400 font-mono">start</span>를 입력하면 시작됩니다
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

            {gameMode === "sparta" && (
              <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                <h3 className="text-sm font-medium text-slate-300 mb-2">
                  연습 단어 (12개)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SPARTA_WORDS.map((word) => (
                    <span
                      key={word}
                      className="px-2 py-1 bg-slate-600 text-slate-300 text-xs rounded font-mono"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }

  // 스파르타 게임 모드
  if (phase === "playing" && gameMode === "sparta") {
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
                  : classType === "intermediate"
                  ? "bg-teal-600/20 text-teal-400"
                  : "bg-purple-600/20 text-purple-400"
              }`}
            >
              {classType === "core" ? "Core" : classType === "intermediate" ? "중급" : "Advanced"}
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

  // 개발 단어 연습 모드 (무한 반복)
  if (phase === "playing" && gameMode === "dev") {
    const minutes = Math.floor(devElapsedSeconds / 60);
    const seconds = devElapsedSeconds % 60;

    // 타자 속도 통계 계산 (분당 글자 수)
    const currentSpeed = devWPMHistory.length > 0 ? devWPMHistory[devWPMHistory.length - 1] : 0;
    const maxSpeed = devWPMHistory.length > 0 ? Math.max(...devWPMHistory) : 0;
    const minSpeed = devWPMHistory.length > 0 ? Math.min(...devWPMHistory) : 0;
    const avgSpeed = devWPMHistory.length > 0
      ? Math.round(devWPMHistory.reduce((a, b) => a + b, 0) / devWPMHistory.length)
      : 0;

    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="w-full max-w-2xl">
          <div className="flex justify-between items-center mb-6 text-slate-400">
            <span className="font-medium">{name}</span>
            <button
              onClick={stopDevPractice}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm transition-all"
            >
              그만하기
            </button>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <div className="text-slate-400">
                <span className="text-2xl font-bold text-green-400">{devTotalTyped}</span>
                <span className="ml-1">단어</span>
              </div>
              <div className="text-slate-400 font-mono">
                {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
              </div>
            </div>

            {/* 타자 속도 통계 */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400 mb-1">현재 속도</div>
                <div className="text-xl font-bold text-white">{currentSpeed}</div>
                <div className="text-xs text-slate-500">타/분</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400 mb-1">최고 속도</div>
                <div className="text-xl font-bold text-green-400">{maxSpeed}</div>
                <div className="text-xs text-slate-500">타/분</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400 mb-1">평균 속도</div>
                <div className="text-xl font-bold text-blue-400">{avgSpeed}</div>
                <div className="text-xs text-slate-500">타/분</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-xs text-slate-400 mb-1">최저 속도</div>
                <div className="text-xl font-bold text-orange-400">{minSpeed}</div>
                <div className="text-xs text-slate-500">타/분</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div
                className={`text-6xl md:text-7xl font-mono font-bold tracking-wider transition-all duration-200 ${
                  isCorrect === true ? "scale-105" : ""
                }`}
              >
                {currentWord.split("").map((char, idx) => {
                  const isTyped = idx < input.length;
                  const isNext = idx === input.length;
                  const nextFinger = KEY_TO_FINGER[char.toLowerCase()];
                  const nextColor = nextFinger ? FINGER_COLORS[nextFinger] : null;

                  return (
                    <span
                      key={idx}
                      className={`transition-all duration-150 ${
                        isCorrect === true
                          ? "text-green-400"
                          : isTyped
                          ? "text-green-400"
                          : isNext && nextColor
                          ? `${nextColor.text} underline decoration-2 underline-offset-4`
                          : "text-slate-400"
                      }`}
                    >
                      {char}
                    </span>
                  );
                })}
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
                    : input && !currentWord.startsWith(input)
                    ? "border-red-500 text-red-400"
                    : "border-slate-600 focus:border-green-500 text-white"
                }`}
                placeholder="여기에 입력하세요"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>

            {/* 손가락 가이드 */}
            <KeyboardGuide nextChar={currentWord[input.length] || ""} />
          </div>
        </div>
      </main>
    );
  }

  // 스파르타 결과 화면
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

        <div className="mb-6 p-4 bg-slate-700/30 rounded-lg space-y-2">
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              classType === "core"
                ? "bg-blue-600/20 text-blue-400"
                : classType === "intermediate"
                ? "bg-teal-600/20 text-teal-400"
                : "bg-purple-600/20 text-purple-400"
            }`}
          >
            {classType === "core" ? "Core (4초)" : classType === "intermediate" ? "중급 (3초)" : "Advanced (2초)"}
          </span>
          {completedAt && (
            <div className="text-slate-400 text-sm">
              {completedAt.toLocaleString("ko-KR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setWords(shuffleArray(SPARTA_WORDS));
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
