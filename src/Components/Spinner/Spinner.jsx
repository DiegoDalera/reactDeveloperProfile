
import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './Spinner.css';

const Spinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cambia el estado de loading a false después de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Limpieza del timer al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  // Añade una clase para controlar la opacidad basada en el estado de loading
  const spinnerClass = loading ? 'visible' : 'fadingOut';

  return (
    <div className={`spinner ${spinnerClass}`}>
      <InfinitySpin width="300" color="#4fa94d" />
    </div>
  );
};

export default Spinner;

