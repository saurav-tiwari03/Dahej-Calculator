import Qr from './../assets/qr.jpeg'
export const Payment = () => {
  return (
    <div className='flex flex-col'>
      <img src={Qr} className='w-[150px] h-[130px]'/>
      <p className='text-sm'>Or haa Payment ke baad <br></br>Mail krdio iss pr Minimum 10Rs</p>
      <a href="mailto:sauravtiwari5625@gmail.com" className='bg-white py-1 rounded-2xl m-auto px-6'>Mail</a>
    </div>
  )
}
