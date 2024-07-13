import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { User} from "@models/user";
import { connectToDB } from "@utils/database";

console.log({
            clientId : process.env.GOOGLE_ID,
            clientSecret :process.env.GOOGLE_SECRET,
})

 
 
const handler = NextAuth({
    providers :[
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret :process.env.GOOGLE_SECRET,
        }),
    ],
        async session({session}){
            const sessionUser = await User.findOne({email : session.user.email});
    
            session.user.id= sessionUser._id.toString();
    
            return session;
    
        },
    
        async signIn ({profile}){
            try {
                await connectToDB();
    
                const userExists = await User.findOne({email: profile.email});
    
                if (!userExists) {
                    const newUser = {
                        email: profile?.user.email,
                        username: profile?.user.name.replace(" ", "").toLowerCase(),
                        image: profile?.user.picture,
                    }
                    await User.create(newUser);
 }
    
                return true;
                
            } catch (error) {
    
                console.log('Error connecting to database',error)
                return false;
                
            }
            
        }
    

    



})

export { handler as GET, handler as POST}