import Button from "../Button/Button";
import "./CardPost.css"

const CardPost = (props) => {
    const { title, description, information } = props;

    return (
        <article className="card">
            <img src="/img/woods.jpg" alt="Imágen de un bosque" />
            <div className="card_container">
                <header className="card_header">
                    <h1>{title}</h1>
                    <p>
                        {description},
                        <span className="card_date">Abril 7, 2014</span>
                    </p>
                </header>
                <div className="card_main">
                    <p>
                        {information}
                    </p>
                </div>
                <div className="card_row">
                    <Button classNameName="card_row_btn"><b>READ MORE »</b></Button>
                    <span className="card_row_comments"><b>Comments</b>
                        <span className="card_row_comments_count tag_black">0</span></span>
                </div>
            </div>
        </article>
    )
}

export default CardPost