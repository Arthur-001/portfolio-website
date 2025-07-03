import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Code, Palette, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../../config';
import personalPhoto from '../assets/images/personalPhoto.jpg';
import DirTreeGenImage from '../assets/images/huge_tree.png';
import ContactModal from '../components/ContactForm/contactForm';

const GITHUB_URL = CONTACT_INFO.github;
const LINKEDIN_URL = CONTACT_INFO.linkedin;
const EMAIL = CONTACT_INFO.email;
const PROJECT_DESCRIPTION_LIMIT = 180;

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
      const scrollPosition = window.scrollY + navbarHeight + 1;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Directory Tree Generator",
      description: "A cross-platform tool that generates visual directory structures with customizable filters, exclusions, and export options. Useful for directory mapping for large scale projects.",
      tech: ["Python", "PySide6"],
      github: `${GITHUB_URL}/Directory-Tree-Generator`,
      demo: "#",
      image: DirTreeGenImage
    },
    {
      title: "DeepSeek-R1-Hospital-Assistant",
      description: "This project develops a lightweight, specialized AI hospital assistant by fine-tuning the DeepSeek R1 1.5 Billion parameter model. Leveraging Retrieval Augmented Generation (RAG) and Low-Rank Adaptation (LoRA), we accelerate training and enhance accuracy to deliver faster, more effective answers for patients and new customers. Two distinct training methodologies are compared to optimize performance. Future plans include integration with Ollama for deploying highly specialized chatbots.",
      tech: ["Python", "PyTorch", "Transformers", "Dataset", "PEFT", "Tokenizers", "Numpy", "Pandas", "NLTK"],
      github: `${GITHUB_URL}/DeepSeek-R1-Hospital-Assistant`,
      demo: "#",
      image: "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Smart-Contract-Displayer",
      description: "An open-source project combining a backend server and a frontend interface. It aims to simplify blockchain interactions by displaying comprehensive smart contract details, functions, and events.",
      tech: ["Node.js", "dotenv", "Express.js", "Web3.js"],
      github: `${GITHUB_URL}/Smart-Contract-Displayer`,
      demo: "#",
      image: "https://plus.unsplash.com/premium_photo-1663931932716-3086b87f2ed1"
    },
    {
      title: "Smart-Brain-Frontend",
      description: "A web application offering user authentication (register, sign in, sign out) and allows users to submit image URLs for face detection, outlining faces with squares using the Clarifai API.",
      tech: ["Node.js", "Express.js", "React.js", "Knex", "PostgreSQL", "cors", "bcrypt", "RESTFUL_API"],
      github: `${GITHUB_URL}/smart_brain_frontend`,
      demo: "#",
      image: "https://plus.unsplash.com/premium_photo-1661293884144-d11c90f334ce"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-6 h-6" />, techs: ["React", "JavaScript", "TypeScript", "HTML/CSS"] },
    { name: "Backend", icon: <Zap className="w-6 h-6" />, techs: ["Node.js", "Python", "Express", "MongoDB"] },
    { name: "Design", icon: <Palette className="w-6 h-6" />, techs: ["Figma", "Tailwind CSS", "UI/UX", "Responsive Design"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav ref={navbarRef} className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-colors ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
                <div className="w-82 h-82 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <img
                        src={personalPhoto}
                        alt="Personal"
                        className="w-80 h-80 rounded-full object-cover border-0 border-gray-900"
                    />
                </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Shayan Behzadisam
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer & UI/UX Designer
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              I create beautiful, functional web applications and user experiences. 
              Passionate about clean code, modern design, and solving complex problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
              >
                View My Work
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>

            <div className="flex justify-center space-x-6 mt-12">
              <a href={GITHUB_URL} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" /> 
              </a>
              <a href={LINKEDIN_URL} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Contact%20from%20Portfolio&body=Hi%20Shayan%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.`}
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Send email to Shayan Behzadisam"
                title="Send email to Shayan Behzadisam"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with 3+ years of experience creating 
                web applications that combine beautiful design with robust functionality. 
                I love turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge through tech blogs and community events.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{skill.name}</h3>
                    <div className="text-sm text-gray-400">
                      {skill.techs.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1">
                <div className="w-full h-full bg-gray-900 flex items-center justify-center rounded-2xl overflow-hidden">
                  <img
                    src="https://i.pinimg.com/736x/f5/16/bb/f516bb741b41c11c7d262e0e845f4fea.jpg"
                    alt="Shayan Behzadisam profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col relative min-h-[420px]">
                <div className="aspect-video w-full bg-gray-900 rounded-t-xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col p-6 pb-16">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4" title={project.description}>
                    {project.description.length > PROJECT_DESCRIPTION_LIMIT
                      ? project.description.slice(0, PROJECT_DESCRIPTION_LIMIT - 3) + '...'
                      : project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-full px-6 pb-6 flex gap-4">
                  <a 
                    href={project.github}
                    target='blank'
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ContactModal />
            <a 
              href={LINKEDIN_URL}
              target="_blank"
              className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Connect on Linkedin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2025 Shayan Behzadisam. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;