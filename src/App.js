import { useState, useMemo } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFiltr from "./components/PostFiltr";
import MyModal from "./components/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "zzzzz", body: "ttttt" },
    { id: 2, title: "aaaaa", body: "ggggg" },
    { id: 3, title: "sdds", body: "eeeee" },
    { id: 4, title: "bbbb", body: "ppppp" },
  ]);

  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  // const bodyInputRed = useRef();

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFiltr filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов 1"}
      />
    </div>
  );
}

export default App;
