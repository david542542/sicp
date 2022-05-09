import {  render } from "preact"
import { useState } from "preact/hooks"

const parse = (t) =>
  t.split(",").map(x => x.trim()).filter(Boolean)

function union(a, b) {
	const r = new Set(a)
	for (const v of b) r.add(v)
	return r
}

function App() {
	const [input, setInput] = useState("")
	const [output, setOutput] = useState(new Set())

	function onSubmit(event) {
		event.preventDefault()
		const arr = parse(input)
		setOutput(union(output, new Set(arr)))
	}

	return <form>
		<input
			value={input}
			onInput={e => setInput(e.target.value)}
			placeholder="Enter in a value"
		/>
		<button type="submit" onClick={onSubmit}>submit</button>
		<div>
			Your set now contains:
			<output name="theOutput">
			  Set({output.size}) = {Array.from(output).join(",")}
			</output>
		</div>
		<p>(react demo)</p>
	</form>
}

render(<App/>, document.querySelector("#app"))
