import React, { useEffect, useRef, useState } from 'react';
import { Bot,Cpu, Mail, Phone, MapPin, Github, Twitter, Instagram, Linkedin, Menu, X, Download, CodeXml, CircuitBoard,ActivitySquare, Gauge } from 'lucide-react';
import heroAvatar from '@/assets/hero-avatar.jpg';
import portfolio1 from '@/assets/portfolio-1.png';
import portfolio2 from '@/assets/portfolio-2.png';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.png';
import portfolio5 from '@/assets/portfolio-5.png';
import portfolio6 from '@/assets/portfolio-6.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const { toast } = useToast();
  const particlesRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Particle system
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        if (particlesContainer.contains(particle)) {
          particlesContainer.removeChild(particle);
        }
      }, 3000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.section-appear');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  // Skills section observer for bar animation
  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !skillsVisible) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, [skillsVisible]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };

  const portfolioItems = [
    {
      id: 1,
      title: "TRIAC-Based Pump Flow Control System with PID",
      description: " Built a PID-based pump flow control system that used a TRIAC driver circuit and YF-S201 flow sensor for real-time feedback. Controlled TRIAC firing angle dynamically to regulate flow rate with improved accuracy.",
      image: portfolio1,
      tags: [" PID tuning", "Power electronics", "Flow sensing (YF-S201)"],
      link: "https://drive.google.com/drive/folders/101ETGjx-U8a2sMTe82iNjmRblM48ueJs?usp=sharing"
    },
    {
      id: 2,
      title: "First-Order Electronic System with PID Control",
      description: "Designed and implemented a PID controller for a first-order electronic system. Completed simulation in MATLAB, circuit modeling in LTspice using op-amps, and hardware implementation. Tuned PID gains to stabilize the system response and improve performance.",
      image: portfolio2,
      tags: ["PID control", "MATLAB simulation", "LTspice circuit modeling"],
      link: "https://drive.google.com/drive/folders/1qpMBAqIGWOof0BiGViUGW1hm7LPFYASH?usp=sharing"
    },
    {
      id: 3,
      title: "Gesture-Controlled Robotic Car",
      description: " Designed and developed a robotic car controlled by hand gestures using an ESP32 microcontroller and MPU6050 IMU sensor.Integrated gesture recognition with wireless communication for responsive and intuitive motion control.",
      image: portfolio3,
      tags: ["ESP32 ", "IMU sensor (MPU6050)", "Wireless communication"],
      link: "https://drive.google.com/drive/folders/1QJ-OABww8TneLAaWxgwxN4w4hauvN6sh?usp=sharing"
    },
    {
      id: 4,
      title: "Proximity Sensor using LM358 and Laser Module",
      description: "Designed a low-cost optical proximity sensor using an LM358 comparator and laser emitter-receiver module. Achieved accurate object detection and implemented LED indication upon beam interruption.                                                                               ",
      image: portfolio4,
      tags: ["Analog circuit design", "LM358 comparator", "Laser module"],
      link: "https://drive.google.com/drive/folders/1sZIFZD0q-r85WGepkZEZ-3baKTAMaVgM?usp=sharing"
    },
    {
      id: 5,
      title: "To Measure Foot Pressure Using Piezoelectric Sensors Interfaced with an ESP32 Microcontroller ",
      description: "Designed a low-cost and efficient system that captures and visualizes foot pressure data using piezoelectric sensors and an ESP32 microcontroller- process the data and transmit it wirelessly to a web interface for easy interpretation.",
      image: portfolio5,
      tags: [" Piezoelectric sensor", "ESP32", "data processing module"],
      link: "https://youtu.be/J1bipZ-k3js"
    },
    {
      id: 6,
      title: "SUMMER TRAINING Institute Name: ONGC Tripura Power Company(OTPC) Limited",
      description: " Acquired knowledge on systems like air compressors, gas turbines, steam turbines, and various control valves. – Gained insights into closed-loop control systems and experience in handling field instruments, calibration techniques, and understanding gas booster compressors and steam generation processes (HRSG)",
      image: portfolio6,
      tags: ["Process control systems", " PLC & SCADA basics", "Types of Valves"],
      link: "https://drive.google.com/file/d/1Vv6NEAvbCyXJEI_TfH86vMD4wy5_NqQ_/view?usp=sharing"
    }
  ];

  const skills = [
    {
      id: 1,
      title: "Embedded Systems",
      description: "Designing smart control systems using 8085, Arduino, and real-time embedded logic.",
      icon: Cpu,
      level: 85
    },
    {
      id: 2,
      title: "Control System",
      description: "Designing stable and efficient systems using PID, LQR, and feedback control.",
      icon: ActivitySquare,
      level: 95
    },
    {
      id: 3,
      title: "Circuit Design",
      description: "Creating and analyzing analog & digital circuits using LTspice and MATLAB.",
      icon: CircuitBoard,
      level: 88
    },
    {
      id: 4,
      title: "Web Design",
      description: "Designing responsive and engaging websites that blend aesthetics with functionality.",
      icon: CodeXml,
      level: 40
    },
    {
      id: 5,
      title: "Sensors & Instrumentation",
      description: "Integrating precision sensors for real-time data acquisition and process monitoring — developing complete measurement-to-control systems for industrial and robotics applications.",
      icon: Gauge,
      level: 90
    },
    {
      id: 6,
      title: "Robotics & Simulation",
      description: "Building and testing autonomous robotic systems in simulated environments like CoppeliaSim and Gazebo — implementing balance, motion, and path control algorithms",
      icon: Bot,
      level: 93
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-20 opacity-30">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      {/* Particle System */}
      <div ref={particlesRef} className="particles fixed inset-0 -z-10 pointer-events-none"></div>

      {/* Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur navbar-scrolled py-2' : 'navbar-blur py-4'
      }`}>
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            <a 
              href="#" 
              className="font-orbitron text-2xl lg:text-3xl font-black text-foreground animate-pulse-glow"
            >
              BRK
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'portfolio', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="font-space text-lg capitalize text-foreground hover:text-primary transition-colors relative group"
                >
                  {section}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-psychedelic-orange to-psychedelic-yellow transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'
              }`}></span>
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="flex flex-col space-y-4 mt-4">
                {['about', 'portfolio', 'skills', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="font-space text-lg capitalize text-foreground hover:text-primary transition-colors text-left"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text Content - Always first */}
            <div className="w-full lg:w-3/5 order-1">
              <div className="space-y-8 animate-slide-in-left">
                <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black leading-tight gradient-text">
                  Designing Balance Between Circuits & Code.
                </h1>
                <p className="font-space text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in">
                  Bridging embedded hardware and intelligent algorithms to build systems that sense, decide, and act.
                </p>
                {/* Buttons - Desktop only */}
                <div className="hidden lg:flex flex-wrap gap-4">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-psychedelic text-lg px-8 py-6 rounded-full font-space font-bold uppercase tracking-wide"
                  >
                    Let's Connect
                  </Button>
                  <Button 
                    onClick={() => {
                      const link = document.createElement('a');
                      window.open('https://drive.google.com/file/d/1UI3YxyIv7PZxtiQx14GfzruWJqWUEqe6/view?usp=sharing', '_blank', 'noopener,noreferrer');
  
                    }}
                    variant="outline"
                    className="text-lg px-8 py-6 rounded-full font-space font-bold uppercase tracking-wide border-2 border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="mr-2" />
                    Download CV
                  </Button>
                </div>  
              </div>
            </div>
            
            {/* Image - Second on mobile and desktop */}
            <div className="w-full lg:w-2/5 flex justify-center animate-slide-in-right order-2">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary shadow-glow-pink overflow-hidden avatar-float">
                  <img 
                    src={heroAvatar} 
                    alt="BRK - Creative Designer" 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
             </div>

            {/* Buttons - Mobile/Tablet only, appears after image */}
            <div className="w-full lg:hidden order-3 flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-psychedelic text-lg px-8 py-6 rounded-full font-space font-bold uppercase tracking-wide"
              >
                Let's Connect
              </Button>
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                      window.open('https://drive.google.com/file/d/1UI3YxyIv7PZxtiQx14GfzruWJqWUEqe6/view?usp=sharing', '_blank', 'noopener,noreferrer');
                
                    }}
                variant="outline"
                className="text-lg px-8 py-6 rounded-full font-space font-bold uppercase tracking-wide border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Download className="mr-2" />
                Download CV
              </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-center mb-16 section-appear">
            About Me
            <span className="block w-24 h-1 bg-gradient-to-r from-psychedelic-orange to-psychedelic-yellow mx-auto mt-4 animate-pulse"></span>
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative section-appear">
              <img 
                src={heroAvatar} 
                alt="About BRK" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-8 -left-8 text-6xl text-primary animate-spin-slow">
                <Bot />
              </div>
              <div className="absolute -bottom-6 -right-6 text-6xl text-psychedelic-yellow animate-spin-slow">
                <Cpu/>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6 section-appear">
              <h3 className="font-orbitron text-3xl font-bold text-primary mb-6">
                Bridging Circuits, Code, and Control Design
              </h3>
              <div className="space-y-4 font-space text-lg text-muted-foreground">
                <p className="animate-fade-in-up">
                  I’m Barshayan Roy Karmakar, a final-year Electronics and Instrumentation Engineering student at NIT Agartala.
                  My passion lies in building systems that connect the precision of electronics with the intelligence of code — transforming control theory into real-world automation.
                </p>
                <p className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  Over the years, I’ve designed and tuned PID-controlled systems, developed simulation-based robots in CoppeliaSim, and implemented hardware projects involving TRIAC-based flow control, sensor calibration, and embedded programming using Arduino and Python.
                </p>
                <p className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  Whether it’s balancing a robot, stabilizing a process, or optimizing a user interface, I aim to create designs where control meets creativity — systems that are not just functional, but intelligent and adaptive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-center mb-16 section-appear">
            My Work
            <span className="block w-24 h-1 bg-gradient-to-r from-psychedelic-purple to-psychedelic-pink mx-auto mt-4 animate-pulse"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <a
                key={item.id}
                 href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card 
                  className="card-glass rounded-2xl overflow-hidden section-appear group cursor-pointer hover:shadow-glow-pink transition-shadow duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="font-orbitron text-xl font-bold text-primary">{item.title}</h4>
                    <p className="font-space text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="tag-psychedelic px-3 py-1 rounded-full text-sm text-white font-space font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24" ref={skillsRef}>
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-center mb-16 section-appear">
            My Skills
            <span className="block w-24 h-1 bg-gradient-to-r from-psychedelic-pink to-psychedelic-purple mx-auto mt-4 animate-pulse"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={skill.id}
                  className="card-glass rounded-2xl p-8 section-appear hover:shadow-glow-pink transition-all duration-300"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-psychedelic-purple to-psychedelic-pink flex items-center justify-center shadow-glow-pink">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-orbitron text-xl font-bold text-primary">{skill.title}</h4>
                  </div>
                  <p className="font-space text-muted-foreground mb-6">
                    {skill.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-space text-sm text-muted-foreground">Proficiency</span>
                      <span className="font-orbitron font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-psychedelic-purple via-psychedelic-pink to-psychedelic-orange rounded-full transition-all duration-1000 ease-out"
                        style={{width: skillsVisible ? `${skill.level}%` : '0%'}}
                      ></div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="font-orbitron text-4xl md:text-6xl font-black text-center mb-16 section-appear">
            Let's Work Together
            <span className="block w-24 h-1 bg-gradient-to-r from-psychedelic-orange to-psychedelic-pink mx-auto mt-4 animate-pulse"></span>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-16">
            <Card className="lg:w-3/5 card-glass rounded-3xl p-8 section-appear">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-space font-medium text-primary mb-2">Name</label>
                    <Input 
                      className="bg-background/50 border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-space font-medium text-primary mb-2">Email</label>
                    <Input 
                      type="email"
                      className="bg-background/50 border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-space font-medium text-primary mb-2">Subject</label>
                  <Input 
                    className="bg-background/50 border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-primary"
                    placeholder="Project inquiry"
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-space font-medium text-primary mb-2">Message</label>
                  <Textarea 
                    className="bg-background/50 border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:ring-primary min-h-32 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="btn-psychedelic w-full text-lg py-6 rounded-xl font-space font-bold uppercase tracking-wide"
                >
                  Send Message
                </Button>
              </form>
            </Card>
            
            <div className="lg:w-2/5 space-y-8 section-appear">
              <div>
                <h3 className="font-orbitron text-3xl font-bold text-primary mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="contact-icon w-12 h-12 rounded-full flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-orbitron font-bold text-lg">Email</h5>
                      <p className="font-space text-muted-foreground">barshayanrock@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="contact-icon w-12 h-12 rounded-full flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-orbitron font-bold text-lg">Phone</h5>
                      <p className="font-space text-muted-foreground">+91-6009776967</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="contact-icon w-12 h-12 rounded-full flex items-center justify-center text-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-orbitron font-bold text-lg">Location</h5>
                      <p className="font-space text-muted-foreground">Tripura,Agatala</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-orbitron text-xl font-bold text-primary mb-6">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Barshayan" },
                    { icon: Twitter, href: "https://x.com/Barshayan" },
                    { icon: Instagram, href: "https://www.instagram.com/barshayanroykarmakar/" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/barshayan-roy-karmakar/" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link w-12 h-12 rounded-full flex items-center justify-center text-foreground"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center">
            <p className="font-space text-muted-foreground text-center ">
              © 2025 BRK. All rights reserved. Crafted with love.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;