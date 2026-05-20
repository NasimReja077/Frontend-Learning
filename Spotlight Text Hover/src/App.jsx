import { useState, useRef, useEffect } from "react";

const WORD = "Sheryians";

function gaussian(dist, sigma = 1.3) {
  return Math.exp(-(dist * dist) / (2 * sigma * sigma));
}

function lerp(a, b, t) { return a + (b - a) * t; }

export default function App() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const glowPos = useRef({ x: 0, y: 0 });
  const glowTarget = useRef({ x: 0, y: 0 });
  const [glowXY, setGlowXY] = useState({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const [intensities, setIntensities] = useState(Array(WORD.length).fill(0));
  const intensityTargets = useRef(Array(WORD.length).fill(0));
  const intensityCurrent = useRef(Array(WORD.length).fill(0));

  useEffect(() => {
    const loop = () => {
      glowPos.current.x = lerp(glowPos.current.x, glowTarget.current.x, 0.1);
      glowPos.current.y = lerp(glowPos.current.y, glowTarget.current.y, 0.1);
      setGlowXY({ x: glowPos.current.x, y: glowPos.current.y });
      const next = intensityCurrent.current.map((v, i) =>
        lerp(v, intensityTargets.current[i], 0.1)
      );
      intensityCurrent.current = next;
      setIntensities([...next]);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const updateTargets = (idx) => {
    intensityTargets.current = WORD.split("").map((_, i) => {
      if (idx === null) return 0;
      const d = Math.abs(i - idx);
      return d > 3 ? 0 : gaussian(d, 1.2);
    });
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    glowTarget.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .noise {
          position: absolute; inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 60px; height: 60px;
          opacity: 0.18;
          pointer-events: none;
        }
        .corner-tl { top: 32px; left: 32px; border-top: 1px solid #fff; border-left: 1px solid #fff; }
        .corner-tr { top: 32px; right: 32px; border-top: 1px solid #fff; border-right: 1px solid #fff; }
        .corner-bl { bottom: 32px; left: 32px; border-bottom: 1px solid #fff; border-left: 1px solid #fff; }
        .corner-br { bottom: 32px; right: 32px; border-bottom: 1px solid #fff; border-right: 1px solid #fff; }

        .badge {
          display: inline-flex; align-items: center; gap: 6px;
          border: 0.5px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 6px 16px;
          font-family: 'Familjen Grotesk', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 40px;
          position: relative; z-index: 2;
        }
        .badge-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #2ecc71;
          box-shadow: 0 0 6px #2ecc71;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .sher-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          cursor: default;
          user-select: none;
          z-index: 2;
        }

        .sher-letter {
          display: inline-block;
          font-family: 'Familjen Grotesk', sans-serif;
          font-size: clamp(68px, 12.5vw, 142px);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
          position: relative;
          will-change: transform, color, text-shadow;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }

        .sub-line {
          font-family: 'Familjen Grotesk', sans-serif;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative; z-index: 2;
        }
        .sub-line::before, .sub-line::after {
          content: '';
          width: 40px; height: 0.5px;
          background: rgba(255,255,255,0.15);
        }

        .glow-ball {
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(46,204,113,0.22) 0%, rgba(22,160,76,0.12) 35%, transparent 70%);
          filter: blur(30px);
          z-index: 0;
          transition: opacity 0.3s ease;
        }

        .scanline {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(46,204,113,0.15), transparent);
          pointer-events: none;
          animation: scan 6s linear infinite;
          z-index: 1;
        }
        @keyframes scan {
          0% { top: -2px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

      <div className="bg-grid" />
      <div className="noise" />
      <div className="scanline" />
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      <div className="badge">
        <span className="badge-dot" />
        Creative Dev Community
      </div>

      <div
        ref={containerRef}
        className="sher-wrap"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => { setVisible(false); setHoveredIdx(null); updateTargets(null); }}
      >
        <div
          className="glow-ball"
          style={{
            left: glowXY.x,
            top: glowXY.y,
            opacity: visible ? 1 : 0,
          }}
        />

        {WORD.split("").map((char, i) => {
          const t = intensities[i] || 0;
          const isI = char === "i";

          const rVal = Math.round(t * 46);
          const gVal = Math.round(30 + t * 174);
          const bVal = Math.round(t * 60);
          const col = `rgb(${rVal},${gVal},${bVal})`;

          const fillColor = t > 0.05 ? col : "transparent";
          const strokeColor = t > 0.05
            ? "none"
            : `rgba(255,255,255,${0.1 + t * 0.15})`;

          const shadow = t > 0.15
            ? `0 0 ${30 * t}px rgba(46,204,113,${t * 0.7}), 0 0 ${70 * t}px rgba(46,204,113,${t * 0.25})`
            : "none";

          const scale = 1 + t * 0.06;
          const yOff = -t * 6;

          return (
            <span
              key={i}
              ref={el => letterRefs.current[i] = el}
              className="sher-letter"
              onMouseEnter={() => { setHoveredIdx(i); updateTargets(i); }}
              style={{
                color: fillColor,
                WebkitTextStroke: t > 0.05 ? "0px" : `1.5px ${strokeColor}`,
                textShadow: shadow,
                transform: `scale(${scale.toFixed(3)}) translateY(${yOff.toFixed(1)}px)`,
                transformOrigin: "center bottom",
                zIndex: 1,
                position: "relative",
              }}
            >
              {isI ? (
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{
                    position: "absolute",
                    top: "-0.07em",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: `${0.12 + t * 0.08}em`,
                    height: `${0.12 + t * 0.08}em`,
                    borderRadius: "50%",
                    background: t > 0.08 ? col : "transparent",
                    border: t <= 0.08 ? "1.5px solid rgba(255,255,255,0.13)" : "none",
                    boxShadow: t > 0.3 ? `0 0 10px rgba(46,204,113,0.95), 0 0 22px rgba(46,204,113,0.4)` : "none",
                    display: "block",
                  }} />
                  {char}
                </span>
              ) : char}
            </span>
          );
        })}
      </div>

      <div className="sub-line">hover to explore</div>
    </div>
  );
}