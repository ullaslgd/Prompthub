import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req,res)=>{
    const {prompt,userId,tag} = req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator:userId,
            prompt,
            tag
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        return new Response(JSON.stringify({msg:error.message}),{status:500})
    }
}