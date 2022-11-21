import express from "express";
import NodeCache from "node-cache";

import imageResize from "../utilities/imageReszie";
import Check from "../utilities/imageCheck";
import { cache } from "sharp";

const images = express.Router();

// here i am using cache for performance interests
const Cache = new NodeCache();

images.get("/", Check, async (req, res) => {
  const filename = req.query.filename!;
  const width = +req.query.width!;
  const height = +req.query.height!;

  //here i used the my key as the filename with width and height concatenated with spacial characters in between to store into my cache
  const key: string =
    filename +
    "&" +
    ((width as unknown) as string) +
    "&" +
    ((height as unknown) as string);

  if (Cache.has(key)) {
    //check if the passed request is previously processed
    return res.status(200).send(Cache.get(key));
  } else {
    //if not processed before then do all the logic and store the path into my cache
    const path: string = await imageResize(filename as string, width, height);
    Cache.set(key, path);
    res.status(200).sendFile(path);
  }
});

export default images;
