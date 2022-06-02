import "./Button.css"

const Button = ({ className = "", disabled = false, children }) => {
    return (
        <button className={`${className} btn`} disabled={disabled}>{children}</button>
    );
}

export default Button
