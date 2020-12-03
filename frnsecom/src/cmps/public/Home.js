import Page from '../cmns/Page';
import "./Home.css";

const Home = () => {
    return (
        <Page headding="Principal">
            <section className="loginsection">
                <button>Login</button>
                <button>Singin</button>
            </section>
        </Page>
    )
}

export default Home;