import './styles.css'
import { useState } from 'react'
import { HiEyeOff, HiEye } from "react-icons/hi";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './componentes/Home';


 export default function Login() {
   const [user, setUser] = useState ("")
   const [senha, setSenha] = useState ("")
   const [mostrar, setMostrar] = useState (false)

   function entrar() {
      return console.log('Foiiiii')
   }
  return (
  <div className="container">
      <div className="container-login">
       <div className="wrap-login">
         <form className="login-form">
           <span className="login-form-title">Login</span>
             <span className="login-form-title">
               
             </span>
             <div className="wrap-input">
                <input 
                className={ user !== "" ? 'has-val input' : "input"}
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Usuário"></span>
             </div>
             <div className="wrap-input">
                <label>

                <input className={ senha !== "" ? 'has-val input' : "input"}
                 type={mostrar ? "text" : "password"}
                 value={senha}
                 onChange={e => setSenha(e.target.value)}
                 />
                <span className="focus-input" data-placeholder="Senha"></span> 
                 </label>
                
             </div>
                  <span className='check'>Lembrar senha? </span>
                    <input type='checkbox'/>
                 
             <div className="container-login-form-btn">
                <button onClick={entrar()} className="login-form-btn">Login</button>
             </div>
             <div className="text-center">
                <span className="text1">Não possui conta?</span>
         
   <header>  
       
                <Link className="text2" to="/cadastro"> Cadastre-se aqui</Link> 
      
          <Link to="/home" > Home </Link>
       
      </header>
      <main>
          <Routes>
         
            <Route path="/home" element={<Home/>}/>
          </Routes>
      </main>
             </div>
          </form>
       </div>
     </div>
    
</div>

  );
}

