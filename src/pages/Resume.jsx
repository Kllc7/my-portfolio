import './Resume.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCertificate, FaLanguage, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div className="resume container">
      <div className="resume-header glass">
        <div className="resume-header-row">
          <h1>KHALIL CHAHI</h1>
          <button className="download-btn" onClick={() => window.print()}>
            Download PDF
          </button>
        </div>
        <div className="resume-contact">
          <span><FaMapMarkerAlt /> Casablanca, Morocco</span>
          <span><FaEnvelope /> khalilchahi191919@gmail.com</span>
          <span><FaPhone /> +212 6 49 59 50 58</span>
        </div>
      </div>
      <motion.section className="glass resume-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <h2>Professional Summary</h2>
        <p>Dynamic and versatile professional with expertise in multimedia, 3D Design and animation, sound engineering, web development, and customer service. Proficient in FL Studio, Ableton Live, Premiere Pro, After Effects, and full-stack web development tools such as HTML, CSS, JavaScript, and React JS. Proven track record in e-commerce, digital content creation, and customer support, with a strong focus on creativity, problem-solving, and delivering high-quality results. Fluent in English, French, and Arabic.</p>
      </motion.section>
      <motion.section className="glass resume-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
        <h2><FaBriefcase /> Professional Experience</h2>
        <div className="resume-timeline">
          <div className="timeline-item">
            <h3><span className="role">Instagram E-commerce - Co-founder</span></h3>
            <span className="company">Stickershub – Casablanca, Morocco | June 2020 – August 2022</span>
            <ul>
              <li>Managed and scaled an Instagram-based e-commerce business offering custom-made stickers for B2C customers.</li>
              <li>Increased Instagram followers to over 1,500 by creating engaging content and building professional relationships.</li>
              <li>Drove a 30% increase in repeat business through personalized customer engagement and timely delivery of products.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3><span className="role">Attribute</span></h3>
            <span className="company">Casablanca, Morocco | June 2021 – October 2021</span>
            <ul>
              <li>Oversaw online sales of standard and custom-made products for B2C customers through social media platforms.</li>
              <li>Contributed to a 25% increase in sales by optimizing product listings and improving customer service interactions.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3><span className="role">Multimedia Editor</span></h3>
            <span className="company">Digidot – Casablanca, Morocco | September 2021 – July 2022</span>
            <ul>
              <li>Specialized in multimedia editing and innovative product development creating compelling digital content for clients.</li>
              <li>Led sound projects from concept to completion, ensuring high-quality results using FL Studio and Ableton Live.</li>
            </ul>
          </div>
        </div>
      </motion.section>
      <motion.section className="glass resume-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
        <h2><FaGraduationCap /> Education</h2>
        <div className="resume-timeline">
          <div className="timeline-item">
            <h3>Full Stack MERN Bootcamp</h3>
            <span className="company">3WA – Casablanca, Morocco | April 2023 – August 2023</span>
            <ul>
              <li>Completed intensive training in full-stack web dev, specializing in (JavaScript, React JS, MySQL, and Postman)</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Multimedia Editing Diploma</h3>
            <span className="company">C4vMedia – Casablanca, Morocco | September 2020 – July 2022</span>
          </div>
          <div className="timeline-item">
            <h3>DEUG in Law</h3>
            <span className="company">Faculty of Legal, Economic and Social Sciences – Casablanca, Morocco | September 2017 – July 2019</span>
          </div>
          <div className="timeline-item">
            <h3>Baccalaureate in Physics</h3>
            <span className="company">GSR Potentiel – Casablanca, Morocco | June 2017</span>
          </div>
        </div>
      </motion.section>
      <motion.section className="glass resume-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
        <h2><FaStar /> Key Skills</h2>
        <div className="skills-grid">
          <span className="skill-badge">Multimedia Production</span>
          <span className="skill-badge">3D Game Development</span>
          <span className="skill-badge">Web Development</span>
          <span className="skill-badge">E-commerce Platforms</span>
          <span className="skill-badge">Customer Support</span>
          <span className="skill-badge">Languages: English, French, Arabic</span>
          <span className="skill-badge">Tools & Technologies</span>
        </div>
        <ul className="skills-list">
          <li><b>Multimedia Production:</b> FL Studio, Ableton Live, Premiere Pro, After Effects</li>
          <li><b>3D Game Development:</b> Unity 3D game design engine, C# scripting</li>
          <li><b>Web Development:</b> HTML, CSS, JavaScript, React JS, Python, C#, MySQL, Postman</li>
          <li><b>E-commerce Platforms:</b> Social media-based sales (Instagram, Facebook, Whatsapp), Shopify</li>
          <li><b>Customer Support:</b> Chat, email, phone support, back-office operations</li>
          <li><b>Languages:</b> Fluent in English, French, and Arabic</li>
          <li><b>Tools & Technologies:</b> Microsoft Office Suite (Excel, Word, PowerPoint), PHPMyAdmin</li>
        </ul>
      </motion.section>
      <motion.section className="glass resume-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
        <h2><FaCertificate /> Certifications</h2>
        <ul>
          <li>Junior Full Stack Web Developer Certificate – 3WA Bootcamp | 2023</li>
        </ul>
      </motion.section>
      <motion.section className="glass resume-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
        <h2><FaLanguage /> Languages</h2>
        <ul>
          <li>English: Fluent</li>
          <li>French: Good</li>
          <li>Arabic: Native</li>
        </ul>
      </motion.section>
      <motion.section className="glass resume-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} viewport={{ once: true }}>
        <h2>Core Values</h2>
        <ul className="core-values-list">
          <li><b>Professionalism:</b> Commitment to delivering high-quality work and maintaining professional standards.</li>
          <li><b>Punctuality:</b> Meeting deadlines and ensuring timely delivery of projects.</li>
          <li><b>Attention to Detail:</b> Focused on precision and accuracy in every aspect of work.</li>
          <li><b>Effective Communication:</b> Strong written and verbal communication skills.</li>
          <li><b>Teamwork:</b> Collaborative approach to achieving shared objectives.</li>
        </ul>
      </motion.section>
    </div>
  );
} 