import { Schema, model, models } from "mongoose";
import { userAgent } from "next/server";

const userSchema = new Schema({
    email :{
        type : String,
        unique : [true,'Email is already registered'],
        required :[true, 'Email is required'],
    },
    username :{
        type : String,
        required :[true, 'Username is required'],
    },
    image:{
        type : String,
    },
    }
);

const User = models.User || model('user',userSchema);
export default User;