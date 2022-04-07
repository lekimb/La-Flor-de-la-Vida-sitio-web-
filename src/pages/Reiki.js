// assets
import Rosas from '../assets/rosas.jpg'

export default function Reiki() {
    return (
        <div className="container">
			<div className="theme-band"></div>
			<div className="article">
				<h1>Reiki</h1>

				<h2>SESIONES PERSONALES</h2>
				<p>Un tiempo para tí, para conectar con tu corazón, para escucharte y ser escuchad@. Un tiempo de armonización de tu campo energético, de reconexión contigo. Un tiempo sagrado, como Tú.</p>
                <p>Duración aproximada: 1 hora</p>
                <p>Disponible presencial y online</p>
                <br/>
                <h2>RESET ENERGÉTICO</h2>
                <p>Reinicio del sistema energético. Reconexión al campo energético UNO. Activación glándula pineal. Visión Unitaria.</p>
                <p>Duración aproximada: 2 horas</p>
                <p>Disponible presencial y online</p>
                
                <img src={Rosas} alt="Si buscas paz, te acompaño con Reiki" className="img-center"/>
                <br/>
                
                <h2>ACTIVACIÓN DE MANOS</h2>
                <p>Armonización campo energético, reset energético y activación de manos para la canalización de Reiki. Sintonización conciencia unitaria.</p>
                <p>Duración aproximada: 2h 30'</p>
                <p>Disponible presencial y online</p>
                <br/>
                
                <h2>APRENDE A CANALIZAR REIKI</h2>
                <p>Esta es una propuesta de aprendizaje de Reiki a través de la propia vivencia. Al mismo tiempo que abordamos ese problema o esa dificultad que estás viviendo te ofrezco acompañamiento para que, a partir de ahora, aprendas a canalizar Reiki por ti mism@.</p>
                <p>Duración: 7 semanas</p>
                <p>Disponible presencial y online</p>
                <br/>
                
                <h2>REIKI ESPACIOS</h2>
                <p>Si sientes que en tu casa o en tu lugar de trabajo no fluye la energía, no se respira bien, percibes que el ambiente está cargado y no sabes cómo hacer, Reiki también puede aplicarse a estos espacios.</p>
                <br/>
			</div>	
		</div>
    )
}
