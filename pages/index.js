import React, {useRef, useEffect, useState} from 'react'

export default function Home() {

	const [stream, setStream] = useState(null)
	const player = useRef(null)

	async function stream() {
		setStream(await navigator.mediaDevices.getUserMedia({
			video: {
				minAspectRatio: 1.333,
				minFrameRate: 60,
				width: 640,
				heigth: 480
			},
			audio: true
		}))
	}

	useEffect(() => {
		player.src = stream
	}, [player, stream])

	return (
		<main>
			<button onClick={() => stream()}>Start Stream</button>
			<video autoplay ref={player}></video>
		</main>
	)
}
