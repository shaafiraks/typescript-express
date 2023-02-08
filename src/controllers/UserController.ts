import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import IController from "./ControllerInterface";

let data: any[] = [
  { id: 1, name: "Lala" },
  { id: 2, name: "Lili" },
  { id: 3, name: "Lulu" },
  { id: 4, name: "Lele" },
  { id: 5, name: "Lolo" },
];
class UserController implements IController {
  index(req: Request, res: Response): Response {
    console.log("ini adalah index users");
    return res.send(data);
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    data.push({ id, name });

    return res.send("create sukses");
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id == id);
    return res.send(person);
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id == id);
    person.name = name;

    return res.send("update sukses");
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let people = data.filter((item) => item.id != id);
    return res.send(people);
  }
}

export default new UserController();
