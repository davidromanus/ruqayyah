export default function QuickAction({icon, title, info}){
    return (
      <div className="w-[32.8%] p-2 md:border rounded-md flex gap-2 flex-shrink-0">
        <div className="w-full md:bg-purple-800 hover:bg-purple-900 transition duration-300 hover:cursor-pointer flex flex-col justify-center items-center py-3 lg:p-2 rounded-md lg:w-12 h-12 text-purple-800 md:text-white">
          <span>{icon}</span>
          <p className="block lg:hidden text-[9px] font-medium">{title}</p>
        </div>
        <div className="hidden lg:flex flex-col gap-0">
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-gray-400">{info}</p>
        </div>
      </div>
    )
}