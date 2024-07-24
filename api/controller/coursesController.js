import coursesSchema from "../../model/courses.model.js"
import mongoose from "mongoose";

const createCourse = async (req, res) => {
    const { title, sub_title, description, image, courseUrl } = req.body
    if (title === "" || sub_title === "" || description === "" || image === "" || courseUrl === "") return res.status(400).json({ message: "All fields are required" })
    const create = await coursesSchema.create({ title, sub_title, description, image, courseUrl })
    return res.status(201).json({ message: "published" })
}


const updateCourse = async (req, res) => {
    const { courseId } = req.query
    if (!courseId) return res.status(400).json({ message: "try agin" })
    try {
        const foundCourse = await coursesSchema.findById(courseId)
        if (!foundCourse) return res.status(400).json({ message: "curse id not find" })
        const { title, sub_title, description, image } = req.body
        if (title === "" || sub_title === "" || description === "" || image === "" || courseUrl === "") return res.status(400).json({ message: "All fields are required" })
        await coursesSchema.updateOne({ _id: courseId }, { title, sub_title, description, image, courseUrl })
        return res.status(200).json({ message: 'updated' })
    } catch (error) {
        return res.status(400).json({ message: "curse Id is wrong" })
    }



}

const deleteCourse = async (req, res) => {
    const { courseId } = req.query
    if (!courseId) return res.status(400).json({ message: "try agin" })
    try {
        const foundCourse = await coursesSchema.findById(courseId)
        if (!foundCourse) return res.status(400).json({ message: "curse id not find" })
        await coursesSchema.deleteOne({ _id: courseId })
        return res.status(200).json({ message: 'Deleted' })
    } catch (error) {
        return res.status(400).json({ message: "curse Id is wrong" })
    }

}


const getCourses = async (req, res) => {
    const query = req.query

    if (query.courseId) {
        try {
            const foundCourse = await coursesSchema.findById(query.courseId, '-__v')
            if (!foundCourse) return res.status(400).json({ message: "curse id not find" })
            return res.status(200).json({ message: foundCourse })
        } catch (error) {
            return res.status(400).json({ message: "curse Id is wrong" })
        }
    }

    let page = parseInt(query.p) || 1
    const limit = parseInt(query.l) || 12
    const skip = (page - 1) * limit
    const totalCourses = await coursesSchema.countDocuments()
    const totalPages = Math.ceil(totalCourses / limit)
    const getCourses = await coursesSchema.find({}, '-__v').skip(skip).limit(limit).sort({ createdAt: -1 }).exec()
    return res.status(200).json({ status: 'SUCCESS', message: { curses: getCourses, pagination: { currentPage: page, totalPages, totalCourses } } })



}


export { createCourse, updateCourse, deleteCourse, getCourses }