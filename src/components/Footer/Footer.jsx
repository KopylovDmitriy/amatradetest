import { NavLink } from "react-router-dom";

import './Footer.css';

const Footer = () => {

    const linkList = [
        {
            link: "listings",
            content: 'Amazon Product Listings & SEO'
        },
        {
            link: "a+_content",
            content: 'A+ – Content Packaging'
        },
        {
            link: "insta_posts",
            content: 'Instagram Posts'
        }
    ]

    const links = linkList.map((link, i) => {
        return (
            <li key={i} className="navigation__item">
                <NavLink className={({ isActive }) => isActive ? "navigation__link navigation__link_active" : "navigation__link"} to={link.link}>
                    {link.content}
                </NavLink>
            </li>
        )
    })

    return (
        
        <div className="footer">
            <div className="container">
                <div className="header__boby">
                  
                        <NavLink className="header__logo" to="/">
                            <img style={{width: '120px'}} src="../img/logo.svg" alt="amatrade logo" />
                        </NavLink>
                        
          
                    <nav className="navigation">
                        <ul className="navigation__list navigation__list_column">
                            {links}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer;