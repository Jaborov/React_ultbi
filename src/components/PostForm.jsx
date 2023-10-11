import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import { useState } from "react";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    // console.log(bodyInputRed.current.value)
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="name post"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="body post"
      />
      <MyButton onClick={addNewPost}>Creat</MyButton>
    </form>
  );
};

export default PostForm;
