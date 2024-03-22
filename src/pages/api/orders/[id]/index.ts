import { NextApiRequest, NextApiResponse } from "next";

import { orders } from "../../../../../mock";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const order = orders[id as string];

      if (!order) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      return res.status(200).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  return res.status(405).json({ error: "Método não permitido" });
}
