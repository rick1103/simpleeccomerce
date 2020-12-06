import Header from "./Header";
import "./Page.css";

const Page = ( {children, headding} ) =>{
    let cssStyles = {
        "minheight": `calc(100vh${(headding && true) ? '56px' : ''})`,
    }
    return(
        <section className="page">
            {(headding && true ? (<Header>{headding}</Header>) : null)}
            <section style={cssStyles}>{children}</section>
        </section>
    )
}

export default Page;