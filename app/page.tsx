import Image from "next/image";

export default function Home() {
  return (

    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <header className="bg-slate-400 text-white p-1>">
        <div className="flex  justify-between items-center max-w-6xl mx-auto">

          {/*logo al lado izquierdo*/}
          <div className="flex items-center gap-4" >
            <Image src="/images/logo.png" alt="logo" width={90} height={60} className="w-24 h-24" />
            <span className="font-bold text-4xl uppercase tracking-widest text-slate-100">Monica Patiño</span>
          </div>

          {/*navegación al lado derecho*/}
          <nav className="flex gap-9">
            <a href="#about" className="hover:text-cyan-400 transition-colors border-4  ">About me</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors  border-4 ">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors border-4">Contact</a>
          </nav>
        </div>
      </header>
      <main className="overflow-y-auto P-1 MX-auto ">
        <Image
          src="/images/fotomonica.jpeg"
          alt="fotomonica"
          width={100}
          height={100}
          className="object-cover w-48 h-48 mx-auto mb-6 border-4 border-solid border-slate-400 rounded-full"
        />


        <h1>Hello, I`m Mónica!</h1><br />
        <p>I'm a Web developer focused on creating modern solutions for small businesses.</p><br />
        <p>With a passion for technology and a knack for problem-solving, I specialize in building responsive and user-friendly websites that help businesses establish a strong online presence.</p><br />
        <br />
        <h1>About me </h1><br />
        <p>Web developer with a background in Web Application Development (Advanced Vocational Training in Spain) and professional experience in accounting and administration.

          I combine technical knowledge with business acumen to create modern, functional web solutions designed to address real-world needs. I currently work with technologies such as React, Next.js, and digital tools focused on improving processes and user experiences.

          I am particularly interested in developing web projects for small businesses, automation, and AI-powered solutions. I am passionate about learning and continuously improving my skills to create innovative and effective web applications.</p>
        <br />

        <h1>Tecnologies</h1><br />
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li><Image src="/images/react.png" alt="React" width={60} height={60} /> React</li>
          <li><Image src="/images/nextjs.jpg" alt="Next.js" width={60} height={60} /> Next.js</li>
          <li><Image src="/images/java.png" alt="JavaScript" width={60} height={60} /> JavaScript</li>
          <li><Image src="/images/html.jpg" alt="HTML/CSS" width={60} height={60} /> HTML/CSS</li>
          <li><Image src="/images/github.png" alt="Git" width={60} height={60} /> Git</li>
          <li><Image src="/images/tailwind.png" alt="Tailwind CSS" width={60} height={60} /> Tailwind CSS</li>
        </ul><br />
        <br />
        <h1>Projects</h1><br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col  border-4 border-solid border-slate-400 p-4 rounded-lg justify-items-center ">
            <h2 className="text-2xl font-bold mb-2">Project 1: WORKLANG</h2>
            <div className="relative w-full h-60 md:h-full min-h-50 bg-slate-800 rounded-lg ">
              <Image
                src="/images/worklang.png"
                alt="Captura de la plataforma de idiomas"
                fill className="object-contain rounded-lg bg-white"
              />
            </div>
            <p className="text-lg mb-4 leading-relaxed text-justify">
              Plataforma web interactiva para el aprendizaje de inglés técnico y vocabulario laboral especializado, diseñada para ayudar a profesionales a defenderse con éxito en entrevistas y ofertas de empleo.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 w-full align-items-center">
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">React</span>
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">Vite</span>
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">PHP</span>
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">MySQL</span>
            </div>
            <a 
        href="https://github.com/tu-usuario/tu-repositorio" 
        target="_blank" 
        className="inline-block text-center bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-2 px-4 rounded-lg transition-colors text-sm"
      >
        Ver Código en GitHub
      </a>
          </div>
          <div className="border-4 border-solid border-slate-400 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Project 2: Portfolio Website</h2>
            <p>Created a personal portfolio website to showcase my projects and skills, utilizing modern design principles and responsive layouts to ensure an optimal viewing experience across devices.</p>
          </div>
          <a href="https://github.com/monica/portfolio-monica" target="_blank" rel="noopener noreferrer">Portfolio Website</a>
        </div><br />
        <h1>Contact me</h1><br />
      </main>
      <footer className="bg-slate-400 text-white p-4 ">
        <p>Feel free to reach out to me via email at <a href="mailto:monica@hotmail.com">monica@hotmail.com</a></p>
      </footer>
    </div>

  );
}
