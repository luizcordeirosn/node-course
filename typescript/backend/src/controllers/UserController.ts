import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    nome: "Admin",
    email: "admin@admin.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: {
        name: "Luiz Cordeiro da Silva Neto",
        email: "luizcsneto@outlook.com",
      },
      message: {
        subject: "Bem vindo ao sistema",
        body: "Seja bem vindo ao sistema",
      },
    });

    return res.send();
  },
};
