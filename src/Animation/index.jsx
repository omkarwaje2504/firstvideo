import { Config, spring } from 'remotion';
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { staticFile, OffthreadVideo, Img } from "remotion";
import { Circle } from "@remotion/shapes";
import { getLength, getPointAtLength, getTangentAtLength } from "@remotion/paths";
import { interpolatePath, translatePath } from "@remotion/paths";
import { Star } from "@remotion/shapes";


const cursor = {
  height: 60,
  width: 3,
  display: 'inline-block',
  backgroundColor: 'black',
  marginLeft: 4,
  marginTop: -4,
};

const Animation = () => {

  const doctor = staticFile(`/doctor.jpg`)



  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();




  const logoTranslationProgress = spring({
    frame: frame, ///starting point defining
    fps,
    config: {
      damping: 900, // popout effect
      mass: 900,  // give up and down effect lower the value faster the popout
      stiffness: 300  //popup effect with more bouncing effect
    },
  });

  const scaling = interpolate(
    frame,
    [0, 40],
    [0, 10],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: "clamp"
    });


  const VideoOpacity = interpolate(
    frame,
    [5350, 5400],  // duration in video take from start point to end point
    [1, 0],  // value of css varies from start to end point
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const calcimaxTransform = interpolate(
    frame,
    [5400, 5450],
    [-50, 0],
    {
      extrapolateRight: 'clamp',
      extrapolateLeft: 'clamp',
    }
  );


  const text = 'Your Presence Empowers us to work together for better well-being';
  const relativeFrame = frame - 5600;
  let textToShow = '';

  if (relativeFrame <= 0) {
    const charsShown = Math.floor(relativeFrame / 3);
    textToShow = text.slice(0, charsShown);
  } else {
    textToShow = text;
  }

  const drName = 'Dr. name here';
  const nameFrame = frame - 5660;
  let DrNameText = '';

  if (nameFrame <= 0) {
    const nameShown = Math.floor(nameFrame / 3);
    DrNameText = drName.slice(0, nameShown);
  } else {
    DrNameText = drName;
  }

  const DrDesignation = "Designation"
  const designationFrame = frame - 5670;
  let DrDesignationText = '';

  if (designationFrame <= 0) {
    const designationShown = Math.floor(designationFrame / 3);
    DrDesignationText = DrDesignation.slice(0, designationShown);
  } else {
    DrDesignationText = DrDesignation;
  }

  const imageOpacity = interpolate(
    frame,
    [5400, 5470],  // duration in video take from start point to end point
    [0, 1],  // value of css varies from start to end point
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );


  return (
    <>
      <AbsoluteFill className='bg-white flex items-center justify-center'>
        <Sequence durationInFrames={400} from={5350} className="relative w-full h-full">
          <div className='absolute w-full bottom-4 justify-between flex px-6'>
            <Img
              src={staticFile('calcimax.jpeg')}
              style={{ opacity: `${imageOpacity}` }}
            />
            <Img
              src={staticFile('calcimax.jpeg')}
              style={{ opacity: `${imageOpacity}` }} />
            <Img
              src={staticFile('mayer.jpeg')}
              style={{ opacity: `${imageOpacity}` }} />
          </div>
          <div className='text-3xl text-blue-500 mt-8 font-bold flex w-full justify-center '>
            {textToShow}
          </div>
          {/* <div className='absolute bottom-10 left-20'>
            <Star points={6} innerRadius={211} outerRadius={191} cornerRadius={83} className='text-white'>
              omkar
            </Star>
          </div> */}
          <div className='absolute bottom-56 left-[25vw] text-3xl'>
            {DrNameText}
          </div>
          <div className='absolute bottom-48 left-[25vw] text-3xl'>
            {DrDesignationText}
          </div>
        </Sequence>

        {/* ----------------------- Video redered ------------------------- */}
        <OffthreadVideo
          src={staticFile('startVideo.mp4')}
          endAt={5400}
          style={{ opacity: `${VideoOpacity}` }}
        />
      </AbsoluteFill>
    </>
  );


}

export default Animation;