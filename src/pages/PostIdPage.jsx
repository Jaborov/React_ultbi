import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loading/Loader";
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setCommetns] = useState([]);
  const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
    const respons = await PostService.getById(id);
    setPost(respons.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const respons = await PostService.getCommentsByPostId(id);
    setCommetns(respons.data);
  });

  useEffect(() => {
    fetchPostsById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>You open page post ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>Коментарии</h1>
      {isComLoading 
      ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{marginTop: 15}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
