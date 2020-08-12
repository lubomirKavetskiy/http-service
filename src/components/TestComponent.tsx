import React from 'react';

import {useAbortController} from 'useHooks/useAbortController';
import {api} from 'service/API';
import {IUsersCollectResp} from 'models';
type TProps = {handleFetch: boolean};

export const TestComponent: React.FC<TProps> = ({handleFetch}) => {
  const {controller} = useAbortController();
  const [data, setData] = React.useState<IUsersCollectResp | null>(null);

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

  console.log(data?.[0].company);

  // return <div>TestComponen{data}</div>;
  return <div>TestComponen</div>;
};
