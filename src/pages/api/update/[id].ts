import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const name = z.object({
        Name: z.string(),

    })

    const idUser = z.object({
        id: z.string()
    })

    const { Name } = name.parse(req.body)
    const { id } = idUser.parse(req.query)

    if (req.method == "PUT") {
        await prisma.user.update({
            where: {
                id
            },
            data: {
                Name
            }
        })
    }

    res.status(201).send("Sucess")
}