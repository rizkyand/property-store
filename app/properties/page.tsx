
import PropertyCard from "@/components/PropertyCard";
import {getAllProperties} from "@/config/DataFetching";
import {Property} from "@/models/dtos/PropertyDTO";

const PropertyPage = async ()=> {
    const properties:Property[] = await getAllProperties();
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties.length === 0 ?
                        <p>Property not found</p> :
                        properties.map(prop => {
                            return <PropertyCard key={prop._id} property={prop}/>
                        })}
                </div>
            </div>
        </section>
    )
}
export default PropertyPage;