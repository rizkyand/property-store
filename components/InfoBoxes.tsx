
import InfoBox from "@/components/InfoBox";

const InfoBoxes = () => {
    const homepageInfo:InfoBoxProperties[] = [
        {
            headings:'For Renters',
            backgroundColor:'bg-gray-100',
            buttonInfo:{
                text:'Browse Properties',
                link:'/properties',
                backgroundColor:'bg-black'
            },
            children:'Find your dream rental property. Bookmark properties and contact owners.'
        },
        {
            headings:'For Property Owners',
            backgroundColor:'bg-blue-200',
            buttonInfo:{
                text:'Add Properties',
                link:'/properties/add',
                backgroundColor:'bg-blue-900'
            },
            children:'List your properties and reach potential tenants. Rent as an airbnb or long term.'
        }
    ]
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    {homepageInfo.map((box)=>{
                        return(
                            <InfoBox headings={box.headings}
                                    backgroundColor={box.backgroundColor}
                                     buttonInfo={box.buttonInfo}
                            >{box.children}
                            </InfoBox>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default InfoBoxes;