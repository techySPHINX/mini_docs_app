/* eslint-disable react/jsx-key */
import {useRef} from 'react';
import Card from "./Card";


function Foreground() {
const ref = useRef(null);

   const data = [
    {
      desc : "Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as “pain itself",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc : "Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as “pain itself",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc : "Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as “pain itself",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    }
    

   ];
  
  return (
    <>
     <div ref = {ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item) => (
        <Card data={item} reference={ref}/>
       ))}
         
     </div>
       
    </>
  )
}

export default Foreground;