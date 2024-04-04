import {Property} from "@/models/dtos/PropertyDTO";
import {GetServerSideProps} from "next";

export const getAllProperties = async () => {
    try {
        const res = await fetch("https://property-eta.vercel.app/api/properties");
        return res.json();
    }catch (e){
        console.log(e);
        return [];
    }
}