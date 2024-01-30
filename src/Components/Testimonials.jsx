import React, {useState} from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight} from 'react-icons/fi';


function Testimonial(props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState (0);

  function leftShiftHandler () {
    if (index-1 < 0) {
      setIndex (reviews.length - 1);
    }
    else {
      setIndex (index-1);
    }
  }

  function rightShiftHandler () {
    if (index+1 > reviews.length-1) {
      setIndex (0);
    }
    else {
      setIndex (index+1);
    }
  }

  function surpiseHandler () {
    let randomIndex = Math.floor ((Math.random() * reviews.length));
    setIndex (randomIndex);
  }


  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 trasition-all duration-700 hover:shadow-lg rounded-md'>
        <Card review = {reviews[index]} />

        

        <div className='flex text-3xl mt-7 gap-3 text-violet-400 font-bold justify-center'>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-500'><FiChevronLeft /></button>
            <button 
            onClick={rightShiftHandler}
            className='cursor-pointer hover:text-violet-500'><FiChevronRight /></button>
        </div>

        <div className='mt-7'>
            <button 
            onClick={surpiseHandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-300 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white'>Surpise Me</button>
        </div>
    </div>
  )
}
export default Testimonial