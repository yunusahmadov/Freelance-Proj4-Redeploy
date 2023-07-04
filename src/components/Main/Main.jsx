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
      <div className='relative  flex flex-col z-0 mb-10'>
        <div className='flex w-1/2  m-auto justify-between'>
          {products.slice(0, 3).map((prod) => (
            <img
            src={previewOpened && hoveredProductId === prod.id ? prod.preview : prod.image}
              key={prod.id}
              className='bg-slate-700  w-[15vw] h-[20vh] xl:h-[15vh] xl:w-[12vw] lg:h-[10vh] cursor-pointer  border-slate-900 border-[1px]'
              onClick={() => handleProductClick(prod.id)}
              onMouseEnter={() => handleProductHover(prod.id)}
              onMouseLeave={() => handleProductHover(null)}
            />
          ))}
          
        </div>
        <div className='flex w-1/2 m-auto justify-between mt-5'>
          {products.slice(3, 5).map((prod) =>
            prod.image ? (
              <img
              src={previewOpened && hoveredProductId === prod.id ? prod.preview : prod.image}
                key={prod.id}
                className='bg-slate-700 w-[15vw] h-[20vh] xl:w-[12vw] xl:h-[15vh] lg:h-[10vh]  cursor-pointer object-cover border-slate-900 border-[1px]'
                onClick={() => handleProductClick(prod.id)}
                onMouseEnter={() => handleProductHover(prod.id)}
              onMouseLeave={() => handleProductHover(null)}

              />
            ) : (
              <div className='w-[15vw] h-[20vh] xl:w-[12vw] xl:h-[15vh]  lg:h-[10vh]  flex justify-center items-center cursor-pointer object-cover relative border-slate-900 border-[1px]' onClick={() => handleProductClick(prod.id)}>
                <p className='text-[1.6vw]'>Your own style</p>
              </div>
            )
          )}
        </div>

        <img className='absolute -z-10 top-0  w-[14vw] left-0' src={leftgirl} alt='left' />
        <img className='absolute top-[-10vw] -z-10  w-[16vw] right-0' src={rightgirl} alt='left' />
      </div>

    </>
  );
}

export default Main;