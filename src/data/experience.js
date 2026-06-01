export const experience = [
  {
    id: 0,
    company: "SMC Technology Services (County of San Mateo)",
    position: "GIS Analyst Intern (Fellow II)",
    location: "Redwood City, CA",
    startDate: "Feb 2026",
    endDate: "Present",
    description: [
      "Contributing to ongoing development, expansion, and maintenance of deployed ESRI enterprise applications used internally by 80+ county departments and externally by residents, law enforcement, and partner agencies.",
      "Led design and development of a live mapping application for the San Mateo Local Agency Formation Commission (LAFCo); after positive stakeholder feedback on the initial release, currently building an expanded version with custom query/filter components for advanced spatial analysis.",
      "Identified recurring AI pain points across county departments and enrolled in the county's AI pilot program, now working directly with the head of the Innovation Department on county-wide AI strategy.",
      "Built a local agentic AI chatbot running entirely on on-premises hardware (Ollama, open-source 8B model) with multi-tool orchestration, hybrid retrieval (dense vector + BM25 with RRF fusion), sandbox-enforced file I/O, append-only audit logging, and source citation. After structured evaluations revealed reliability limits in the small model's orchestration, pivoted to dedicated RAG-driven search tools with content-based format detection across 9 document types, LLM-powered enrichment, dual-index storage, and a quantitative evaluation harness.",
      "Developed a computer vision QA pipeline for high-resolution aerial orthoimagery, detecting cloud and shadow artifacts via multi-signal classical CV (HSV thresholding, gradient-magnitude analysis, connected-component filtering) and auditing tile seam misalignment. Findings export as ArcGIS-native Esri JSON layers for direct use by GIS analysts in ArcGIS Pro."
    ],
    tech: ["Python", "ESRI ArcGIS", "Ollama", "ChromaDB", "BM25", "SQLite", "FastAPI", "OpenCV", "rasterio", "NumPy"],
    logo: "/images/sanmateo-logo.png"
  },
  {
    id: 5,
    company: "AJ Tutoring",
    position: "Computer Science & SAT Prep Tutor",
    location: "Menlo Park, CA",
    startDate: "Nov 2024",
    endDate: "Present",
    description: [
      "Providing one-on-one tutoring services to high school and early-college students in academic computer science (Java, Python, intro algorithms), AP Computer Science exam preparation, and SAT test prep.",
      "Have worked with approximately 10 students to date, all of whom have improved their measured exam scores over the course of tutoring.",
      "Develop custom lesson plans based on each student's current level, target outcomes, and learning style."
    ],
    tech: ["Java", "Python", "Teaching"],
    logo: null
  },
  {
    id: 1,
    company: "UC Santa Cruz",
    position: "Teaching Assistant",
    location: "Santa Cruz, CA",
    startDate: "Sept 2023",
    endDate: "June 2024",
    description: [
      "Served as Teaching Assistant for undergraduate Computational Models across three quarters, assisting multiple professors with instruction covering DFAs, NFAs, Regular Expressions, Context-Free Grammars, Turing Machines, computability, and complexity.",
      "Wrote and delivered supplementary teaching material in weekly discussion sections, proctored and graded exams, led office hours, and provided one-on-one tutoring to over 250 students in person and online.",
      "Identified inefficiencies in the team's manual grading workflow and championed adoption of Gradescope across the teaching staff. Implementation required configuring class roles and permissions, creating and uploading exams, and manually transcribing rubrics. Reduced total grading time by approximately 50% and improved feedback turnaround while ensuring university deadlines were met consistently."
    ],
    tech: ["Gradescope", "Teaching"],
    logo: "/images/ucsc-logo.png"
  },
  {
    id: 2,
    company: "PayPal",
    position: "Software Engineer Intern",
    location: "San Jose, CA",
    startDate: "June 2022",
    endDate: "Sept 2022",
    description: [
      "Significantly expedited development cycles for the Credit User Experience team by redesigning React/Redux application used to test credit application flow, allowing testing from different builds and entry points before pushing code to production.",
      "Updated and centralized documentation on error-prone application processes by interviewing 10+ developers across 3 teams on their workflows in order to identify the most common and critical errors encountered during development.",
      "Enabled compliance testing through a suite of tools including sample user generation, login state control, and configurable entry data payloads, facilitating the detection of early compliance violations and preventing costly deployment delays.",
      "Was a member of the Inclusionist Design Team, a team of interns tasked with creating designs used to promote accommodating both employees and users with different needs."
    ],
    tech: ["React", "Redux", "JavaScript", "Node.js", "Figma"],
    logo: "/images/paypal-logo.png"
  },
  {
    id: 3,
    company: "VeMiDoc",
    position: "Product Engineer Intern",
    location: "Remote",
    startDate: "Feb 2020",
    endDate: "Sept 2020",
    description: [
      "Built a web-based analytics portal using the CodeIgniter PHP framework that empowered 20+ employees and clients with self-service database access, allowing non-technical executives to address client questions and perform ad-hoc analysis on application usage data without engineering involvement.",
      "Partnered with C-suite executives to define KPI requirements and delivered automated reporting tools with embedded data visualizations, accelerating fundraising activities by reducing the time required to generate investor-facing metrics by 60%.",
      "Redesigned and migrated the application's MySQL database schema to support expanded access-management functionality, implementing user tiers and proxy account structures to accommodate the needs of key stakeholders and expand the addressable client base. Conducted post-migration validation through statistical integrity checks."
    ],
    tech: ["CodeIgniter", "PHP", "MySQL", "Database Design", "Data Visualization"],
    logo: "/images/vemidoc-logo.png"
  },
  {
    id: 4,
    company: "San Mateo County Attorney's Office",
    position: "Information Technology Intern",
    location: "San Mateo, CA",
    startDate: "June 2019",
    endDate: "Aug 2019",
    description: [
      "Observed and analyzed daily use of office legal software in order to prepare the data and users for a software upgrade.",
      "Made suggestions to office administrators on how to utilize software features to their fullest extent and streamline the operations of each internal team based on the needs of the legal clients they support.",
      "Held one-on-one meetings with staff members to understand their existing issues with the software and provide ad-hoc fixes.",
      "Held trainings for new users to introduce them to the software and how it is used in the context of the office."
    ],
    tech: ["Desktop Support", "End-User Tutorials", "Technical Writing", "Detailed Error Logging"],
    logo: "/images/sanmateo-logo.png"
  }
];
