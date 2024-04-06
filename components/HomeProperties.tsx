
import {Property} from "@/models/dtos/PropertyDTO";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import {getAllProperties} from "@/config/DataFetching";

const HomeProperties =async () => {

    const prop:Property[] = await getAllProperties();
    const randomRecentProperty:Property[] = prop.sort(()=>Math.random()-Math.random()).slice(0,3);
    return(
        <>
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                    Recent Properties
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {randomRecentProperty.length === 0 ? <p>No Properties Found</p> :
                    randomRecentProperty.map(prop =>{
                        return <PropertyCard key={prop._id} property={prop}/>
                    })}
                </div>
            </div>
        </section>

        <section className="m-auto max-w-lg my-10 px-6">
            <Link
                href="/properties"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >View All Properties</Link
            >
        </section>
        </>
    );
}
export default HomeProperties