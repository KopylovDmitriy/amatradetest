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
						<div className="footer__info">
							<img src="./img/icons/mail.svg" alt="mail" className="footer__img"/>
							<p className="footer__desc">plisko.e@gystecom.ae</p>
						</div>
						<div className="footer__info">
							<img src="./img/icons/telegram.svg" alt="telegram" className="footer__img"/>
							<img src="./img/icons/whats-app.svg" alt="whats app" className="footer__img"/>
							<p className="footer__desc">+48667952174</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
