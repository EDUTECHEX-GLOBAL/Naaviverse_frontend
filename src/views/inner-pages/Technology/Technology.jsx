// Technology.jsx
import React, { Fragment } from 'react';
import {
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineShare,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineArrowRight,
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineLightBulb,
} from "react-icons/hi2";
import './Technology.scss';
import Footer from '../../../components/footernew/index';

const pathwayBullets = [
  "user decisions",
  "performance",
  "behavioral patterns",
  "emerging opportunities",
  "and future industry trends.",
];

const pathwayCore = [
  "personalized growth navigation,",
  "intelligent decision-making,",
  "adaptive career transitions,",
  "and long-term human development.",
];

const llmCapabilities = [
  "conversational intelligence,",
  "contextual understanding,",
  "pathway generation,",
  "predictive reasoning,",
  "and adaptive recommendations.",
];

const kgNodes = [
  "skills",
  "careers",
  "universities",
  "industries",
  "mentors",
  "opportunities",
  "and human pathways.",
];

// Floating nodes background animation
function FloatingNodes() {
  return (
    <div className="tech-nodes-bg">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="tech-node-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            opacity: 0.15 + Math.random() * 0.2,
          }}
        />
      ))}
    </div>
  );
}

// Macro/Micro/Nano visual component
function PathwayStepsVisual() {
  return (
    <div className="tech-pathway-visual">
      <svg viewBox="0 0 300 180" className="tech-pathway-svg">
        {/* Connecting lines */}
        <path
          d="M 40 90 L 110 90 L 150 45 L 190 45 L 250 45"
          fill="none"
          stroke="#2DB67D"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.4"
        />
        <circle cx="40" cy="90" r="6" fill="#2DB67D">
          <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="25" y="78" fontSize="10" fill="#2DB67D" fontWeight="600">Macro</text>

        <circle cx="110" cy="90" r="6" fill="#4DA6FF">
          <animate attributeName="r" values="4;8;4" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <text x="95" y="78" fontSize="10" fill="#4DA6FF" fontWeight="600">Micro</text>

        <circle cx="190" cy="45" r="6" fill="#FF9500">
          <animate attributeName="r" values="4;8;4" dur="3s" begin="1s" repeatCount="indefinite" />
        </circle>
        <text x="175" y="33" fontSize="10" fill="#FF9500" fontWeight="600">Nano</text>

        {/* Animated pulse rings */}
        <circle cx="250" cy="45" r="12" fill="none" stroke="#2DB67D" strokeWidth="1" opacity="0.6">
          <animate attributeName="r" values="8;20;8" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="45" r="4" fill="#2DB67D" />
        <text x="240" y="35" fontSize="9" fill="#2DB67D" fontWeight="600">Goal</text>
      </svg>
    </div>
  );
}

// LLM + KG synergy visual
function SynergyVisual() {
  return (
    <div className="tech-synergy-visual">
      <svg viewBox="0 0 320 200" className="tech-synergy-svg">
        {/* Left node - LLM */}
        <circle cx="80" cy="100" r="45" fill="none" stroke="#2DB67D" strokeWidth="1.5" opacity="0.3">
          <animate attributeName="r" values="42;48;42" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="100" r="28" fill="rgba(45,182,125,0.08)" stroke="#2DB67D" strokeWidth="1.2" />
        <text x="80" y="95" textAnchor="middle" fontSize="11" fill="#2DB67D" fontWeight="700">LLM</text>
        <text x="80" y="110" textAnchor="middle" fontSize="9" fill="#6B7A8D">Reasoning</text>

        {/* Right node - KG */}
        <circle cx="240" cy="100" r="45" fill="none" stroke="#4DA6FF" strokeWidth="1.5" opacity="0.3">
          <animate attributeName="r" values="42;48;42" dur="4s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="240" cy="100" r="28" fill="rgba(77,166,255,0.08)" stroke="#4DA6FF" strokeWidth="1.2" />
        <text x="240" y="95" textAnchor="middle" fontSize="11" fill="#4DA6FF" fontWeight="700">KG</text>
        <text x="240" y="110" textAnchor="middle" fontSize="9" fill="#6B7A8D">Structure</text>

        {/* Connection with glow */}
        <line x1="108" y1="100" x2="212" y2="100" stroke="url(#grad-llm-kg)" strokeWidth="2" strokeDasharray="5 3" opacity="0.5">
          <animate attributeName="stroke-dashoffset" values="0;16" dur="1.5s" repeatCount="indefinite" />
        </line>

        {/* Center synergy glow */}
        <circle cx="160" cy="100" r="18" fill="rgba(45,182,125,0.15)" filter="url(#glow)">
          <animate attributeName="r" values="14;22;14" dur="3s" repeatCount="indefinite" />
        </circle>
        <text x="160" y="104" textAnchor="middle" fontSize="10" fill="#2DB67D" fontWeight="800">×</text>

        {/* Floating connection nodes */}
        {[0.25, 0.5, 0.75].map((pos, i) => (
          <circle
            key={i}
            cx={80 + (160 * pos)}
            cy={100 + (Math.sin(pos * Math.PI) * 15)}
            r="3"
            fill="#2DB67D"
            opacity="0.5"
          >
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin={`${i}s`} repeatCount="indefinite" />
          </circle>
        ))}

        <defs>
          <linearGradient id="grad-llm-kg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DB67D" />
            <stop offset="100%" stopColor="#4DA6FF" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

// Graph nodes visual
function GraphNodesVisual() {
  return (
    <div className="tech-graph-visual">
      <svg viewBox="0 0 280 180" className="tech-graph-svg">
        {[
          { x: 40, y: 90, label: "Skills", color: "#2DB67D" },
          { x: 110, y: 40, label: "Careers", color: "#4DA6FF" },
          { x: 180, y: 70, label: "Uni", color: "#FF9500" },
          { x: 240, y: 120, label: "Mentors", color: "#A259FF" },
          { x: 70, y: 140, label: "Opportunities", color: "#2DB67D" },
          { x: 150, y: 150, label: "Pathways", color: "#4DA6FF" },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r="8" fill={node.color} opacity="0.7">
              <animate attributeName="r" values="6;10;6" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <text x={node.x} y={node.y - 10} textAnchor="middle" fontSize="9" fill="#1A1A2E" fontWeight="600">{node.label}</text>
          </g>
        ))}
        {/* Connecting lines */}
        <path
          d="M 40 90 L 110 40 L 180 70 L 240 120 M 180 70 L 150 150 M 110 40 L 70 140 M 70 140 L 150 150"
          fill="none"
          stroke="#2DB67D"
          strokeWidth="0.8"
          opacity="0.3"
          strokeDasharray="3 3"
        >
          <animate attributeName="stroke-dashoffset" values="0;12" dur="2s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
}

const Technology = () => {
  return (
    <Fragment>
      {/* Hero Section */}
      <div className="tech-hero">
        <div className="tech-hero-bg" />
        <FloatingNodes />
        <div className="tech-container tech-hero-inner">
          <div className="tech-hero-text">
            <div className="tech-hero-badge">
              <span className="tech-hero-pulse" />
              INTELLIGENCE LAYER
            </div>
            <h1 className="tech-hero-title">
              AI navigation <span className="tech-hero-accent">engine</span>
            </h1>
            <p className="tech-hero-desc">
              Naavi combines Large Language Models with Knowledge Graphs to create a continuously evolving intelligence ecosystem — capable of understanding relationships, possibilities, and human potential.
            </p>
          </div>
          <div className="tech-hero-visual">
            <SynergyVisual />
          </div>
        </div>
      </div>

      {/* Marquee Scroll Strip */}
      <div className="tech-marquee-strip">
        <div className="tech-marquee-track">
          {['LLM', 'KNOWLEDGE GRAPH', 'GRAPHRAG', 'ADAPTIVE AI', 'PATHWAY ENGINE', 'INTELLIGENT NAVIGATION', 'HUMAN POTENTIAL'].map((item, i) => (
            <span key={i} className="tech-marquee-item">
              <span className="tech-marquee-dot" />
              {item}
            </span>
          ))}
          {['LLM', 'KNOWLEDGE GRAPH', 'GRAPHRAG', 'ADAPTIVE AI', 'PATHWAY ENGINE', 'INTELLIGENT NAVIGATION', 'HUMAN POTENTIAL'].map((item, i) => (
            <span key={`dup-${i}`} className="tech-marquee-item">
              <span className="tech-marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Pathways Section */}
      <section id="pathways" className="tech-section tech-pathways">
        <div className="tech-container">
          <div className="tech-section-header">
            <span className="tech-section-tag">LAYER 01</span>
            <h2 className="tech-section-title">Pathways Engine</h2>
            <p className="tech-section-desc">
              Transforming ambitions into intelligent, navigable journeys that evolve in real time.
            </p>
          </div>

          <div className="tech-pathways-grid">
            <div className="tech-pathways-content">
              <div className="tech-card tech-card-white">
                <p className="tech-body-text">
                  Naavi's AI Pathways Engine dynamically generates interconnected{' '}
                  <strong className="tech-green">Macro</strong>,{' '}
                  <strong className="tech-green">Micro</strong>, and{' '}
                  <strong className="tech-green">Nano</strong> steps that guide users from their present coordinates to future aspirations.
                </p>
                <p className="tech-body-sub">Unlike static roadmaps, Naavi pathways continuously evolve based on:</p>

                <div className="tech-bullet-grid">
                  {pathwayBullets.map((b) => (
                    <div key={b} className="tech-bullet-card">
                      <div className="tech-bullet-dot" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <p className="tech-body-text" style={{ marginTop: '24px' }}>
                  The platform intelligently adapts navigation in real time — similar to how GPS systems optimize routes during travel. Whether the goal is higher education, skill development, entrepreneurship, global careers, or future industries, Naavi creates personalized pathways designed around each individual's unique potential.
                </p>
              </div>
            </div>

            <div className="tech-pathways-visual-side">
              <div className="tech-card tech-card-navy">
                <div className="tech-card-label">CORE CAPABILITIES</div>
                <div className="tech-core-list">
                  {pathwayCore.map((c, i) => (
                    <div key={c} className="tech-core-item">
                      <span className="tech-core-num">{String(i + 1).padStart(2, "0")}</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="tech-card tech-card-white">
                <div className="tech-card-label tech-label-green">PATHWAY STEPS</div>
                <PathwayStepsVisual />
                <div className="tech-step-labels">
                  <span style={{ color: '#2DB67D' }}>Macro</span>
                  <span style={{ color: '#4DA6FF' }}>Micro</span>
                  <span style={{ color: '#FF9500' }}>Nano</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLM + KG Section */}
      <section id="llms-kgs" className="tech-section tech-llm-section">
        <div className="tech-container">
          <div className="tech-section-header tech-header-light">
            <span className="tech-section-tag tech-tag-mint">LAYER 02</span>
            <h2 className="tech-section-title tech-title-light">LLMs × Knowledge Graphs</h2>
            <p className="tech-section-desc tech-desc-light">
              Naavi is powered by the powerful synergy between Large Language Models (LLMs) and Knowledge Graphs (KGs), combining reasoning intelligence with structured pathway understanding.
            </p>
          </div>

          <div className="tech-llm-grid">
            <div className="tech-card tech-card-glass">
              <div className="tech-module-icon" style={{ background: 'linear-gradient(135deg, #2DB67D, #1a9e6a)' }}>
                <HiOutlineCpuChip size={24} />
              </div>
              <div className="tech-module-label">MODULE · LLM</div>
              <h3 className="tech-module-title">Large Language Models bring:</h3>
              <div className="tech-capability-list">
                {llmCapabilities.map((c) => (
                  <div key={c} className="tech-capability-item">
                    <HiOutlineSparkles className="tech-capability-icon" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tech-card tech-card-glass">
              <div className="tech-module-icon" style={{ background: '#4DA6FF' }}>
                <HiOutlineShare size={24} />
              </div>
              <div className="tech-module-label">MODULE · KG</div>
              <h3 className="tech-module-title">Knowledge Graphs create a structured intelligence network connecting:</h3>
              <div className="tech-tags-container">
                {kgNodes.map((n) => (
                  <span key={n} className="tech-tag">{n}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Synergy Banner */}
          <div className="tech-synergy-banner">
            <GraphNodesVisual />
            <div className="tech-synergy-content">
              <div className="tech-synergy-label">SYNERGY · LLM × KG</div>
              <h3 className="tech-synergy-title">
                Together, this AI architecture moves beyond traditional recommendation systems.
              </h3>
              <p className="tech-synergy-text">
                Naavi generates highly personalized, explainable, and future-aware navigation pathways. By integrating LLMs with Knowledge Graphs through advanced{' '}
                <span className="tech-mint-bold">GraphRAG frameworks</span>, Naavi builds a continuously evolving intelligence ecosystem capable of understanding not just information — but relationships, possibilities, and human potential itself.
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Technology;