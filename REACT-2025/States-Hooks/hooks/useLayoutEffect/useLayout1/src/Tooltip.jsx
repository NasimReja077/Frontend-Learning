import { useState, useRef, useLayoutEffect } from 'react';

const Tooltip = ({ children, text }) => {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const tooltipRef = useRef(null);
  const [show, setShow] = useState(false);

  // This runs BEFORE the browser paints
  useLayoutEffect(() => {
    if (show && tooltipRef.current) {
      const { height } = tooltipRef.current.getBoundingClientRect();
      setTooltipHeight(height);
    }
  }, [show, text]); // re-measure if text changes

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div
          ref={tooltipRef}
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: 8,
            padding: '6px 10px',
            background: '#333',
            color: 'white',
            borderRadius: 4,
            whiteSpace: 'nowrap',
            // We can now use the measured height if needed
            // (for example, to flip the tooltip if it goes off-screen)
          }}
        >
          {text}
          <div style={{ fontSize: 10, opacity: 0.7 }}>
            Height: {tooltipHeight}px
          </div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;