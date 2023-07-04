import React from 'react'
import { useParams } from 'react-router-dom';
import Forms from '../Forms/Forms';

import products from '../Main/ProductsData';
import HomeButton from './HomeButton';
function Products() {

    const params = useParams();
    const prodId = params.id;
  
    // Находим элемент с prodId
    const selectedProduct = products.find((product) => product.id === parseInt(prodId));
  
    return (
        <div>
              <HomeButton/>
            <div className='w-full text-center text-2xl pt-2'>
              <h1>{selectedProduct.name}</h1>
              <div className='flex justify-center pt-6'>
                {selectedProduct.images ? (
                  <div className='flex gap-3 flex-wrap justify-center'>
                    {selectedProduct.images.map((image, index) => (
                      <img className='w-72 border-slate-800 border-[2px]' key={index} src={image} alt={`Image ${index}`} />
                    ))}
                  </div>
                ) : (
                  <select> 
                    
                    {
                      products.map((prod)=>{
                        return <option value={prod.name}>{prod.name}</option>
                      })
                    }
                  </select>
                )}
              </div>
              <Forms/>
            </div>
  
        </div>
      );
  }
  

export default Products