"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const responsibilitiesRef = useRef(null)
  const contactRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true })
  const isAboutInView = useInView(aboutRef, { once: true })
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const isEducationInView = useInView(educationRef, { once: true, margin: "-100px" })
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" })
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const isResponsibilitiesInView = useInView(responsibilitiesRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.a
              href="#"
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Rupesh Rovert
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Education", href: "#education" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Responsibilities", href: "#responsibilities" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 hover:underline transition-all"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-3 pb-3 space-y-3"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Education", href: "#education" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Responsibilities", href: "#responsibilities" },
                { name: "Contact", href: "#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-gray-900"
                  onClick={toggleMenu}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="mb-8 mx-auto w-40 h-40 relative rounded-full overflow-hidden border-4 border-white shadow-lg"
            style={{ opacity, y }}
            initial={{ scale: 0 }}
            animate={{ scale: isHeroInView ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          >
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="Profile"
              width={160}
              height={160}
              className="object-cover"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Rupesh Rovert Bhairavi
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Computer Science Engineering Student at IIIT Bhagalpur with expertise in MERN Stack development.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 flex items-center"
            >
              Contact Me <ChevronRight className="ml-1" size={18} />
            </a>
            <a
              href="#projects"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition duration-300"
            >
              View My Work
            </a>
            <a
              href="#"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition duration-300 flex items-center"
            >
              <Download className="mr-2" size={18} /> Resume
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="https://github.com/22Rupesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rupesh-rovert-056ba1298/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:rovertrupesh@gmail.com" className="text-white hover:text-gray-200 transition duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isAboutInView ? 1 : 0, y: isAboutInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isAboutInView ? 1 : 0, x: isAboutInView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="About Me"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <div className="md:w-1/2">
              <motion.h3
                className="text-2xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isAboutInView ? 1 : 0, y: isAboutInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Who I Am
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isAboutInView ? 1 : 0, y: isAboutInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm a Computer Science Engineering student at the Indian Institute of Information Technology Bhagalpur
                (2023-27), passionate about full-stack development with expertise in the MERN stack.
              </motion.p>

              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isAboutInView ? 1 : 0, y: isAboutInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I've gained practical experience through internships and open-source contributions, developing
                responsive web applications and collaborating on impactful projects. I'm constantly learning and
                expanding my skills in modern web technologies.
              </motion.p>

              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isAboutInView ? 1 : 0, y: isAboutInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a
                  href="https://github.com/22Rupesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rupesh-rovert-056ba1298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:rovertrupesh@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  <Mail size={24} />
                </a>
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isAboutInView ? 1 : 0, y: isAboutInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h4 className="text-lg font-semibold mb-2">Contact Information:</h4>
                <p className="text-gray-600">Email: rovertrupesh@gmail.com</p>
                <p className="text-gray-600">Phone: (+91) 8299582058</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isSkillsInView ? 1 : 0, y: isSkillsInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isSkillsInView ? 1 : 0, y: isSkillsInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="space-y-3">
                <AnimatedSkillBar skill="C" percentage={85} delay={0.1} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="C++" percentage={80} delay={0.2} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="JavaScript" percentage={90} delay={0.3} isInView={isSkillsInView} />
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isSkillsInView ? 1 : 0, y: isSkillsInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="space-y-3">
                <AnimatedSkillBar skill="HTML/CSS" percentage={95} delay={0.1} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="React.js" percentage={85} delay={0.2} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="Tailwind CSS" percentage={90} delay={0.3} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="Bootstrap" percentage={85} delay={0.4} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="Figma" percentage={75} delay={0.5} isInView={isSkillsInView} />
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isSkillsInView ? 1 : 0, y: isSkillsInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="space-y-3">
                <AnimatedSkillBar skill="Node.js" percentage={80} delay={0.1} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="Express.js" percentage={85} delay={0.2} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="MongoDB" percentage={80} delay={0.3} isInView={isSkillsInView} />
                <AnimatedSkillBar skill="Postman API" percentage={85} delay={0.4} isInView={isSkillsInView} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={educationRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isEducationInView ? 1 : 0, y: isEducationInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

              {/* IIIT Bhagalpur */}
              <TimelineItem
                title="Computer Science and Engineering"
                institution="Indian Institute of Information Technology Bhagalpur"
                duration="2023-27"
                side="right"
                isInView={isEducationInView}
                delay={0.1}
              />

              {/* XII */}
              <TimelineItem
                title="XII (CBSE)"
                institution="Ram Lakhan Public School"
                duration="2022"
                side="left"
                isInView={isEducationInView}
                delay={0.3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isExperienceInView ? 1 : 0, y: isExperienceInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Web Development Internship */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isExperienceInView ? 1 : 0, x: isExperienceInView ? 0 : -50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-2">Web Development Internship</h3>
              <p className="text-blue-600 mb-4">Octanet 2024</p>
              <p className="text-gray-600 mb-4">
                Interning as a web developer at Octanet 2024's, honing skills in responsive design, efficient coding,
                and real-world project delivery.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">HTML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">CSS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
              </div>
            </motion.div>

            {/* Open Source */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isExperienceInView ? 1 : 0, x: isExperienceInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-blue-600 mb-4">Girl Script of Code 2024</p>
              <p className="text-gray-600 mb-4">
                Contributing to GirlScript Code 2024's Open Source Program, fostering collaboration, building impactful
                projects, and promoting inclusivity in tech.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">HTML</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">CSS</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Tailwind</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Bootstrap</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">React.js</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isProjectsInView ? 1 : 0, y: isProjectsInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <AnimatedProjectCard
              title="StudyNotion"
              description="Developed a full-stack e-learning platform using MongoDB, Express.js, React.js, Node.js, and Tailwind CSS, enabling course management, authentication, and real-time collaboration."
              image="/placeholder.svg?height=200&width=300"
              tags={["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]}
              demoLink="https://study-notion-rovert.vercel.app/"
              codeLink="#"
              delay={0.1}
              isInView={isProjectsInView}
            />

            {/* Project 2 */}
            <AnimatedProjectCard
              title="Weather App"
              description="A Google Maps & Weather API based application for real-time weather information on Map with additional functionalities."
              image="/placeholder.svg?height=200&width=300"
              tags={["JavaScript", "API", "HTML", "CSS"]}
              demoLink="#"
              codeLink="#"
              delay={0.2}
              isInView={isProjectsInView}
            />

            {/* Project 3 */}
            <AnimatedProjectCard
              title="YouTube Clone"
              description="Building the YouTube Clone website using React.js, using APIs integration for dynamic video display and user interaction."
              image="/placeholder.svg?height=200&width=300"
              tags={["React.js", "API", "JavaScript"]}
              demoLink="#"
              codeLink="#"
              delay={0.3}
              isInView={isProjectsInView}
            />
          </div>
        </div>
      </section>

      {/* Responsibilities Section */}
      <section id="responsibilities" ref={responsibilitiesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isResponsibilitiesInView ? 1 : 0, y: isResponsibilitiesInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Position of Responsibility
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ECELL TEAM */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isResponsibilitiesInView ? 1 : 0, y: isResponsibilitiesInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-2">ECELL TEAM</h3>
              <p className="text-blue-600 mb-4">Club, IIIT BHAGALPUR</p>
              <p className="text-gray-600">
                Engaging with IIIT Bhagalpur E-Cell team, driving entrepreneurial activities, nurturing innovative
                ideas, and supporting a vibrant startup ecosystem.
              </p>
            </motion.div>

            {/* PR TEAM */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isResponsibilitiesInView ? 1 : 0, y: isResponsibilitiesInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-2">PR TEAM</h3>
              <p className="text-blue-600 mb-4">Society, IIIT BHAGALPUR</p>
              <p className="text-gray-600">
                Building networks across different IIITs as a PR team member, fostering collaboration and promoting
                shared initiatives effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isContactInView ? 1 : 0, y: isContactInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.form
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isContactInView ? 1 : 0, y: isContactInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>

            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isContactInView ? 1 : 0, y: isContactInView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Mail size={32} className="mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600">rovertrupesh@gmail.com</p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Github size={32} className="mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-600">github.com/22Rupesh</p>
              </motion.div>

              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <Linkedin size={32} className="mx-auto text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-600">linkedin.com/in/rupesh-rovert-056ba1298</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <motion.p className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            © {new Date().getFullYear()} Rupesh Rovert Bhairavi. All rights reserved.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://github.com/22Rupesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rupesh-rovert-056ba1298/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:rovertrupesh@gmail.com" className="text-gray-300 hover:text-white transition duration-300">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

// Animated Skill Bar Component
const AnimatedSkillBar = ({ skill, percentage, delay, isInView }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{skill}</span>
        <span className="text-gray-700">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1, delay: delay }}
        />
      </div>
    </div>
  )
}

// Animated Project Card Component
const AnimatedProjectCard = ({ title, description, image, tags, demoLink, codeLink, delay, isInView }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <ExternalLink size={16} className="mr-1" /> Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
          >
            <Github size={16} className="mr-1" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// Timeline Item Component
const TimelineItem = ({ title, institution, duration, side, isInView, delay }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center mb-8 ${side === "right" ? "md:flex-row-reverse" : ""}`}>
      <motion.div
        className={`md:w-1/2 ${side === "right" ? "md:pl-12" : "md:pr-12"} ${side === "right" ? "md:text-left" : "md:text-right"}`}
        initial={{ opacity: 0, x: side === "right" ? 50 : -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : side === "right" ? 50 : -50 }}
        transition={{ duration: 0.5, delay }}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-blue-600">{institution}</p>
        <p className="text-gray-600">{duration}</p>
      </motion.div>

      <div className="mx-4 my-2 md:my-0 relative">
        <motion.div
          className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
        />
      </div>

      <div className="md:w-1/2"></div>
    </div>
  )
}
