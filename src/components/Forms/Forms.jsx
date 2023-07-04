import React, { useState } from 'react'

function Forms() {
    const [color, setColor] = useState('#000000'); // Изначальное значение цвета

    const [colorInputs, setColorInputs] = useState(["#ffffff"]);
    //Добавление цвета
    const addColorInput = () => {
      if (colorInputs.length < 10) {
        // 2 значение это новый элемент который получится при создании
        setColorInputs([...colorInputs, "#ffffff"]);
      }
    };
    //Удаление цвета
    const removeColorInput = (index) => {
      const updatedColorInputs = [...colorInputs];
      updatedColorInputs.splice(index, 1);
      setColorInputs(updatedColorInputs);
    };

    const handleChangeColor = (index, color) => {
      const updatedColorInputs = [...colorInputs];
      updatedColorInputs[index] = color;
      setColorInputs(updatedColorInputs);
    };

    const handleColorChange = (event) => {
        const selectedColor = event.target.value;
        setColor(selectedColor);
      };
  return (
    <div className="w-1/2 m-auto">
      <div className="flex flex-col justify-center items-center gap-2">
        <p className='mt-10'>Contact:</p>
        <input className='border-b-2 border-b-slate-950 sm:w-64 sm:text-xl'  type="text" placeholder="Enter your name" />
        <input className='border-b-2 border-b-slate-950 sm:w-64 sm:text-xl'  type="text" placeholder="Enter your e-mail" />
        <p className='sm:text-xl'>Choose the color:</p>
 <div>
 {colorInputs.length < 10 && (
        <button className='text-sm p-2 bg-slate-600 text-slate-50 rounded-xl hover:scale-105 transition-all duration-300' onClick={addColorInput}>Add new color</button>
      )}
 <div className='flex w-[310px] flex-wrap gap-5 items-center justify-center mt-5'>
      {colorInputs.map((color, index) => (
        <div key={index} className="flex flex-col justify-center items-center ">
          <input className='w-12 h-12'
            type="color"
            value={color}
            onChange={(e) => handleChangeColor(index, e.target.value)}
          />
           <p className='text-xs min-w-[115px]'>Selected: {color}</p> {/* Добавленный элемент для вывода значения */}
          {index >= 0 && (
            <button className='text-xs bg-red-500 p-1 rounded-sm' onClick={() => removeColorInput(index)}>Remove</button>
          )}
        </div>
      ))}

    </div>
 </div>
        <textarea cols={25} className='border-b-2 border-b-slate-950'>
        </textarea>

        <button className='bg-zinc-500 p-2 rounded-2xl mb-10 sm:text-xl'>Send</button>
      </div>
    </div>
  );
}

export default Forms
