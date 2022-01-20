import { Router } from "express";
import { GetAll } from "./controller/getAll";
import { PostGrades } from "./controller/postGrades";
const postGrades = new PostGrades()
const getAll = new GetAll()
const router = Router()

router.get('/get-all', getAll.getAll)
router.post('/post', postGrades.insert)

export { router }