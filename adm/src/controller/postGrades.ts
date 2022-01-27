import { Request, Response } from "express";
import { createStudent } from "../repository/createStudent";
import { insertGrades } from "../repository/insertGrades";

export class PostGrades {
    async insert(req: Request, res: Response) {
        try {
            const { student, grades } = req.body
            const studentId = await createStudent(student)
            await insertGrades(grades, studentId.id)

            return res.status(201).json(`Insert ${studentId.name} on database`)
        } catch (err) {
            return res.send(err)
        }

    }
}