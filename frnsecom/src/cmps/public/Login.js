import {useState} from 'react';
import Page from '../cmns/Page';
import Field from '../cmns/Field';
import { Link } from 'react-router-dom';

//Componente que maneja el State
//React el State es gestionar en variables los valores dinámicos del componente
//valores dinámicos modifican el DOM (ShadowDOM)

const Login = ()=> {
    //const [email, setEmail] = useState("");
    //const [pswd, setPswd] = useState("");

    const [form, setForm] = useState({
        email:'',
        password:''
    });

    const onChange = (e)=>{
        const {name, value} = e.target;
        setForm ({
            ...form,  //spread destructor
            [name] : value,
        });

        //const v1 = {a:1, b:2}; const {...v1,c:3,d:4}; // {a:1, b:2, c:3, d:4}
        //const v2 ={v1, c:3, d:4} // {v1: {a:1, b:2}, c:3, d:4}


        // console.log(e.target);
        // if(e.target.name =="Email"){
        //     setEmail(e.target.value);
        // }
        // if(e.target.name =="Pswd"){
        //     setPswd(e.target.value);
        // }
    }

    const onLogin = (e)=>{
        const {email, password} = form;
        //call a model(axios)
        console.log(email);
        console.log(password);
        }
        return(
            <Page headding="Iniciar Sesión" footer={true}>
                <section className="loginSection">
                    <Field id="email" caption="Correo: " type="text" value={form.email} onChange={onChange} />
                    <Field id="password" caption="Contraseña: " type="password" value={form.password} onChange={onChange} />
                    <button onClick={onLogin}>Login</button>
                    <Link to="/">Go Home</Link>
                </section>
            </Page>
        )
}

export default Login;