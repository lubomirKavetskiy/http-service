import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {api} from 'services/API';
import {PostsCollectResp} from 'models';

export const TestComponent: React.FC = () => {
  const [data, setData] = useState<Partial<PostsCollectResp> | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const sourse = axios.CancelToken.source();
  let mounted = true;

  const onBtnClick = async () => {
    setLoader(true);

    api.posts
      .getPosts({}, {cancelToken: sourse.token})

      .then(data => setData(data))
      .catch(err => console.log({errorFromTestComponent: err}))
      .finally(() => mounted && setLoader(false));
  };

  useEffect(
    () => () =>
      //
      {
        mounted = false;
        sourse.cancel();
      },
    []
  );

  console.log({data});

  return (
    <div>
      <button onClick={onBtnClick}>fetch data</button>
      <p>Test Componen</p>
      {loader && <p>Loading data...</p>}
    </div>
  );
};
