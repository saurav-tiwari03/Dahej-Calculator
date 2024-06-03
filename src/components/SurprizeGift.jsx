import { useEffect, useState } from 'react';
import Bikki from './../assets/Gifts/bikki.png';
import Splendor from './../assets/Gifts/splendor.jpeg';
import Apache from './../assets/Gifts/apacheRTR.jpeg';
import Santro from './../assets/Gifts/santro.jpeg';
import Creta from './../assets/Gifts/creta.jpeg';
import Thar from './../assets/Gifts/thar.jpeg';
import Fortuner from './../assets/Gifts/fortuner.jpeg';
import Bmw from './../assets/Gifts/bmwm5.jpeg';
import Porche from './../assets/Gifts/porche911.jpeg';
import Jesko from './../assets/Gifts/jesko.jpeg';
import GIFT from './../assets/Gifts/gift.jpeg'

export const SurprizeGift = ({ max }) => {
  const [cover, setCover] = useState(true);
  const [gift, setGift] = useState('');

  const giftSelector = () => {
    if (max <= 20000) {
      setGift(Bikki);
    } else if (max <= 60000) {
      setGift(Splendor);
    } else if (max <= 140000) {
      setGift(Apache);
    } else if (max <= 300000) {
      setGift(Santro);
    } else if (max <= 700000) {
      setGift(Creta);
    } else if (max <= 1500000) {
      setGift(Thar);
    } else if (max <= 3500000) {
      setGift(Fortuner);
    } else if (max <= 7000000) {  // Corrected max limit
      setGift(Bmw);
    } else if (max <= 15000000) {
      setGift(Porche);
    } else {
      setGift(Jesko);
    }
  };

  useEffect(() => {
    giftSelector();
  }, [max]);

  const coverHandler = () => {
    setCover(!cover);
  };

  return (
    <div>
      <div className='relative transition-all duration-500 overflow-hidden'>
        <div
          onClick={coverHandler}
          className={`w-[200px] h-[125px] absolute bg-white cursor-pointer ${
            cover ? 'translate-y-0' : 'translate-y-full'
          } transition-transform duration-500`}
        ><img src={GIFT} className='w-[200px] h-[125px]' alt="" /></div>
        <img  onClick={coverHandler} src={gift} alt="Gift" className='w-[200px] h-[125px]' />
      </div>
      <p>{gift === Jesko && 'My Personal Favourite'}</p>
    </div>
  );
};
