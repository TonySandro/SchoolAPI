import { DataTypes } from "sequelize"
import { db } from "../db"

export const studentModel = db.define("student", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: "varchar",
        unique: true
    }
})