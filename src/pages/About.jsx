import { AboutWrapper } from "../styled/AboutWrapper";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <AboutWrapper>
        <div className="about_main">
          <div className="img-div">
            <img src="./assets/josesilva.jpg" alt="Jose Silva" />
          </div>          
          <div className="text_div">
            <h2>Jose Silva</h2>
            <p>
              Los primeros resultados los obtuvo, con la mejoría, a lo largo de varios años, en las calificaciones escolares de sus hijos. Silva interpretó que habían mejorado a causa de su método,
              y eso le animó a continuar perfeccionando su nueva técnica. José Silva experimentó también con el "biofeedback" o retroalimentación, como modo para entrenar la mente y el cuerpo,
              mediante la observación de los resultados producidos en la pantalla de un aparato mientras estos fenómenos se producen, (ritmo cerebral, cardíaco, etc.) pudiendo modularlos voluntariamente el sujeto,
              mientras son observados directamente por él.
              En 1956, comenzó a elaborar un programa de entrenamiento cuyos
              principios se usan aún hoy día en sus cursos. La prosperidad de su empresa de electrónica le proporcionó recursos suficientes
              para poder invertir las ganancias y financiar los más de veinte años de investigaciones y ensayos que finalmente condujeron a la creación y desarrollo del llamado Método Silva de Control Mental en 1966. Desde entonces se dedicó por entero al perfeccionamiento y promoción de su método.
            </p>
          </div>
        </div>
        <Footer />
      </AboutWrapper>
    </>
  )
}

export default About;
