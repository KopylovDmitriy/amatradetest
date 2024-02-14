import { NavLink } from "react-router-dom"
import { useState } from "react"

import "./Header.css"

const Header = () => {

	const linkList = [
		{
			link: "listings",
			content: "Product Listings",
		},
		{
			link: "aplus",
			content: "A+ Content",
		},
		{
			link: "packaging",
			content: "Packaging",
		},
		{
			link: "stores",
			content: "Stores",
		},
		{
			link: "socialmedia",
			content: "Social Media",
		},
		{
			link: "contacts",
			content: "Contacts",
		},
	]

	const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("navigation__list");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
	const body = document.querySelector('body');


	const links = linkList.map((link, i) => {
		return (
			<li key={i} className='navigation__item'>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "navigation__link navigation__link_active"
							: "navigation__link"
					}
					to={link.link}
				>
					{link.content}
				</NavLink>
			</li>
		)
	})


	const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("navigation__list visible")
			body.style.overflow = 'hidden'
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("navigation__list hidden")
			body.style.overflow = ''
        }
        setIsMenuClicked(!isMenuClicked)
    }

	const clickMenu = () => {
		if (window.innerWidth < 1000) {
			setMenuClass("navigation__list hidden")
			setBurgerClass("burger-bar unclicked")
			body.style.overflow = ''
			setIsMenuClicked(!isMenuClicked)
		}
	
	}


	return (
		<div className='header'>
			<div className='container'>
				<div className='header__boby'>
					<NavLink className='header__logo' onClick={clickMenu} to='/'>
						<img
							style={{ width: "120px" }}
							src='./img/logo_black.svg'
							alt='amatrade logo'
						/>
					</NavLink>
					<nav className='navigation'>
						<ul className={menu_class} onClick={clickMenu}>{links}</ul>
						<div className="burger-menu" onClick={updateMenu}>
							<div className={burger_class}></div>
							<div className={burger_class}></div>
							<div className={burger_class}></div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header
