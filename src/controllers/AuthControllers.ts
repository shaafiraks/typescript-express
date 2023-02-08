import { Request, Response } from "express";
import PasswordHash from "../utils/PasswordHash";

const db = require("../db/models");
class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;
    const hashedPassword: string = await PasswordHash.hash(password);

    await db.user.create({ username, password: hashedPassword });

    return res.send("registrasi sukses");
  };
  login(req: Request, res: Response): Response {
    return res.send("");
  }
}

export default new AuthController();
