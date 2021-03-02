export default function Home() {

	async function stream() {
		const stream = await navigator.mediaDevices.getUserMedia({
			video: {
				minAspectRatio: 1.333,
				minFrameRate: 60,
				width: 640,
				heigth: 480
			},
			audio: true
		})
	}

	return (
		<main>
			<button onClick={() => stream()}>Start Stream</button>
		</main>
	)
}
