import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method == "GET") {

        const u = z.object({
            id: z.string()
        })

        const { id } = u.parse(req.query)
        const user = await prisma.user.findMany({
            where: {
                id
            },
            select: {
                id: true,
                Name: true
            }
        })

        res.status(201).json({ user })
    }


}