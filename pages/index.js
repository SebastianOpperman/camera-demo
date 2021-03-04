import React, {useRef, useEffect} from 'react'

const Home = () => {

	const screenPlayer = useRef(null),
				cameraPlayer = useRef(null)

	useEffect(async () => {
		const stream = await navigator.mediaDevices.getDisplayMedia({
			video: { mediaSource: 'screen' }
		});
		const selfie = await navigator.mediaDevices.getDisplayMedia({
			video: { mediaSource: 'enviroment' }
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