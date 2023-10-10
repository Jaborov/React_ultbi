import { useState, useMemo } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostFiltr from "./components/PostFiltr";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "zzzzz", body: "ttttt" },
    { id: 2, title: "aaaaa", body: "ggggg" },
    { id: 3, title: "sdds", body: "eeeee" },
    { id: 4, title: "bbbb", body: "ppppp" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("Отработала функция сортед пост");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  // const bodyInputRed = useRef();
  // Git restore testing
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFiltr filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов 1"}
        />
      ) : (
        <h1 style={{ color: "red", textAlign: "center" }}>
          Посты не были найдеты
        </h1>
      )}
    </div>
  );
}

export default App;
