import { DataTypes } from "sequelize"
import { db } from "../db"

export const studentModel = db.define("student", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false
})