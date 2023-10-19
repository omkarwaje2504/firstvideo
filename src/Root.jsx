import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Logo } from './HelloWorld/Logo';
import Animation from './Animation';
import "./style.css";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
	return (
		<>
			{/* <Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>

			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/> */}

			<Composition
				id='Animation'
				component={Animation}
				durationInFrames={8500}
				fps={60}
				width={1080}
				height={600}
			/>
		</>
	);
};
