import mongoose from "mongoose"
const taskSchema = mongoose.Schema({
    content: 
        {
            type: String,
            required: true,
        }
    ,
})


const Task = mongoose.model('Task',taskSchema)

export default Task