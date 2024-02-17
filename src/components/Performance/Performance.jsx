import './Performance.css';

const Performance = ({content}) => {
    const {title, subtitle, desc, className} = content;
    
    return(
        
            <div className={className}>
                <div className="performance__content">
                    <div className="container">
                        <div className="performance__info">
                            <h1 className="performance__title">{title}</h1>
                            <h2 className="performance__subtitle">{subtitle}</h2>
                            {desc}
                        </div> 
                    </div>
                </div>  
            </div>
            
       
    )
}

export default Performance;