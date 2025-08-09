import estilos from './Sobre.module.css'


export function Sobre() {

  return (
    <div className={estilos.tudo}>
      <div className={estilos.fundo} />


      <div className={estilos.quaseTudo}>
        <div className={estilos.box}>
          <div className={estilos.titulo}>Sobre</div>

            <p className={estilos.texto}>O Qhosp é um projeto desenvolvido com o objetivo principal de contribuir para 
            a melhoria da organização hospitalar, reduzindo a superlotação e facilitando o 
            dia a dia de quem precisa frequentar esses ambientes. A proposta visa melhorar o
            direcionamento dos usuários ao sistema de saúde e promover mais transparência 
            na relação entre pacientes e hospitais.</p>

            <p className={estilos.texto}>A plataforma é composta por um site e um aplicativo integrados, cada um com 
            funções específicas: o site é voltado à gestão hospitalar, permitindo maior 
            controle e planejamento por parte das instituições, enquanto o aplicativo é 
            direcionado ao suporte ao paciente, oferecendo informações úteis para uma 
            tomada de decisão mais consciente.</p>

            <p className={estilos.texto}>A ideia surgiu diante da crescente superlotação nos hospitais públicos, que 
            afeta a qualidade do atendimento e a eficiência dos serviços de saúde. Com o 
            Qhosp, pretende-se reduzir deslocamentos desnecessários, aumentar a satisfação 
            dos usuários, otimizar a gestão hospitalar e oferecer dados atualizados sobre 
            ocupação, localização de hospitais, número de funcionários disponíveis, serviços 
            oferecidos, horários de pico, comentários de usuários, entre outros.</p>

            <p className={estilos.texto}>O público-alvo inclui tanto os usuários do SUS quanto gestores e profissionais 
            das instituições hospitalares, tornando o projeto relevante e aplicável ao 
            contexto atual da saúde pública brasileira.</p>

            <p className={estilos.texto}>Com o Qhosp, as visitas aos hospitais tornam-se menos estressantes e muito mais informadas!!</p>

            <p className={estilos.titulo2}>Desenvolvido por:</p>

           
           <ul>
              <li>Lucas Maurício</li>
              <li>Lucas Santos</li>
              <li>Mariana Patrício</li>
              <li>Olivia Atanagildo</li>
          </ul>

        </div>
      </div>
    </div>
  )
}