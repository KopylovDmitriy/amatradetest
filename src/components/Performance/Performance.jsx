import { NavLink } from 'react-router-dom';

import './Performance.css';

const Performance = () => {
    return(
        
            <div className="performance">
                <div className="performance__content">
                    <div className="container">
                        <div className="performance__info">
                            <h1 className="performance__title">Amatrade</h1>
                            <h2 className="performance__subtitle" >MARKETPLACES CONSULTING</h2>
                            <p className="performance__desc">Boost your success with our help!<br/>Amazon, Mercado Libre, Jumia, Allegro-we're ready!
                            </p>
                            <p className="performance__desc">Listing, product development, A+ content, brand logos and brand stories – we provide world-class consultancy services to sellers on marketplaces around the world
                            </p>
                            <p className="performance__desc">Boost your brand presence and increase sales with our tailored solutions!
                            </p>
                            <NavLink to="/contacts">
                                <button className="button cooperation__button">Contact us</button>
                            </NavLink>
                        </div> 
                    </div>
                </div>  
            </div>
            
       
    )
}

export default Performance;