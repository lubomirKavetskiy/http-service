import React, {useState} from 'react';

import {TestComponent} from './components/TestComponent';

export default function App() {
  const [showComponent, setShowComponent] = useState<boolean>(true);

  const handleToggleComponent = () => setShowComponent(prev => !prev);

  return (
    <>
      <button onClick={handleToggleComponent}>
        {showComponent ? 'hide Component' : 'show Component'}
      </button>
      {showComponent && <TestComponent />}
    </>
  );
}
