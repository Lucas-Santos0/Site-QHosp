import estilos from './Contato.module.css'


export function Contato(){

    return(
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />

      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Contato </div>
          <form className={estilos.formulario}>
            <input className={estilos.campo}
              placeholder="Insira seu Email:"  />

            <input className={estilos.campo}
              placeholder="Insira motivo de Contato:"  />

            <textarea className={estilos.mensagem}
              placeholder="Insira uma Mensagem:"  />

            <div className={estilos.campobotoes}>
              <button className={estilos.botao}><div className={estilos.campobotoes2}>Limpar</div></button>
              <button className={estilos.botao}>Enviar</button>
            </div>
              

          </form>
          
        </div>
      </div>
    </div>
    )
}