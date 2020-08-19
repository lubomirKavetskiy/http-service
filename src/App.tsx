import * as React from 'react';
import {api} from 'service/API';

// import {api} from 'service/API';
// import {api} from 'useHook';
// import {useAbortController} from 'useHook/useAbortController';
import {TestComponent} from './components/TestComponent';

export default function App() {
  const [isHandleFetch, setHandleFetch] = React.useState<boolean>(false);
  const [showComponent, setShowComponent] = React.useState<boolean>(true);
  // var url = new URL('https://example.com?foo=1&bar=2');
  // var params = new URLSearchParams(url.search);

  // Pass in a string literal
  // var params2 = new URLSearchParams('foo=1&bar=2');
  // var params2a = new URLSearchParams('?foo=1&bar=2');

  // // Pass in a sequence of pairs
  // var params3 = new URLSearchParams([
  //   ['foo', '1'],
  //   ['bar', '2'],
  // ]);

  // Pass in a record
  // var params4 = new URLSearchParams({foo: '1', bar: '2'});
  // console.log({
  //   params: params.get('foo'),
  //   params2,
  //   params2a,
  //   params3,
  //   params4,
  // });

  /**
   * Encode an object as url query string parameters
   * - includes the leading "?" prefix
   * - example input — {key: "value", alpha: "beta"}
   * - example output — output "?key=value&alpha=beta"
   * - returns empty string when given an empty object
   */
  // function encodeQueryString(params: any) {
  //   const keys = Object.keys(params);
  //   return keys.length
  //     ? '?' +
  //         keys
  //           .map(
  //             key =>
  //               encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  //           )
  //           .join('&')
  //     : '';
  // }
  // var params55 = new URLSearchParams([
  //

  //   ['bar', '2'],
  // ]).toString();
  // var params56 = new URLSearchParams({'key hhj': '[11, 22, 33]'}).toString();

  // console.log(params55, params56);

  // console.log(encodeQueryString({'foo cv': '1', bar: '2'}));

  // console.log(decodeURIComponent(encodeQueryString({'key hhj': [1, 2, 3]})));
  // console.log(
  //   decodeURIComponent(encodeQueryString({key: [1, 2, 3]})).toString()
  // );

  // const usrl = new URL('https://github.com/github/fetch');
  // usrl.search = new URLSearchParams({'key hhj': '[11, 22, 33]'}).toString();
  // console.log(usrl.toString());

  // https://github.com/github/fetch/issues/256

  return (
    <>
      <button
        onClick={() => {
          setHandleFetch(prev => !prev);
        }}
      >
        fetch
      </button>
      {showComponent && <TestComponent handleFetch={isHandleFetch} />}
      <button
        onClick={() => {
          setShowComponent(prev => !prev);
        }}
      >
        switch
      </button>
    </>
  );
  // api.posts.deletePostById(1).then(r => console.log(r));
  // const {controller} = useAbortController() as any;

  // api.users
  //   .getUserById(11951, controller)
  //   .then(({first_name}) => {
  //     console.log(first_name);
  //   })

  //   .catch(er => console.log({er}));

  // const res = async () => {
  //   const r = await api.users.getUserById(11951);

  //   console.log(r);
  // };

  // res();

  // .then(() => api.comments.getPostById(23).then(r => console.log(r)));

  // const [posts, setPosts] = React.useState<IPostsResponse | null>(null);
  // const [comments, setComments] = React.useState<TCommentsResponse>([]);
  // const [loading, setLoading] = React.useState<boolean>(false);
  // const [updComment, setUpdComment] = React.useState<any>(null);

  // React.useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       const response = await api.posts.getPosts(2);
  //       setPosts(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   async function fetchComments() {
  //     try {
  //       const response = await api.comments.getComments({ postId: 1 });
  //       setComments(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   async function updComments() {
  //     try {
  //       const response = await api.comments.getComments({ postId: 1 });
  //       updComment(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  //   setLoading(true);
  //   Promise.all([fetchPosts(), fetchComments(), updComments()]).then(() => setLoading(false));
  // }, []);

  // return (
  //   <div className="App">
  //     {/* {loading && <p>loading...</p>}
  //     {posts && (
  //       <div>
  //         <p>{`userId: ${posts.userId}`}</p>
  //         <p>{`id: ${posts.id}`}</p>
  //         <p>{`title: ${posts.title}`}</p>
  //         <p>{`body: ${posts.body}`}</p>
  //       </div>
  //     )}
  //     {comments.length && (
  //       <ul>
  //         {comments.map(item => (
  //           <li key={item.id}>{item.name}</li>
  //         ))}
  //       </ul>
  //     )} */}

  //     {/* {updComment && console.log(updComment)} */}
  //   </div>
  // );
}
