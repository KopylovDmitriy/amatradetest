import { NavLink } from "react-router-dom";

import Calls from "../Calls/Calls";

import "./Footer.css"

const Footer = () => {

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

	const links = linkList.map((link, i) => {
		return (
			<li key={i} className='footer__item'>
				<NavLink
					className="footer__link"
					to={link.link}
				>
					{link.content}
				</NavLink>
			</li>
		)
	})

	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer__boby'>
					<NavLink className='header__logo' to='/'>
						<img
							style={{ width: "120px" }}
							src='./img/logo_black.svg'
							alt='amatrade logo'
						/>
					</NavLink>
					<nav className='footer__nav'>
						<ul className='footer__list'>
							{links}
						</ul>
					</nav>
					<div className="footer__contacts">
						<Calls background="black" size="small"/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
