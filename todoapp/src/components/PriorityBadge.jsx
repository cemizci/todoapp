import React from 'react'

const PriorityBadge = ({priority}) => {

 const getPriorityConfig = () => {
    switch(priority){
        case 'yuksek':
            return {
                text: '🔴 Yüksek',
                className: 'bg-red-100 text-red-700 border-red-300'
            }
        case 'orta':
            return {
                text: '🟡 Orta',
                className: 'bg-yellow-100 text-yellow-700 border-yellow-300'
            }  
        case 'dusuk':
            return {
                text: '🟢 Düşük',
                className: 'bg-green-100 text-green-700 border-green-300'
            } 
        default: 
            return {
                text: priority,
                className: 'bg-gray-100 text-gray-700 border-gray-300'
            }         
    }
 }
 
 const config = getPriorityConfig();


  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mt-2 ${config.className}`}
    >
      {config.text}
    </span>
  )
}

export default PriorityBadge