import { useState } from 'react';
import './App.css';
import { GifComponent } from './components/GifComponent';
import { InputField } from './components/InputField';
import { ShowPrize } from './components/ShowPrize';

function App() {
  const [count, setCount] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const localValue = localStorage.getItem('dahej-value');
  if(localValue === undefined){
    localStorage.setItem('dahej-token',0);
  }

  const countHandler = (data) => {
    console.log('Current count : ', data);
    setMin(Math.round(data.min));
    setMax(Math.round(data.max));
    setCount(data.count);
    localStorage.setItem('dahej-token',data.count);
  };

  return (
    <div className=''>
      <p className='text-3xl md:text-5xl text-center font-Poetsen text-[#AD8B73] heading'>Most Accurate Dahej Calculator</p>
      <InputField setData={countHandler} />
      <div className='flex items-center justify-center mt-4'>
        {count >= 3 && <GifComponent/>}
        {(count < 3 && count > 0) && <ShowPrize max={max} min={min} />}
      </div>
    </div>
  );
}

export default App;
