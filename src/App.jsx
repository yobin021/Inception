import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));

    return () => {
      reveals.forEach(el => observer.unobserve(el));
    }
  }, []);

  return (
    <>
      <nav>
        <div className="nav-logo">INCEPTION</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#eligibility">Eligibility</a></li>
          <li><a href="#details">Details</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#conduct">Conduct</a></li>
          <li><a href="#instructions">Instructions</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg"></div>
        <div className="grid-lines"></div>
        <div className="hero-badge">March 26–27, 2025 &nbsp;·&nbsp; LICET, Chennai</div>
        <h1 className="hero-title">
          <span className="line1">INCEPTION</span>
          <span className="line2">THE GENESIS EDITION</span>
        </h1>
        <p className="hero-sub">
          A 24-hour intercollege hackathon pushing the boundaries of embedded systems
          and software innovation. Build. Break. Reimagine.
        </p>
        <div className="hero-meta">
          <div className="meta-pill"><span className="dot"></span> 24 Hours</div>
          <div className="meta-pill">🏢 Offline Mode</div>
          <div className="meta-pill">👥 4 Members / Team</div>
          <div className="meta-pill">💰 ₹300 / Participant</div>
        </div>
        <div className="cta-row">
          <a href="#eligibility" className="btn-primary">Check Eligibility</a>
          <a href="#timeline" className="btn-outline">View Schedule</a>
        </div>
      </div>

      {/* COLLEGE & ABOUT */}
      <section id="about" className="bg-accent-section">
        <div className="reveal">
          <p className="section-label">// 01 — Institution</p>
          <h2 className="section-title">About the Event</h2>
          <div className="section-divider"></div>
        </div>

        <div className="college-block reveal">
          <div className="college-info">
            <h3>LICET</h3>
            <p><span>Institution:</span> Loyola-ICAM College of Engineering and Technology</p>
            <p><span>Department:</span> Electronics & Communication Engineering</p>
            <p><span>Organized by:</span> The Spectrum of Engineers Association (SEA)</p>
            <p><span>Venue:</span> G01 & F11, LICET Campus</p>
            <p style={{ marginTop: '1rem' }}><span>Event Name:</span> INCEPTION: The Genesis Edition</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--accent3)', textTransform: 'uppercase', marginBottom: '1rem' }}>Industry Partners</p>
            <div className="partner-list">
              <div className="partner-chip">Tamizh</div>
              <div className="partner-chip">Inspire Solutions</div>
              <div className="partner-chip">Infintin Mobility Solutions Pvt Ltd</div>
            </div>
          </div>
        </div>

        <div className="about-grid" style={{ marginTop: '2.5rem' }}>
          <div className="about-card reveal">
            <div className="card-icon">💡</div>
            <div className="card-title">Encourage Innovation</div>
            <p className="card-text">Push participants to think beyond conventional solutions and develop novel, creative ideas that challenge the status quo.</p>
          </div>
          <div className="about-card reveal">
            <div className="card-icon">🏭</div>
            <div className="card-title">Solve Real-World Problems</div>
            <p className="card-text">Tackle actual industry challenges posed by our collaboration partners, bridging the gap between academic learning and professional needs.</p>
          </div>
          <div className="about-card reveal">
            <div className="card-icon">🔩</div>
            <div className="card-title">Embedded & Software Dev</div>
            <p className="card-text">Promote the development of embedded systems and software products that address modern engineering challenges.</p>
          </div>
          <div className="about-card reveal">
            <div className="card-icon">🚀</div>
            <div className="card-title">Startup Culture</div>
            <p className="card-text">Foster entrepreneurial thinking with opportunities for incubation support and potential pilot implementation of top solutions.</p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility">
        <div className="reveal">
          <p className="section-label">// 02 — Who Can Apply</p>
          <h2 className="section-title">Eligibility Criteria</h2>
          <div className="section-divider"></div>
        </div>

        <div className="eligibility-grid reveal">
          <div className="elig-card">
            <h3>Participant Requirements</h3>
            <div className="elig-item">Open to all Undergraduate (UG) students</div>
            <div className="elig-item">Teams must consist of exactly 4 members</div>
            <div className="elig-item">Intercollege participation is welcome</div>
            <div className="elig-item">Registration fee: ₹300 per participant (₹1,200 per team)</div>
          </div>
          <div className="elig-card">
            <h3>Shortlisting Process</h3>
            <div className="elig-item">Online screening through quiz platforms</div>
            <div className="elig-item">Shortlisted teams announced 2 days after the quiz</div>
            <div className="elig-item">Problem statements released 2 days before hackathon begins</div>
            <div className="elig-item">20 to 30 teams selected (80–120 total participants)</div>
          </div>
        </div>
      </section>

      {/* HACKATHON DETAILS */}
      <section id="details" className="bg-accent-section">
        <div className="reveal">
          <p className="section-label">// 03 — Event Overview</p>
          <h2 className="section-title">Hackathon Details</h2>
          <div className="section-divider"></div>
        </div>

        <div className="stats-row reveal">
          <div className="stat-box">
            <div className="stat-num">24</div>
            <div className="stat-label">Hours Duration</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">30</div>
            <div className="stat-label">Max Teams</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">120</div>
            <div className="stat-label">Max Participants</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">4</div>
            <div className="stat-label">Members / Team</div>
          </div>
        </div>

        <div className="reveal">
          <p className="section-label" style={{ marginBottom: '1.2rem' }}>Jury Evaluation Criteria</p>
          <div className="jury-grid">
            <div className="jury-card">
              <div className="jury-icon">🧠</div>
              <div className="jury-title">Innovation</div>
              <p className="jury-desc">Originality and creative problem-solving approach</p>
            </div>
            <div className="jury-card">
              <div className="jury-icon">⚙️</div>
              <div className="jury-title">Feasibility</div>
              <p className="jury-desc">Practical viability and real-world applicability</p>
            </div>
            <div className="jury-card">
              <div className="jury-icon">🔬</div>
              <div className="jury-title">Technical Complexity</div>
              <p className="jury-desc">Depth of technical implementation and engineering rigor</p>
            </div>
            <div className="jury-card">
              <div className="jury-icon">🎨</div>
              <div className="jury-title">UI/UX</div>
              <p className="jury-desc">Design quality, usability, and user experience</p>
            </div>
            <div className="jury-card">
              <div className="jury-icon">📈</div>
              <div className="jury-title">Impact & Scalability</div>
              <p className="jury-desc">Potential for broader adoption and measurable impact</p>
            </div>
            <div className="jury-card">
              <div className="jury-icon">🎯</div>
              <div className="jury-title">Constraint Implementation</div>
              <p className="jury-desc">How well surprise constraints are addressed in the build</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline">
        <div className="reveal">
          <p className="section-label">// 04 — Schedule</p>
          <h2 className="section-title">Hackathon Timeline</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline-wrapper reveal">
          {/* DAY 1 */}
          <div className="timeline-day">
            <h3>Day 1 <span className="day-badge">March 26</span></h3>

            <div className="timeline-item">
              <div className="t-time">8:00 – 8:30 AM</div>
              <div className="t-dot"></div>
              <div className="t-content"><div className="t-activity">📋 Registration</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">8:30 – 9:00 AM</div>
              <div className="t-dot"></div>
              <div className="t-content"><div className="t-activity">🎙️ Inauguration & Briefing</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">9:00 AM</div>
              <div className="t-dot" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}></div>
              <div className="t-content"><div className="t-activity">🚀 Hackathon Begins</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">11:30 AM</div>
              <div className="t-dot" style={{ background: 'var(--gold)', boxShadow: '0 0 8px var(--gold)' }}></div>
              <div className="t-content"><div className="t-activity">⚡ Constraint 1 Released</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">1:30 PM</div>
              <div className="t-dot"></div>
              <div className="t-content"><div className="t-activity">👁️ Review 1</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">5:30 PM</div>
              <div className="t-dot" style={{ background: 'var(--gold)', boxShadow: '0 0 8px var(--gold)' }}></div>
              <div className="t-content"><div className="t-activity">⚡ Constraint 2 Released</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">8:00 PM</div>
              <div className="t-dot" style={{ background: 'var(--accent2)', boxShadow: '0 0 8px var(--accent2)' }}></div>
              <div className="t-content"><div className="t-activity">🌙 Day 1 Ends — 11 Hours Completed</div></div>
            </div>
          </div>

          {/* DAY 2 */}
          <div className="timeline-day">
            <h3>Day 2 <span className="day-badge">March 27</span></h3>

            <div className="timeline-item">
              <div className="t-time">8:00 AM</div>
              <div className="t-dot" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}></div>
              <div className="t-content"><div className="t-activity">☀️ Hackathon Resumes</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">10:30 AM</div>
              <div className="t-dot"></div>
              <div className="t-content"><div className="t-activity">👁️ Review 2</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">1:30 PM</div>
              <div className="t-dot"></div>
              <div className="t-content"><div className="t-activity">📊 Progress Check</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">4:00 PM</div>
              <div className="t-dot" style={{ background: 'var(--accent2)', boxShadow: '0 0 8px var(--accent2)' }}></div>
              <div className="t-content"><div className="t-activity">🏁 Hackathon Ends</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">4:00 – 5:30 PM</div>
              <div className="t-dot"></div>
              <div className="t-content"><div className="t-activity">🎤 Final Presentations & Judging</div></div>
            </div>
            <div className="timeline-item">
              <div className="t-time">5:30 – 7:00 PM</div>
              <div className="t-dot" style={{ background: 'var(--gold)', boxShadow: '0 0 8px var(--gold)' }}></div>
              <div className="t-content"><div className="t-activity">🏆 Valedictory & Prize Distribution</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CODE OF CONDUCT */}
      <section id="conduct" className="bg-accent-section">
        <div className="reveal">
          <p className="section-label">// 05 — Rules</p>
          <h2 className="section-title">Code of Conduct</h2>
          <div className="section-divider"></div>
        </div>

        <div className="conduct-grid reveal">
          <div className="conduct-card">
            <div className="conduct-num">01</div>
            <div className="conduct-title">Professionalism</div>
            <p className="conduct-text">Maintain professional behaviour at all times throughout the event premises and interactions.</p>
          </div>
          <div className="conduct-card">
            <div className="conduct-num">02</div>
            <div className="conduct-title">Respect</div>
            <p className="conduct-text">Respect team members, fellow participants, mentors, and jury members at all times.</p>
          </div>
          <div className="conduct-card">
            <div className="conduct-num">03</div>
            <div className="conduct-title">Originality</div>
            <p className="conduct-text">Avoid plagiarism in all forms. All submitted work must be original and developed during the hackathon.</p>
          </div>
          <div className="conduct-card">
            <div className="conduct-num">04</div>
            <div className="conduct-title">Rule Adherence</div>
            <p className="conduct-text">Follow all event rules and guidelines as stated by the organizing committee without exception.</p>
          </div>
        </div>

        <div className="warning-box reveal">
          ⚠️ &nbsp; Violation of any rule may result in immediate disqualification from the event.
        </div>
      </section>

      {/* GENERAL INSTRUCTIONS */}
      <section id="instructions">
        <div className="reveal">
          <p className="section-label">// 06 — Essentials</p>
          <h2 className="section-title">General Instructions</h2>
          <div className="section-divider"></div>
        </div>

        <div className="instructions-grid reveal">
          <div className="instr-item">
            <div className="instr-icon">💻</div>
            <p className="instr-text">Participants must bring their own laptop for the entire duration of the hackathon.</p>
          </div>
          <div className="instr-item">
            <div className="instr-icon">🔌</div>
            <p className="instr-text">Teams must carry Extension Boxes / Power Strips for power management.</p>
          </div>
          <div className="instr-item">
            <div className="instr-icon">🔧</div>
            <p className="instr-text">All required hardware components must be brought by the participants themselves.</p>
          </div>
          <div className="instr-item">
            <div className="instr-icon">⏱️</div>
            <p className="instr-text">All development must be done exclusively during the hackathon. Pre-built projects are not permitted.</p>
          </div>
          <div className="instr-item">
            <div className="instr-icon">🛡️</div>
            <p className="instr-text">Participants are solely responsible for the safety of their own equipment and belongings.</p>
          </div>
          <div className="instr-item">
            <div className="instr-icon">📦</div>
            <p className="instr-text">Submit all project deliverables before the deadline. Late submissions will not be accepted.</p>
          </div>
          <div className="instr-item">
            <div className="instr-icon">📅</div>
            <p className="instr-text">Follow the event schedule strictly and adhere to the Code of Conduct at all times.</p>
          </div>
          <div className="instr-item">
            <div className="instr-icon">📶</div>
            <p className="instr-text">Stable Wi-Fi, projectors, and sound systems will be provided at the venue.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">INCEPTION</div>
        <div className="footer-sub">The Genesis Edition &nbsp;·&nbsp; March 26–27, 2025</div>
        <p className="footer-info">
          Organized by The Spectrum of Engineers Association (SEA)<br />
          Electronics & Communication Engineering · LICET, Chennai<br />
          Venues: G01 & F11
        </p>
      </footer>
    </>
  );
}

export default App;
