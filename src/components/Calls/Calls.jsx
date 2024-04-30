import { useState } from 'react';
import { useEffect } from 'react';

import './Calls.css';

const Calls = ({background, size}) => {

    const [color, setColor] = useState({
        mail: "calls__svg_mail-stroke",
        telegram: "calls__svg_telegram-fill",
        whatsApp: "calls__svg_whats-app-fill"
    });
    const [sizeIcon, setSizeIcon] = useState('');


    useEffect(() => {
        switch(background) {
            case 'white': 
            setColor(
                {
                    mail: "calls__svg_mail-stroke",
                    telegram: "calls__svg_telegram-fill",
                    whatsApp: "calls__svg_whats-app-fill"
                }
            );
            break;
    
            case 'black':
                setColor(
                    {
                        mail: "calls__svg_mail-white-stroke",
                        telegram: "calls__svg_telegram-white-fill",
                        whatsApp: "calls__svg_whats-app-white-fill"
                    }
                );
            break;
        }
        if (size === "small") {
            setSizeIcon("calls__svg_small")
        }
    }, [])
    

    return(
       
            <ul className="calls__list">

            <div className="calls__item">
                    <a href="mailto:contact@amatrade.pl" target="_black" className="calls__link">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={"calls__svg " + sizeIcon}>
                            <path d="M3.02832 10L10.2246 14.8166C10.8661 15.2443 11.1869 15.4581 11.5336 15.5412C11.8399 15.6146 12.1593 15.6146 12.4657 15.5412C12.8124 15.4581 13.1332 15.2443 13.7747 14.8166L20.971 10M10.2981 4.06879L4.49814 7.71127C3.95121 8.05474 3.67775 8.22648 3.4794 8.45864C3.30385 8.66412 3.17176 8.90305 3.09111 9.161C3 9.45244 3 9.77535 3 10.4212V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V10.4212C21 9.77535 21 9.45244 20.9089 9.161C20.8282 8.90305 20.6962 8.66412 20.5206 8.45864C20.3223 8.22648 20.0488 8.05474 19.5019 7.71127L13.7019 4.06879C13.0846 3.68116 12.776 3.48735 12.4449 3.4118C12.152 3.34499 11.848 3.34499 11.5551 3.4118C11.224 3.48735 10.9154 3.68116 10.2981 4.06879Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={color.mail}/>
                        </svg>
                    </a>
                </div>

                <div className="calls__item">
                    <a href="https://t.me/KappaFace" target="_black" className="calls__link">
                        <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 48 48"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                            className={"calls__svg " + sizeIcon}>
                            <path 
                                d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="#ffffff"
                                className={color.telegram}/>
                        </svg>
					</a>
                </div>

                <div className="calls__item">
                    <a href="https://api.whatsapp.com/send?phone=48667952174" target="_black" className="calls__link">
                            <svg
                                fill="#ffffff"
                                width="20px"
                                height="20px"
                                viewBox="0 0 1024 1024"
                                t="1569683925316"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="14972"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                className={"calls__svg " + sizeIcon + " " + color.whatsApp}>
                                    <defs>
                                        <style type="text/css"></style>
                                    </defs>
                                    <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z" p-id="14973">
                                    </path>
                                    <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" p-id="14974">
                                    </path>
                            </svg>
                    </a>
                </div>
                
            </ul>
       
    )
}

export default Calls;