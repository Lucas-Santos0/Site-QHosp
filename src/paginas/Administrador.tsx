import estilos from './Administrador.module.css'
import { useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const schema = z.object({
  email: z.string(),
  senha: z.string(),
});


type FormData = z.infer<typeof schema>;

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


  async function Verificacao(data: FormData){

  try {
      const querySnapshot = await getDocs(collection(db, "usuarios"));

      let devEncontrado = false;

      querySnapshot.forEach((doc) => {
        const desenvolvedores = doc.data();

        if (desenvolvedores.email === data.email && desenvolvedores.senha === data.senha) {
          devEncontrado = true;
        }
      });

      if (devEncontrado) {
        navegação("/sobre");
      } else {
        alert("email ou senha inválidos");
      }

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }





  }


  
    return(
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />


      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Administrador </div>
          colocar cadastro de hospital
          grade hospitalar
          <form className={estilos.formulario} onSubmit={handleSubmit(Verificacao)}>
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