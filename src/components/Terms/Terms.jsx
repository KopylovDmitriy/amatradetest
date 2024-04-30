import { motion } from 'framer-motion';

import './Terms.css'

// const Terms = () => {
//     return (
//         <div className='chapter terms'>
// 			<div className='title__content'>
// 				<h2 className='title'>Why should you choose us</h2>
// 			</div>
//             <div className="container">
//                 <div className="terms__box">

//                     <div className="terms__item">

//                         <div className="terms__point terms__title">
//                             <h3 className="point__title ">
//                                 Amatrade Consulting:
//                             </h3>
//                         </div>

//                         <div className="terms__point">
//                             <h4 className="point__title">monthly investment</h4>
//                             <h3 className="point__desc">$1000+</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">delivery</h4>
//                             <h3 className="point__desc">2+ months</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">results</h4>
//                             <h3 className="point__desc">good</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">roi</h4>
//                             <h3 className="point__desc">5-10x</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">expertise</h4>
//                             <h3 className="point__desc">basic</h3>
//                         </div>
//                     </div>

//                     <div className="terms__item terms__main">

//                         <div className="terms__btn_top"></div>

//                         <div className="terms__point terms__title">
//                             <h3 className="point__title point__title_main">
//                                 Amatrade Consulting:
//                             </h3>
//                         </div>

                        

//                         <div className="terms__point">
//                             <h4 className="point__title">monthly investment</h4>
//                             <h3 className="point__desc">$1000+</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">delivery</h4>
//                             <h3 className="point__desc">2+ months</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">results</h4>
//                             <h3 className="point__desc">good</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">roi</h4>
//                             <h3 className="point__desc">5-10x</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">expertise</h4>
//                             <h3 className="point__desc">basic</h3>
//                         </div>
//                         <div className="terms__btn_bottom ">
//                             <a href="amatrade.pl" className="terms__link">
//                                 get started
//                             </a>
//                         </div>
//                     </div>

//                     <div className="terms__item">

//                         <div className="terms__point terms__title">
//                             <h3 className="point__title ">
//                                 Amatrade Consulting:
//                             </h3>
//                         </div>

//                         <div className="terms__point">
//                             <h4 className="point__title">monthly investment</h4>
//                             <h3 className="point__desc">$1000+</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">delivery</h4>
//                             <h3 className="point__desc">2+ months</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">results</h4>
//                             <h3 className="point__desc">good</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">roi</h4>
//                             <h3 className="point__desc">5-10x</h3>
//                         </div>
//                         <div className="terms__point">
//                             <h4 className="point__title">expertise</h4>
//                             <h3 className="point__desc">basic</h3>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )     
// }

const Terms = () => {

    const textAnimation = {
        hidden: {
            y: 40,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1
            }
        })
    }

    return (
        <motion.section
                initial="hidden"
                viewport={{amount: .1, once: true}}
                whileInView="visible"
                className='chapter terms'>
			
            <div className="container">
                
                <motion.div custom={0} variants={textAnimation} className='title__content'>
                    <h2 className='title'>Why should you choose us</h2>
                </motion.div>

                <motion.div custom={1} variants={textAnimation} className="terms__box">

                    <div className="terms__row terms__row_title">
                        <div className="terms__item display-none">
                            <div className="terms__point terms__point_main">
                                <span className="terms__icon">❌</span>
                                <h3 className="point__title">In-house team</h3>
                            </div>
                        </div>
                        <div className="terms__item terms__item_main">
                            <div className="terms__point terms__point_main">
                                <span className="terms__icon">🚀</span>
                                <h3 className="point__title terms__title_main">Amatrade<br/>Consulting</h3>
                            </div>
                            <div className="terms__top">
                                <div className="terms__top-element">
                                    <h4>best option</h4>
                                </div>
                            </div>
                        </div>
                        <div className="terms__item display-none">
                            <div className="terms__point terms__point_main">
                                <span className="terms__icon">❌</span>
                                <h3 className="point__title">Other agencies</h3>
                            </div>
                        </div>
                    </div>

                    <div className="terms__row">

                        <div className="terms__item display-none">

                            <div className="terms__point">
                                <p className="point__desc">monthly investment </p>
                                <h3 className="point__title">$10k+</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">delivery</p>
                                <h3 className="point__title">2+ months</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">results</p>
                                <h3 className="point__title">good</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">roi</p>
                                <h3 className="point__title">5-10x</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">expertise</p>
                                <h3 className="point__title">basic</h3>
                            </div>

                        </div>

                        <div className="terms__item terms__item_main">
                            <div className="terms__point">
                                <p className="point__desc">monthly investment </p>
                                <h3 className="point__title">$1000+</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">delivery</p>
                                <h3 className="point__title">2 weeks</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">results</p>
                                <h3 className="point__title">premium</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">roi</p>
                                <h3 className="point__title">10-20x</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">expertise</p>
                                <h3 className="point__title">industry leaders</h3>
                            </div>
                            <div className="terms__btn">
                                <a href="/contacts" className="terms__link">
                                GET STARTED
                                </a>
                            </div>
                        </div>

                        <div className="terms__item display-none">
                            <div className="terms__point">
                                <p className="point__desc">monthly investment </p>
                                <h3 className="point__title">$1000+</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">delivery</p>
                                <h3 className="point__title">2-4 weeks</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">results</p>
                                <h3 className="point__title">mediocre</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">roi</p>
                                <h3 className="point__title">5-10x</h3>
                            </div>
                            <div className="terms__point">
                                <p className="point__desc">expertise</p>
                                <h3 className="point__title">platform specific</h3>
                            </div>
                        </div>

                    </div>
                    

                </motion.div>
            </div>
        </motion.section>
    )     
}

export default Terms;