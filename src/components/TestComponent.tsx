import React, {useState, useEffect} from 'react';

import {useAbortController} from 'useHooks/useAbortController';
import {api} from 'services/API';
import {User} from 'models';

export const TestComponent: React.FC = () => {
  const [data, setData] = useState<Partial<User> | null | any>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const {controller} = useAbortController();

  const handleBtnClick = async () => {
    setLoader(true);
    api.users
      .deleteUser(2, controller)
      .then(res => {
        console.log({resFromTestComponent: res});
        setData(res);
      })
      .catch(err => console.log({errorFromTestComponent: err}))
      .finally(() => setLoader(false));
  };

  console.log({dataFromTestComponent: data});

  return (
    <div>
      <button onClick={handleBtnClick}>fetch data</button>
      <p>Test Componen</p>
      {loader && <p>Loading data...</p>}
    </div>
  );
};
