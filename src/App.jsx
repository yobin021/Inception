import React, { useEffect } from 'react';
import ScrollReveal from './components/ScrollReveal';
import Magnet from './components/Magnet';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import GlitchText from './components/GlitchText';

function App() {
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
    <div className="bg-background-dark text-slate-100 font-body selection:bg-primary/30 overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl tracking-wider text-white">INCEPTION</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#about">About</a>
            <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#stats">Stats</a>
            <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#schedule">Schedule</a>
            <a className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors" href="#partners">Partners</a>
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

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                The Genesis Edition 2026

              </div>
              <h1 className="font-display text-7xl md:text-9xl text-white leading-[0.9] tracking-tight text-glow">
                <GlitchText speed={1} enableShadows={true} enableOnHover={false}>INCEPTION</GlitchText><br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent">THE GENESIS</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                The ultimate tech genesis begins at LICET Chennai. 24 hours of pure innovation, building the future of electronics and communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Magnet padding={50} disabled={false} magnetStrength={3}>
                  <button className="px-8 py-4 bg-primary text-background-dark font-display text-2xl tracking-wide rounded-xl glow-cyan">
                    REGISTER NOW
                  </button>
                </Magnet>
              </div>
              <div className="pt-6 font-mono text-sm text-primary/60 flex items-center justify-center gap-6">
                <h4 className="flex items-center gap-2">
                  <img src="https://img.icons8.com/?size=100&id=111074&format=png&color=FFFFFF" alt="Calendar" className="w-4 h-4 opacity-70" />
                  March 26-27, 2025
                </h4>
                <h4 className="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=s0vJQMKvmaAl&format=png&color=FFFFFF" alt="Location" className="w-4 h-4 opacity-70" /> LICET, Chennai</h4>
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
                <h2 className="font-display text-5xl text-white">ABOUT THE EVENT</h2>
              </ScrollReveal>
              <ScrollReveal index={1}>
                <div className="h-1 w-20 bg-primary"></div>
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
                <ScrollReveal index={4} className="p-4 rounded-xl bg-card-dark border border-white/5 hover:bg-white/5 transition-colors">
                  <h4 className="font-mono text-xs uppercase font-bold text-primary">LICET Chennai</h4>
                  <p className="text-xs text-slate-500">Host Institution</p>
                </ScrollReveal>
                <ScrollReveal index={5} className="p-4 rounded-xl bg-card-dark border border-white/5 hover:bg-white/5 transition-colors">
                  <h4 className="font-mono text-xs uppercase font-bold text-secondary">ECE Department</h4>
                  <p className="text-xs text-slate-500">Technical Organizer</p>
                </ScrollReveal>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <ScrollReveal index={2} className="h-64 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center p-6 text-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=500')] bg-cover opacity-20 group-hover:scale-110 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="font-display text-5xl text-primary">30+</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white">Teams Competing</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal index={4} className="h-48 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(123,47,255,0.1)]">
                  <div>
                    <div className="font-display text-5xl text-accent">24</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white">Hours Run</div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="space-y-4">
                <ScrollReveal index={3} className="h-48 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center p-6 text-center shadow-[0_0_30px_rgba(255,60,172,0.1)]">
                  <div>
                    <div className="font-display text-5xl text-secondary">120</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white">Innovators</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal index={5} className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-6 text-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=500')] bg-cover opacity-20 group-hover:scale-110 transition-transform"></div>
                  <div className="relative z-10">
                    <div className="font-display text-5xl text-white">4</div>
                    <div className="font-mono text-xs uppercase tracking-widest text-white">Per Team</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 border-y border-white/10 bg-card-dark/30" id="stats">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="font-display text-6xl text-white group-hover:text-primary transition-colors">24H</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Endurance</div>
            </div>
            <div className="text-center group border-l border-white/10">
              <div className="font-display text-6xl text-white group-hover:text-secondary transition-colors">30</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Elite Teams</div>
            </div>
            <div className="text-center group border-l border-white/10">
              <div className="font-display text-6xl text-white group-hover:text-accent transition-colors">120</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Participants</div>
            </div>
            <div className="text-center group border-l border-white/10">
              <div className="font-display text-6xl text-white group-hover:text-white transition-colors">4</div>
              <div className="font-mono text-xs text-slate-500 uppercase tracking-[0.2em]">Size of Squad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Jury */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 space-y-10">
              <div className="space-y-2">
                <h2 className="font-display text-5xl text-white">ELIGIBILITY</h2>
                <div className="h-1 w-20 bg-secondary"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="p-6 rounded-2xl bg-card-dark border border-white/5 flex flex-col gap-4 text-center items-center hover:bg-white/5 transition-colors">
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Open to Undergraduate Students</h4>
                    <p className="text-slate-400 text-sm">Current engineering students from any recognized institution in India.</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card-dark border border-white/5 flex flex-col gap-4 text-center items-center hover:bg-white/5 transition-colors">
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Inter-college Teams Allowed</h4>
                    <p className="text-slate-400 text-sm">Collaborate with peers across different colleges to form your squad.</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-card-dark border border-white/5 flex flex-col gap-4 text-center items-center hover:bg-white/5 transition-colors">
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">ECE/Tech Focused</h4>
                    <p className="text-slate-400 text-sm">Projects should ideally leverage hardware, embedded systems, or IoT.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-32 bg-card-dark relative overflow-hidden" id="schedule">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-display text-6xl text-white mb-4">EVENT TIMELINE</h2>
            <p className="font-mono text-xs text-primary tracking-widest uppercase">Chronicle of Innovation</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Day 1 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1 bg-primary text-background-dark font-display text-xl rounded">DAY 01</span>
                <span className="font-mono text-sm text-slate-400">March 26, 2025</span>
              </div>
              <div className="space-y-6 relative border-l border-white/10 pl-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                  <div className="font-mono text-xs text-primary mb-1">08:00 AM</div>
                  <h4 className="text-xl font-bold text-white">Reporting & Onboarding</h4>
                  <p className="text-slate-400 text-sm">Team check-ins and kit distribution.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-600"></div>
                  <div className="font-mono text-xs text-slate-500 mb-1">10:00 AM</div>
                  <h4 className="text-xl font-bold text-white">Opening Ceremony</h4>
                  <p className="text-slate-400 text-sm">Keynote by Industry Experts at LICET Auditorium.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                  <div className="font-mono text-xs text-secondary mb-1">11:00 AM</div>
                  <h4 className="text-xl font-bold text-white">Hacking Commences</h4>
                  <p className="text-slate-400 text-sm">The 24-hour countdown starts now.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-600"></div>
                  <div className="font-mono text-xs text-slate-500 mb-1">08:00 PM</div>
                  <h4 className="text-xl font-bold text-white">Mentoring Session I</h4>
                  <p className="text-slate-400 text-sm">Technical guidance from industry partners.</p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-1 bg-accent text-white font-display text-xl rounded">DAY 02</span>
                <span className="font-mono text-sm text-slate-400">March 27, 2025</span>
              </div>
              <div className="space-y-6 relative border-l border-white/10 pl-8 ml-4">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-slate-600"></div>
                  <div className="font-mono text-xs text-slate-500 mb-1">08:00 AM</div>
                  <h4 className="text-xl font-bold text-white">Mentoring Session II</h4>
                  <p className="text-slate-400 text-sm">Final push and pitch preparation.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20"></div>
                  <div className="font-mono text-xs text-secondary mb-1">11:00 AM</div>
                  <h4 className="text-xl font-bold text-white">Hacking Ends</h4>
                  <p className="text-slate-400 text-sm">All code and hardware prototypes must be submitted.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                  <div className="font-mono text-xs text-primary mb-1">01:00 PM</div>
                  <h4 className="text-xl font-bold text-white">Jury Evaluation</h4>
                  <p className="text-slate-400 text-sm">Teams pitch their solutions to the panel.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-accent/20"></div>
                  <div className="font-mono text-xs text-accent mb-1">04:00 PM</div>
                  <h4 className="text-xl font-bold text-white">Grand Finale</h4>
                  <p className="text-slate-400 text-sm">Award ceremony and closing remarks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-32" id="partners">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl text-white mb-4">INDUSTRY PARTNERS</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-16"></div>
          <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-60 hover:opacity-100 transition-opacity">
            <div className="px-10 py-6 border border-white/10 rounded-2xl bg-card-dark/50 flex flex-col items-center">
              <span className="font-display text-2xl text-white">TAMIZH</span>
            </div>
            <div className="px-10 py-6 border border-white/10 rounded-2xl bg-card-dark/50 flex flex-col items-center">
              <span className="font-display text-2xl text-white">INSPIRE SOLUTIONS</span>
            </div>
            <div className="px-10 py-6 border border-white/10 rounded-2xl bg-card-dark/50 flex flex-col items-center">
              <span className="font-display text-2xl text-white">INFINTIN MOBILITY<br />SOLUTIONS</span>
            </div>
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
                    <p>G01 & F11 Labs, ECE Department</p>
                    <p>Nungambakkam, Chennai - 600034</p>
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
            <p>© 2025 INCEPTION: THE GENESIS EDITION. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a className="hover:text-primary transition-colors" href="#">PRIVACY POLICY</a>
              <a className="hover:text-primary transition-colors" href="#">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
