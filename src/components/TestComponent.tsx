import React from 'react';

import {useAbortController} from 'useHooks/useAbortController';
import {api} from 'service/API';
import {IUsersCollectResp} from 'models';
type TProps = {handleFetch: boolean};

export const TestComponent: React.FC<TProps> = ({handleFetch}) => {
  const {controller} = useAbortController();
  const [data, setData] = React.useState<IUsersCollectResp | null | any>(null);

  React.useEffect(() => {
    handleFetch &&
      api.users
        .getUsersByParams(controller)
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

  // return <div>TestComponen{data}</div>;
  return <div>TestComponen{data}</div>;
};
