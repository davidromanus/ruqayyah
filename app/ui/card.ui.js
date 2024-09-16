import { 
    CheckBadgeIcon, 
    ArrowUpIcon 
} from '@heroicons/react/24/outline'

export default function Card({title,number,bgCard,bgBadge}){
    return (
      <div className={`w-full lg:w-[24.5%] rounded-md p-3 block gap-3 flex-shrink-0 ${bgCard}`}>
        <div className="w-full flex flex-col gap-3">
          <span className={`p-2 w-10 h-10 rounded-full ${bgBadge} flex justify-center items-center`}>
            <CheckBadgeIcon className="w-8 text-gray-900"/>
          </span>
          <p className="text-gray-700 font-medium">{title}</p>
        </div>
        <div className="w-full flex flex-row justify-between mt-2">
          <div>
            <p className="text-3xl font-bold mt-4">{number}</p>
          </div>
          <div className="flex flex-col gap-0 justify-end items-end text-right">
            <span className="flex gap-1">
              <ArrowUpIcon className="w-4 text-green-800"/>
              <p className="text-red-700 font-semibold text-lg">2.5%</p>
            </span>
            <p className="font-normal text-gray-800">Increase since last period</p>
          </div>
        </div>
      </div>
    )
}