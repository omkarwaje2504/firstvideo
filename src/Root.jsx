import {Composition} from 'remotion';
import Animation from './Animation';
import './style.css';

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="Animation"
				component={Animation}
				durationInFrames={2480}
				fps={25}
				width={1920}
				height={1080}
				defaultProps={{
					doctorName: 'Dr. Radhika Sharma',
					doctorDesignation: 'Cardiologist',
					doctorImage:
						'https://pixpro.s3.ap-south-1.amazonaws.com/production/files/2023/10/G5FmIWkdRy9x1Jo9VOfnTLkeuwoSqaQOyq9qWZRS.jpg',
				}}
			/>
		</>
	);
};
