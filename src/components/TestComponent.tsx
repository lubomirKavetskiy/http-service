import React, {useState} from 'react';

import {useAbortController} from 'useHooks';
import {api} from 'services/API';
import {User} from 'models';

export const TestComponent: React.FC = () => {
  const [data, setData] = useState<Partial<User> | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const {
    controller: {signal},
  } = useAbortController();

  const handleBtnClick = async () => {
    setLoader(true);
    api.users
      .getUsersByParams(signal, {})
      .then(res => {
        console.log({resFromTestComponent: res});
        setData(res);
      })
      .catch(err => console.log({errorFromTestComponent: err}))
      .finally(() => {
        !signal.aborted && setLoader(false);
      });
  };

  data && console.log({data});

  return (
    <div>
      <button onClick={handleBtnClick}>fetch data</button>
      <p>Test Componen</p>
      {loader && <p>Loading data...</p>}
    </div>
  );
};
