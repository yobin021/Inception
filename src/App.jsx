import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './components/ScrollReveal';
import Magnet from './components/Magnet';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import InceptionSvg from './components/InceptionSvg';
import Loader from './components/Loader';

// Animated counter component
function AnimatedCounter({ target, suffix = '', duration = 2000, className = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}

// Floating particles background component
function FloatingParticles({ count = 15, colors = ['#00f0ff', '#ff3cac', '#7b2fff'] }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    color: colors[i % colors.length],
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
          }}
          animate={{
            y: ["100vh", "-10vh"],
            rotate: [0, 720],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Animated gradient underline for section titles
function GradientUnderline() {
  return (
    <motion.div
      className="h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    />
  );
}

// Countdown Timer component
function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const blocks = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Mins' },
    { value: timeLeft.seconds, label: 'Secs' },
  ];

  return (
    <div className="flex items-center gap-3 md:gap-5">
      {blocks.map((block, i) => (
        <React.Fragment key={block.label}>
          <div className="flex flex-col items-center">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ borderColor: 'rgba(0,240,255,0.4)', boxShadow: '0 0 20px rgba(0,240,255,0.15)' }}
            >
              <span className="font-display text-3xl md:text-4xl text-white">{String(block.value).padStart(2, '0')}</span>
            </motion.div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-2">{block.label}</span>
          </div>
          {i < blocks.length - 1 && (
            <span className="font-display text-2xl text-primary/40 -mt-5">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Background decorative orbs
function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[150px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Global scanline effect
function Scanlines() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03] overflow-hidden">
      <div className="h-full w-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsLoading(false), 500); // Wait for CSS opacity transition
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`fixed inset-0 z-9999 transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
          <Loader />
        </div>
      )}
      <div className="min-h-screen bg-background-dark font-body text-slate-100 overflow-x-hidden selection:bg-primary/30 relative">
        <BackgroundOrbs />
        <Scanlines />
        {/* Navigation */}
        <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="font-display text-3xl tracking-wider text-white">INCEPTION</h2>
            </div>
            <nav className="hidden md:flex items-center gap-10">
              <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors relative group" href="#about">About<span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span></a>
              <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors relative group" href="#stats">Stats<span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span></a>
              <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors relative group" href="#schedule">Schedule<span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span></a>
              <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors relative group" href="#partners">Partners<span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300"></span></a>
              <Magnet padding={50} disabled={false} magnetStrength={10}>
                <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-6 py-2 rounded-xl glow-cyan font-mono text-sm uppercase">
                  Register Now
                </button>
              </Magnet>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 grid-pattern">
          <FloatingParticles count={10} />
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-background-dark pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
            <div className="flex flex-col items-center justify-center gap-16 text-center max-w-4xl mx-auto">
              <div className="flex flex-col items-center w-full space-y-8">
                <div className="flex flex-col items-center justify-center mb-4 w-full text-center">
                  <div className="flex flex-col items-center w-full">
                    <img src="/licet_logo.png" alt="LICET Logo" className="w-48 md:w-56 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                    <div className="space-y-1 text-center">
                      <h2 className="font-display tracking-widest text-4xl md:text-6xl text-white">Loyola-ICAM</h2>
                      <h3 className="font-mono font-bold tracking-wider text-lg md:text-xl text-white">COLLEGE OF ENGINEERING AND TECHNOLOGY</h3>
                      <p className="font-mono font-bold tracking-widest text-md md:text-lg text-white pb-2">(Autonomous)</p>
                      <p className="font-body font-medium text-xs md:text-sm text-slate-300">Loyola Campus, Nungambakkam, Chennai-600034</p>
                      <p className="font-body font-medium text-xs md:text-sm text-slate-300">Approved by AICTE and Affiliated to Anna University</p>
                    </div>
                  </div>
                </div>


                <motion.div
                  className="text-center flex flex-col items-center justify-center py-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <InceptionSvg />
                  {/* Edition separator */}
                  <div className="flex items-center gap-4 mt-6 md:mt-8 mb-2">
                    <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-primary/60"></div>
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-slate-400">Edition</span>
                    <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-primary/60"></div>
                  </div>
                  {/* Edition subtitle */}
                  <span className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent py-1">THE GENESIS</span>
                </motion.div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Magnet padding={50} disabled={false} magnetStrength={3}>
                    <motion.button
                      className="px-8 py-4 bg-primary text-background-dark font-display text-2xl tracking-wide rounded-xl glow-cyan"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(0,240,255,0.5)' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      REGISTER NOW
                    </motion.button>
                  </Magnet>
                </div>
                <div className="pt-6 font-mono text-lg md:text-xl text-primary/60 flex items-center justify-center gap-8">
                  <h4 className="flex items-center gap-2">
                    <img src="https://img.icons8.com/?size=100&id=111074&format=png&color=FFFFFF" alt="Calendar" className="w-5 h-5 opacity-70" />
                    March 26-27, 2026
                  </h4>
                  <h4 className="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=s0vJQMKvmaAl&format=png&color=FFFFFF" alt="Location" className="w-5 h-5 opacity-70" /> LICET, Chennai</h4>
                </div>
                {/* Countdown Timer */}
                <div className="pt-8">
                  <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-4">Event starts in</p>
                  <CountdownTimer targetDate="2026-03-26T08:00:00" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 bg-background-dark relative" id="about">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-6">
                <ScrollReveal index={0}>
                  <h2 className="font-headline text-3xl md:text-4xl text-white font-bold tracking-wide">ABOUT THE EVENT</h2>
                </ScrollReveal>
                <ScrollReveal index={1}>
                  <GradientUnderline />
                </ScrollReveal>
                <ScrollReveal index={2}>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Organized by the ECE department at Loyola ICAM College of Engineering and Technology (LICET), INCEPTION is a premier hackathon designed to foster innovation and technical excellence.
                  </p>
                </ScrollReveal>
                <ScrollReveal index={3}>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    We bring together the brightest minds to solve real-world challenges using cutting-edge electronics and communication technologies. This edition marks a new chapter in our pursuit of engineering brilliance.
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <ScrollReveal index={4}>
                    <motion.div
                      className="p-4 rounded-xl bg-card-dark border border-white/5 cursor-default"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(0,240,255,0.3)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <h4 className="font-mono text-xs uppercase font-bold text-primary">LICET Chennai</h4>
                      <p className="text-xs text-slate-500">Host Institution</p>
                    </motion.div>
                  </ScrollReveal>
                  <ScrollReveal index={5}>
                    <motion.div
                      className="p-4 rounded-xl bg-card-dark border border-white/5 cursor-default"
                      whileHover={{ scale: 1.05, borderColor: 'rgba(255,60,172,0.3)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <h4 className="font-mono text-xs uppercase font-bold text-secondary">ECE Department</h4>
                      <p className="text-xs text-slate-500">Technical Organizer</p>
                    </motion.div>
                  </ScrollReveal>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <ScrollReveal index={2} className="h-64 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center p-6 text-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500')] bg-cover opacity-20 group-hover:scale-110 transition-transform"></div>
                    <div className="relative z-10">
                      <div className="font-display text-5xl text-primary"><AnimatedCounter target={30} /></div>
                      <div className="font-mono text-xs uppercase tracking-widest text-white">Teams Competing</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal index={4} className="h-48 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(123,47,255,0.1)]">
                    <div>
                      <div className="font-display text-5xl text-accent"><AnimatedCounter target={20} /></div>
                      <div className="font-mono text-xs uppercase tracking-widest text-white">Hours Run</div>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="space-y-4">
                  <ScrollReveal index={3} className="h-48 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(255,60,172,0.1)]">
                    <div>
                      <div className="font-display text-5xl text-secondary"><AnimatedCounter target={120} /></div>
                      <div className="font-mono text-xs uppercase tracking-widest text-white">Innovators</div>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal index={5} className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-6 text-center overflow-hidden relative group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=500')] bg-cover opacity-20 group-hover:scale-110 transition-transform"></div>
                    <div className="relative z-10">
                      <div className="font-display text-5xl text-white"><AnimatedCounter target={4} duration={1000} /></div>
                      <div className="font-mono text-xs uppercase tracking-widest text-white">Per Team</div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-20 border-y border-white/10 bg-card-dark/30 relative" id="stats">
          <FloatingParticles count={10} />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div className="text-center group" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="font-display text-6xl text-white group-hover:text-primary transition-colors"><AnimatedCounter target={20} suffix="H" /></div>
                <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Endurance</div>
              </motion.div>
              <motion.div className="text-center group border-l border-white/10" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="font-display text-6xl text-white group-hover:text-secondary transition-colors"><AnimatedCounter target={30} /></div>
                <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Elite Teams</div>
              </motion.div>
              <motion.div className="text-center group border-l border-white/10" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="font-display text-6xl text-white group-hover:text-accent transition-colors"><AnimatedCounter target={120} /></div>
                <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Participants</div>
              </motion.div>
              <motion.div className="text-center group border-l border-white/10" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="font-display text-6xl text-white group-hover:text-white transition-colors"><AnimatedCounter target={4} duration={1000} /></div>
                <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Size of Squad</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eligibility & Jury */}
        <section className="py-32 bg-background-dark relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline text-3xl md:text-5xl text-white font-bold tracking-wide">ELIGIBILITY</h2>
              <div className="flex justify-center"><GradientUnderline /></div>
              <p className="text-slate-400 font-mono text-sm tracking-widest uppercase mt-4">Who can participate?</p>
            </div>

            <ScrollStack
              itemDistance={40}
              itemScale={0.05}
              itemStackDistance={50}
              stackPosition={0.15}
              scaleEndPosition={0.05}
              baseScale={0.85}
            >
              <ScrollStackItem itemClassName="p-10 md:p-14 rounded-3xl bg-card-dark border border-white/10 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-start shadow-2xl">
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-white mb-3 text-2xl md:text-3xl font-display tracking-wide">Undergraduates</h4>
                  <p className="text-slate-400 text-lg">Current engineering students from any recognized institution across India.</p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="p-10 md:p-14 rounded-3xl bg-card-dark border border-white/10 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-start shadow-2xl">

                <div className="text-center md:text-left">
                  <h4 className="font-bold text-white mb-3 text-2xl md:text-3xl font-display tracking-wide">Inter-college Teams</h4>
                  <p className="text-slate-400 text-lg">Collaborate with peers across different colleges to form your ultimate squad.</p>
                </div>
              </ScrollStackItem>

              <ScrollStackItem itemClassName="p-10 md:p-14 rounded-3xl bg-card-dark border border-white/10 flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-start shadow-2xl">

                <div className="text-center md:text-left">
                  <h4 className="font-bold text-white mb-3 text-2xl md:text-3xl font-display tracking-wide">Tech Focus</h4>
                  <p className="text-slate-400 text-lg">Projects can be on both hardware and software.</p>
                </div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </section>

        {/* Event Timeline */}
        <section className="py-32 bg-card-dark relative overflow-hidden" id="schedule">
          <FloatingParticles count={12} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 blur-[100px] rounded-full"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <motion.h2
                className="font-headline text-3xl md:text-5xl text-white mb-4 font-bold tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >EVENT TIMELINE</motion.h2>
              <div className="flex justify-center mb-4"><GradientUnderline /></div>
              <motion.p
                className="font-mono text-xs text-primary tracking-widest uppercase"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >Chronicle of Innovation</motion.p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Day 1 */}
              <div className="space-y-8">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="px-5 py-2 bg-gradient-to-r from-primary to-primary/70 text-background-dark font-display text-xl rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0,240,255,0.5)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >DAY 01</motion.span>
                  <span className="font-mono text-sm text-slate-400">March 26, 2026</span>
                </motion.div>
                <div className="space-y-4 relative pl-8 ml-4">
                  <motion.div
                    className="absolute left-0 top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                  {[
                    { time: '8:00 – 8:30 AM', title: 'Registration', desc: 'Team check-ins and participant verification.', color: 'primary', dotColor: '#00f0ff', highlight: true },
                    { time: '8:30 – 9:00 AM', title: 'Inauguration & Briefing', desc: 'Opening ceremony, rules walkthrough & problem overview.', color: 'slate', dotColor: null, highlight: false },
                    { time: '9:00 AM', title: 'Hackathon Begins', desc: 'The clock starts — 20 hours of building ahead!', color: 'secondary', dotColor: '#ff3cac', highlight: true },
                    { time: '11:30 AM', title: 'Constraint 1 Released', desc: 'First mandatory constraint introduced to teams.', color: 'accent', dotColor: '#7b2fff', highlight: true },
                    { time: '1:30 PM', title: 'Review 1', desc: 'First evaluation round — present your progress.', color: 'primary', dotColor: '#00f0ff', highlight: true },
                    { time: '5:30 PM', title: 'Constraint 2 Released', desc: 'Second constraint dropped to challenge teams further.', color: 'accent', dotColor: '#7b2fff', highlight: true },
                    { time: '8:00 PM', title: 'Day 1 Hackathon Ends', desc: '11 hours of hacking completed. Rest up for Day 2.', color: 'secondary', dotColor: '#ff3cac', highlight: true },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative group"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                    >
                      <div
                        className={`absolute -left-[33px] top-3 w-4 h-4 rounded-full ${item.highlight ? `bg-${item.color} ring-4 ring-${item.color}/20 glow-pulse` : 'bg-slate-600'}`}
                        style={item.dotColor ? { color: item.dotColor } : {}}
                      ></div>
                      <motion.div
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-default ${item.highlight ? `border-${item.color}/20 bg-${item.color}/5 hover:bg-${item.color}/10 hover:border-${item.color}/40` : 'border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/15'}`}
                        whileHover={{ x: 8, boxShadow: item.dotColor ? `0 0 25px ${item.dotColor}15` : '0 0 15px rgba(255,255,255,0.05)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className={`font-mono text-xs ${item.highlight ? `text-${item.color}` : 'text-slate-500'} mb-1`}>{item.time}</div>
                        <h4 className="text-lg font-bold text-white group-hover:text-white/90">{item.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div className="space-y-8">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="px-5 py-2 bg-gradient-to-r from-accent to-accent/70 text-white font-display text-xl rounded-lg shadow-[0_0_20px_rgba(123,47,255,0.3)]"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(123,47,255,0.5)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >DAY 02</motion.span>
                  <span className="font-mono text-sm text-slate-400">March 27, 2026</span>
                </motion.div>
                <div className="space-y-4 relative pl-8 ml-4">
                  <motion.div
                    className="absolute left-0 top-0 w-px bg-gradient-to-b from-accent via-secondary to-transparent"
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                  />
                  {[
                    { time: '8:00 AM', title: 'Hackathon Resumes', desc: 'Day 2 kicks off — continue building your solution.', color: 'primary', dotColor: '#00f0ff', highlight: true },
                    { time: '10:30 AM', title: 'Review 2', desc: 'Second evaluation round with mentors.', color: 'slate', dotColor: null, highlight: false },
                    { time: '1:30 PM', title: 'Progress Check', desc: 'Final progress review before submission.', color: 'slate', dotColor: null, highlight: false },
                    { time: '4:00 PM', title: 'Hackathon Ends', desc: 'All projects must be submitted. Code freeze!', color: 'secondary', dotColor: '#ff3cac', highlight: true },
                    { time: '4:00 – 5:30 PM', title: 'Final Presentations & Judging', desc: 'Teams pitch their solutions to the expert jury panel.', color: 'primary', dotColor: '#00f0ff', highlight: true },
                    { time: '5:30 – 7:00 PM', title: 'Valedictory & Prize Distribution', desc: 'Closing ceremony, awards and celebration!', color: 'accent', dotColor: '#7b2fff', highlight: true },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative group"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                    >
                      <div
                        className={`absolute -left-[33px] top-3 w-4 h-4 rounded-full ${item.highlight ? `bg-${item.color} ring-4 ring-${item.color}/20 glow-pulse` : 'bg-slate-600'}`}
                        style={item.dotColor ? { color: item.dotColor } : {}}
                      ></div>
                      <motion.div
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-default ${item.highlight ? `border-${item.color}/20 bg-${item.color}/5 hover:bg-${item.color}/10 hover:border-${item.color}/40` : 'border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/15'}`}
                        whileHover={{ x: 8, boxShadow: item.dotColor ? `0 0 25px ${item.dotColor}15` : '0 0 15px rgba(255,255,255,0.05)' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <div className={`font-mono text-xs ${item.highlight ? `text-${item.color}` : 'text-slate-500'} mb-1`}>{item.time}</div>
                        <h4 className="text-lg font-bold text-white group-hover:text-white/90">{item.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Partners */}
        <section className="py-32 relative" id="partners">
          <FloatingParticles count={6} />
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-headline text-3xl md:text-5xl text-white mb-4 font-bold tracking-wide">INDUSTRY PARTNERS</h2>
            <div className="flex justify-center mb-16"><GradientUnderline /></div>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {[
                { name: 'TAMIZH', color: 'primary', shadow: 'rgba(0, 240, 255, 0.15)' },
                { name: 'INSPIRE SOLUTIONS', color: 'secondary', shadow: 'rgba(255, 60, 172, 0.15)' },
                { name: 'INFINTIN MOBILITY SOLUTIONS', color: 'accent', shadow: 'rgba(123, 47, 255, 0.15)' }
              ].map((partner) => (
                <motion.div
                  key={partner.name}
                  className={`px-10 py-6 border border-white/10 rounded-2xl bg-card-dark/50 flex flex-col items-center relative overflow-hidden group transition-colors duration-300`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 40px ${partner.shadow}`,
                    borderColor: `var(--color-${partner.color})`
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  <span className="font-display text-2xl text-white text-center max-w-[200px]">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card-dark border-t border-white/10 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16 mb-20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-2xl tracking-wider text-white">INCEPTION</h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Redefining the boundaries of electronics through collaborative innovation. Join us at LICET for a weekend that defines the future.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-primary font-bold"><a href="https://www.google.com/maps/place/LICET+:+Loyola-ICAM+College+of+Engineering+and+Technology/@13.0592975,80.2336586,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5266606a8d51eb:0xcfedaad4ca5bd750!8m2!3d13.0592975!4d80.2336586!16s%2Fm%2F0dlk73f?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D">Venue Info</a></h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-sm text-slate-400">
                      <p className="text-white font-bold">Loyola-ICAM College of Engineering and Technology</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 h-40 w-full relative">
                    <iframe
                      src="https://maps.google.com/maps?q=Loyola-ICAM%20College%20of%20Engineering%20and%20Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
                      allowFullScreen=""
                      loading="lazy"
                      title="LICET Map"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-secondary font-bold">Organized By</h4>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5">
                  <img src="/SEA.png" alt="SEA Logo" className="w-12 h-12 object-contain" />
                  <div>
                    <p className="text-white font-bold text-sm">SEA</p>
                    <p className="text-xs text-slate-500">Student Electronics Association</p>
                  </div>
                </div>
                {/* <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
                  <span className="material-symbols-outlined text-lg">public</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </a>
              </div> */}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-slate-600 text-xs font-mono">
              <p>© 2026 INCEPTION: THE GENESIS EDITION. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0,240,255,0.3)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
          </motion.button>
        )}
      </div>
    </>
  );
}

export default App;
