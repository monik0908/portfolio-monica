import Image from "next/image";

export default function Home() {
  return (

    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-amber-50">
      <header className="bg-slate-300 text-slate-800 p-4">
        <div className="flex  justify-between items-center max-w-6xl mx-auto">

          {/*logo al lado izquierdo*/}
          <div className="flex items-center gap-2" >
            <Image src="/images/logo.png" alt="logo" width={120} height={120} className="object-contain w-36 h-12" />
            <span className="font-bold text-4xl uppercase tracking-widest ">Monica Patiño</span>
          </div>

          {/*navegación al lado derecho*/}
          <nav className="flex items-center text-3xl gap-16 px-7 ">
            <a href="#about" className="  hover:text-fuchsia-500 hover:text-4xl    transition-colors  py-1">About me</a>
            <a href="#projects" className= " hover:text-fuchsia-500 hover:text-4xl transition-colors  py-1">Projects</a>
            <a href="#contact" className="  hover:text-fuchsia-500 hover:text-4xl  transition-colors py-1">Contact</a>
          </nav>
        </div>
      </header>
      <main className="overflow-y-auto P-1 MX-auto m-6 ">
        <div className="flex flex-row justify-between gap-6 max-w-4xl mx-auto">
          <Image
            src="/images/fotomonica.jpeg"
            alt="fotomonica"
            width={100}
            height={100}
            className="object-cover w-64 h-64 mx-auto mb-6 border-4 border-solid border-slate-400 rounded-full"
          />
          <div>
            <h1>Hello, I`m Mónica!</h1><br />
            <p className="text-2xl tracking-wide leading-relaxed text-4xl text-justify">I am a Web developer focused on creating modern solutions for small businesses. With a passion for technology and a knack for problem-solving, I specialize in building responsive and user-friendly websites that help businesses establish a strong online presence.</p><br />

          </div>
        </div>
        <hr className="my-8 border-slate-400" />
        <div id="about" className="flex flex-row gap-20 m-4 bg-amber-100">
          <div>
          <h1>About me </h1><br />
          <p className="text-2xl tracking-wide leading-relaxed text-4xl text-justify ">
            Web developer with a background in Web Application Development (Advanced Vocational Training in Spain) and professional experience in accounting and administration.

            I combine technical knowledge with business acumen to create modern, functional web solutions designed to address real-world needs. I currently work with technologies such as React, Next.js, and digital tools focused on improving processes and user experiences.

            I am particularly interested in developing web projects for small businesses, automation, and AI-powered solutions. I am passionate about learning and continuously improving my skills to create innovative and effective web applications.</p>
          </div>
          <Image src="/images/aboutme.jpg" alt="aboutme" width={640} height={480} className="object-contain w-auto h-auto mx-auto mb-6  " />
        </div>
        <h1>Tecnologies</h1><br />
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
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
              Interactive web platform for learning technical English and specialized work vocabulary, designed to help professionals successfully defend themselves in interviews and job offers.
            </p>
            <div className="flex flex-wrap gap-2 mb-4 w-full align-items-center justify-center">
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">React</span>
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">Vite</span>
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">PHP</span>
              <span className="bg-slate-800 text-cyan-400 text-sm px-2.5 py-1 rounded-md font-mono">MySQL</span>
            </div>
            <a
              href="https://github.com/monik0908/worklang.git"
              target="_blank"
              className="inline-block text-center bg-slate-400 hover:bg-cyan-600 text-slate-950 font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Ver Código en GitHub
            </a>
          </div>
          <div className="border-4 border-solid border-slate-400 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Project 2: Portfolio Website</h2>
            <p>Created a personal portfolio website to showcase my projects and skills, utilizing modern design principles and responsive layouts to ensure an optimal viewing experience across devices.</p>
          </div>

        </div><br />
        <h1>Contact me</h1><br />
        <ul className="list-disc list-inside mb-4">
          <li className="flex  text-2xl tracking-wide leading-relaxed  hover:text-cyan-700 transition-colors text-justify p-3"><Image src="/images/email.jpg" alt="Email" width={40} height={40} className="mr-2" />Email:   <a href="mailto:monica@hotmail.com">monica@hotmail.com</a></li>
          <li className="flex text-2xl tracking-wide leading-relaxed  hover:text-cyan-700 transition-colors text-justify p-3"><Image src="/images/in.png" alt="LinkedIn" width={40} height={40} className="mr-2" /> LinkedIn:   <a href="https://www.linkedin.com/in/mónica-patiño-64672b200" target="_blank" rel="noopener noreferrer">linkedin.com/in/monica-patino</a></li>
          <li className="flex text-2xl tracking-wide leading-relaxed  hover:text-cyan-700 transition-colors text-justify p-3 "><Image src="/images/github.png" alt="GitHub" width={40} height={40} className="mr-2" />GitHub:   <a href="https://github.com/monik0908" target="_blank" rel="noopener noreferrer">github.com/monica</a></li>
        </ul>
      </main>
      <footer className="bg-slate-900 text-white p-4 align-items-center text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

          {/* Izquierda: Copyright */}
          <div>
            © {new Date().getFullYear()} Monica Patiño. Todos los derechos reservados.
          </div>

          {/* Derecha: Créditos de tecnología */}
          <div className="text-slate-500 text-md font-mono">
            Construido con <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Next.js</span>
          </div>

        </div>
      </footer>
    </div>

  );
}
