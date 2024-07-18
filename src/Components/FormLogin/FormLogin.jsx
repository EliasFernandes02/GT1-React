import Tenis1 from "../../assets/Tenis1.png"
import Tenis2 from "../../assets/Tenis2.png"
import Icons from "../../assets/Icons.png"
import "./FormLogin.css"
function FormLogin() {

    return (
      <>  
        <section>
            <div id="formularioLogin">
                <div id="titles">
                    <h1>Acesse Sua Conta</h1>
                    <p>Novo cliente ? Então registre-se <a href="">aqui</a></p>
                </div>
                <div id="inputss">
                    <label htmlFor="">Login *</label>
                    <input type="text"  placeholder=" Insira seu login ou email"/>
                    <label htmlFor="">Senha *</label>
                    <input type="text"  placeholder=" Insira sua senha"/>
                    <a href="">Esqueci a senha</a>
                </div>
                <div>
                    <div id="acessar">
                        <button>Acessar Conta</button>
                    </div>
                    <div id="icons">
                        <p>Ou faça login com </p>
                        <img src={Icons} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <img src={Tenis1} alt="" />
                <img src={Tenis2} alt="" />
            </div>
        </section>
      </> 
    )
  }
  
  export default FormLogin
  