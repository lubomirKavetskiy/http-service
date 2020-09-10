import React, {useState} from 'react';
import {TestComponent} from 'components/TestComponent';

export default function App() {
  const [showComponent, setShowComponent] = useState<boolean>(true);

  const toggleComponent = () => setShowComponent(prev => !prev);

  return (
    <>
      <button onClick={toggleComponent}>
        {showComponent ? 'hide Component' : 'show Component'}
      </button>
      {showComponent && <TestComponent />}
    </>
  );
}
