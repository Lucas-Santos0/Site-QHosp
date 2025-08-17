import estilos from './Inicial.module.css'
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
          procurar hospitais
          ver comentarios
          colocar comentarios
          ficha medica
        </div>
      </div>
    </div>
    )
}
