import {Property} from "@/models/dtos/PropertyDTO";
import Image from "next/image";
import Link from "next/link";

const PropertyImageHeader:React.FC<{ image:string }> = ({image})=>{
    return (
            <section>
                <div className="container-xl m-auto">
                    <div className="grid grid-cols-1">
                        <Image
                            src={`/images/${image}`}
                            alt=""
                            className="object-cover h-[400px] w-full"
                            width={0}
                            height={0}
                            sizes={'100'}
                        />
                    </div>
                </div>
            </section>
    )
}

export default PropertyImageHeader;