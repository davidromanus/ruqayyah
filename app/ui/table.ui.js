import { ArrowDownOnSquareIcon, EllipsisVerticalIcon, FunnelIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Input } from "postcss";
import Image from 'next/image';
import { headers } from "../utility/headers.data";

export default function Table({date, activityType, company, companyLogoSrc, username,  statusDesc, status}){
    return (
        <div className="w-full mt-5 border rounded-md mb-10">
            {/*table actions*/}
            <div className="w-full flex p-3">
                <div className="table-search-form w-8/12">
                    <form id="search mt-1">
                        <div className="parent relative">
                            <input 
                                type="search" 
                                name="search"
                                placeholder="Search"
                                className="peer pl-10 w-full md:w-2/4 py-[7px] rounded-md outline-none border border-gray-300 hover:border-none active:outline-purple-400 hover:outline-purple-400 transition duration-300 text-gray-700 placeholder:text-gray-400"
                            />
                            <MagnifyingGlassIcon className="w-7 text-gray-300 absolute top-[5px] left-2"/>
                        </div>
                    </form>
                </div>
                <div className="table-functions flex gap-3 w-4/12 justify-end items-end">
                    <div className="border p-[7px] rounded-md text-gray-700 flex gap-2 hover:bg-purple-800 hover:text-white  transition duration-300 ease-in-out hover:cursor-pointer">
                        <span><FunnelIcon className="w-5"/></span>
                        <p className="hidden md:block font-medium">Filters</p>
                    </div>
                    <div className="border p-[7px] rounded-md text-gray-700 flex gap-2 hover:bg-purple-800 hover:text-white  transition duration-300 ease-in-out hover:cursor-pointer">
                        <span><ArrowDownOnSquareIcon className="w-5"/></span>
                        <p className="hidden md:block font-medium">Export</p>
                    </div>
                </div>
            </div>
            <div className="overflow-x-scroll scrollbar-hide w-full min-w-full">
                <table className="w-full min-w-[900px] table-auto mt-4"> {/* Set min-w-[800px] or more based on content */}
                    <thead className="text-start bg-gray-100">
                    <tr>
                        {headers.map((header, key) => (
                        <th className="text-start py-3 px-3" key={key}>
                            <p className="text-gray-700 font-normal">{header.name}</p>
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="p-3"><p className="font-normal text-gray-700 text-sm">Sept 2, 2024</p></td>
                        <td className="p-3"><p className="font-normal text-gray-700 text-sm">New KYC Request</p></td>
                        <td className="p-3">
                        <div className="flex gap-4">
                            <Image src='/user.jpg' width={400} height={400} className="w-8 h-8 rounded-full bg-purple-400" alt="company logo"/>
                            <p className="font-medium text-gray-900 text-sm mt-2">ABC Fintech</p>
                        </div>
                        </td>
                        <td className="p-3"><p className="font-normal text-gray-700 text-sm">John Doe</p></td>
                        <td className="p-3"><p className="font-normal text-gray-700 text-sm">Submitted a new KYC request</p></td>
                        <td className="p-3">
                        <div className="flex gap-4">
                            <p className="font-medium text-gray-900 text-xs bg-amber-100 border-amber-200 p-2 rounded-3xl">Pending Approval</p>
                            <EllipsisVerticalIcon className="w-5 text-gray-700"/>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}