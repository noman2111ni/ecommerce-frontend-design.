import { useState, useEffect } from 'react';
import Prodxuct from './Prodxuct';

const SubSection = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get parts of the date and time
  const dayName = time.toLocaleDateString(undefined, { weekday: 'short' });
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className='bg-white max-w-6xl  mx-auto p-4 rounded-lg shadow-md mb-6 border border-gray-200 flex flex-col lg:flex-row'>
      <div className='p-4 lg:w-1/4'>
        <h2 className='text-2xl font-bold text-gray-800'>Deals and Offers</h2>
        <h3 className='text-lg text-gray-500 mb-6'>Hygiene equipment</h3>
        <div className='flex gap-2'>
          {[
            { label: 'Day', value: dayName },
            { label: 'Hour', value: hours },
            { label: 'Min', value: minutes },
            { label: 'Sec', value: seconds }
          ].map((item, index) => (
            <div key={index} className='flex flex-col items-center bg-gray-800 p-2 rounded text-white w-14'>
              <span className='text-gray-300 text-xs'>{item.label}</span>
              <span className='font-semibold'>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='lg:w-3/4'>
        <Prodxuct />
      </div>
    </div>
  );
};

export default SubSection;