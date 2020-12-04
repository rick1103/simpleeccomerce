import {useState} from 'react';
import Page from '../cmns/Page';
import Field from '../cmns/Fields';

// Componente que maneja el state
//React  state es gestionar en variables los valores dinámicos del componente
//valores dinamicos modifican el DOM (shadowDOM)
//el shadowDOM es una copia del DOM en memoria.
const Login = () => {
//    const [email, setEmail] = useState("");
//    const [pswd, setPswd] = useState("");

    const [form, setForm] = useState({
        email:'',
        password:''
    });

    const onChange = (e)=>{
        const {name, value} = e.target;
        setForm({
            ...form,  //spread operator
            [name] : value,
        });
//        console.log(e.target);
//        if(e.target.name == "Email"){
//            setEmail(e.target.value);
        // }
        // if(e.target.name == "Pswd"){
        //     setPswd(e.target.value);
        // }
    }

    const onLogin = (e)=>{
        const {email,password} = form;
        //call a model {axios}
        console.log(email);
        console.log(password);
    }
    return (
        <Page headding="Iniciar Sesión">
            <section className="loginsection">
            <Field id="email" caption="Correo: " type="text" value={form.email} onChange={onChange} />
            <Field id="password" caption="contraseña: " type="password" value={form.password} onChange={onChange} />
                <button onClick={onLogin}>Login</button>
            </section>
        </Page>
    )
}

export default Login;



{/* <div>
<label>Correo:</label>
<input type="text" name="email" value={form.email} onChange={onChange}></input>
</div>
<div>
<label>Contraseña:</label>
<input type="password" name="password" value={form.password} onChange={onChange}></input>
</div> */}