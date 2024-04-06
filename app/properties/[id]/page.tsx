'use client';
import {usePathname} from "next/navigation";
import {PropertyDTO} from "@/models/dtos/PropertyDTO";
import PropertyImageHeader from "@/components/PropertyImageHeader";
import PropertyDetailPage from "@/components/PropertyDetailPage";
import {Suspense, useEffect, useState} from "react";
import LoadingComponent from "@/components/LoadingComponent";
import { motion } from "framer-motion"
import {getPropertyById} from "@/config/DataFetching";
import NotFoundPage from "@/app/not-found";


const DetailProperty = () => {
    const [property, setProperty] = useState<PropertyDTO>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');
    const pathName:string = usePathname();
    const page:string = pathName.match(/[^/]+$/)?.[0] ?? '';
    useEffect(()=> {
        const fetchDataProperty = async (id:string) =>{
            try {
                const data:PropertyDTO = await getPropertyById(id);
                setProperty(data);
                setLoading(false);
                console.log(data);
            } catch (e) {
                setError('Error fetching data');
                setLoading(false);
                console.error(e);
            }
        }
        if (page) {
            fetchDataProperty(page);
        }

    }, [page]);
    if (loading) {
        return <LoadingComponent />;
    }

    if (error) {
        return <NotFoundPage/>;
    }
    return(
        <Suspense fallback={<LoadingComponent/>}>
            {property &&
                <>
                    <motion.div
                        initial={
                            {opacity: 0}
                        }
                        animate={{opacity: 1}}
                        transition={{ease: 'easeInOut', duration: 1}}
                    >
                        <PropertyImageHeader image={property.images[0]}/>
                    </motion.div>
                    <motion.div
                        initial={
                            {y: 200}
                        }
                        animate={{y: 0}}
                        transition={{type: 'spring', duration: 2, bounce: 0.2}}
                    >
                        <PropertyDetailPage props={property}/>
                    </motion.div>
                </>
            }
        </Suspense>
    );
}

export default DetailProperty;