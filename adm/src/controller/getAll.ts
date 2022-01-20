import { Request, Response } from "express";
import { dbFake } from "../repository/dbFake";

export class GetAll {
    async getAll(req: Request, res: Response) {
        try {
            return res.send(dbFake)
        } catch (error) {
            return res.send(error)
        }
    }
}