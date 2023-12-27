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
						<img className='img-logo' src="../public/ico.svg" alt='Logo Violines'/>
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
							<img src="../public/img/service_1.png" alt="Boda" />
							<h4 className='servicio-title'>Música para bodas</h4>
							<p className='servicio-descripcion'>Da vida a tu boda con nuestra música única y personalizada. Desde la ceremonia hasta la recepción, creamos momentos inolvidables con elegancia y estilo.</p>
						</div>

						<div className='servicio'>
							<img src="../public/img/service_2.png" alt="Eventos Sociales" />
							<h4 className='servicio-title'>Eventos sociales</h4>
							<p className='servicio-descripcion'>Transforma tus eventos con nuestra música única. Desde fiestas íntimas hasta grandes reuniones, creamos la atmósfera perfecta para cada celebración.</p>
						</div>

						<div className='servicio'>
							<img src="../public/img/service_3.png" alt="Otros servicios..." />
							<h4 className='servicio-title'>Otros eventos...</h4>
							<p className='servicio-descripcion'>Potencia tus eventos con nuestra música excepcional. Creamos la banda sonora perfecta para hacerlos inolvidables.</p>
						</div>
					</div>
				</div>
			</section>
			<main>

			</main>
		</>
	)
}

export default App
