export const getImageSrcSet = (src, extname = "jpg") => {
  return `
    ${src.replace(".jpg", `.${extname}`)} 1x,
    ${src.replace(".jpg", `@2x.${extname}`)} 2x, 
    ${src.replace(".jpg", `@3x.${extname}`)} 3x
  `;
};
