// React.memo(): Prevent Unnecessary Re-Renders with React Memo

import { memo } from "react";
import { useRef } from "react";

export const Counts = memo(() => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but I've rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      </p>
    </div>
  );
});

// export default memo(Counts);