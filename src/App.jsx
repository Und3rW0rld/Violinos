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
      <header className='hero'>
        <nav className='navbar'>
          <div className="logo-container">
            <img className='img-logo' src="../public/ico.svg"/>
            <h1><a className='logo-text' href="#">Violinos</a></h1>
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
        <section className='info-violinos'>
          <div className='content-hero'>
          <h2 className='slogan'>Eleva tu <span>melodía</span> con nosotros</h2>
          <p className='hero-descripcion'>Violinos es un dúo de violines para eventos ofreciendo un servicio profesional para sus clientes.</p>
          <div className='content-hero-links'>
          <button>Habla con nosotros</button>
          <a href="">Nuestras redes</a>
          </div>
          </div>
          
          <div className='marco-img'>
            <img className='image' src="../public/img/violin.png" alt="" />
          </div>
        </section>

        <section className='servicios'>
          <h3 className='title'>Servicios</h3>
          <div className='content-servicios'>
            <div className='servicio'>
              <img src="../public/img/service_1.png" alt="" />
              <h4 className='servicio-title'>Bodas</h4>
              <p className='servicio-descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam.</p>
            </div>
            <div className='servicio'>
              <img src="../public/img/ico2.svg" alt="" />
              <h4 className='servicio-title'>Eventos</h4>
              <p className='servicio-descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam.</p>
            </div>
            <div className='servicio'>
              <img src="../public/img/ico3.svg" alt="" />
              <h4 className='servicio-title'>Conciertos</h4>
              <p className='servicio-descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quibusdam.</p>
            </div>
          </div>
        </section>
      </header>
      
      <main>
        
      </main>
    </>
  )
}

export default App
