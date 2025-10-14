import estilos from './EsqueceuSenha.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FaArrowLeft } from "react-icons/fa";

const schema = z.object({
  email: z.string().email("Email inválido"),
  cpf: z.string().min(11, "CPF inválido"),
  nome: z.string().min(3, "Nome inválido"),
});

type FormData = z.infer<typeof schema>;

export function EsqueceuSenha() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const navegar = useNavigate();

  async function Verificacao(data: FormData) {
    try {
      const usuariosRef = collection(db, "Usuarios");
      const q = query(usuariosRef, where("Email", "==", data.email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Usuário não encontrado com esse e-mail.");
        return;
      }

      let usuarioEncontrado = null;

      querySnapshot.forEach((doc) => {
        const dados = doc.data();
        if (dados.CPF === data.cpf && dados.Nome === data.nome) {
          usuarioEncontrado = { id: doc.id, ...dados };
        }
      });

      if (usuarioEncontrado) {
        alert("Usuário verificado com sucesso!");
        navegar("/redefinirSenha", { state: { usuario: usuarioEncontrado } });
      } else {
        alert("Dados não conferem. Verifique CPF e nome.");
      }
    } catch (error) {
      console.error("Erro ao verificar usuário:", error);
      alert("Erro ao verificar usuário. Tente novamente.");
    }
  }

  return (
    <div className={estilos.tudo}>
      <NavLink to={'/'}><FaArrowLeft className={estilos.voltar} /></NavLink>
      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Preencha os campos abaixo para Redefinir sua senha!</div>

          <form className={estilos.formulario} onSubmit={handleSubmit(Verificacao)}>
            <input
              className={estilos.campo}
              type="email"
              placeholder="Insira seu email"
              {...register("email")}
            />
            <p className={estilos.mensagemErro}>{errors.email?.message || "‎"}</p>

            <input
              className={estilos.campo}
              type="text"
              placeholder="Insira seu CPF"
              {...register("cpf")}
            />
            <p className={estilos.mensagemErro}>{errors.cpf?.message || "‎"}</p>

            <input
              className={estilos.campo}
              type="text"
              placeholder="Insira seu nome completo"
              {...register("nome")}
            />
            <p className={estilos.mensagemErro}>{errors.nome?.message || "‎"}</p>

            <div className={estilos.campobotoes}>
              <button className={estilos.botao} type="button" onClick={() => reset()}>
                <div className={estilos.campobotoes2}>Limpar</div>
              </button>
              <button className={estilos.botao} type="submit">
                Verificar Usuário
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
