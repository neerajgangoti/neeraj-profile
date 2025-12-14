
'use client';
import { motion } from 'framer-motion';
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section className="hero container">
        <div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}}>
            Hi, I'm <br/>
            <span style={{color:'#08f'}}>Neeraj Kumar</span>
          </motion.h1>
          <h2>FULL STACK DEVELOPER</h2>
          <p>
            I am a professional Full Stack Developer with strong experience in building
            secure, scalable and high‑performance web applications. I specialize in
            modern JavaScript frameworks, PHP ecosystems, and server handling.
          </p>

          <div style={{marginTop:20, display:'flex', gap:15}}>
            <a href="mailto:neerajgangoti@gmail.com">📧 Email</a>
            <a href="tel:+919023952258">📞 Call</a>
            <a href="https://wa.me/919023952258">💬 WhatsApp</a>
          </div>
        </div>

        <div className="profile">
          <Image
    src="/images/neeraj_profile.png"
    alt="Neeraj Kumar"
    width={200}
    height={200}
    priority
  />
          
        </div>
      </section>

      <section className="container">
        <h2>About Me</h2>
        <p>
          I am a highly experienced Full Stack Developer with a proven track record of working with startups, digital agencies, and enterprise-level organizations. Over the years, I have successfully delivered scalable, secure, and performance-driven web applications tailored to real-world business requirements. My approach combines strong technical expertise, clean coding practices, and a deep understanding of user-centric development.

My core focus lies in building applications with clean architecture, modular and reusable components, and optimized performance to ensure long-term maintainability and scalability. I strongly believe that well-structured code and thoughtful system design are the foundation of any successful digital product. From database design and backend logic to frontend user experiences, I ensure every layer of the application is robust and future-ready.
 </p>
<p>As a full stack developer, I specialize in modern JavaScript frameworks and PHP-based ecosystems, including Next.js, React.js, Node.js, Laravel, CodeIgniter, WordPress, and WooCommerce. I have extensive experience in custom plugin development, API integrations, payment gateways, role-based systems, and complex business logic implementation. I also handle server configuration, deployment, security hardening, and performance optimization, ensuring applications run smoothly in production environments.
</p>
 
      </section>

      <section className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills">
          {['HTML5','CSS3','JavaScript','jQuery','Next.js','React.js','Node.js','Core PHP','Laravel','CodeIgniter','WordPress','WooCommerce','Plugin Development','Server Handling']
          .map(skill => (
            <div key={skill} className="card">{skill}</div>
          ))}
        </div>
      </section>

      <section className="container">
        <h2>My Services</h2>
        <div className="services">
          <div className="card">
            <h3>Web Application Development</h3>
            <p>Modern, secure and scalable web apps using latest technologies.</p>
          </div>
          <div className="card">
            <h3>E‑Commerce Solutions</h3>
            <p>WooCommerce & custom platforms with payment, shipping and tax logic.</p>
          </div>
          <div className="card">
            <h3>API & Backend Development</h3>
            <p>Robust APIs, database design and server optimization.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Portfolio</h2>
        <div className="portfolio">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="card">
              <h4>Project {i}</h4>
              <p>High‑quality professional project showcasing real‑world experience.</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Neeraj Kumar – Full Stack Developer. All rights reserved.
      </footer>
    </main>
  );
}
