import { Circle } from 'lucide-react';

const EmptyState = ({ filter, searchTerm }) => {

 const getMessage = () => {
    if(searchTerm){
        return 'Arama Sonucu Bulunamadı'
    }
    switch (filter) {
    case 'tumu':
        return 'Henuz görev yok.Hemen bir tane ekleyin!';
    case 'aktif':
        return 'Harika! Tüm görevler tamamlanmış.';
    case 'tamamlanan':
        return 'Henüz tamamlanmış görev yok!';
    default: 
        return 'Henüz görev yok.'           
  }
 }

 

  return (
   <div className="text-center py-16">
      <div className="text-gray-300 mb-4">
        <Circle size={64} className="mx-auto" />
      </div>
      <p className="text-gray-500 text-lg">
        {getMessage()}
      </p>
    </div>
  );
}

export default EmptyState