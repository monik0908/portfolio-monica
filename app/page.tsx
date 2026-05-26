import Image from "next/image";

export default function Home() {
  return (

    <div className="container mx-auto px-4 py-8">
      <div className="relative h-32 md:h-98 mb-4 bg-gray-200">
        <Image
          src="/images/banner.jpg"
          alt="banner"
          fill
          className="object-contain rounded-xl"
        />

      </div>
      <div className="relative h-32 md:h-98 mb-4 bg-gray-200">
        <Image
          src="/images/fotomonica.jpeg"
          alt="fotomonica"
          fill
          className="object-contain rounded-xl"
        />
      </div>
      <main className="bg-gray-100 p-6 rounded-lg">
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
<ul>
  <li>React</li>
  <li>Next.js</li>
  <li>JavaScript</li>
  <li>HTML/CSS</li>
  <li>Git</li>
  <li>Tailwind CSS</li>
</ul><br />
<br />
<h1>Projects</h1><br />
<ul>
  <li><a href="https://github.com/monica/portfolio-monica" target="_blank" rel="noopener noreferrer">Portfolio Website</a></li>
</ul><br />
<h1>Contact me</h1><br />
      </main>
    </div>

  );
}
