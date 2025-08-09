import estilos from './Inicial.module.css'


export function Inicial(){

    return(
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />


      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Inicial </div>
          <form className={estilos.formulario}>
            <input className={estilos.campo}
              placeholder="Email:"  />

            <input className={estilos.campo}
              placeholder="Senha:"  />

            <div className={estilos.campobotoes}>
              <button className={estilos.botao}><div className={estilos.campobotoes2}>Limpar</div></button>
              <button className={estilos.botao}>Entrar</button>
            </div>
              

          </form>
          
        </div>
      </div>
    </div>
    )
}