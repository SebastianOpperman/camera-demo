export default function Home() {

	function stream() {
		console.log(navigator)
	}

	return (
		<main>
			<button onClick={() => stream()}>Start Stream</button>
		</main>
	)
}
