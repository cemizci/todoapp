import React from 'react'

const FilterButtons = ({filter, 
  onFilterChange, 
  totalCount, 
  activeCount, 
  completedCount }) => {

    const buttonClass = (isActive) => `
    px-6 py-2 rounded-lg font-medium transition-all
    ${isActive
      ? 'bg-white text-purple-600 shadow-md'
      : 'text-gray-600 hover:text-gray-900'
    }`;
    
  return (
    <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
      <button
        onClick={() => onFilterChange('tumu')}
        className={buttonClass(filter === 'tumu')}
      >
        Tümü ({totalCount})
      </button>
      <button
        onClick={() => onFilterChange('aktif')}
        className={buttonClass(filter === 'aktif')}
      >
        Aktif ({activeCount})
      </button>
      <button
        onClick={() => onFilterChange('tamamlanan')}
        className={buttonClass(filter === 'tamamlanan')}
      >
        Tamamlanan ({completedCount})
      </button>
    </div>
  )
}

export default FilterButtons