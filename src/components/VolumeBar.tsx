import React, { useState, useEffect } from "react";
import StyledSpoticon from "../styles/components/StyledSpoticon";
import ProgressBar from "./ProgressBar";

enum VolumeLevels {
  mute = "",
  min = "",
  medium = "",
  max = "",
}

const VolumeBar = () => {
  const [level, setLevel] = useState<number>(100);
  const [muteState, setMuteState] = useState<{ currentLevel: number } | null>(
    null
  );
  const [volumeIcon, setVolumeIcon] = useState<VolumeLevels>(VolumeLevels.max);

  useEffect(() => {
    if (level === 0) {
      setVolumeIcon(VolumeLevels.mute);
    } else if (level > 0 && level <= 30) {
      setVolumeIcon(VolumeLevels.min);
    } else if (level > 30 && level <= 70) {
      setVolumeIcon(VolumeLevels.medium);
    } else {
      setVolumeIcon(VolumeLevels.max);
    }
  }, [level]);

  const handleMute = () => {
    if (!muteState) {
      setMuteState({ currentLevel: level });
      setLevel(0);
    } else {
      setMuteState(null);
      setLevel(muteState.currentLevel);
    }
  };

  return (
    <div className='volume-bar' style={{ width: 136 }}>
      <StyledSpoticon
        title='Mute/Unmute'
        className='spoticon'
        icon={volumeIcon}
        onClick={handleMute}
      />
      <ProgressBar level={level} setLevel={setLevel} />
    </div>
  );
};

export default VolumeBar;
