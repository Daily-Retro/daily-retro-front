import styled from 'styled-components';
import { Tween } from 'react-gsap';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

function PencilAnimation() {
  const pencilPath = `M1.24036 76.0361C4.98132 80.8509 8.4624 85.9984 12.7094 90.3889C14.6359 92.3805 18.3264 96.01 21.5419 95.5137C25.2559 94.9404 25.8658 89.7124 25.9911 86.846C26.2416 81.1141 24.2378 75.7533 22.3658 70.4334C21.9386 69.2195 15.3676 53.9587 19.2678 53.6253C22.8205 53.3217 26.9587 56.6217 29.4516 58.7337C35.1397 63.5528 39.8018 69.548 45.0402 74.8332C47.47 77.2846 50.2141 79.7113 53.4113 81.1115C55.9035 82.203 55.7491 80.4296 55.537 78.1783C55.108 73.6239 53.2346 69.5125 51.302 65.424C48.15 58.7556 44.6601 52.2258 40.9865 45.831C34.9764 35.3691 28.4472 25.2078 22.6789 14.6042C22.5746 14.4126 19.7858 10.0821 20.7179 9.56182C21.6406 9.04688 24.8604 11.4501 25.0188 11.5557C29.515 14.5532 33.5695 18.1495 37.4271 21.9207C50.7896 34.9837 61.9845 50.1954 75.7232 62.8863C76.6062 63.7019 84.6288 72.0049 86.5331 70.2686C88.0573 68.8789 85.1903 62.7083 84.704 61.535C82.7828 56.9001 80.1308 52.6814 77.6347 48.3522C76.572 46.5091 74.8799 44.1797 74.5697 42.008C74.346 40.4425 77.9359 42.5552 78.3103 42.7495C79.8405 43.5437 87.8202 49.851 88.8401 46.6714C89.7984 43.6836 88.0929 39.8222 87.2581 37.015C86.2423 33.5988 84.5193 30.0286 84.0943 26.4688C83.3273 20.0457 93.6924 23.7268 96.6179 24.1783C99.5214 24.6263 103.147 25.2887 103.308 21.3604C103.595 14.3801 100.486 7.60974 97.9362 1.28961`;
  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    gsap.set('.pencil', {
      xPercent: 100,
      yPercent: 8,
    });

    gsap.to('.pencil', {
      duration: 5,
      motionPath: {
        path: '#path',
      },
    });
  }, []);

  return (
    <Wrapper>
      <Line>
        <svg
          width="104"
          height="97"
          viewBox="0 0 104 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Tween
            from={{
              svgDraw: 0,
            }}
            to={{
              svgDraw: 1,
            }}
            duration={5.5}
          >
            <path
              id="path"
              d={pencilPath}
              stroke="grey"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Tween>
        </svg>
      </Line>
      <Position>
        <Pencil className="pencil" />
      </Position>
    </Wrapper>
  );
}

export default PencilAnimation;

const Wrapper = styled.div`
  height: 250px;
  margin-bottom: 30px;
  position: relative;
`;

const Position = styled.div`
  position: absolute;
  top: -40px;
  right: 150px;
`;

const Pencil = styled.div`
  width: 15px;
  height: 160px;
  background: #faec50;
  transform: rotate(45deg);
  /*pencil eraser*/
  &:before {
    width: 15px;
    height: 20px;
    border-radius: 5px 5px 0px 0px;
    content: '';
    background-color: #ff7a97;
    position: absolute;
    top: 0;
    border-bottom: 6px gray solid;
  }
  /*pencil tip*/
  &:after {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 7px solid transparent;
    border-top: 15px solid #f7c199;
    content: '';
    position: relative;
    top: 175px;
  }
`;

const Line = styled.path`
  position: absolute;
  left: 70px;
  bottom: 30px;
`;
