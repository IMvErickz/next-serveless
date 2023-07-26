import { NextApiRequest, NextApiResponse } from "next";

export default async function Hello(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        const test = "Testando uma rota serveless simples"
        res.status(201).send({ test })
    }
}