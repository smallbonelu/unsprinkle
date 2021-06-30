import React from "react";
import styled from "styled-components/macro";
import PictureWrapper from "../Picture";

const Hero = () => {
  return (
    <Wrapper>
      <PictureWrapper src="/images/hero-img.jpg" extnames="jpg avif">
        {(customProps) => <HeroImage alt="hero image" {...customProps} />}
      </PictureWrapper>
      <Swoop src="/swoop.svg" alt="swoop image" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
