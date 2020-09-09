import React, {useState, useEffect} from 'react';

import {useAbortController, useSetState} from 'useHooks';
import {api} from 'services/API';
import {User} from 'models';

export const TestComponent: React.FC = () => {
  const [data, setData] = useState<Partial<User> | null | any>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const {controller} = useAbortController();
  const {isComponentUnMounted} = useSetState();
  console.log(isComponentUnMounted);
  const handleBtnClick = async () => {
    setLoader(true);
    api.users
      .getUsersByParams(controller, {address: {city: 'South Elvis'}})
      .then((res: any) => {
        console.log({resFromTestComponent: res});
        setData(res);
      })
      .catch(err => console.log({errorFromTestComponent: err}))
      .finally(() => !isComponentUnMounted && setLoader(false));
  };

  useEffect(() => () => alert('didmount'), []);

  console.log({dataFromTestComponent: data});

  return (
    <div>
      <button onClick={handleBtnClick}>fetch data</button>
      <p>Test Componen</p>
      {loader && <p>Loading data...</p>}
    </div>
  );
};
