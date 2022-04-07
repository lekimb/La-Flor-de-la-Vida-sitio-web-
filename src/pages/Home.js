//imports
import { Link } from 'react-router-dom'
// styles
import './Home.css'
// components
import Cards from '../components/Cards'

export default function Home() {
    return (
		<>
        <div className="container">	
			<div className="home-theme">
				<div className="titulo-inicio">
					<div>la Flor de la Vida</div>
					<div>ESPACIO REIKI</div>
				</div>
				<div className="carta-bienvenida">
					<p>Bienvenido, bienvenida a la Flor de la Vida:</p>
					<br/>
					<p>La Flor de la Vida es un proyecto que nace con la voluntad de acoger actividades de práctica y divulgación de REIKI</p>
					<p>*</p>
					<p>Es un punto de encuentro, no importa qué tipo de Reiki practiques ni la asiduidad con la que lo hagas</p>
					<p>*</p>
					<p>Es un espacio para la libre expresión del SER, para la escucha del corazón, para el encuentro, para el compartir</p>
					<br/>
					<p><span className="novedades"><strong>NOVEDADES:</strong> </span><Link to="reiki"><span className="link-novedades">Información servicios reiki actualizada</span></Link></p>
				</div>
			</div>
            <Cards />
		</div>
		</>
    )
}
