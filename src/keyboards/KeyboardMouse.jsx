// src/components/Keyboards.jsx

import React from 'react';
import KeyboardDetails from './KeyboardDetails';
import MouseDetails from './MouseDetails';
import products from '../apis/KeyboardApis';

const Keyboards = () => {
  const keyboards = products.filter(product => product.code === 'keyboard');
  const mouses = products.filter(product => product.code === 'mouse');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex justify-center items-center underline">Keyboards and Mouse</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-32 mt-16 bg-white ">
        {keyboards.map(keyboard => (
          <KeyboardDetails key={keyboard.id} keyboard={keyboard} />
        ))}
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-32 mt-16 bg-white">
      {mouses.map(mouse => (
          <MouseDetails key={mouse.id} mouse={mouse} />
        ))}

      </div>
    </div>
  );
};

export default Keyboards;
