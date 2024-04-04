import connectDB from "@/config/Database";
import Property from "@/models/Property";

export const GET = async (request:any) => {
    try {
        await connectDB();
        const properties = await Property.find({});
        // return new Response(JSON.stringify({message:'Hello There'}), {status:200});
        return new Response(JSON.stringify(properties), {status:200});
    }catch (err){
        console.log(err);
        return new Response('Something went wrong', {status:200});
    }
}