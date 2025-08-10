import estilos from './Login.module.css';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { NavLink, useNavigate } from 'react-router-dom';
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

export function Login() {
  const {
    register,
    handleSubmit,
    formState: {},
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const navegação = useNavigate();

  async function Verificacao(data: FormData) {
    try {
      const querySnapshot = await getDocs(collection(db, "usuarios"));

      let usuarioEncontrado = false;

      querySnapshot.forEach((doc) => {
        const usuario = doc.data();

        if (usuario.email === data.email && usuario.senha === data.senha) {
          usuarioEncontrado = true;
        }
      });

      if (usuarioEncontrado) {
        navegação("/sobre");
      } else {
        alert("email ou senha inválidos");
      }

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  return (
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />

      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Login</div>
          <form className={estilos.formulario} onSubmit={handleSubmit(Verificacao)}>
            <input
              className={estilos.campo}
              type="text"
              placeholder="Email:"
              {...register("email")}
            />

            <input
              className={estilos.campo}
              type="password"
              placeholder="Senha:"
              {...register("senha")}
            />

            <div className={estilos.campobotoes}>
              <button
                className={estilos.botao}
                type="button"
                onClick={() => reset()}
              >
                <div className={estilos.campobotoes2}>Limpar</div>
              </button>
              <button className={estilos.botao} type="submit">
                Entrar
              </button>
            </div>
          </form>
        </div>

        <NavLink className={estilos.cadastro} to={'/cadastro'}>
          <BsFillPersonPlusFill className={estilos.iconeCadastro} /> Cadastre-se
        </NavLink>
      </div>
    </div>
  );
}
