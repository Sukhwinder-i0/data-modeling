import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        }, 
        complete: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,    // this means u r about to give reference
            ref: "User"
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "subTodos"
            }
        ]    // Array of sub Todos
    }, {timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)   // saves as todos in the database