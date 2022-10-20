import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
	--header-color: #d5bdaf;
	--content-color: #f5ebe0;
	--white: #ffffff;
	--black: #000000;
	--grey: #edede9;
}

body {
		margin: 0;
		font-family: 'Dongle', cursive;
		font-size: 1.8rem;
	}

input {
	border: none;
}

li {
	list-style-type: none;
}
`;

export default GlobalStyle;
