import React from "react";
import './../styles/card.module.css';

type PropType = {
  Name:string,
  Designation:string,
  Image:string
}

function Card(props:PropType) {
  const imgStyle = {
    width: "12.4rem",
    height: "12.8rem",
    flexShrink: "0",
    flexBasis: "21%",
    borderRadius: "1.5rem",
  };



  return (
    <div className=' my-4 gap-1 flex flex-col' style={imgStyle} >
      <img src={props.Image} alt="" className='object-cover max-w-full h-auto align-middle  transition-transform duration-300 transform hover:scale-125  z-0 memberImage ' style={imgStyle} />
      <div className="text-left -mt-16 z-10 memberDetails"><span className='pl-4 text-xl'>{props.Name}</span ><br /><span className='pl-4 text-base'>{props.Designation}</span>
        <div className='flex justify-center'>
          <img src="/insta.svg" alt="" className='w-12 -mt-10 mx-2 memberContacts' />
          <img src="/message.svg" alt="" className='w-12 -mt-10 mx-2 memberContacts' />
          <img src="/linkedin.svg" alt="" className='w-12 -mt-10 mx-2 memberContacts' />
        </div>
      </div>
    </div>
  );
}

export default Card;
