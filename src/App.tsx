import * as React from 'react';

import {api} from 'services/API';

export default function App() {
  const fetchData = React.useCallback(async () => {
    try {
      await api.comments.getCommentById(1).then(result => console.log(result));
    } catch (err) {
      console.log({error: new Error(err)});
    }
  }, []);

  return (
    <div className="App">
      <button onClick={fetchData}>fetch</button>
    </div>
  );
}
