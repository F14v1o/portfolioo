import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Briefcase, 
  User, 
  Dumbbell, 
  BookOpen, 
  Award, 
  ChevronRight, 
  Mail, 
  Github, 
  Linkedin, 
  Lock,
  Unlock,
  Cpu,
  Globe,
  Layout,
  Workflow,
  Zap,
  ArrowRight,
  Filter,
  MessageSquare,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Download
} from 'lucide-react';

// --- IMAGE IMPORTS ---
import profileImg from './assets/profile.png';
import n8nLogo from './assets/n8n-logo.png';
import pythonLogo from './assets/python-logo.png';
import makeLogo from './assets/make-workflow.png';
import multiAgentImg from './assets/multi-agent.png';
import makeWorkflowImg from './assets/make-logo-real.png';
import multiAgentArchImg from './assets/multi-agent-arch.png';
import n8nWorkflowImg from './assets/n8n-workflow.png';

// --- DATEN & INHALTE ---

const PROFILE = {
  name: "Flavio Paesano",
  title: "Co-Founder & Software Engineer",
  tagline: "Ich baue digitale Fundamente, automatisiere Prozesse und löse komplexe Probleme.",
  about: "Als Co-Founder von neuBau.website und Teilhaber von ImmoMenu.ch verbinde ich unternehmerisches Denken mit technischer Exekutive. Mein Fokus liegt auf Fullstack-Webapps, API-Schnittstellen und komplexen Multi-Agent-Workflows. Ich entwickle nicht nur Code, sondern ganze Ökosysteme, in denen Daten nahtlos zwischen Lead-Generierung, CRM und Task-Management fließen.",
  contact: {
    email: "flavio.paesano@aetherium.ch",
    github: "https://github.com/F14v1o",
    linkedin: "https://www.linkedin.com/in/flavio-paesano-431702342",
    location: "Zürich, Schweiz",
    availability: "Auf Anfrage"
  }
};

const SKILLS = [
  // Core / Languages
  { name: "TypeScript / JS", level: 95, icon: <Code size={18} />, category: "Lang", color: "text-blue-400" },
  { name: "Python", level: 85, icon: <img src={pythonLogo} alt="Python" className="w-[18px] h-[18px] object-contain" />, category: "Lang", color: "text-yellow-400" },
  { name: "SQL (PostgreSQL)", level: 90, icon: <Database size={18} />, category: "Lang", color: "text-teal-400" },
  
  // Automation / Tools
  { name: "n8n Workflows", level: 95, icon: <img src={n8nLogo} alt="n8n" className="w-[18px] h-[18px] object-contain" />, category: "Auto", color: "text-rose-500" },
  { name: "Make.com", level: 90, icon: <img src={makeLogo} alt="Make.com" className="w-[18px] h-[18px] object-contain rounded-sm" />, category: "Auto", color: "text-purple-500" },
  { name: "Multi-Agent Systems", level: 85, icon: <Cpu size={18} />, category: "Auto", color: "text-indigo-400" },
  
  // Infrastructure
  { name: "Homelab / Docker", level: 80, icon: <Server size={18} />, category: "Ops", color: "text-emerald-400" },
  { name: "Fullstack Webapps", level: 90, icon: <Layout size={18} />, category: "Ops", color: "text-cyan-400" },
];

const EXPERIENCE = [
  {
    company: "Selbstständig",
    role: "Full Stack & Automation Engineer",
    period: "Laufend",
    description: "Spezialisiert auf Custom CRM-Systeme, PostgreSQL-Datenbanken und komplexe n8n/Make-Automatisierungen.",
    highlights: ["Multi-Agent Workflows", "Webhook-Integrationen", "PostgreSQL Datenbank-Design"]
  },
  {
    company: "ImmoMenu.ch",
    role: "Teilhaber & Software Engineer",
    period: "Aktuell",
    description: "Verantwortlich für technische Integrationen und Datenmanagement (40% Beteiligung via neuBau.website).",
    highlights: ["API Schnittstellen-Entwicklung", "Datenmigrationen", "Systemarchitektur"]
  },
  {
    company: "neuBau.website",
    role: "Co-Founder & Developer",
    period: "Aktuell",
    description: "Technische Gesamtleitung. Entwicklung eigener CRM-Lösungen und hochautomatisierter Kommunikationssysteme.",
    highlights: ["Entwicklung interner Softwarelösungen (Fullstack)", "Automatisierung von Vertriebsprozessen", "IT-Support & Infrastruktur"]
  },
  {
    company: "WS Audiology",
    role: "Logistik & Prozessoptimierung",
    period: "bis 2022",
    description: "Schnittstelle zwischen Logistik und Kundendienst. Digitalisierung von Aufträgen und Optimierung interner Abläufe.",
    highlights: ["Auftrags-Digitalisierung", "Prozessoptimierung (LVS/Salesforce)", "Umbau & Programmierung von Systemen"]
  }
];

const CERTIFICATES = [
  { title: "CS50x: Computer Science", issuer: "Harvard University (edX)", year: "2024", id: "CS50x", pdf: "pdf/CS50x-Certificate.pdf" },
  { title: "Google Cloud Computing Foundations", issuer: "Google Cloud / edX", year: "2024", id: "GCCF1x", pdf: "pdf/GoogleCloud-GCCF1x-Certificate.pdf" },
  { title: "Fundamentals of Digital Marketing", issuer: "Google Digital Garage", year: "2019", id: "Digital Mrkt", pdf: "pdf/Digital-Marketing-Certificate.pdf" },
  { title: "Einstieg Programmierung (C++/C#/Java)", issuer: "Klubschule Migros", year: "2019", id: "Basics", pdf: "pdf/Programmierung-Basics-Attest.pdf" },
];

// --- KOMPONENTEN ---

const Badge = ({ children, className = "" }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-2 bg-slate-800 rounded-lg text-teal-400">
      {icon}
    </div>
    <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
  </div>
);

const Card = ({ children, className = "", onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-teal-500/30 transition-all duration-300 ${onClick ? 'cursor-pointer hover:bg-slate-800/80' : ''} ${className}`}
  >
    {children}
  </div>
);

// Logo Components (Real Images)
const PythonLogo = () => (
  <img src={pythonLogo} alt="Python" className="w-5 h-5 object-contain mr-2" />
);

const MakeLogo = () => (
  <img src={makeLogo} alt="Make.com" className="h-5 w-5 object-contain mr-2" />
);

const N8nLogo = () => (
  <img src={n8nLogo} alt="n8n" className="w-5 h-5 object-contain mr-2" />
);

// Workflow Node Component for Visualization
const WorkflowNode = ({ title, icon, color, type = "action" }) => (
  <div className={`
    relative flex items-center gap-3 p-3 rounded-lg border w-full md:w-48
    ${type === 'trigger' ? 'bg-slate-800 border-teal-500/50' : 'bg-slate-900/50 border-slate-700'}
    hover:border-${color}-400 transition-all shadow-lg
  `}>
    <div className={`p-2 rounded bg-slate-950 text-${color}-400`}>
      {icon}
    </div>
    <span className="text-xs font-semibold text-slate-200">{title}</span>
    
    {/* Connector Line (Visual only) */}
    <div className="hidden md:block absolute -right-6 top-1/2 w-6 h-0.5 bg-slate-700 -z-10"></div>
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState('overview');
  const [isPrinting, setIsPrinting] = useState(false);

  const ACCESS_CODE = "portfolio"; 

  const handlePrint = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setIsPrinting(false), 500);
    }, 100);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput.toLowerCase() === ACCESS_CODE) {
      setIsAuthenticated(true);
    } else {
      setErrorMsg("Zugriff verweigert. Falsches Passwort.");
      setPasswordInput("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 font-sans text-slate-200">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl shadow-black/50">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center text-teal-500">
              <Lock size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-white mb-2">Portfolio Protected</h1>
          <p className="text-center text-slate-400 mb-8">Dieses Portfolio ist geschützt. Bitte Passwort eingeben.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                placeholder="Passwort eingeben..."
                autoFocus
              />
            </div>
            {errorMsg && <p className="text-rose-500 text-sm text-center">{errorMsg}</p>}
            <button 
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Unlock size={18} />
              Entsperren
            </button>
            <p className="text-xs text-center text-slate-600 mt-4">Tipp für Preview: portfolio</p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30">
      
      {/* Sidebar */}
      <div className="lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-72 bg-slate-900 border-r border-slate-800 flex flex-col z-20">
        <div className="p-8 border-b border-slate-800">
          <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-teal-900/30 overflow-hidden group cursor-pointer border-4 border-slate-700/80">
             <img 
               src={profileImg} 
               alt="Flavio Paesano" 
               className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
             />
          </div>
          <h1 className="text-xl font-bold text-white text-center">{PROFILE.name}</h1>
          <p className="text-sm text-teal-400 mt-1 text-center">{PROFILE.title}</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { id: 'overview', icon: <User size={18} />, label: 'Überblick' },
            { id: 'workflows', icon: <Workflow size={18} />, label: 'Workflows & Automation' }, 
            { id: 'experience', icon: <Briefcase size={18} />, label: 'Erfahrung' },
            { id: 'skills', icon: <Code size={18} />, label: 'Tech Stack' },
            { id: 'certs', icon: <Award size={18} />, label: 'Zertifikate' },
            { id: 'personal', icon: <Dumbbell size={18} />, label: 'Privat & Hobbys' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-800">
          <div className="flex gap-4 justify-center">
            <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub"><Github size={20} /></a>
            <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="LinkedIn"><Linkedin size={20} /></a>
            <a href={`mailto:${PROFILE.contact.email}`} className="text-slate-400 hover:text-teal-400 transition-colors" title="Email"><Mail size={20} /></a>
          </div>
          <p className="text-xs text-center text-slate-600 mt-4">&copy; {new Date().getFullYear()} Flavio Paesano</p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="lg:ml-72 p-6 lg:p-12 max-w-5xl mx-auto">
        
        {/* TAB: OVERVIEW */}
        {(activeTab === 'overview' || isPrinting) && (
          <div className="space-y-8 animate-fadeIn">
            <header className="mb-12">
              <div className="flex gap-2 mb-4">
                <Badge className="bg-teal-500/10 text-teal-400 border border-teal-500/20">Fullstack Dev</Badge>
                <Badge className="bg-purple-500/10 text-purple-400 border border-purple-500/20">Automation Expert</Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {PROFILE.tagline}
              </h1>
              <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
                {PROFILE.about}
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-none relative overflow-hidden group cursor-pointer" onClick={() => setActiveTab('workflows')}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/20 transition-all"></div>
                <div className="flex items-center gap-2 mb-3">
                  <Workflow className="text-purple-400" />
                  <h3 className="text-xl font-bold text-white relative z-10">Automation First</h3>
                </div>
                <p className="text-slate-400 relative z-10">
                  Ich ersetze manuelle Arbeit durch intelligente Multi-Agent-Workflows. n8n, Make und Custom Scripts arbeiten Hand in Hand.
                </p>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-semibold">
                  Workflows ansehen <ArrowRight size={14} className="ml-1" />
                </div>
              </Card>
              
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-teal-500/20 transition-all"></div>
                <div className="flex items-center gap-2 mb-3">
                  <Layout className="text-teal-400" />
                  <h3 className="text-xl font-bold text-white relative z-10">Fullstack Webapps</h3>
                </div>
                <p className="text-slate-400 relative z-10">
                  TypeScript, React und PostgreSQL. Ich baue skalierbare Anwendungen, die Business-Logik sauber abbilden.
                </p>
              </Card>
            </div>
            
            <div className="mt-8 flex gap-4">
               <button onClick={() => setActiveTab('experience')} className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 print:hidden">
                 Erfahrung ansehen <ChevronRight size={18} />
               </button>
               <button onClick={handlePrint} className="px-6 py-3 border border-slate-700 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors print:hidden">
                 Als PDF drucken
               </button>
            </div>
          </div>
        )}

        {/* TAB: WORKFLOWS */}
        {(activeTab === 'workflows' || isPrinting) && (
          <div className="animate-fadeIn">
            <SectionTitle icon={<Workflow size={20} />} title="Multi-Agent Automatisierung" />
            
            <p className="text-slate-400 mb-8 max-w-3xl leading-relaxed">
              Meine Stärke liegt in der Orchestrierung komplexer Datenflüsse. Ich verbinde Lead-Generierung mit CRM-Logik und operativen Tasks.
              Das Ziel: Maximale Effizienz durch intelligente Automatisierung via <strong>n8n</strong>, <strong>Make</strong> und <strong>Python</strong>.
            </p>

            {/* Visual Workflow Diagram */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8 relative overflow-hidden">
               {/* Background Grid Pattern */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:20px_20px] -z-10"></div>
               
               <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
                  
                  {/* Step 1: Input */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <WorkflowNode title="Webhook / Funnel" icon={<Globe size={18}/>} color="teal" type="trigger" />
                    <div className="text-xs text-slate-500 text-center md:text-left pl-2">Lead Entry Point</div>
                  </div>

                  {/* Step 2: Processing */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <WorkflowNode title="n8n / Multi-Agent" icon={<Cpu size={18}/>} color="rose" />
                    <div className="text-xs text-slate-500 text-center md:text-left pl-2">Data Enrichment & Logic</div>
                  </div>

                  {/* Step 3: Action */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <WorkflowNode title="CRM Update" icon={<Database size={18}/>} color="purple" />
                    <div className="text-xs text-slate-500 text-center md:text-left pl-2">PostgreSQL / Custom Tool</div>
                  </div>

                  {/* Step 4: Output */}
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <WorkflowNode title="Task Generation" icon={<CheckCircle2 size={18}/>} color="emerald" type="end" />
                    <div className="text-xs text-slate-500 text-center md:text-left pl-2">Automated Follow-up</div>
                  </div>

               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <MakeLogo /> Make.com Integrationen
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1 text-purple-500 shrink-0"/>
                    Verbindung von Webhooks aus Landingpages direkt ins Backend.
                  </li>
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1 text-purple-500 shrink-0"/>
                    Parsing von unstrukturierten E-Mail-Daten in strukturierte JSON-Objekte.
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <N8nLogo /> n8n Advanced Flows
                </h3>
                <ul className="space-y-3">
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1 text-rose-500 shrink-0"/>
                    Komplexe "If/Else" Logik für Lead-Scoring und Routing.
                  </li>
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1 text-rose-500 shrink-0"/>
                    Interaktion mit eigenen APIs und Datenbanken (Self-Hosted).
                  </li>
                </ul>
              </Card>
            </div>

            {/* Workflow Screenshots */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="text-teal-400" size={18} /> Beispiele aus der Praxis
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Make.com Workflow */}
                <div className="group rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/40 transition-all">
                  <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
                    <MakeLogo />
                    <span className="text-sm font-medium text-slate-300">Make.com Scenario</span>
                  </div>
                  <div className="bg-slate-900/30 p-3">
                    <img 
                      src={makeWorkflowImg} 
                      alt="Make.com Workflow Beispiel" 
                      className="w-full h-auto rounded-lg object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Multi-Agent Architecture */}
                <div className="group rounded-xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/40 transition-all">
                  <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
                    <Cpu size={18} className="text-indigo-400" />
                    <span className="text-sm font-medium text-slate-300">Multi-Agent Architektur</span>
                  </div>
                  <div className="bg-slate-900/30 p-3">
                    <img 
                      src={multiAgentArchImg} 
                      alt="Multi-Agent Architecture" 
                      className="w-full h-auto rounded-lg object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* n8n Workflow - Full Width */}
                <div className="md:col-span-2 group rounded-xl overflow-hidden border border-slate-700/50 hover:border-rose-500/40 transition-all">
                  <div className="bg-slate-800/50 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
                    <N8nLogo />
                    <span className="text-sm font-medium text-slate-300">n8n Deep Research Workflow</span>
                  </div>
                  <div className="bg-slate-900/30 p-3">
                    <img 
                      src={n8nWorkflowImg} 
                      alt="n8n Workflow Beispiel" 
                      className="w-full h-auto rounded-lg object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB: SKILLS */}
        {(activeTab === 'skills' || isPrinting) && (
          <div className="animate-fadeIn">
            <SectionTitle icon={<Code size={20} />} title="Tech Stack & Skills" />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Cpu className="text-teal-400" size={18} /> Languages & Frameworks
                </h3>
                <div className="space-y-5">
                  {SKILLS.filter(s => s.category === 'Lang').map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-200 font-medium flex items-center">
                          {skill.name.includes("Python") && <PythonLogo />}
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${skill.name.includes("Python") ? "bg-yellow-500" : "bg-teal-500"}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="text-rose-400" size={18} /> Automation Tools
                </h3>
                <div className="space-y-5">
                  {SKILLS.filter(s => s.category === 'Auto').map((skill, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between mb-2">
                         <span className="text-slate-200 font-medium flex items-center">
                          {skill.name.includes("Make") && <MakeLogo />}
                          {skill.name.includes("n8n") && <N8nLogo />}
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            skill.name.includes("Make") ? "bg-purple-600" : 
                            skill.name.includes("n8n") ? "bg-rose-500" : "bg-indigo-500"
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
               <Card className="p-4 bg-slate-800/30">
                 <div className="font-bold text-white mb-1">Webapp Fullstack</div>
                 <p className="text-xs text-slate-400">React, Node.js & TypeScript Architektur für skalierbare Frontends.</p>
               </Card>
               <Card className="p-4 bg-slate-800/30">
                 <div className="font-bold text-white mb-1">Datenmigration</div>
                 <p className="text-xs text-slate-400">SQL-Experte. Sauberer Transfer von Legacy-Daten in neue CRM Strukturen.</p>
               </Card>
               <Card className="p-4 bg-slate-800/30">
                 <div className="font-bold text-white mb-1">Self-Hosted Ops</div>
                 <p className="text-xs text-slate-400">Docker, Linux & Networking im eigenen Homelab.</p>
               </Card>
            </div>
          </div>
        )}

        {/* TAB: EXPERIENCE */}
        {(activeTab === 'experience' || isPrinting) && (
          <div className="animate-fadeIn max-w-3xl">
            <SectionTitle icon={<Briefcase size={20} />} title="Berufliche Laufbahn" />
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {EXPERIENCE.map((job, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-teal-500/10 group-hover:border-teal-500 text-slate-500 group-hover:text-teal-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all">
                    <Briefcase size={16} />
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white text-lg">{job.role}</h3>
                      <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-1 rounded">{job.period}</span>
                    </div>
                    <div className="text-sm font-medium text-slate-400 mb-3">{job.company}</div>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <ul className="space-y-1">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                          <span className="mt-1.5 w-1 h-1 bg-teal-500 rounded-full"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB: ZERTIFIKATE */}
        {(activeTab === 'certs' || isPrinting) && (
          <div className="animate-fadeIn">
             <SectionTitle icon={<Award size={20} />} title="Zertifizierungen & Bildung" />
             
             <div className="grid md:grid-cols-2 gap-4">
               {CERTIFICATES.map((cert, index) => (
                 <Card key={index} className="flex flex-col h-full bg-slate-800/30">
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 bg-slate-800 rounded-md">
                        {cert.title.includes("Google") ? <Globe size={20} className="text-blue-400"/> : 
                         cert.title.includes("CS50") ? <Code size={20} className="text-rose-400"/> :
                         <Award size={20} className="text-amber-400"/>}
                      </div>
                      <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded">{cert.year}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-sm text-teal-400 mb-4">{cert.issuer}</p>
                    <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
                       <span className="text-xs text-slate-600">ID: {cert.id}</span>
                       <div className="flex items-center gap-3">
                         <a 
                           href={`${import.meta.env.BASE_URL}${cert.pdf}`}
                           target="_blank" 
                           rel="noreferrer"
                           className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
                           title="Zertifikat ansehen"
                         >
                           <ExternalLink size={12} /> Ansehen
                         </a>
                         <a 
                           href={`${import.meta.env.BASE_URL}${cert.pdf}`}
                           download
                           className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                           title="Zertifikat herunterladen"
                         >
                           <Download size={12} /> PDF
                         </a>
                       </div>
                    </div>
                 </Card>
               ))}
             </div>
          </div>
        )}

        {/* TAB: PERSONAL (Redesigned - Symmetric) */}
        {(activeTab === 'personal' || isPrinting) && (
          <div className="animate-fadeIn">
            <SectionTitle icon={<User size={20} />} title="Privat & Interessen" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Row 1, Col 1-2: Homelab (Wide) */}
              <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700/50 p-6 relative overflow-hidden group hover:border-emerald-500/40 transition-all h-[240px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-all"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <Server className="text-emerald-400" size={20}/>
                       <h3 className="text-lg font-bold text-white">The Homelab</h3>
                    </div>
                    <p className="text-slate-400 text-sm max-w-md">
                      Mein Spielplatz für Technologie. Hier läuft mein eigener Media-Server, eine private Cloud und diverse Docker-Container für Experimente. Zugriff von überall, komplett selbst gehostet.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-slate-950/50 border border-slate-700 text-slate-400">Linux</Badge>
                    <Badge className="bg-slate-950/50 border border-slate-700 text-slate-400">Docker</Badge>
                    <Badge className="bg-slate-950/50 border border-slate-700 text-slate-400">Self-Hosted</Badge>
                  </div>
                </div>
              </div>

              {/* Row 1, Col 3: Reading (Standard) */}
              <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 hover:bg-slate-800/60 transition-all flex flex-col items-center justify-center text-center h-[240px]">
                 <BookOpen size={32} className="text-amber-500 mb-3" />
                 <h3 className="font-bold text-white">Leseratte</h3>
                 <p className="text-xs text-slate-400 mt-2">Biografien erfolgreicher Gründer & Deep-Dives in Sachthemen.</p>
              </div>

              {/* Row 2, Col 1: Sports (Standard Height) */}
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 p-6 relative overflow-hidden group hover:border-rose-500/40 transition-all flex flex-col h-[240px]">
                 <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-rose-900/20 to-transparent opacity-50"></div>
                 <div className="relative z-10 flex flex-col h-full">
                   <div className="flex items-center gap-2 mb-3 shrink-0">
                     <Dumbbell className="text-rose-500" size={20} />
                     <h3 className="text-lg font-bold text-white">Disziplin</h3>
                   </div>
                   <div className="flex-1 overflow-auto space-y-2 pr-1 custom-scrollbar">
                     <div className="flex items-center gap-3 text-slate-300 bg-slate-950/30 p-2 rounded-lg border border-slate-800 text-xs">
                       <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0"></span> Thaiboxen
                     </div>
                     <div className="flex items-center gap-3 text-slate-300 bg-slate-950/30 p-2 rounded-lg border border-slate-800 text-xs">
                       <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0"></span> MMA
                     </div>
                     <div className="flex items-center gap-3 text-slate-300 bg-slate-950/30 p-2 rounded-lg border border-slate-800 text-xs">
                       <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0"></span> Running
                     </div>
                   </div>
                 </div>
              </div>

              {/* Row 2, Col 2: Stat Box 1 */}
              <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 flex flex-col justify-center items-center text-center h-[240px]">
                 <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mb-3">
                    <Terminal size={24} />
                 </div>
                 <div className="text-3xl font-bold text-white mb-1">40%</div>
                 <div className="text-sm text-teal-400 font-medium">ImmoMenu.ch</div>
                 <div className="text-xs text-slate-500 mt-1">Shareholder</div>
              </div>

              {/* Row 2, Col 3: Stat Box 2 */}
              <div className="bg-slate-800/30 rounded-xl border border-slate-700/50 p-6 flex flex-col justify-center items-center text-center h-[240px]">
                 <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                    <CheckCircle2 size={24} />
                 </div>
                 <div className="text-3xl font-bold text-white mb-1">100%</div>
                 <div className="text-sm text-indigo-400 font-medium">Commitment</div>
                 <div className="text-xs text-slate-500 mt-1">Zu Qualität</div>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* CSS Animation for smooth fade in */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.8);
          border-radius: 4px;
        }
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .lg\\:fixed {
            position: static !important;
            width: 100% !important;
            height: auto !important;
            border-right: none !important;
          }
          .lg\\:ml-72 {
            margin-left: 0 !important;
          }
          nav {
            display: none !important;
          }
          .animate-fadeIn {
            animation: none !important;
            opacity: 1 !important;
          }
          main > div {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 2rem;
          }
          main > div::before {
            content: '';
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
