import { Request, Response } from "express";
import { studentModel } from "../database/models/studentModel"

export class GetAll {
    async getAll(req: Request, res: Response) {
        const student = await studentModel.findAll()
        return student.length > 0
            ? res.status(200).json(student)
            : res.status(204).send()
    }
}