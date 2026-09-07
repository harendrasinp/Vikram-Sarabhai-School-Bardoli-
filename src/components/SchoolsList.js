import React from 'react'
import { SchoolsList } from '../data/schoolsList';
import Link from 'next/link';
const SchoolsListComponent = () => {
    return (
        <>
            <div className="col-span-3 bg-white p-2 md:flex md:flex-col md:items-center md:justify-start">
                <h1 className="text-center bg-BlueNavyColor text-orange-300 p-2 font-bold w-full">OUR BRANCHES</h1>
                {SchoolsList.map((school, index) => (
                    <div key={index} className="mt-2 text-sm  p-2 md:w-1/2 md:rounded-lg border-b-2 border-dotted border-BlueNavyColor ">
                        <div className="flex items-start justify-start text-BlueNavyColor">
                            <div>{index + 1}.</div>
                            <Link href={school.path} className="hover:text-orange-300 hover:underline">
                                {school.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SchoolsListComponent