import React, {useRef, useEffect} from 'react'

const Home = () => {

	const screenPlayer = useRef(null),
				cameraPlayer = useRef(null)

	useEffect(async () => {
		const stream = await navigator.mediaDevices.getDisplayMedia({
			video: { mediaSource: 'user' }
		});
		const selfie = await navigator.mediaDevices.getUserMedia({
			video: { mediaSource: 'user' }
		});
		screenPlayer.current.srcObject = stream
		cameraPlayer.current.srcObject = selfie
	}, [screenPlayer, cameraPlayer])

	return (
		<>
			<video playsInline muted autoPlay ref={screenPlayer} />
			<video playsInline muted autoPlay ref={cameraPlayer} />
		</>
	)
}

export default Home