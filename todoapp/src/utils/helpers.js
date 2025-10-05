// Todoları filtrele ve ara
export function getFilteredTodos(todos, filter, searchTerm) {
  let filtered = todos;

  // Tamamlanma durumuna göre filtrele
  if (filter === 'aktif') {
    filtered = filtered.filter(todo => !todo.completed);
  } else if (filter === 'tamamlanan') {
    filtered = filtered.filter(todo => todo.completed);
  }

  // Arama terimine göre filtrele
  if (searchTerm) {
    filtered = filtered.filter(todo =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
}

// Öncelik rengini döndür (ihtiyaç olursa)
export function getPriorityColor(priority) {
  switch (priority) {
    case 'yuksek':
      return {
        bg: 'bg-red-100',
        text: 'text-red-700',
        border: 'border-red-300'
      };
    case 'orta':
      return {
        bg: 'bg-yellow-100',
        text: 'text-yellow-700',
        border: 'border-yellow-300'
      };
    case 'dusuk':
      return {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300'
      };
    default:
      return {
        bg: 'bg-gray-100',
        text: 'text-gray-700',
        border: 'border-gray-300'
      };
  }
}