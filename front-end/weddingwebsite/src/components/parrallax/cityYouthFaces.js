import React from 'react';
import { Parallax } from 'react-parallax';
import cityYouthBlurb from './../../assets/images/cityYouthBlurb.png';
const ParrallaxFaces = () => (
  <div onClick={()=> {
    console.log('click fired');
    // window.location = 'www.cityyouthnow.org'
    window.location.assign('www.cityyouthnow.org');

  }}>

  <Parallax
    // bgImageSizes={'mini'}
    blur={{min:0, max:1}}
    bgImage={cityYouthBlurb}
    bgImageAlt="cityYouthBlurb"
    strength={1}
    renderLayer={percentage => (
      <div
      style={{
        position: 'absolute',
        background: `rgba(255, 125, 0, ${percentage * 1})`,
        // left: '20%',
        // top: '20%',
        width: percentage * 95,
        height: percentage * 150,
        // maxWidth: percentage * 10,
        // maxHeight: percentage * 10
      }}
      />
    )}
    >
    <div style={{ height: '200px' }} />
    </Parallax>

  </div>



);
export default ParrallaxFaces;
// front-end/weddingwebsite/src/assets/images/cityYouthBlurb.png
// front-end/weddingwebsite/src/components/parrallax/cityYouthFaces.js
