export const projects = [
  {
    id: 1,
    title: "S-BLE Seat Position Classifier",
    description: "M.S. Capstone Project developing a multi-class ML classification system to predict bus passenger seat positions using Bluetooth Low Energy beacon data.",
    longDescription: "A comprehensive machine learning project focusing on accessibility technology. Developed robust code for data parsing, visualization, feature engineering, and model training. Implemented multiple model architectures including Random Forests and Deep Neural Networks, achieving 72.3% accuracy using LSTM networks - a 101.1% improvement over baseline.",
    tech: ["Python", "Pandas", "Scikit-Learn", "PyTorch", "LSTM", "Machine Learning"],
    image: "/images/sble-project.jpg",
    gallery: ["/images/sble-1.jpg", "/images/sble-2.jpg"],
    github: "https://github.com/jp0utside/sble-classifier",
    live: null,
    featured: true,
    category: "Machine Learning",
    year: 2024
  },
  {
    id: 2,
    title: "SetScrape",
    description: "Full-stack mobile application for easy browsing and downloading of live music from Internet Archive, developed using Cursor AI.",
    longDescription: "A comprehensive mobile application built with FastAPI microservices and React Native. Features include direct search capabilities, smart event aggregation, local downloads with progress tracking, and JWT-based authentication. Future development includes streaming capabilities and cross-platform Android support.",
    tech: ["Python", "FastAPI", "React Native", "SQLite", "JWT", "Cursor AI"],
    image: "/images/setscrape-project.jpg",
    gallery: ["/images/setscrape-1.jpg", "/images/setscrape-2.jpg"],
    github: "https://github.com/jp0utside/setscrape",
    live: null,
    featured: true,
    category: "Full Stack",
    year: 2024
  },
  {
    id: 3,
    title: "Locally Imagined",
    description: "Full-stack web application designed to facilitate local Santa Cruz art sales, built collaboratively with a team of 5 students.",
    longDescription: "A comprehensive e-commerce platform for local artists built with React frontend and GO APIs. Leveraged PostgreSQL database hosted on Heroku with Amazon S3 for image storage. Personally oversaw high-level system design, data pipelining, database schema design, and GO endpoint development.",
    tech: ["React", "Go", "PostgreSQL", "Heroku", "Amazon S3", "Team Collaboration"],
    image: "/images/locally-imagined.jpg",
    gallery: ["/images/locally-1.jpg", "/images/locally-2.jpg"],
    github: "https://github.com/jp0utside/locally-imagined",
    live: "https://locally-imagined.herokuapp.com",
    featured: true,
    category: "Full Stack",
    year: 2023
  },
  {
    id: 4,
    title: "Autonomous Cyber Defense Agent",
    description: "Collaborative project creating an autonomous cyber defense agent using Reinforcement Learning techniques for the CAGE Challenge 2.",
    longDescription: "Developed an autonomous cyber defense system using Proximal Policy Optimization (PPO) algorithm to defend against pre-trained adversarial agents. Focused on fine-tuning hyperparameters to minimize damage while maintaining training constraints, achieving significant improvements in agent performance metrics.",
    tech: ["Python", "PyTorch", "CybORG", "Reinforcement Learning", "PPO Algorithm"],
    image: "/images/cyber-defense.jpg",
    gallery: ["/images/cyber-1.jpg"],
    github: "https://github.com/jp0utside/cyber-defense-agent",
    live: null,
    featured: false,
    category: "Machine Learning",
    year: 2023
  },
  {
    id: 5,
    title: "MAC Spoofing Detector",
    description: "MATLAB implementation to test and validate cross-layer device fingerprinting approach for detecting MAC spoofing attacks.",
    longDescription: "Implemented a comprehensive detection system based on PhD research at UC Santa Cruz. Engineered synthetic dataset generator with device-specific RF characteristics, developed signal processing pipeline for EVM feature extraction, and implemented adaptive thresholding algorithms for optimized detection accuracy.",
    tech: ["MATLAB", "WLAN Toolbox", "RF Blockset", "Signal Processing", "Cybersecurity"],
    image: "/images/mac-spoofing.jpg",
    gallery: ["/images/mac-1.jpg"],
    github: "https://github.com/jp0utside/mac-spoofing-detector",
    live: null,
    featured: false,
    category: "Research",
    year: 2023
  }
];
  