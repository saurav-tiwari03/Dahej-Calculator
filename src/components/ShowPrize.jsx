/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  useState } from "react"
import { SurprizeGift } from "./SurprizeGift";

export const ShowPrize = ({max,min}) => {
  const [maxAmout,setMaxAmout] = useState(max);
  const [minAmout,setMinAmout] = useState(min);
  return (
    <>
    <div>
      <p>Maximum Bribe you can Assume is : {maxAmout} </p>
      <p>Isse niche mile to shaadi mt kr bhai : {minAmout} </p>
    </div>
    <div>
      <SurprizeGift max={maxAmout}/>
    </div>
    </>
  )
}
