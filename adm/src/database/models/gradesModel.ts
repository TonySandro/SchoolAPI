import { DataTypes } from "sequelize"
import { db } from "../connection/db"
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
        defaultValue: 0,
    },
    n2: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    n3: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    n4: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false
})

gradesModel.belongsTo(studentModel, {
    constraints: true,
    foreignKey: "idStudent"
})