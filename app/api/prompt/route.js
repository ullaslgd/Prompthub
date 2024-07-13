import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request)=>{
    try {
        await connectToDB();

        const prompts = await prompt.find({}).populate('creator');

        return new Response (JSON.stringify(prompts),{
            status: 200,
        })
    } catch (error) {
        return new Response (JSON.stringify({msg: error.message}),{
            status: 500,
        })
        
    }
};
