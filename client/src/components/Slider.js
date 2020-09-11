import React, { Fragment } from 'react';
import P1 from '../images/P1.jpg';
import P2 from '../images/P2.jpg';
import P3 from '../images/P3.jpg';
import P4 from '../images/P4.jpg';
import P5 from '../images/P5.jpg';

const Slider = () => {
    return (
        <Fragment>
            <div id="slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={P1} style={{width:"100%"}} alt="cloudy" />
                        <div className="caption">Cotton Candy Clouds</div>
                    </div>
                    <div className="carousel-item">
                        <img src={P2} style={{width:"100%"}} alt="lightning" />
                        <div className="caption">Electric Lightning Strike</div>
                    </div>
                    <div className="carousel-item">
                        <img src={P3} style={{width:"100%"}} alt="snow" />
                        <div className="caption">Frosty Frozen Forest</div>
                    </div>
                    <div className="carousel-item">
                        <img src={P4} style={{width:"100%"}} alt="sunny" />
                        <div className="caption">Blissful Summer Sunset</div>
                    </div>
                    <div className="carousel-item">
                        <img src={P5} style={{width:"100%"}} alt="rain" />
                        <div className="caption">Refreshing Rainy Day</div>
                    </div>
                </div>

                    
                <a className="carousel-control-prev" data-slide="prev" href="#slider">
                    <span className="carousel-control-prev-icon tooltip">
                        <p className="tooltipText">Previous Slide</p>
                    </span>
                        
                </a>
                <a className="carousel-control-next" data-slide="next"  href="#slider">
                    <span className="carousel-control-prev-icon tooltip">
                        <p className="tooltipText">Next Slide</p>
                    </span>
                        
                </a>
            </div>    
        </Fragment>
    )
}

export default Slider;