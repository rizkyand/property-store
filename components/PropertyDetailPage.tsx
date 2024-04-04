import {Property} from "@/models/dtos/PropertyDTO";
import {FaBath, FaBed, FaRulerCombined} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import Link from "next/link";

const PropertyDetailPage:React.FC<{ props: Property }> = ({props}) => {
    return (
        <>
            {/*Go Back*/}
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        href="/properties"
                        className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Back to Properties
                    </Link>
                </div>
            </section>
            {/*Property Info*/}
            <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{props.type}</div>
                                <h1 className="text-3xl font-bold mb-4">{props.name}</h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <i
                                        className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                                    ></i>
                                    <p className="text-orange-700">
                                        {props.location.street}
                                    </p>
                                </div>

                                <h3 className="text-lg font-bold rounded-lg my-6 bg-gray-800 text-white p-2">
                                    Rates & Options
                                </h3>
                                <div className="flex flex-col md:flex-row justify-around">
                                    <div
                                        className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                                    >
                                        <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                                        {props.rates.nightly===undefined ?
                                            <ImCross className={"text-2xl font-bold text-red-500"}/> :
                                            <div className="text-2xl font-bold text-blue-500">{`$${props.rates.nightly}/ni`}</div>
                                        }
                                    </div>
                                    <div
                                        className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                                    >
                                        <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                                        {props.rates.weekly===undefined ?
                                            <ImCross className={"text-2xl font-bold text-red-500"}/> :
                                            <div className="text-2xl font-bold text-blue-500">{`$${props.rates.weekly}/we`}</div>
                                        }
                                    </div>
                                    <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                                        <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                                        {props.rates.monthly===undefined ?
                                            <ImCross className={"text-2xl font-bold text-red-500"}/> :
                                            <div className="text-2xl font-bold text-blue-500">{`$${props.rates.monthly}/mo`}</div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <div
                                    className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
                                >
                                    <p>

                                        <FaBed className={'inline mr-2'}/> {props.beds}
                                        <span className="md:hidden lg:inline"> Beds</span>
                                    </p>
                                    <p>
                                        <FaBath className={'inline mr-2'}/> {props.baths}
                                        <span className="md:hidden lg:inline"> Baths</span>
                                    </p>
                                    <p>
                                        <FaRulerCombined className={'inline mr-2'}/>
                                        {props.square_feet} <span className="md:hidden lg:inline"> sqft</span>
                                    </p>
                                </div>
                                <h3 className="text-lg font-bold rounded-lg my-6 bg-gray-800 text-white p-2">Description</h3>
                                <p className="text-gray-500 mb-4">
                                    {props.description}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-lg font-bold mb-6">Amenities</h3>

                                <ul
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
                                >
                                    {props.amenities.length === 0?
                                        <li>
                                            <i className="fas fa-check text-green-600 mr-2 mt-3"></i> Amenities are not specified
                                        </li> :
                                        props.amenities.map((amenity) =>{
                                            return (<li key={amenity}>
                                                <i className="fas fa-check text-green-600 mr-2 mt-3"></i> {amenity}
                                            </li>);
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <div id="map">This is for map</div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <div id="photos">This is for photos</div>
                            </div>
                        </main>

                        {/*Sidebar*/}
                        <aside className="space-y-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
                            >
                                <i className="fas fa-bookmark mr-2"></i> Bookmark Property
                            </button>
                            <button
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
                            >
                                <i className="fas fa-share mr-2"></i> Share Property
                            </button>

                            {/*Contact Form*/}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Contact Property Manager</h3>
                                <form>
                                    <div className='mb-4'>
                                        <label
                                            className='block text-gray-700 text-sm font-bold mb-2'
                                            htmlFor='name'
                                        >
                                            Name:
                                        </label>
                                        <input
                                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='name'
                                            type='text'
                                            placeholder='Enter your name'
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email:
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label
                                            className='block text-gray-700 text-sm font-bold mb-2'
                                            htmlFor='phone'
                                        >
                                            Phone:
                                        </label>
                                        <input
                                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                            id='phone'
                                            type='text'
                                            placeholder='Enter your phone number'
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Message:
                                        </label>
                                        <textarea
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
                                            id="message"
                                            placeholder="Enter your message"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
                                            type="submit"
                                        >
                                            <i className="fas fa-paper-plane mr-2"></i> Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PropertyDetailPage;