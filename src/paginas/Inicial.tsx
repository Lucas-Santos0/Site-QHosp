import estilos from './Inicial.module.css'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { BsHospital } from 'react-icons/bs';

export function Inicial() {
  const schema = z.object({
    localizacao: z.string(),
    nome: z.string()
  });

  type FormData = z.infer<typeof schema>;

  // Tipo do hospital
  type Hospital = {
    CO_IBGE: string;  // CNES vem como string
    [key: string]: any;
  };

  type Municipio = {
    id: number;
    nome: string;
  };

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [estabelecimentos, setEstabelecimentos] = useState<Hospital[]>([]);
  const [erro, setErro] = useState('');

  // Função para normalizar strings (remove acentos e transforma em minúsculas)
  function normalizar(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  async function verificarEstabelecimentoPorMunicipio(data: FormData) {
    console.log('Município digitado:', data.localizacao);

    try {
      // 1️⃣ Buscar municípios do IBGE
      const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
      const municipios: Municipio[] = await resposta.json();

      // 2️⃣ Encontrar município pelo nome (normalizando acentos)
      const municipio = municipios.find(
        (m) => normalizar(m.nome) === normalizar(data.localizacao)
      );

      if (!municipio) {
        setErro("Município não encontrado");
        setEstabelecimentos([]);
        return;
      }

      // 3️⃣ Buscar hospitais CNES
      const respostaJSON = await fetch('/cnes_estabelecimentos35.json');
      const respostaJS: Hospital[] = await respostaJSON.json();

      // 4️⃣ Ajustar código IBGE para 6 dígitos (CNES não tem dígito verificador)
      const codigoCNES = String(Math.floor(municipio.id / 10));

      // 5️⃣ Filtrar hospitais do município
      const hospitaisFiltrados = respostaJS.filter(hospital =>
        hospital.CO_IBGE === codigoCNES
      );

      console.log("Hospitais filtrados:", hospitaisFiltrados.slice(0, 20));
      setEstabelecimentos(hospitaisFiltrados);

    } catch (erro) {
      setErro(`A busca falhou! Erro: ${erro}`);
      setEstabelecimentos([]);
    }
  }

  async function verificarEstabelecimentoPorNome(data: FormData){
    try{
      const respostaJSON = await fetch('/cnes_estabelecimentos35.json');
      const respostaJS: Hospital[] = await respostaJSON.json();

      const hospitalFiltrado = respostaJS.find(hospital =>
        hospital.NO_FANTASIA === data.nome
      );
      console.log(hospitalFiltrado)
    }
    catch{

    }
  }

  return (
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />

      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Inicial</div>

          <form onSubmit={handleSubmit(verificarEstabelecimentoPorMunicipio)}>
            <textarea className={estilos.areaTexto} {...register("localizacao")} placeholder="Digite o município"></textarea>
            <button className={estilos.buscar} type="submit">Buscar</button>
          </form>
          <form onSubmit={handleSubmit(verificarEstabelecimentoPorNome)}>
            <textarea className={estilos.areaTexto} {...register("nome")} placeholder="Digite o nome do estabelecimento"></textarea>
            <button className={estilos.buscar} type="submit">Buscar</button>
          </form>

          {erro && <p style={{ color: 'red' }}>{erro}</p>}
          

        </div>
      </div>
    </div>
  );
}
