import { Request, Response } from "express";
import { dbFake } from "../repository/dbFake";

export class PostGrades {
    async insert(req: Request, res: Response) {
        try {
            const { student, grade } = req.body

            dbFake.push(req.body)
            return res.send(dbFake)
        } catch (err) {
            return res.send(err)
        }

    }
}