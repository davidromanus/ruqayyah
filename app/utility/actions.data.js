import { 
 UserPlusIcon, 
  ClipboardDocumentIcon, ChartPieIcon 
} from '@heroicons/react/24/outline'


export const actions = [
    {
      id:1,
      icon:<UserPlusIcon className='w-7'/>,
      title:'Add Customers',
      info:'Begin the KYC process for a new customer.'
    },
    {
      id:2,
      icon:<ClipboardDocumentIcon className='w-7'/>,
      title:'Review Verifications',
      info:'View and review pending KYC approvals.'
    },
    {
      id:3,
      icon:<ChartPieIcon className='w-7'/>,
      title:'Generate Reports',
      info:'Create detailed reports easily and quickly.'
    }
]