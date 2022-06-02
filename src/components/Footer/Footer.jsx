import Button from '../Button/Button';
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div>
                <Button className="btn_prev" disabled>Previous</Button>
                <Button className="btn_next">Next »</Button>
            </div>
            <span>Powered by <a className="footer_web" href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></span>
        </footer>
    )
}

export default Footer