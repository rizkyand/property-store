'use client';
import properties from '@/properties.json';
import {usePathname} from "next/navigation";
import {PropertyDTO} from "@/models/dtos/PropertyDTO";
import PropertyImageHeader from "@/components/PropertyImageHeader";
import PropertyDetailPage from "@/components/PropertyDetailPage";
import {Suspense} from "react";
import LoadingComponent from "@/components/LoadingComponent";
import { motion } from "framer-motion"


const DetailProperty = () => {
    const pathName = usePathname();
    let getPathNum= pathName.match(/\d+/);
    const page:string = getPathNum !== null ? getPathNum[0] : '';
    const res:PropertyDTO = properties.filter((a) => a._id === page)[0];
    console.log(res);
    return(
        <Suspense fallback={<LoadingComponent/>}>
            <motion.div
                initial={
                    {opacity:0}
                }
                animate={{opacity:1}}
                transition={{ease:'easeInOut', duration:1}}
            >
                <PropertyImageHeader image={res.images[0]}/>
            </motion.div>
            <motion.div
                initial={
                    {y:200}
                }
                animate={{y:0}}
                transition={{type:'spring', duration:2, bounce:0.4}}
            >
                <PropertyDetailPage props={res}/>
            </motion.div>
        </Suspense>
    );
}

export default DetailProperty;