// styles
import './Sobre_mi.css'
// assets
import Cielo from '../assets/cielo.jpg'
import sobre_mi from '../assets/sobre_mi.jpg'

export default function Sobre_mi() {
    return (
        <div className="container">
			<div className="theme-band"></div>
			<div className="article sobre_mi">
				<h1>Sobre mí</h1>
				<img src={sobre_mi} alt="María Ángeles Les"
				className="img-half"/>
				<p>Me llamo María Ángeles Les López. Nací hace 59 años en un pequeño pueblo de Navarra, llamado Allo. Tuve una infancia y una adolescencia de juegos en la calle y una vida muy pegada al campo y a la naturaleza. Y tengo el recuerdo de mirar al cielo desde bien pequeña, de maravillarme con su inmensidad y de preguntarme, ¿qué habrá por allá arriba?</p>				
				<p>Tras licenciarme en Economía, durante 25 años trabajé en el mundo de la empresa. La muerte inesperada de mi madre hizo que mi mundo, tal y como lo había entendido hasta entonces, se tambaleara. Empecé a hacerme preguntas y a cuestionarme si el tipo de vida que llevaba tenía sentido. Y para mi fortuna me encontré con el Reiki y mi vida se transformó.</p>
				<p>Recibí la transmisión del sistema Usui, que se realizaba en tres niveles y la maestría. Aprendí a canalizar energía a través de mis manos y a practicar los principios que Mikao Usui proponía para el centramiento y la vida cotidiana. </p>
				<p>El Reiki me dió una conciencia de mí misma que no tenía hasta entonces, y empecé a indagar y a interesarme por otros trabajos de búsqueda y profundización interior que me abrieron la puerta a  otras dimensiones del ser humano hasta entonces desconocidas para mí.</p>
				<p>De esta forma, simultáneamente con la práctica y los talleres de Reiki participé en un Curso de Milagros, trabajé con las Siete Llamas Sagradas, en Constelaciones familiares y Constelaciones del Espíritu, Talleres de liberación de karma, Conexión con la Atlántida, meditaciones guiadas por el Amor Incondicional o Cursos de Canalización, entre otras actividades. </p>
				<p>Con este bagaje se ha conformado el Reiki que practico en la actualidad, Reiki canalizado.</p>
				<p>Desde aquí agradezco de todo corazón a todas y cada una de las personas que me ofrecistéis vuestra mano, me habéis acompañado y seguís acompañándome en este camino. GRACIAS!!!!!!</p>	
				<p className="text-center pre-wrap">*   *   *</p>				
				<p>A día de hoy el Reiki sigue siendo mi pasión, una pasión que ahora se convierte en mi profesión, con este nuevo proyecto que emprendo aquí y ahora, desde este espacio acogedor y luminoso, La Flor de la Vida. </p>
				<p className="text-center">Un proyecto al servicio del REIKI, una empresa al servicio del AMOR INCONDICIONAL.</p>
				<br/>
				<img src={Cielo} alt="Campos de Allo, mi pueblo natal" className="img-center"/>
				

				<br/>			
			</div>	
		</div>
    )
}
