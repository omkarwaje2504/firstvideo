import {AbsoluteFill, interpolate, Sequence, useCurrentFrame,staticFile, OffthreadVideo, Img, Audio} from 'remotion';
const Animation = ({doctorName, doctorDesignation, doctorImage}) => {
	const frame = useCurrentFrame();
	const VideoOpacity = interpolate(
		frame,
		[2245, 2265], // duration in video take from start point to end point
		[1, 0], // value of css varies from start to end point
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const text =
		'Your Presence Empowers us to work together for better well-being';
	const relativeFrame = frame - 2380;
	let textToShow = '';

	if (relativeFrame <= 0) {
		const charsShown = Math.floor(relativeFrame);
		textToShow = text.slice(0, charsShown);
	} else {
		textToShow = text;
	}

	const drName = doctorName;
	const nameFrame = frame - 2360;
	let DrNameText = '';

	if (nameFrame <= 0) {
		const nameShown = Math.floor(nameFrame / 2);
		DrNameText = drName.slice(0, nameShown);
	} else {
		DrNameText = drName;
	}

	const DrDesignation = doctorDesignation;
	const designationFrame = frame - 2400;
	let DrDesignationText = '';

	if (designationFrame <= 0) {
		const designationShown = Math.floor(designationFrame / 2);
		DrDesignationText = DrDesignation.slice(0, designationShown);
	} else {
		DrDesignationText = DrDesignation;
	}

	const imageOpacity = interpolate(
		frame,
		[2265, 2274], // duration in video take from start point to end point
		[0, 1], // value of css varies from start to end point
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const shapeOpacity = interpolate(
		frame,
		[2255, 2298], // duration in video take from start point to end point
		[0, 1], // value of css varies from start to end point
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const doctorImageOpacity = interpolate(
		frame,
		[2280, 2300], // duration in video take from start point to end point
		[0, 1], // value of css varies from start to end point
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const sequenceOpacity = interpolate(
		frame,
		[2450, 2480], // duration in video take from start point to end point
		[1, 0], // value of css varies from start to end point
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill className="bg-white flex items-center justify-center">
			<Sequence
				durationInFrames={400}
				from={2260}
				className="relative w-full h-full" 
				style={{opacity:`${sequenceOpacity}`}}
			>
				{/* ------------------- Logo images --------------------- */}
				<div className="absolute z-20 w-full bottom-8 justify-between items-center flex px-6 h-32 ">
					<Img
						src={staticFile('calcimaxTotal.svg')}
						className="w-80"
						style={{opacity: `${imageOpacity}`}}
					/>
					<Img
						src={staticFile('calcimaxD1000.svg')}
						className="w-80 h-fit py-3 bg-white px-3 rounded"
						style={{opacity: `${imageOpacity}`}}
					/>
					<Img
						src={staticFile('mayer.svg')}
						className="w-40"
						style={{opacity: `${imageOpacity}`}}
					/>
				</div>
				{/* ------------------- Shapes images --------------------- */}
				<div>
					<Img
						src={staticFile('shape1.png')}
						className="absolute w-1/5 right-32 top-32"
						style={{opacity: `${shapeOpacity}`}}
					/>
					<Img
						src={staticFile('shape2.png')}
						className="absolute w-1/6 right-0 top-0"
						style={{opacity: `${shapeOpacity}`}}
					/>
					<Img
						src={staticFile('shape3.png')}
						className="absolute w-2/12 left-0 top-0"
						style={{opacity: `${shapeOpacity}`}}
					/>
				</div>

				<div className="w-full absolute bottom-0 z-10 shape4Transition">
					<Img
						src={staticFile('shape4.png')}
						style={{opacity: `${shapeOpacity}`}}
					/>
				</div>

				{/* -------------------------------Upper header line ---------------------- */}
				<div
					className="text-5xl text-[#044272] mt-32 flex w-full justify-center "
					style={{fontFamily: 'Lato Bold Italic'}}
				>
					{textToShow}
				</div>
				{/* ------------------------------- Doctor image ---------------------- */}
				<div
					className="bg-green-100 rounded-full w-[40rem] h-[40rem] absolute left-72 bottom-48 gradient-div"
					style={{opacity: `${doctorImageOpacity}`}}
				>
					<Img src={doctorImage} />
				</div>

				{/* ---------------------- name and designation ----------------------*/}
				<div
					className="absolute bottom-[40vh] left-[46vw] text-[#044272] text-5xl"
					style={{fontFamily: 'Aileron Black'}}
				>
					{DrNameText}
				</div>
				<div
					className="absolute bottom-[34vh] left-[46vw] text-[#044272] text-[2.6rem]"
					style={{fontFamily: 'Aileron Regular'}}
				>
					{DrDesignationText}
				</div>
			</Sequence>

			{/* ----------------------- Video redered ------------------------- */}
			<OffthreadVideo
				src={staticFile('startVideo.mp4')}
				endAt={2268}
				muted
				style={{opacity: `${VideoOpacity}`}}
			/>
			<Audio src={staticFile('audio.mp3')} />
		</AbsoluteFill>
	);
};

export default Animation;
