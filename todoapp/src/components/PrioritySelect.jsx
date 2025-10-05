import React from 'react'

const PrioritySelect = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-purple-500 transition-all text-lg bg-white"
    >
      <option value="dusuk">🟢 Düşük</option>
      <option value="orta">🟡 Orta</option>
      <option value="yuksek">🔴 Yüksek</option>
    </select>
  )
}

export default PrioritySelect