"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Check = function (req, res, next) {
    try {
        var filename = req.query.filename;
        var width = +req.query.width;
        var height = +req.query.height;
        //first need to check if any of the parameters are missing
        if (!filename || !width || !height) {
            throw new Error("bad request");
        }
        //now the time to check if the passed filename is existed
        fs_1.default.exists("F:/Udacity/ImageProcessor/full/".concat(filename, ".jpg"), function (exists) {
            if (!exists) {
                res
                    .status(404)
                    .send("please choose of the following as your filename [encenadaport,fjord,icelandwaterfall,palmtunnel,santamonica]");
            }
            else {
                next();
            }
        });
    }
    catch (error) {
        res.status(400).send({
            message: "please enter the url in the format http://localhost:3000/api/images?filename=santamonica&width=200&height=400",
        });
        return;
    }
};
exports.default = Check;
