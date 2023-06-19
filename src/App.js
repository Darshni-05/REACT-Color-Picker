import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#9A275A', '#AD3766','#BF4671', '#D1567D', '#E36588', '#D77D8B', '#CB958E',
'#CE796B','#D07F72','#D58677','#DB9382','#E7AD99','#EABBA4','#ECC8AF','#5497A7',
'#5BA0AA','#62A8AC','#69B3B9','#71BFC5','#78CAD2','#86CDD1',];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
