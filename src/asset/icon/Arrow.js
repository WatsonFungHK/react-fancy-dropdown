// @flow
import React from 'react';
import styled from 'styled-components';

// comment out after config flow type checking
// type Props = {
//   direction: 'right' | 'left' | 'up' | 'down',
//   width?: number,
//   height?: number
// };

const StyledSvg = styled.svg`
  transform: rotate(${props => props.deg}deg);
`;

const Arrow = ({ direction, width, height }) => {
  let deg = 0;
  switch (direction) {
    case 'right':
      deg = 0;
      break;
    case 'left':
      deg = 180;
      break;
    case 'up':
      deg = -90;
      break;
    case 'down':
      deg = 90;
      break;
    default:
      deg = 0;
      break;
  }

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      deg={deg}
    >
      <path
        d="M13.295,6.28340081 L8.73364214,11.2079437 C8.35834475,11.6131231 7.72564333,11.6373472 7.32046397,11.2620498 C7.30174494,11.2447113 7.28369636,11.2266627 7.26635786,11.2079437 L2.705,6.28340081 C2.30721109,5.8539391 2.30721109,5.19059531 2.705,4.7611336 L2.705,4.7611336 C3.06603891,4.371348 3.67470244,4.34804421 4.06448804,4.70908312 C4.08223998,4.72552585 4.09936522,4.74263249 4.11582725,4.76036653 L8,8.94466937 L11.8841728,4.76036653 C12.2456353,4.37097376 12.8543238,4.34833184 13.2437166,4.7097944 C13.2614506,4.72625642 13.2785573,4.74338167 13.295,4.7611336 L13.295,4.7611336 C13.6927889,5.19059531 13.6927889,5.8539391 13.295,6.28340081 Z"
        transform="rotate(-90 7.797 8)"
      />
    </StyledSvg>
  );
};

Arrow.defaultProps = {
  width: 16,
  height: 16
};

export default Arrow;
