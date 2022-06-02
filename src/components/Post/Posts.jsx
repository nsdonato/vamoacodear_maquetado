import "./Post.css"
import PostList from "../PostList/PostList";

const Posts = () => {
    return (
        <div className="card card_popular_posts">
            <header className="card_popular_posts_header">
                <span>Popular Posts</span>
            </header>
            <ul className="card card_popular_posts_list">
                <PostList title="titulo" info="info" />
                <PostList title="Ipsum" info="Praes tinci sed" />
                <PostList title="Dorum" info="Ultricies congue" />
                <PostList title="Mingsum" info="Lorem ipsum dipsum" />
            </ul>
        </div>
    )
}

export default Posts