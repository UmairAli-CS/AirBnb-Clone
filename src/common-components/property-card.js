import React from "react";
import { IoStarSharp } from "react-icons/io5";

const PropertyCard = ({ property = null }) => {
    const numberWithCommas = (value) => {
        return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full min-h-200">
                    <a href="/" className="lisitng-propertise">
                        <img className="rounded-t-lg" src={property?.images[0]?.largeImageURL} alt="" />
                    </a>
                </div>
                <div className="p-5">
                    <a href="/" className="flex justify-between">
                        <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{property?.title}</p>
                        <span class="flex items-center">{property?.rating} <IoStarSharp className="ml-2" /> </span>
                    </a>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{property?.address}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{property?.date_created}</p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 underline">
                        <span class="font-medium">£{numberWithCommas(property?.price)}</span> total
                    </p>
                </div>
            </div>

        </>
    )
}

export default PropertyCard