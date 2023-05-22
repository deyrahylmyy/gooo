import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { FaTimes } from 'react-icons/fa';
=======
import { FaRProject, FaTimes } from 'react-icons/fa';
>>>>>>> 60c466b (Add files via upload)
=======
import { FaTimes } from 'react-icons/fa';
>>>>>>> d2b498f (materi update-1)
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { data } from '../../data/NavbarData.js';


const Navbar = () => {
    const [show, setShow] = useState(false);

	let navigate = useNavigate();
	let location = useLocation();

    const handleClick = () => {
		setShow(!show);
	};

    const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to);
		setShow(false);
	};



    return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./assets/svg/logo1.svg" alt="logo" />
						RAF369
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;