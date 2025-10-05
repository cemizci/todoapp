import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange}) => {
  return (
    <div className="flex-1 relative">
      <Search 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
        size={20} 
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Görevlerde ara..."
        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-all"
      />
    </div>
  )
}

export default SearchBar