import "./index.css";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

/* Figma wireframe -> 
https://www.figma.com/file/1nxXwpQWoGcgcEtuZ03z9X/calculator?node-id=0%3A1&t=xMu8lHwpXVPGuvdF-0 
*/

const btnValues = [
	["C", "+/-", "%", "/"],
	[7, 8, 9, "X"],
	[4, 5, 6, "-"],
	[1, 2, 3, "+"],
	[0, ".", "="],
];

const App = () => {
	return (
		<div>
			<Wrapper>
				<Screen />
				<ButtonBox>
					{btnValues.flat().map((btn, i) => (
						<Button value={btn} key={i} />
					))}
				</ButtonBox>
				<h1>calculator</h1>
			</Wrapper>
		</div>
	);
};

export default App;
