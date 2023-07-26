import { NextApiRequest, NextApiResponse } from "next";

export default async function Hello(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "POST") {
        const word = req.query
        res.status(201).send({ word })
    }
}