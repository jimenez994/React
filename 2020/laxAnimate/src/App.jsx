import React from 'react';
import ScrollingAnimations from './views/ScrollingAnimation/ScrollingAnimations';
import {useLax} from 'use-lax';

const App = () => {

  useLax()
  
  return (
    <div>
      <ScrollingAnimations/>
    </div>
  )
}

export default App;