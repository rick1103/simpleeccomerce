import Header from "./Header";
import "./Page.css";

const Page = ( {children, headding} ) =>{
    return(
        <section className="page">
            {(headding && true ? (<Header>{headding}</Header>) : null)}
            {children}
        </section>
    )
}

export default Page;