import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { orders, secretKey } from "../../../../../mock";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res
        .status(401)
        .json({ error: "Token de autenticação não fornecido" });
    }
    try {
      const decodedToken = jwt.verify(
        token as string,
        secretKey
      ) as JwtPayload | null;

      if (!decodedToken) {
        return res
          .status(401)
          .json({ error: "Token de autenticação inválido" });
      }

      const { id } = req.query;
      const order = orders[id as string];

      if (!order) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      if (decodedToken.userId !== order.customerId) {
        return res
          .status(403)
          .json({ error: "Você não tem permissão para acessar este pedido" });
      }

      return res.status(200).json(order);
    } catch (error) {
      console.error("Erro ao verificar o token:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  return res.status(405).json({ error: "Método não permitido" });
}
