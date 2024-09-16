'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { 
  MagnifyingGlassIcon, BellIcon, 
  PlusIcon, CheckBadgeIcon, 
  ArrowUpIcon, UserPlusIcon, 
  ClipboardDocumentIcon, ChartPieIcon, 
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import QuickAction from './ui/quickActionCard.ui';
import Card from './ui/card.ui';
import { actions } from './utility/actions.data';
import { cardItems } from './utility/cardItems.data';
import Table from './ui/table.ui';



export default function Home() {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className="relative w-full">
      <nav className="w-full py-4 border-b flex justify-between items-baseline relative">
        {/*sidebar for mobile devices*/}
        <motion.div initial={{x:0}} animate={{x: isOpen?-17:-300}} transition={{type:'spring', duration:2}}  className={`w-4/5 h-screen ${isOpen?'block':'hidden'} absolute top-0 left-0 bg-white shadow-lg z-10 pl-6`}>
          <div className="flex justify-end items-end p-2">
            <XMarkIcon className='w-8 text-gray-700' onClick={()=>{setIsOpen(false)}}/>
          </div>
          <ul className="w-full flex flex-col p-1 mt-5" id="links">
            <li className="border-b p-2 transition ease-in-out duration-300 hover:bg-purple-50"><Link className="text-gray-500" href="/">Overview</Link></li>
            <li className="border-b p-2 transition ease-in-out duration-300 hover:bg-purple-50"><Link className="text-gray-500" href="/">User Management</Link></li>
            <li className="border-b p-2 transition ease-in-out duration-300 hover:bg-purple-50"><Link className="text-gray-500" href="/">Verification Request</Link></li>
            <li className="border-b p-2 transition ease-in-out duration-300 hover:bg-purple-50"><Link className="text-gray-500" href="/">Reports</Link></li>
          </ul>
        </motion.div>
        {/*end of sidebar*/}
        <div className="flex gap-10">
          <div className="flex gap-4 md:gap-0" id="logo">
            <span><Bars3Icon className="w-7 text-gray-800 mt-2 md:hidden" onClick={()=>{setIsOpen(true)}}/></span>
            <p className="text-xl text-blue-700 font-semibold mt-2">SecureID</p>
          </div>
          <ul className="hidden md:flex gap-5 p-1 mt-2" id="links">
            <li><Link className="hover:cursor-pointer text-gray-500 hover:text-purple-700 font-normal pb-4 transition ease-in-out duration-300 border-b-2 border-transparent hover:border-blue-700" href="/">Overview</Link></li>
            <li><Link className="hover:cursor-pointer text-gray-500 hover:text-purple-700 font-normal pb-4 transition ease-in-out duration-300 border-b-2 border-transparent hover:border-blue-700" href="/">User Management</Link></li>
            <li><Link className="hover:cursor-pointer text-gray-500 hover:text-purple-700 font-normal pb-4 transition ease-in-out duration-300 border-b-2 border-transparent hover:border-blue-700" href="/">Verification Request</Link></li>
            <li><Link className="hover:cursor-pointer text-gray-500 hover:text-purple-700 font-normal pb-4 transition ease-in-out duration-300 border-b-2 border-transparent hover:border-blue-700" href="/">Reports</Link></li>
          </ul>
        </div>
        <div className="flex gap-4">
          <ul className="flex gap-4 py-2 md:border-r px-4">
            <li>
              <MagnifyingGlassIcon className="w-5 text-gray-500 hover:cursor-pointer hover:text-purple-700 transition ease-in-out duration-300"/>
            </li>
            <li>
              <BellIcon className="w-5 text-gray-500 hover:cursor-pointer hover:text-purple-800 transition ease-in-out duration-300"/>
            </li>
          </ul>
          <Image src="/user.jpg" width={100} height={100} className="w-8 h-8 rounded-full" alt="web"/>
        </div>
      </nav>
      <main className="mt-10 mb-28">
        <div className="flex justify-between" id="userInfo">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-2xl">Hi, Ruqayyah</h2>
            <p className="text-gray-500 text-sm">Here is an overview of your dashboard.</p>
          </div>
          <div className="btn">
            <button className="p-2 md:mt-10 bg-purple-800 text-white font-medium flex gap-1 rounded-full fixed bottom-4 right-5 md:relative md:rounded-md hover:bg-purple-900 transition ease-in-out duration-300 hover:cursor-pointer">
              <p className="hidden md:block">Create Request</p>
              <span><PlusIcon className="w-10 md:w-5 font-medium py-[2px]"/></span>
            </button>
          </div>
        </div>
        {/*Dashboard Cards*/}
        <div className="w-full flex gap-2 mt-8 flex-1 overflow-x-scroll scrollbar-hide m-0 p-0">
          {cardItems.map((item,key)=>(
            <Card title={item.title} number={item.number} bgCard={item.bgCard} bgBadge={item.bgBadge} key={key}/>
          ))}
        </div>
        {/*Quick Actions*/}
        <div className="w-full mt-8">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
        </div>
        <div className="w-full mt-4 flex gap-2 flex-1">
            {actions.map((action, key)=>(
              <QuickAction icon={action.icon} title={action.title} info={action.title} key={key}/>
            ))}
          </div>

        <div className="w-full mt-10 mb-16">
            {/*code for the table component*/}
            <div className="flex justify-between items-baseline">
                <h4 className="text-lg font-semibold">Recent Activities</h4>
                <p className="font-medium text-sm text-purple-800 hover:text-purple-900 hover:cursor-pointer">See All</p>
            </div>
            <Table/>
        </div>
      </main>
    </div>
  );
}

//{title, number, percent, info, bg}``%