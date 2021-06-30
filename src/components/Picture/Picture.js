import React from "react";
import styled from "styled-components/macro";
import { getImageSrcSet } from "../../utils";

const PictureWrapper = ({ src, extnames = "jpg png", children }) => {
  console.log(children);
  return (
    <Picture>
      {extnames.split(" ").map((extname) => (
        <Source
          key={extname}
          type={`image/${extname}`}
          srcSet={getImageSrcSet(src, extname)}
        />
      ))}
      {children({ src, srcSet: getImageSrcSet(src) })}
    </Picture>
  );
};

const Picture = styled.picture``;
const Source = styled.source``;

export default PictureWrapper;
