import React from 'react';
import { Parallax, Background } from 'react-parallax';
import GrantCoraWhistler from '../../assets/images/GrantCoraWhistler.jpg';
const Parrallax1 = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={{min:0, max:2}}
            bgImage={GrantCoraWhistler}
            bgImageAlt="GrantCoraWhistler"
            strength={200}
        >

            <div style={{ height: '300px' }} />
        </Parallax>

        {/* -----dynamic blur-----*/}
        {/* <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('path/to/another/image.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '200px' }} />
        </Parallax> */}

        {/* -----custom background element-----*/}
        {/* <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
        </Parallax> */}

        {/* -----renderProp: "renderLayer"-----*/}
        {/* <Parallax
            bgImage={'/path/to/another/image'}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax> */}
    </div>
);
export default Parrallax1;
