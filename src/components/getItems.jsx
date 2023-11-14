
import { useEffect, useState } from 'react';

const ListaDatos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // ... (Código para obtener datos)
    fetch('https://ecommerce2-8tcf.onrender.com/api/items')
      .then(response => response.json())
      .then(data => setDatos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleEliminarClick = (id) => {
    // Llamada a la API para eliminar el elemento con el id proporcionado
    fetch(`https://ecommerce2-8tcf.onrender.com/api/items/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar el elemento');
        }
        // Elimina el elemento localmente del estado después de eliminarlo en la API
        setDatos(prevDatos => prevDatos.filter(dato => dato.id !== id));
      })
      .catch(error => console.error('Error al eliminar el elemento:', error));
  };

  return (
    <div>
      <ul>
        {datos.map(dato => (
          <li className='bg-zinc-800 max-w-md p-10 rounded-md my-3' key={dato.id}>
            {dato.name} {dato.price}
            <button className='bg-red-500' onClick={() => handleEliminarClick(dato.id)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDatos;

