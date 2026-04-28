import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const LETTERS = ["S", "A", "N", "E", "L"];

// Each letter reveals at these thresholds
const REVEAL_THRESHOLDS = [20, 40, 60, 80, 100];

export default function LoadingPage({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  // Simulate loading: 0→100 over ~3.5s with easing
  useEffect(() => {
    let current = 0;
    const totalDuration = 3500; // ms
    const tickInterval = 40; // ms
    const totalTicks = totalDuration / tickInterval;
    let tick = 0;

    intervalRef.current = setInterval(() => {
      tick++;
      // Ease-out curve: fast at start, slows near 100
      const t = tick / totalTicks;
      const eased = 1 - Math.pow(1 - t, 2.2);
      current = Math.min(100, Math.round(eased * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(intervalRef.current);
        setTimeout(() => setDone(true), 600);
      }
    }, tickInterval);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Notify parent when done
  useEffect(() => {
    if (done && onComplete) {
      setTimeout(onComplete, 1000);
    }
  }, [done, onComplete]);

  const revealedCount = REVEAL_THRESHOLDS.filter((t) => progress >= t).length;

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#000" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Noise grain overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
            }}
          />

          {/* Subtle scanlines */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.15) 2px, rgba(255,255,255,0.15) 4px)",
            }}
          />

          {/* Glow blob behind letters */}
          <motion.div
            className="pointer-events-none absolute z-0"
            style={{
              width: 600,
              height: 300,
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* SANEL Letters */}
          <div className="relative z-10 flex items-center gap-3 md:gap-5">
            {LETTERS.map((letter, i) => {
              const revealed = i < revealedCount;
              return (
                <LetterBox
                  key={letter}
                  letter={letter}
                  revealed={revealed}
                  index={i}
                />
              );
            })}
          </div>

          {/* Loading bar + percentage */}
          <div className="relative z-10 mt-16 flex w-full max-w-xs flex-col items-center gap-3 px-4 md:max-w-sm">
            {/* Bar track */}
            <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-white"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.04 }}
              />
              {/* Shimmer on bar */}
              <motion.div
                className="absolute top-0 h-full w-16 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                  left: `${progress - 8}%`,
                }}
              />
            </div>

            {/* Percentage */}
            <div className="flex w-full items-center justify-between">
              <span
                className="text-[10px] uppercase tracking-[0.3em] text-white/30"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                loading
              </span>
              <motion.span
                className="tabular-nums text-[11px] text-white/50"
                style={{ fontFamily: "'Courier New', monospace" }}
                key={progress}
              >
                <CountUp value={progress} />%
              </motion.span>
            </div>
          </div>

          {/* Corner decorators */}
          <CornerDots />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ──────────────── Letter Box ──────────────── */
function LetterBox({ letter, revealed, index }) {
  const controls = useAnimation();
  const prevRevealed = useRef(false);

  useEffect(() => {
    if (revealed && !prevRevealed.current) {
      prevRevealed.current = true;
      controls.start("visible");
    }
  }, [revealed, controls]);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        width: "clamp(52px, 12vw, 96px)",
        height: "clamp(64px, 15vw, 116px)",
      }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {/* Box border — always present as ghost */}
      <motion.div
        className="absolute inset-0 rounded-sm border border-white/10"
        animate={{ borderColor: revealed ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.06)" }}
        transition={{ duration: 0.5 }}
      />

      {/* Fill reveal — vertical wipe from bottom */}
      <div className="absolute inset-0 overflow-hidden rounded-sm">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-white"
          initial={{ height: "0%" }}
          animate={{ height: revealed ? "100%" : "0%" }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
            delay: 0,
          }}
        />
      </div>

      {/* Letter */}
      <motion.span
        className="relative z-10 select-none font-black leading-none"
        style={{
          fontSize: "clamp(28px, 7vw, 58px)",
          fontFamily: "'Arial Black', 'Arial', sans-serif",
          letterSpacing: "-0.02em",
          mixBlendMode: revealed ? "difference" : "normal",
          color: revealed ? "#fff" : "rgba(255,255,255,0.08)",
        }}
        animate={{
          color: revealed ? "#ffffff" : "rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.3, delay: revealed ? 0.3 : 0 }}
      >
        {letter}
      </motion.span>

      {/* Flash on reveal */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            className="absolute inset-0 rounded-sm bg-white"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Pulse ring */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            className="absolute inset-0 rounded-sm border-2 border-white"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 1.35, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Index number (ghost) */}
      <span
        className="absolute bottom-1 right-1.5 text-[7px] tabular-nums text-white/15"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        0{index + 1}
      </span>
    </motion.div>
  );
}

/* ──────────────── Animated Count ──────────────── */
function CountUp({ value }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);

  useEffect(() => {
    const diff = value - prev.current;
    if (diff <= 0) {
      setDisplay(value);
      prev.current = value;
      return;
    }
    let frame = prev.current;
    const step = () => {
      frame = Math.min(value, frame + 1);
      setDisplay(frame);
      if (frame < value) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    prev.current = value;
  }, [value]);

  return <>{display.toString().padStart(3, "\u00A0")}</>;
}

/* ──────────────── Corner Decorators ──────────────── */
function CornerDots() {
  const corners = [
    "top-5 left-5",
    "top-5 right-5",
    "bottom-5 left-5",
    "bottom-5 right-5",
  ];
  return (
    <>
      {corners.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} flex items-center gap-1`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + i * 0.1 }}
        >
          <div className="h-[3px] w-[3px] rounded-full bg-white/20" />
          <div className="h-[1px] w-4 bg-white/10" />
        </motion.div>
      ))}
    </>
  );
}