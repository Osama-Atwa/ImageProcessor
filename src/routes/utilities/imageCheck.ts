import express from "express";
import fs from "fs";

const Check = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  try {
    const filename = req.query.filename!;
    const width = +req.query.width!;
    const height = +req.query.height!;

    //first need to check if any of the parameters are missing
    if (!filename || !width || !height) {
      throw new Error("bad request");
    }

    //now the time to check if the passed filename is existed
    fs.exists(`F:/Udacity/ImageProcessor/full/${filename}.jpg`, (exists) => {
      if (!exists) {
        res
          .status(404)

          .send(
            "please choose of the following as your filename [encenadaport,fjord,icelandwaterfall,palmtunnel,santamonica]"
          );
      } else {
        next();
      }
    });
  } catch (error) {
    res.status(400).send({
      message:
        "please enter the url in the format http://localhost:3000/api/images?filename=santamonica&width=200&height=400",
    });
    return;
  }
};

export default Check;
