import { spring } from 'remotion';
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig, staticFile
} from 'remotion';

export const Independence = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // Animate from 0 to 1 after 25 frames
  const logoTranslationProgress = spring({
    frame: frame - 25,
    fps,
    config: {
      damping: 100,
    },
  });

  // Move the logo up by 150 pixels once the transition starts
  const logoTranslation = interpolate(
    logoTranslationProgress,
    [0, 1],
    [0, -150]
  );

  const objectOpacity = interpolate(
    frame,
    [10, 20],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const objecTranslate = interpolate(
    frame,
    [0, 20],
    [-1990, 600],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp'
    }
  )

  const backgroundOpacity = interpolate(
    frame,
    [0, 20],
    [0, 1]
  );

  return (
    <AbsoluteFill style={{ backgroundColor: 'white' }}>
      <Sequence durationInFrames={20} className='flex h-[100%] w-[100%] bg-white items-center justify-center'>
        <img src={staticFile(`/object1.svg`)} alt='object1' style={{ transform: `translateX(${objecTranslate}px)`, opacity: `${objectOpacity}` }} />
      </Sequence>
      <Sequence durationInFrames={40} from={15}>
        <img src={staticFile(`/tajMahal.png`)} alt='background' style={{ opacity: `${backgroundOpacity}`}} className='w-1/2 h-1/2'/>
      </Sequence>
    </AbsoluteFill>
  );
};
