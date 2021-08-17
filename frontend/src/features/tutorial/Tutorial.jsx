/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import SimpleImageSlider from 'react-simple-image-slider';

// features
import TutorialLinks from './TutorialLinks';

// images
import squat1 from './images/001.png';
import squat2 from './images/002.png';
import squat3 from './images/003.png';
import squat4 from './images/004.png';
import squat5 from './images/005.png';
import burpee1 from './images/006.png';
import burpee2 from './images/007.png';
import burpee3 from './images/008.png';
import burpee4 from './images/009.png';
import burpee5 from './images/010.png';
import pushup1 from './images/011.png';
import pushup2 from './images/012.png';
import pushup3 from './images/013.png';
import pushup4 from './images/014.png';
import pushup5 from './images/015.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Exercise = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const SliderWrapper = styled.div`
  display: flex;
  position: absolute;
  margin-top: 10%;
  left: 85%;
`;

class Tutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    scroll.scrollTo(0);
  }

  render() {
    const squatimages = [
      { url: squat1 },
      { url: squat2 },
      { url: squat3 },
      { url: squat4 },
      { url: squat5 },
    ];
    const pushupimages = [
      { url: pushup1 },
      { url: pushup2 },
      { url: pushup3 },
      { url: pushup4 },
      { url: pushup5 },
    ];
    const burpeeimages = [
      { url: burpee1 },
      { url: burpee2 },
      { url: burpee3 },
      { url: burpee4 },
      { url: burpee5 },
    ];
    return (
      <>
        {/* <Navbar /> */}
        <Wrapper>
          <Exercise name="element1">
            <TutorialLinks />
            <SliderWrapper>
              <SimpleImageSlider
                width={1280}
                height={720}
                images={squatimages}
                style={{
                  position: 'absolute',
                  marginTop: '5%',
                  right: '10%',
                }}
                navStyle="2"
                showBullets
                showNavs
              />
            </SliderWrapper>
          </Exercise>
          <Exercise name="element2">
            <TutorialLinks />
            <SliderWrapper>
              <SimpleImageSlider
                width={1280}
                height={720}
                images={burpeeimages}
                style={{
                  position: 'absolute',
                  marginTop: '5%',
                  right: '10%',
                }}
                navStyle="2"
                showBullets
                showNavs
              />
            </SliderWrapper>
          </Exercise>
          <Exercise name="element3">
            <TutorialLinks />
            <SliderWrapper>
              <SimpleImageSlider
                width={1280}
                height={720}
                images={pushupimages}
                style={{
                  position: 'absolute',
                  marginTop: '5%',
                  right: '10%',
                }}
                navStyle="2"
                showBullets
                showNavs
              />
            </SliderWrapper>
          </Exercise>
        </Wrapper>
      </>
    );
  }
}
export default Tutorial;
