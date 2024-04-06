import {Property} from "@/models/dtos/PropertyDTO";
import {GetServerSideProps} from "next";

export const getAllProperties = async () => {
    try {
        const res:Response = await fetch("https://property-eta.vercel.app/api/properties", {cache:'no-store'});
        return res.json();
    }catch (e){
        console.log(e);
        return [];
    }
}

export const getPropertyById = async (id:string)=> {
    try{
        const res:Response = await fetch(`https://property-eta.vercel.app/api/properties/${id}`, {cache:'no-store'});
        return res.json();
    }catch (err){
        console.log(err);
        return []
    }
}