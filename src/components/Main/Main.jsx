import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import leftgirl from '../Main/leftgirl.png';
import rightgirl from '../Main/rightgirl.png';
import products from './ProductsData';

function Main() {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  const [hoveredProductId, setHoveredProductId] = useState('');
  const [previewOpened, setPreviewOpened] = useState(false);

  function handleProductHover(productId) {
    setHoveredProductId(productId);
    setPreviewOpened(true);
  }

  function closeBtn() {
    setPreviewOpened(false);  
  }

  return (
    <>
      <div className='relative  flex flex-col z-10 mb-10'>
        <div className='flex w-[75%]  m-auto justify-between md:flex-col items-center gap-5'>
          {products.slice(0, 3).map((prod) => (
            <img
            src={previewOpened && hoveredProductId === prod.id ? prod.preview : prod.image}
              key={prod.id}
              // className='bg-slate-700  w-[15vw] h-[20vh] xl:h-[15vh] xl:w-[12vw] lg:h-[10vh] cursor-pointer  border-slate-900 border-[1px]'
              className='bg-slate-700  w-60 h-40 xl:w-48 xl:h-32 lg:w-40 lg:h-28 md:w-60 md:h-40 xsm:w-48 xsm:h-32 cursor-pointer  border-slate-900 border-[1px]'
              onClick={() => handleProductClick(prod.id)}
              onMouseEnter={() => handleProductHover(prod.id)}
              onMouseLeave={() => handleProductHover(null)}
            />
          ))}
          
        </div>
        <div className='flex w-[75%] m-auto justify-between mt-5 md:flex-col items-center gap-5'>
          {products.slice(3, 5).map((prod) =>
            prod.image ? (
              <img
               key={prod.id}
              src={previewOpened && hoveredProductId === prod.id ? prod.preview : prod.image}
               
                // className='bg-slate-700 w-[15vw] h-[20vh] xl:w-[12vw] xl:h-[15vh] lg:h-[10vh]  cursor-pointer object-cover border-slate-900 border-[1px]'
                className='bg-slate-700 w-60 h-40 xl:w-48 xl:h-32 lg:w-40 lg:h-28 md:w-60 md:h-40 xsm:w-48 xsm:h-32 cursor-pointer object-cover border-slate-900 border-[1px]'
                onClick={() => handleProductClick(prod.id)}
                onMouseEnter={() => handleProductHover(prod.id)}
              onMouseLeave={() => handleProductHover(null)}

              />
            ) : (
            // <div className='w-[15vw] h-[20vh] xl:w-[12vw] xl:h-[15vh]  lg:h-[10vh]  flex justify-center items-center cursor-pointer object-cover relative border-slate-900 border-[1px]' onClick={() => handleProductClick(prod.id)}>
            <div className=' w-60 h-40 xl:w-48 xl:h-32 lg:w-40 lg:h-28 md:w-60 md:h-40 xsm:w-48 xsm:h-32  flex justify-center items-center cursor-pointer object-cover relative border-slate-900 bg-slate-50 border-[1px] z-10' onClick={() => handleProductClick(prod.id)}>
                <p className='text-[1.6vw] md:text-2xl xsm:text-xl'>Your own style</p>
              </div>
            )
          )}
        </div>

        <img className='absolute -z-10  w-[14vw] left-0 md:w-64 md:bottom-0 sm:w-52 sm:-left-10' src={leftgirl} alt='left' />
        <img className='absolute -z-10 top-[-10vw] w-[16vw] right-0  md:bottom-0 md:w-64 sm:w-52 sm:-right-10' src={rightgirl} alt='left' />
      </div>

    </>
  );
}

export default Main;