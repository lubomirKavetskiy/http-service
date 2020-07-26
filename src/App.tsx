import * as React from 'react';

import {api} from 'service/API';

export default function App() {
  api.posts.deletePostById(1).then(r => console.log(r));
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

  return (
    <div className="App">
      {/* {loading && <p>loading...</p>}
      {posts && (
        <div>
          <p>{`userId: ${posts.userId}`}</p>
          <p>{`id: ${posts.id}`}</p>
          <p>{`title: ${posts.title}`}</p>
          <p>{`body: ${posts.body}`}</p>
        </div>
      )}
      {comments.length && (
        <ul>
          {comments.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )} */}

      {/* {updComment && console.log(updComment)} */}
    </div>
  );
}
