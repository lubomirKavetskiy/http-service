import React, {useState} from 'react';

import {api} from 'services/API';

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      await api.posts
        // .updatePostPartialy(6, {body: 'errr'})
        .getPosts()
        .then(result => console.log(result));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <button onClick={fetchData}>fetch</button>
      {loading && <p>Loading data...</p>}
    </div>
  );
}
