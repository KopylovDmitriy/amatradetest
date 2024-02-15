import { NavLink } from "react-router-dom"

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

	return (
		<div className='footer'>
			<div className='container'>
				<div className='header__boby header__boby_footer'>
					<NavLink className='header__logo' to='/'>
						<img
							style={{ width: "120px" }}
							src='./img/logo_black.svg'
							alt='amatrade logo'
						/>
					</NavLink>
					<nav className='navigation'>
						<ul className='navigation__list'>
							{links}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Footer
