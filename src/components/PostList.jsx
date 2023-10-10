import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostIteam from "./PostIteam";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 style={{ color: "red", textAlign: "center" }}>
        Посты не были найдеты
      </h1>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostIteam remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
