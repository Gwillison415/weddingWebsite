import React from 'react';
import { Parallax } from 'react-parallax';
import GrantCoraWhistler from '../../assets/images/GrantCoraWhistler.jpg';
const Parrallax1 = () => (
    <div>
        <Parallax
            blur={{min:0, max:1}}
            bgImage={GrantCoraWhistler}
            bgImageAlt="GrantCoraWhistler"
            strength={200}
        >
            <div style={{ height: '600px' }} />
        </Parallax>


    </div>
);
export default Parrallax1;
