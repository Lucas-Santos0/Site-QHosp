/*import estilos from './Inicial.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

export function Inicial(){

  const [estabelecimentos, setEstabelecimentos] = useState([])
  const [erro, setErro] = useState('')
  const [municipio, setMunicipio] = useState('') 
  


function verificarEstabelecimento(){

    const retornoApi = async () => {
    try {
      const respostaJSON = await fetch('/api/cnes/estabelecimentos?limit=100&offset=0')
      const respostaJS = await respostaJSON.json()
      setEstabelecimentos(respostaJS)

    } catch (erro) {
      setErro(`A busca falhou! Erro: ${erro}`)
    }
  }

useEffect(() => {
    retornoApi()
  }, [])

}



    return(
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />


      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Inicial </div>
        <textarea></textarea>
        <button onClick={verificarEstabelecimento}>bottao</button>

          
        </div>
      </div>
    </div>
    )
}
*/

import estilos from './Inicial.module.css'
import { useState } from 'react'

export function Inicial() {
  const [estabelecimentos, setEstabelecimentos] = useState([])
  const [erro, setErro] = useState('')
  const [municipio, setMunicipio] = useState('')

  async function verificarEstabelecimento() {
    try {
      const respostaJSON = await fetch('/api/cnes/estabelecimentos?limit=100&offset=0')
      const respostaJS = await respostaJSON.json()
      console.log('Dados recebidos:', respostaJS)
      setEstabelecimentos(respostaJS)
    } catch (erro) {
      console.error(erro)
      setErro(`A busca falhou! Erro: ${erro}`)
    }
  }

  return (
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />

      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Inicial</div>

          <textarea
            value={municipio}
            onChange={e => setMunicipio(e.target.value)}
            placeholder="Digite o nome do município"
          ></textarea>

          <button onClick={verificarEstabelecimento}>Buscar Estabelecimentos</button>

          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          <ul>
            {Array.isArray(estabelecimentos) &&
              estabelecimentos.map((item, index) => (
                <li key={index}>
                  {item.nomeFantasia || 'Estabelecimento sem nome'}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
