import React, { useRef, useState, useEffect, MouseEventHandler } from "react";
import StyledProgressBar from "../styles/components/StyledProgressBar";

interface ProgressBarProps {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, setLevel }) => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [range, setRange] = useState<{ min: number; max: number } | null>(null);

  useEffect(() => {
    setRange({
      min: progressRef.current!.offsetLeft,
      max: progressRef.current!.offsetLeft + progressRef.current!.clientWidth,
    });
  }, []);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = e => {
    setLevel(
      ((e.clientX - range!.min) / progressRef.current!.clientWidth) * 100
    );
  };

  return (
    <StyledProgressBar
      ref={progressRef}
      level={level - 100}
      onMouseDown={handleMouseDown}
    >
      <div className='inner-wrapper'>
        <div className='level-wrapper'>
          <div className='level'></div>
        </div>
        <button
          draggable
          onDragEnter={e => console.log("Drag enter")}
          onDragLeave={e => console.log("Drag leave")}
          onDragStart={e => console.log("Hi there")}
          onDragEnd={e => console.log("Bye there")}
          className='level-controller'
        ></button>
      </div>
    </StyledProgressBar>
  );
};

export default ProgressBar;
