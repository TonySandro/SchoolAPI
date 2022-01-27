import { studentModel } from "../database/models/studentModel";

export const createStudent = async (student: any) => {
    // Verificar se o estudante já existe, se sim, atualizar as notas, se não, adicionar novo
    const data = await studentModel.create({
        name: student
    })
    const result = JSON.parse(JSON.stringify(data))

    return result
}