import Gif from './../assets/tubeta.gif'
import { Payment } from './Payment';
export const GifComponent = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='flex flex-col items-center'>
        <img src={Gif} alt="" width={300} />
        <p className='text-center bg-[white] rounded-3xl w-[200px] uppercase'>Chal ab paid use kr</p>
      </div>
      <Payment />
    </div>
  );
};

