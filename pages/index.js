import React, {useRef, useEffect, useState} from 'react'
import useUserMedia from '../components/userMedia'

export default function Home() {

	const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "environment" },
};

	const videoRef = useRef();
  const mediaStream = useUserMedia(CAPTURE_OPTIONS);

  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
		console.log(mediaStream);
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

	return (
		<main>
			<video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
		</main>
	)
}
