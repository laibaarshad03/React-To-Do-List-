import express from "express";
import { addTaskController, deleteTask, readTasks, updateTask } from "./controllers.js";

const router = express.Router()

router.route('/').post(addTaskController)
router.get('/', readTasks);
router.delete('/:id', deleteTask)
router.patch('/:id', updateTask)
export default router