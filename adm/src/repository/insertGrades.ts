import { gradesModel } from "../database/models/gradesModel"

export const insertGrades = async (grades: any, studentId: Number) => {
    const grade2 = await gradesModel.create({
        n1: grades.n1,
        n2: grades.n2,
        n3: grades.n3,
        n4: grades.n4,
        idStudent: studentId
    })

    return grade2
}