import estilos from './Administrador.module.css'
import { useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string(),
  senha: z.string(),
});


type FormData = z.infer<typeof schema>;

 console.log("empresa.login@gmail.com\n123321")

export function Administrador(){

 const {
    register,
    handleSubmit,
    formState:{},
     reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });


  const navegação = useNavigate()


  function Autenticação(data: FormData){
     
    if (data.email !== "empresa.login@gmail.com" || data.senha !== "123321") {
  alert("email ou senha inválidos");
  } else {
  navegação("/sobre");
  }

  }


  
    return(
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />


      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Administrador </div>
          <form className={estilos.formulario} onSubmit={handleSubmit(Autenticação)}>
            <input className={estilos.campo}
              type="text"
              placeholder="Email:"  
              {...register("email")}/>
              
            <input className={estilos.campo}
              type="password"
              placeholder="Senha:"
              {...register("senha")}/>
              

            <div className={estilos.campobotoes}>
              <button className={estilos.botao}  type="button" onClick={() => reset()}><div className={estilos.campobotoes2}>Limpar</div></button>
              <button className={estilos.botao} type="submit">Entrar</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
    )
}