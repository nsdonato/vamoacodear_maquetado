import "./CardProfile.css"

const CardProfile = () => {
    return (
        <div className="card card_about_me">
            <img
                src="/img/avatar_g.jpg"
                alt="Imágen de la cara de una mujer de perfil"
            />
            <div className="card_container">
                <h3>My Name</h3>
                <p>
                    Just me, myself and I, exploring the universe of uknownment. I
                    have a heart of love and a interest of lorem ipsum and mauris
                    neque quam blog. I want to share my world with you.
                </p>
            </div>
        </div>
    )
}

export default CardProfile