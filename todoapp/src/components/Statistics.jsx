import React from 'react'

const Statistics = ({ totalCount, activeCount, completedCount }) => {

  const completionPercentage = totalCount > 0 
  ? Math.round((completedCount / totalCount) * 100)
  : 0 ;

  return (
     <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-around text-center">
        <div>
          <p className="text-3xl font-bold text-purple-600">{totalCount}</p>
          <p className="text-gray-600 text-sm">Toplam</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">{activeCount}</p>
          <p className="text-gray-600 text-sm">Aktif</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-600">{completedCount}</p>
          <p className="text-gray-600 text-sm">Tamamlanan</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-pink-600">{completionPercentage}%</p>
          <p className="text-gray-600 text-sm">Tamamlanma</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics