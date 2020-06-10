import React, { Component } from 'react'
import {Link} from 'react-router-dom';


import Slide_Pic_1 from '../../../media/slider/slide_pic_1.jpg';
import Slide_Pic_2 from '../../../media/slider/slide_pic_2.jpg';
import Slide_Pic_3 from '../../../media/slider/slide_pic_3.jpg';




class Slider extends Component {
    render() {
        return (
            <div>
                    
  <div class="carousel carousel-slider" data-indicators="true">
    <Link class="carousel-item" to="#one!"><img src={Slide_Pic_1} /></Link>
    <Link class="carousel-item" to="#two!"><img src={Slide_Pic_2} /></Link>
    <Link class="carousel-item" to="#three!"><img src={Slide_Pic_3} /></Link>
    {/* <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4" /></a> */}
  </div>
</div>
        )
    }
}

export default Slider;