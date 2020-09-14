import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {api} from 'services/API';
import {PostsCollectResp} from 'models';

export const TestComponent: React.FC = () => {
  const [data, setData] = useState<Partial<PostsCollectResp> | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const sourse = axios.CancelToken.source();
  const mountedRef = useRef<boolean>(true);

  const onBtnClick = () => {
    setLoader(true);

    api.posts
      .getPosts({}, {cancelToken: sourse.token})
      .then(data => setData(data))
      .catch(err => console.log({errorFromTestComponent: err}))
      .finally(() => mountedRef.current && setLoader(false));
  };

  // const onBtnClick = async () => {
  //   setLoader(true);

  //   try {
  //     const data = await api.posts.getPosts({}, {cancelToken: sourse.token});
  //     setData(data);
  //   } catch (err) {
  //     console.log({errorFromTestComponent: err});
  //   } finally {
  //     mountedRef.current && setLoader(false);
  //   }
  // };

  useEffect(
    () => () => {
      mountedRef.current = false;
      sourse.cancel();
    },
    // eslint-disable-next-line
    []
  );

  data && console.log({data});

  return (
    <div>
      <button onClick={onBtnClick}>fetch data</button>
      <p>Test Componen</p>
      {loader && <p>Loading data...</p>}
    </div>
  );
};
