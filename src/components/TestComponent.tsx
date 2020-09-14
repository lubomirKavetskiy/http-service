import React, {useState} from 'react';

import {useAbortController} from 'useHooks';
import {api} from 'services/API';
import {UsersCollectResp} from 'models';

export const TestComponent: React.FC = () => {
  const [data, setData] = useState<Partial<UsersCollectResp> | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const {
    controller: {signal},
  } = useAbortController();

  const handleBtnClick = () => {
    setLoader(true);
    api.users
      .getUsersByParams(signal, {})
      .then(res => {
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
