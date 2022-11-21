import sharp from "sharp";
import { dirname } from "path";

const appDir = dirname(require.main!.path);

const imageResize = async (filename: string, width: number, height: number) => {
  //will use a third party lib for resizing the image and path the output location
  await sharp(`${appDir}/full/${filename}.jpg`)
    .resize(width, height)
    .toFile(`${appDir}/thumb/${filename}_thumb.jpg`);
  const path = `${appDir}/thumb/${filename}_thumb.jpg`;

  return path;
};

export default imageResize;
