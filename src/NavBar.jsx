import LogoBase from './assets/LogoBase.png';

export default function NavBar() {
    const scrollToSection = (event, id) => {
      event.preventDefault();
  
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black py-0.1 shadow-md">
          <div className="flex justify-start space-x-4 px-3 py-1">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              <img src={LogoBase} alt="Logo" className="w-40 h-auto object-contain" />
            </a>
          </div>

      <div className="flex flex-col justify items-center  max-w-7xl px-8 mx-auto h-15">
        <ul className="flex flex-row space-x-6">
          <li className="text-sm font-medium">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              HOME
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#news"
              onClick={(e) => scrollToSection(e, 'news')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              NEWS
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#tv"
              onClick={(e) => scrollToSection(e, 'tv')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              TV
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#saham"
              onClick={(e) => scrollToSection(e, 'saham')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              SAHAM
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#bola"
              onClick={(e) => scrollToSection(e, 'bola')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              BOLA
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#tekno"
              onClick={(e) => scrollToSection(e, 'tekno')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              TEKNO
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#bisnis"
              onClick={(e) => scrollToSection(e, 'bisnis')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              BISNIS
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#health"
              onClick={(e) => scrollToSection(e, 'health')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              HEALTH
            </a>
          </li>
          <li className="text-sm font-medium">
            <a
              href="#lifestyle"
              onClick={(e) => scrollToSection(e, 'lifestyle')}
              className='text-black hover:text-color_hover1 transition cursor-pointer'
            >
              LIFESTYLE
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}  