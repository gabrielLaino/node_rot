import { FastifyRequest } from "fastify";
import { FastifyReply } from "fastify/types/reply";

export const checkSessionId = async (req: FastifyRequest, res: FastifyReply) => {
  const sessionId = req.cookies.sessionId;

    if (!sessionId) {
      return res.status(401).send({message: 'não autorizado'});
    }
}