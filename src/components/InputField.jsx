/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";

export const InputField = ({ setData }) => {
  const [count, setCount] = useState(localStorage.getItem('dahej-token'));
  const [role, setRole] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [salary, setSalary] = useState(0);
  const [zameen, setZameen] = useState(0);
  const [zameenAmout, setZameenAmout] = useState(0);
  const [beta,setBeta] = useState(false)

  useEffect(() => {
    zameenAmoutCalculator();
  }, [zameen]);

  const zameenAmoutCalculator = () => {
    if (zameen === 0) {
      setZameenAmout(0);
    } else if (zameen > 0 && zameen < 10) {
      setZameenAmout(50000);
    } else if (zameen >= 10 && zameen < 19) {
      setZameenAmout(100000);
    } else if (zameen >= 20) {
      setZameenAmout(zameen * 10000);
    }
  };

  const bribeCalculator = () => {
    let newMin = min;
    let newMax = max;
    let betaAmount;

    if(beta){
      betaAmount = 25000;
    }

    if (role === 'SE') {
      newMin = min + 10000 + salary * 0.5 + zameenAmout * 0.55 + betaAmount*1.5;
      newMax = max + 20000 + salary * 0.75 + zameenAmout * 0.65 + betaAmount*1.25;
    } else if (role === 'SN') {
      newMin = min + 20000 + salary * 1 + zameenAmout * 0.85 + betaAmount*1.5;
      newMax = max + 40000 + salary * 1.2 + zameenAmout + betaAmount*2;
    }

    setMin(newMin);
    setMax(newMax);
    return { newMin, newMax };
  };

  useEffect(() => {

    if (count > 0) {
      setData({ count, min, max });
    }
  }, [count, min, max, setData]);

  const clickHandler = () => {
    if (role === '') {
      toast.error('First choose your role');
      return;
    }

    if (count < 3) {
      const { newMin, newMax } = bribeCalculator();
      setCount(count + 1);
      setData({ count: count + 1, min: newMin, max: newMax });
    } else {
      toast.error('You have reached the maximum limit');
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-col justify-center items-center p-12 border-2 border-[#AD8B73] bg-[#ddb8a0] card w-[500px] h-[400px]">
        <div className="flex items-center justify-center outline-none w-[250px] rounded-xl mb-2 pl-2 border-2 border-black input1 font-semibold focus:w-[275px] transition-all ease-in-out duration-300" type="text" placeholder="Tu kya krta h">
          <button className={`border-2 rounded-3xl p-1 ${role === 'SE' ? 'bg-white' : ''}`} onClick={() => setRole('SE')}>Software Engineer</button>
          <button className={`border-2 rounded-3xl p-1 ${role === 'SN' ? 'bg-white' : ''}`} onClick={() => setRole('SN')}>Sarkari Naukri</button>
        </div>

        <input className="outline-none w-[250px] rounded-xl h-[35px] mb-2 pl-2 border-2 border-black font-semibold focus:w-[275px] transition-all ease-in-out duration-300 input2" type="text" placeholder="Mahina ka kitna kamata hain tu" onChange={(e) => setSalary(parseFloat(e.target.value))} /> 

        <input className="outline-none w-[250px] rounded-xl h-[35px] mb-2 pl-2 border-2 border-black input3 font-semibold focus:w-[275px] transition-all ease-in-out duration-300" type="text" placeholder="Kitni zameen h (in Acres)" onChange={(e) => setZameen(parseFloat(e.target.value))} />

        <div
         className={`outline-none w-[250px] rounded-xl h-[35px] mb-2 pl-2 border-2 border-black input4 font-semibold focus:w-[275px] transition-all ease-in-out duration-300 flex items-center justify-center`} type="text" placeholder="Ghar koi Sarkari Naukari wala" onClick={() => setBeta(true)} >
          <button className={`border-2 rounded-3xl p-1 ${beta ? 'bg-white' : ''}`} onClick={() => setBeta(true)}>Ghar ka chota beta</button>
         </div>

        <button className="btn bg-[#AD8B73] text-white py-2 px-4 mt-4 rounded-3xl flex items-center justify-center gap-2 uppercase active:outline-[#CEAB93] hover:drop-shadow-lg transition-all duration-500 hover:text-[#222] font-semibold font-Ubuntu" onClick={clickHandler}>Count Dahej <FaArrowRight className="btn-arrow rotate-180" /></button>
      </div>
      <Toaster />
    </div>
  );
};
