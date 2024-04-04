

 const getAllProperties = async () => {
    try {
        const res = await fetch("https://property-eta.vercel.app/api/properties");
        const dataProperties= res.json();
        console.log(dataProperties)
        return dataProperties;
    }catch (e){
        console.log(e);
        return [];
    }
}
getAllProperties();