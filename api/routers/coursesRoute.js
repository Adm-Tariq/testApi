import express from 'express'
import { createCourse, deleteCourse, getCourses, updateCourse } from '../config/controller/coursesController.js'

const router = express.Router()

router.route('/eyJhbGciOiJIUzI1N/create').post(createCourse)
router.route('/eyJhbGciOiJIUzI1N/update').post(updateCourse)
router.route('/eyJhbGciOiJIUzI1N/delete').post(deleteCourse)

router.route('/get').get(getCourses)

export default router