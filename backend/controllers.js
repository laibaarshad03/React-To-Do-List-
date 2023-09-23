import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import Task from "./taskModel.js";

const readTasks = async (req, res) => {
    try {
        //console.log('i m in the backend')
        const tasks = await Task.find();
        if (tasks)
        {
            //console.log('tasks found',tasks)
            res.status(200).json(tasks);
        }
        
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
 }
const addTaskController=asyncHandler(async(req,res)=>{
    
    try{
        const{content}=req.body
        //console.log('hello',req.body)
        const task = await Task.create({
            content,
        })
        if(task) {
            //console.log('this is my new task', task)
            res.status(200).json({
                _id: task._id,
                content: task.content,
        })
       }
    }
    catch(error)
    {
        console.log(error)
        res.status(409).json({ message: error.message })
    }
    
 })
 

const updateTask = async (req, res) => {
    try{
        const { id } = req.params;
        const { content }=req.body;
        //console.log('i m in backend', content)
        if (!mongoose.Types.ObjectId.isValid(id)){
           return res.status(404).send('Id is not valid')
        }
        const task= {content, _id: id};
        await Task.findByIdAndUpdate(id, task, {new:true} )
        res.json(task)
    }
    catch{  res.send("Error in task updation") }
   
}

const deleteTask = (async(req,res)=>{
    try{
        const { id } = req.params;
        console.log('got this id in backend', id)
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send('the id is not valid')
        }
        // const todo ={task,done,_id:id};
        await Task.findByIdAndRemove(id)
        res.json({ message: 'Task Deleted'})
    }
    catch{res.send("Error in task deletion")}
})
export { updateTask, addTaskController, readTasks, deleteTask }