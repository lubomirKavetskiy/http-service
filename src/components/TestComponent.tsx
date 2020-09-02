import React from 'react';

import {useAbortController} from 'useHooks/useAbortController';
import {api} from 'service/API';
import {UsersCollectResp} from 'models';
type TProps = {handleFetch: boolean};

export const TestComponent: React.FC<TProps> = ({handleFetch}) => {
  const {controller} = useAbortController();
  const [data, setData] = React.useState<UsersCollectResp | null | any>(null);

  React.useEffect(() => {
    handleFetch &&
      api.users
        .getUsersByParams(controller, {
          id: null,
          // arr: ['a', 'b', 'c'],
          // address: {
          //   geo: {
          //     lat: '-31.8129',
          //     lng: '62.5342',
          //   },
          // },
        })
        .then(res => {
          console.log({res});
          setData(res);
        })
        .then(alert)
        .catch(er => console.log(er));
  }, [handleFetch]);

  React.useEffect(() => {
    api.users
      .createUser({name: undefined}, controller)
      .then(res => setData(res.phone));
  }, []);

  console.log(data);

  return <div>TestComponen</div>;
};
