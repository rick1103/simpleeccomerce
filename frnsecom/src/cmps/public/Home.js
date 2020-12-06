import Page from '../cmns/Page';
import "./Home.css";

const Home = ( {children} )=>{
    return(
        <Page headding="Principal">
            <section className="loginSection">
                <button>Login</button>
                <button>Signin</button>
            </section>
        </Page>
    )
}

export default Home;