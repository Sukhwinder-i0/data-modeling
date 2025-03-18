import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        }, 
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true, // good practice
        }, 
        password: {
            type: String,
            required: [true, "Password is required"]   // custom msg if not true
        }
    }, {timestamps: true}    // adds createdAt and updatedAt automaticallly in the database
)

export const User = mongoose.model("User", userSchema)   // in mongodb the (User, Todo) will be (users, todos) in the database

