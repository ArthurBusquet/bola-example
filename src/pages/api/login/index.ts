// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { secretKey } from "../../../../mock";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { username, password } = req.body as {
        username: string;
        password: string;
      };
      if (username === "usuario" && password === "senha") {
        const token = jwt.sign({ userId: "1" }, secretKey, { expiresIn: "1h" });

        return res.status(200).json({ token });
      }

      return res.status(401).json({ error: "Credenciais inválidas" });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  res.status(405).json({ error: "Método não permitido" });
}
