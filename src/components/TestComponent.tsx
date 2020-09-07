import React from 'react';

import {useAbortController} from 'useHooks/useAbortController';
import {api} from 'services/API';
import {User} from 'models';

type Props = {handleFetch: boolean};

export const TestComponent: React.FC<Props> = ({handleFetch}) => {
  const {controller} = useAbortController();
  const [data, setData] = React.useState<Partial<User> | null | any>(null);

  React.useEffect(() => {
    handleFetch &&
      api.users
        .deleteUser(2, controller)

        .then(res => {
          console.log({res});
          setData(res);
        })
        .then(alert)
        .catch(er => console.log(er));
  }, [handleFetch]);

  // React.useEffect(() => {
  //   api.users.getUsersByParams(controller).then(res => setData(res));
  // }, []);

  console.log(data);

  return <div>TestComponen</div>;
};