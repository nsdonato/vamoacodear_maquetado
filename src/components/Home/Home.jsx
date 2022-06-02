import Footer from "../Footer/Footer";
import Tags from "../Tags/Tags";
import Posts from "../Post/Posts";
import CardProfile from "../CardProfile/CardProfile";
import CardPost from "../CardPost/CardPost";
import "./Home.css";

const Home = () => {
    return (
        <>
            <main>
                <header className="main_header">
                    <h1>MY BLOG</h1>
                    <p>Welcome to the blog of <span className="tag_black">unknown</span></p>
                </header>

                <div className="main_container">
                    <section>
                        <CardPost
                            title='React 18'
                            description='Migrando a React 18'
                            information={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
                        />
                        <CardPost
                            title='BLOG ENTRY'
                            description='Migrando a React 19'
                            information={`Mauris neque quam, fermentum ut nisl vitae, convallis maximus
                        nisl. Sed mattis nunc id lorem euismod placerat. Vivamus
                        porttitor magna enim, ac accumsan tortor cursus at. Phasellus
                        sed ultricies mi non congue ullam corper. Praesent tincidunt
                        sed tellus ut rutrum. Sed vitae justo condimentum, porta
                        lectus vitae, ultricies congue gravida diam non fringilla.`}
                        />
                    </section>

                    <aside>
                        <CardProfile />
                        <Posts />
                        <Tags />
                    </aside>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home