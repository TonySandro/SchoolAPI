import { Request, Response } from "express";
import { gradesModel } from "../database/models/gradesModel";
import { studentModel } from "../database/models/studentModel";

export class PostGrades {
    async insert(req: Request, res: Response) {
        try {
            const { student, grades } = req.body
            const student2 = await studentModel.create({
                name: student
            })
            const studentId = JSON.parse(JSON.stringify(student2))

            const grade2 = await gradesModel.create({
                n1: grades.n1,
                n2: grades.n2,
                n3: grades.n3,
                n4: grades.n4,
                idStudent: studentId.id
            })

            return res.status(201).json({ student2, grade2 })
        } catch (err) {
            return res.send(err)
        }

    }
}