import './App.css';
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import {useEffect, useState} from "react";
import Tool from "./Tool";
import compass from './images/compass_1f9ed.webp';
import foot from './images/foot_1f9b6.webp';
import globe from './images/globe-showing-europe-africa_1f30d.webp';
import glass from './images/magnifying-glass-tilted-left_1f50d.webp';
import magicWand from './images/magic-wand_1fa84.png';
import feather from './images/feather_1fab6.png';

const projectDescription = "Des outils numériques pour le climat qui permettent de s'approprier les ordres de grandeurs et se familiariser avec les objectifs de neutralité carbone."

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('climate-lab-dark-mode') === 'true');
  useEffect(() => {
      if (isDarkMode) {
          document.body.classList.add('dark-mode')
      } else {
          document.body.classList.remove('dark-mode')
      }

      localStorage.setItem('climate-lab-dark-mode', isDarkMode.toString())
  }, [isDarkMode]);

  const tools = [
      {
          title: 'Reduce',
          description: 'Comprenez quels indicateurs ont le plus d\'impact sur votre empreinte.',
          logo: feather,
          backgroundColor: '#ffffff',
          darkModeBackgroundColor: '#0A0A0A',
          darkModeColor: 'white',
          color: '#319795',
          link: 'https://reduce.climatelab.fr',
          extraCss: {boxShadow: '0 0 8px .2rem rgba(49, 151, 149, .3)'},
          extraCssHover: {boxShadow: '0 0 20px .3rem rgba(49, 151, 149, .6)'}
      },
      {
          title: 'Explorateur',
          description: 'Explorez, filtrez et visualisez les données de l\'énergie et du climat à travers des graphiques dynamiques.',
          logo: globe,
          backgroundColor: '#ffffff',
          darkModeBackgroundColor: '#0A0A0A',
          darkModeColor: 'white',
          color: '#6478ff',
          link: 'https://explorateur.climatelab.fr',
          extraCss: {boxShadow: '0 0 8px .2rem rgba(100, 120, 255, .3)'},
          extraCssHover: {boxShadow: '0 0 20px .3rem rgba(100, 120, 255, .6)'},
      },
      {
          title: 'Kit anti greenwashing',
          description: 'Démasquez vous-mêmes le greenwashing grâce à des arguments sourcés réutilisables.',
          logo: magicWand,
          backgroundColor: '#ffffff',
          darkModeBackgroundColor: '#0A0A0A',
          color: '#5c00fc',
          darkModeColor: 'white',
          link: 'https://kitantigreenwashing.climatelab.fr',
          extraCss: {boxShadow: '0 0 8px .2rem rgba(113, 0, 252, .3)'},
          extraCssHover: {boxShadow: '0 0 20px .3rem rgba(113, 0, 252, .6)'},
      },
      {
          title: 'Footprint',
          description: 'Apprivoisez les ordres de grandeurs des émissions de gaz à effet de serre relatifs à nos activités quotidiennes.',
          logo: foot,
          backgroundColor: '#ffffff',
          darkModeBackgroundColor: '#0A0A0A',
          darkModeColor: 'white',
          color: '#ff4b31',
          link: 'https://footprint.climatelab.fr',
          extraCss: {boxShadow: '0 0 8px .2rem rgba(255, 75, 48, .3)'},
          extraCssHover: {boxShadow: '0 0 20px .3rem rgba(255, 75, 48, .6)'}
      },
      {
          title: 'Neutral',
          description: 'Repérez-vous au travers de la transition énergétique.',
          logo: compass,
          backgroundColor: '#ffffff',
          darkModeBackgroundColor: '#0A0A0A',
          color: '#040D21',
          darkModeColor: 'white',
          link: 'https://neutral.climatelab.fr',
          extraCss: {boxShadow: '0 0 8px .2rem rgba(150, 150, 150, .3)'},
          extraCssHover: {boxShadow: '0 0 20px .3rem rgba(150, 150, 150, .6)'},
      },
      {
          title: 'FAQ du climat',
          description: 'Les réponses à tes questions sur le climat et l\'énergie.',
          logo: glass,
          backgroundColor: '#ffffff',
          darkModeBackgroundColor: '#0A0A0A',
          color: '#FF313E',
          darkModeColor: 'white',
          link: 'https://faqduclimat.climatelab.fr',
          extraCss: {boxShadow: '0 0 8px .2rem rgba(255, 49, 62, .3)'},
          extraCssHover: {boxShadow: '0 0 20px .3rem rgba(255, 49, 62, .6)'},
      },
  ]

  return (
    <div className={"App"}>
        <header className="container header">
            <div className="row align-items-center">
                <div className="col d-flex justify-content-between">
                    <a href={"/"} className={"d-flex align-items-center"}>
                            <img height={27} width={27} className={"logo-img mr-2"} src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png" alt="Alambic"/> ClimateLab
                    </a>
                    <nav className={"d-none d-sm-flex align-items-center"}>
                            <DarkModeToggle
                                onChange={setIsDarkMode}
                                isDarkMode={isDarkMode}
                                size={55}
                            />
                        <div className={"header-links-trigger ml-3"}>
                            <div className={"d-flex align-items-center"}>
                                <div className={"mr-2 text-nowrap"}>Les outils</div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"
                                     className="Navigation_pageArrow__3E5fm" role="presentation">
                                    <path d="M.371 2.995A.6.6 0 01.822 2h4.356a.6.6 0 01.451.995L3.602 5.312a.8.8 0 01-1.204 0z"
                                          fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className="header-links-wrapper">
                                <ul className={"header-links"}>
                                    {tools.map((tool, index) => (
                                        <li key={index}>
                                            <a rel="noreferrer noopener" target={"blank"} href={tool.link} className={"header-link d-flex align-items-center"}>
                                                <img height={25} width={25} className={"mr-2"} src={tool.logo} alt="Logo du projet"/>
                                                {tool.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav className={"d-block d-sm-none"} role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" onChange={e => {
                                if (e.target.checked) {
                                    document.body.classList.add('overflow-y-hidden')
                                } else {
                                    document.body.classList.remove('overflow-y-hidden')
                                }
                            }} />

                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id="menu">
                                <li style={{height: '50px'}} className={"text-right"}>
                                    <DarkModeToggle
                                        onChange={setIsDarkMode}
                                        isDarkMode={isDarkMode}
                                        size={55}
                                    />
                                </li>
                                {tools.map((tool, index) => (
                                    <li key={index}>
                                        <a rel="noreferrer noopener" target={"blank"} href={tool.link} className={"header-link d-flex align-items-center"}>
                                            <img height={20} width={20} className={"mr-2"} src={tool.logo} alt="Logo du projet"/>
                                            {tool.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        <div className="container mt-4 mt-md-5">
            <div className="row">
                <div className="col d-flex flex-column align-items-center text-center">
                    <h1>ClimateLab</h1>
                    <h2 className={"app-subtitle"}>{projectDescription}</h2>
                </div>
            </div>
        </div>
        <div className="container mt-3 pb-5">
            <div className="row justify-content-center">
                {tools.map((tool, index) => (
                    <div className="col-12 col-md-6 mt-3" style={{marginBottom: 14}} key={index}>
                        <Tool tool={tool} darkMode={isDarkMode}/>
                    </div>
                ))}
            </div>
        </div>
        <footer className="mt-5 pt-5 pb-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-7">
                        <a href={"/"} className={"footer-title d-flex align-items-center font-weight-700 mb-3"}>
                            ClimateLab <img height={27} width={27} className={"logo-img ml-3"} src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png" alt="Thermomètre"/>
                        </a>
                        <div>
                            {projectDescription}
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    {tools.map((tool, index) => (
                        <div key={index} className="col-12 col-md-auto font-weight-700">
                            <a rel="noreferrer noopener" target={"blank"} href={tool.link} className={"header-link d-flex align-items-center"}>
                                {tool.title}
                                <img height={25} width={25} className={"ml-2"} src={tool.logo} alt="Logo du projet"/>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="row mt-4">
                    <div className="col">
                        ©2022 ClimateLab
                    </div>
                </div>
            </div>
        </footer>
        <div className="container pb-3">
            <div className="row">
                <div className="col text-center">
                    Fait avec amour par <strong><a target="_blank" rel="noopener noreferrer" href="https://github.com/alexandre-mace">@alexandre-mace</a></strong>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
