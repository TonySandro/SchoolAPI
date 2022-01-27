import { Request, Response } from "express";
import { studentModel } from "../database/models/studentModel";
import { insertGrades } from "../repository/insertGrades";

export class PostGrades {
    async insert(req: Request, res: Response) {
        try {
            const { student, grades } = req.body
            const student2 = await studentModel.create({
                name: student
            })
            const studentId = JSON.parse(JSON.stringify(student2))

            const grade2 = await insertGrades(grades, studentId.id)

            return res.status(201).json({ student2, grade2 })
        } catch (err) {
            return res.send(err)
        }

    }
}