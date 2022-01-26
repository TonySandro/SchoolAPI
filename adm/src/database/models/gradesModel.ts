import { DataTypes } from "sequelize"
import { db } from "../db"
import { studentModel } from "./studentModel"

export const gradesModel = db.define("grades", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    n1: {
        type: DataTypes.INTEGER,
    },
    n2: {
        type: DataTypes.INTEGER,
    },
    n3: {
        type: DataTypes.INTEGER,
    },
    n4: {
        type: DataTypes.INTEGER,
    }
})

gradesModel.belongsTo(studentModel, {
    constraints: true,
    foreignKey: "idStudent"
})