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
                    <div
                    className="carousel-item active"
                    style={{ backgroundImage: `url(${P1})` }}
                    >
                        <p className="carousel-caption">Baby Blessing With My Girls</p>
                    </div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P2})` }}
                    >
                        <p className="carousel-caption">Girls Night Out</p>
                    </div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P3})` }}
                    >
                        <p className="carousel-caption">Fun Day Out By The Dam</p>
                    </div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P4})` }}
                    >
                        <p className="carousel-caption">Cerys's Party</p>
                    </div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P5})` }}
                    >
                        <p className="carousel-caption">Farewell Breakfast For Pauline</p>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#slider" data-slide="prev">
                <span className="carousel-control-prev-icon">
                </span>
                
                </a>
                <a className="carousel-control-next" href="#slider" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </Fragment>
    )
}

export default Slider;