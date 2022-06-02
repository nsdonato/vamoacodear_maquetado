import "./PostList.css"

const PostList = ({ title, info }) => {

    return (
        <li>
            <div className="card_popular_posts_container">
                <div className="card_popular_posts_img_container">
                    <img
                        src="/img/workshop.jpg"
                        alt="Imágen de un escritorio con útiles"
                    />
                </div>

                <p className="card_popular_posts_text">
                    {title}<br />
                    {info}
                </p>
            </div>
        </li>
    )
}

export default PostList