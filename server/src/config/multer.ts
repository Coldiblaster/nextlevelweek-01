import multer from "multer";
import path from "path";
import crypto from "crypto";

//Recebe uma imagem

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString("hex"); // gera um hash de 6 caracteres

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
