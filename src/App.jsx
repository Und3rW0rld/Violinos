import './App.css'
/*
document.addEventListener("DOMContentLoaded", function() {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll("nav a");

	window.addEventListener("scroll", function() {
	let currentSectionId = "";

	sections.forEach((section) => {
		const rect = section.getBoundingClientRect();
		if (rect.top <= 0 && rect.bottom >= 0) {
		currentSectionId = section.id;
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("selected");
		if (link.getAttribute("href").substring(1) === currentSectionId) {
		link.classList.add("selected");
		}
	});
	});
});
*/
function App() {
	return (
		<>
			<header>
				<nav className='navbar'>
					<div className="logo-container">
						<img className='img-logo' src="./ico.svg" />
						<a href="#">
							<h1 className='logo-text'>Violinos</h1>
						</a>
					</div>

					<div>
						<ul className='navbar-elements'>
							<li><a className='navbar-element selected' href="#">Inicio</a></li>
							<li>
								<a className='navbar-element' href="#">Nosotros</a>
							</li>
							<li>
								<a className='navbar-element' href="#">Contactanos</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>

			<section className='hero'>
				<article className='info-violinos'>
					<div className='content-hero'>
						<h2 className='slogan'>Eleva tu <span>melodía</span> con nosotros</h2>
						<p className='hero-descripcion'>Violinos es un dúo de violines para eventos ofreciendo un <span>servicio profesional</span> para sus clientes.</p>
						<div className='content-hero-links'>
							<div className="hero-link-about">
								<p>Habla con nosotros</p>
							</div>

							<a href="#">
								<div className="hero-link-redes">
									<p>Nuestras redes</p>
								</div>
							</a>
						</div>
					</div>

					<div className='marco-img'>
						<img className='image' src="./img/violin.png" alt="Imagen Violin" />
					</div>
				</article>
			</section>

			<section className='servicios'>
				<div className='servicios-section'>
					<h3 className='title-services'>Servicios</h3>

					<div className='content-servicios'>
						<div className='servicio'>
							<img src="./img/service_1.png" alt="" />
							<h4 className='servicio-title'>Música para bodas</h4>
							<p className='servicio-descripcion'>Da vida a tu boda con nuestra música única y personalizada. Desde la ceremonia hasta la recepción, creamos momentos inolvidables con elegancia y estilo.</p>
						</div>

						<div className='servicio'>
							<img src="./img/service_2.png" alt="" />
							<h4 className='servicio-title'>Eventos sociales</h4>
							<p className='servicio-descripcion'>Transforma tus eventos con nuestra música única. Desde fiestas íntimas hasta grandes reuniones, creamos la atmósfera perfecta para cada celebración.</p>
						</div>

						<div className='servicio'>
							<img src="./img/service_3.png" alt="" />
							<h4 className='servicio-title'>Otros eventos...</h4>
							<p className='servicio-descripcion'>Potencia tus eventos con nuestra música excepcional. Creamos la banda sonora perfecta para hacerlos inolvidables.</p>
						</div>
					</div>
				</div>
			</section>
			<main>
				<section className='nosotros'>
					<article>
					<div className='marco-img img-nosotros'>
						<img src="./img/nosotros.png" alt="" />
					</div>
					<div className='nosotros-content'>
						<h3 className='title-nosotros'>Nosotros</h3>
						<h4>
						Brindamos un servicio de calidad
						</h4>
						<p className='nosotros-descripcion'>Somos dos violinistas con varios años de experiencia tocando en orquestas y en diversos eventos con clientes muy satisfechos por nuestros servicios.</p>
					</div>
					</article>
				</section>
				<section className='team'>
					<article className='team-section juanjo-section'>
						<div className='marco-img marco-rosa'>
							<img src="./img/juanjo.png" alt="" />
						</div>
						<div className='team-content'>
							<h3 className='team-juanjo'>Juan José Vélez</h3>
							<p className='team-descripcion'>Violinista y arreglista de la Universidad de Antioquia, con una sólida trayectoria de 11 años de experiencia. Ha formado parte de destacadas agrupaciones en Colombia, entre las cuales se incluyen la red de escuelas de música de Medellín, la orquesta de la universidad de Antioquia, y la orquesta Joven Sinfónica de Colombia.
							<br />
							<br />
							A lo largo de su carrera, ha cultivado una profunda conexión con la música por elevar cada interpretación comprometido con la excelencia artística y la entrega de actuaciones memorables. Su amplia experiencia y versatilidad le permiten adaptarse a diversos estilos musicales, brindando un toque distintivo a cada evento en el que participe.</p>
						</div>
					</article>
					<article className='team-section'>
						<div className='team-content'>
							<h3 className='team-juanjo'>Santiago Acevedo</h3>
							<p className='team-descripcion'>
Violinista con más de 10 años de experiencia, destacándose en orquestas de prestigio como la Joven Sinfónica de Colombia, la orquesta Sinfónica de Antioquia y la orquesta principal de la Fundación Amadeus. <br /><br /> Su versatilidad se refleja en su contribución a la Escuela de Música de Bello y su participación en diversos grupos musicales. Además, ofrece interpretaciones individuales impactantes en una variedad de eventos, consolidándose como un destacado músico en la escena local.</p>
						</div>
						<div className='marco-img marco-rosa'>
							<img src="./img/santi.png" alt="" />
						</div>
					</article>
				</section>
			</main>
			<footer>
				
			</footer>
		</>
	)
}

export default App
