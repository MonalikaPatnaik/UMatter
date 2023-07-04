import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	height: 80px;
	margin-top: 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	z-index: 1;
	width: 100%;
	@media screen and (max-width: 768px) {
		justify-content: space-between;
		padding-left: 4%;
		padding-right: 4%;
	}
`;

const breakpoints = {
	sm: '640px',
	md: '1080px',
};
export const LogoContainer = styled(LinkR)`
	cursor: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	z-index: 10;
	text-decoration: none;
	margin-right: 1rem; /* Add margin between logo and name */
	padding-bottom: 0.5rem; /* Add padding below the components inside LogoContainer */

	@media (max-width: ${breakpoints.md}) {
		justify-content: space-between;
		width: 100%;
		margin-right: 0; /* Reset margin on small screens */
		padding-bottom: 0; /* Reset padding on small screens */
	}
`;

export const LogoinnerContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const NavLogo = styled(LinkR)`
	color: var(--text-clr);
	cursor: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	padding: 1rem;
	z-index: 12;
	text-decoration: none;
	text-align: center; /* Center the NavLogo on small screens */

	&:hover {
		mask-image: linear-gradient(
			-75deg,
			rgba(0, 128, 0, 0.6) 30%,
			#000 50%,
			rgba(0, 128, 0, 0.6) 70%
		);
		mask-size: 200%;
		animation: shine 3s infinite;
		color: blue;
	}

	@keyframes shine {
		from {
			mask-position: 150%;
		}

		to {
			mask-position: -50%;
		}
	}
`;
export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.8rem;
		cursor: pointer;
		//  color: #fff;
		color: var(--text-clr);
		align-items: center;
		display: flex;
		&:hover {
			color: green;
		}
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	gap: 30px;
	align-items: center;
	justify-items: center;
	margin-top: 30px;
	list-style: none;
	font-size: 1.2rem;
	font-weight: 600;
	margin-right: 0;
	@media screen and (max-width: 768px) {
		display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
		position: sticky;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		margin-top: 0;
		position: absolute;
		margin-left: 0;
		top: 0px;
		padding-left: 0px;
		left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
		opacity: 1;
		z-index: 5;
		transition: all 0.5s ease;
		background-color: var(--bg-clr);
	}
`;

export const Navitem = styled.li`
	margin-top: -15px;
`;
export const NavLinks = styled(LinkS)`
	color: var(--text-clr);
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	position: relative;

	&::after {
		content: '';
		width: 0%;
		height: 5%;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #28b86b;
		transition: all 0.3s ease-in;
	}

	&:hover:after {
		width: 100%;
	}

	&:hover {
		color: #28b86b;
	}

	&.active {
		border-bottom: 3px solid #01bf71;
	}
`;
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	gap: 4%;

	@media screen and (max-width: 768px) {
		display: none;
		margin-top: 0px;
		margin-right: 45px;
	}
	${'' /* border-radius: 50px;
background: #01bf71;
padding: 10px 10px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: var(--text-clr);
  color: var(--bg-clr);
} */
	}
`;
export const NavBtnMobile = styled.nav`
	display: none;

	@media screen and (max-width: 768px) {
		margin: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 0px;
		margin-right: 45px;
	}
`;

export const NavBtnLink = styled(LinkR)`

	border-radius: 50px;
	background: #01bf71;
	white-space: nowrap;
	padding: 10px 22px;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: 1.5px solid black;
	margin-top: 0px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: var(--text-clr);
		color: var(--bg-clr);
		border: 1.5px solid #d2f7d3;
	}
`;
// import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';

// export const Nav = styled.nav`
// 	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// 	height: 80px;
// 	margin-top: -80px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	font-size: 1rem;
// 	position: sticky;
// 	top: 0;
// 	z-index: 10;

// 	@media screen and (max-width: 960px) {
// 		transition: 0.8s all ease;
// 	}
// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   z-index: 1;
//   width: 100%;
//   position: fixed;
//   top: 0px;
//   background: rgba(40, 30, 30, 0.4);
//   boxShadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   backdropFilter: blur(7.1px);
//   webkitBackdropFilter: blur(7.1px);
//   border: "1px solid rgba(40, 30, 30, 0.18);

//   @media screen and (max-width: 768px) {
//     justify-content: space-between;
//     padding-left: 4%;
//     padding-right: 4%;
//   }
// `;

// const breakpoints = {
// 	sm: '640px',
// 	md: '1080px',
// };
// export const LogoContainer = styled(LinkR)`
// 	cursor: pointer;
// 	font-size: 2rem;
// 	display: flex;
// 	align-items: center;
// 	font-weight: bold;
// 	z-index: 10;
// 	text-decoration: none;
// 	margin-right: 1rem; /* Add margin between logo and name */
// 	padding-bottom: 0.5rem; /* Add padding below the components inside LogoContainer */

// 	@media (max-width: ${breakpoints.md}) {
// 		justify-content: space-between;
// 		width: 100%;
// 		margin-right: 0; /* Reset margin on small screens */
// 		padding-bottom: 0; /* Reset padding on small screens */
// 	}
// `;

// export const LogoinnerContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// `;

// export const NavLogo = styled(LinkR)`
// 	color: var(--text-clr);
// 	cursor: pointer;
// 	font-size: 2rem;
// 	display: flex;
// 	align-items: center;
// 	font-weight: bold;
// 	padding: 1rem;
// 	z-index: 10;
// 	text-decoration: none;
// 	text-align: center; /* Center the NavLogo on small screens */

// 	&:hover {
// 		mask-image: linear-gradient(
// 			-75deg,
// 			rgba(0, 0, 0, 0.6) 30%,
// 			#000 50%,
// 			rgba(0, 0, 0, 0.6) 70%
// 		);
// 		mask-size: 200%;
// 		animation: shine 3s infinite;
// 		color: #00ffca;
// 	}

// 	@keyframes shine {
// 		from {
// 			mask-position: 150%;
// 		}

// 		to {
// 			mask-position: -50%;
// 		}
// 	}
// `;
// export const MobileIcon = styled.div`
// 	display: none;

// 	@media screen and (max-width: 768px) {
// 		display: block;
// 		font-size: 1.8rem;
// 		cursor: pointer;
// 		color: #fff;
// 		align-items: center;
// 		display: flex;
// 	}
// `;

// export const NavMenu = styled.ul`
// 	display: flex;
// 	gap: 30px;
// 	align-items: center;
// 	justify-items: center;
// 	margin-top: 30px;
// 	list-style: none;
// 	font-size: 1.2rem;
// 	font-weight: 600;
// 	margin-right: 0;
// 	@media screen and (max-width: 768px) {
// 		display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
// 		position: sticky;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
// 		width: 100vw;
// 		height: 100vh;
// 		margin-top: 0;
// 		position: absolute;
// 		margin-left: 0;
// 		top: 0px;
// 		padding-left: 0px;
// 		left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
// 		opacity: 1;
// 		z-index: 5;
// 		transition: all 0.5s ease;
// 		background-color: var(--bg-clr);
// 	}
// `;

// export const Navitem = styled.li`
// 	margin-top: -15px;
// `;
// export const NavLinks = styled(LinkS)`
// 	color: var(--text-clr);
// 	display: flex;
// 	align-items: center;
// 	text-decoration: none;
// 	cursor: pointer;
// 	position: relative;

// 	&::after {
// 		content: '';
// 		width: 0%;
// 		height: 5%;
// 		position: absolute;
// 		bottom: 0;
// 		left: 0;
// 		background-color: #28b86b;
// 		transition: all 0.3s ease-in;
// 	}

// 	&:hover:after {
// 		width: 100%;
// 	}

// 	&:hover {
// 		color: #28b86b;
// 	}

// 	&.active {
// 		border-bottom: 3px solid #01bf71;
// 	}
// `;
// export const NavBtn = styled.nav`
// 	display: flex;
// 	align-items: center;
// 	gap: 4%;

// 	@media screen and (max-width: 768px) {
// 		display: none;
// 		margin-top: 0px;
// 		margin-right: 45px;
// 	}
// 	${
/* border-radius: 50px;
background: #01bf71;
padding: 10px 10px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: var(--text-clr);
  color: var(--bg-clr);
} */
// }
// `;
// export const NavBtnMobile = styled.nav`
// 	display: none;

// 	@media screen and (max-width: 768px) {
// 		margin: 2rem;
// 		display: flex;
// 		flex-direction: row;
// 		justify-content: space-between;
// 		margin-top: 0px;
// 		margin-right: 45px;
// 	}
// `;

// export const NavBtnLink = styled(LinkR)`
// 	border-radius: 50px;
// 	background: #01bf71;
// 	white-space: nowrap;
// 	padding: 10px 22px;
// 	color: #fff;
// 	font-size: 16px;
// 	outline: none;
// 	border: 1.5px solid black;
// 	margin-top: 0px;
// 	cursor: pointer;
// 	transition: all 0.2s ease-in-out;
// 	text-decoration: none;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		background: var(--text-clr);
// 		color: var(--bg-clr);
// 		border: 1.5px solid #d2f7d3;
// 	}
// `;
