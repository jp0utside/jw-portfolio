export const projects = [
  {
    id: 1,
    title: "S-BLE Seat Position Classifier",
    description: "A multi-class ML classification system to predict bus passenger seat positions.",
    longDescription: "This project was completed for my M.S. Capstone Project under Prof. Roberto Manduchi at UC Santa Cruz using the SBLE (Shuttle Bluetooth Low Energy) dataset. While a classifier of this sort could have many use cases, the primary one was to empower assistive technologies for differently abled individuals to expand the use of shuttle busses for all people. This dataset was collected by student volunteers riding shuttle busses equipped with two Bluetooth Low Energy beacons fixed to the front and back of different campus shuttle busses. Volunteers' mobile devices collected continuous RSSI readings from each beacon along with native device data while using a mobile interface to manually indicate when shuttle trips began, ended, and where they were seated. The resulting dataset showed a high degree of noise, and thus any classifier capable of determining where passengers were seated would need to be similarly complex. I developed a robust codebase to process the data in a way that I could use to build the classifier, including code for data parsing, visualization, feature engineering, and model training. I trained & tested several different types of machine learning classification models to perform this classification task, including Random Forest classifiers and several different Neural Network based models. Ultimately, I found a Long Short-Term Memory Network (LSTM) was best suited for this task, as its ability to make classifications based on dependencies over long periods of time proved it most useful in this context, obtaining an accuracy score of 72.3% — more than doubling the 35.93% accuracy of the baseline random classifier. Building this project helped further my knowledge of machine learning algorithms and deepen my insight into the theoretical possibilities and practical limitations of such models. While more research certainly needs to be done before systems like this can be effective in practice, the results I obtained certainly show great promise that the necessary improvements are in reach.",
    tech: ["Python", "Pandas", "Scikit-Learn", "PyTorch", "Machine Learning", "Data Visualization"],
    image: "/images/sble-project.jpg",
    gallery: [
      {
        image: "/images/sble-1.png",
        caption: "Sample trip data collected from the back of a shuttle bus."
      },
      {
        image: "/images/sble-2.png",
        caption: "Kernel Density Estimation of (Non-Zero) RSSI reading differences across different seat positions."
      },
      {
        image: "/images/sble-3.png",
        caption: "Kernel Density Estimation of trip accuracy prediction scores by model."
      }
    ],
    github: "https://github.com/jp0utside/SBLE_project",
    live: null,
    featured: true,
    category: "Machine Learning",
    year: 2024
  },
  {
    id: 2,
    title: "SetScrape",
    description: "Full-stack mobile application for easy browsing and downloading of live music from Internet Archive.",
    longDescription: "A comprehensive mobile application built with FastAPI microservices and React Native, with Cursor AI for development. Features include direct search capabilities, smart event aggregation, local downloads with progress tracking, and JWT-based authentication. Future development includes streaming capabilities and cross-platform Android support.",
    tech: ["Python", "FastAPI", "React Native", "SQLite", "JWT", "Cursor AI"],
    image: "/images/setscrape-project.jpg",
    gallery: [],
    github: "https://github.com/jp0utside/SetScrape",
    live: null,
    featured: false,
    category: "Full Stack",
    year: 2024
  },
  {
    id: 3,
    title: "Locally Imagined",
    description: "A comprehensive e-commerce platform to facilitate local Santa Cruz art sales.",
    longDescription: "This project was developed with a team of 5 students from UC Santa Cruz, in conjunction with a group of local Santa Cruz artists, for UC Santa Cruz’s Intro to Software Development course. Our team employed a Scrum Agile Development methodology to build this website over the course of a quarter. The website was built using React with Material UI for the frontend, Go for the APIs, a PostgreSQL database hosted on Heroku connected to Amazon S3 for image storage. This website supported user creation and profile customization, uploading and managing art listings, and comprehensive browsing functionality with filtering capabilities. My primary responsibilities included developing API endpoints, designing and implementing database schema, and ensuring the different components were designed and synchronized to achieve the high-level goals of the application.",
    tech: ["React", "Go", "PostgreSQL", "Heroku", "Amazon S3", "Scrum"],
    image: "/images/locally-imagined.jpg",
    gallery: [],
    github: "https://github.com/locally-imagined",
    live: null,
    featured: false,
    category: "Full Stack",
    year: 2023
  },
  {
    id: 4,
    title: "Autonomous Cyber Defense Agent",
    description: "Reinforcement Learning agent built for the CAGE Challenge 2.",
    longDescription: "Developed an autonomous cyber defense system using Proximal Policy Optimization (PPO) algorithm to defend against pre-trained adversarial agents. Focused on fine-tuning hyperparameters to minimize damage while maintaining training constraints, achieving significant improvements in agent performance metrics.",
    tech: ["Python", "PyTorch"],
    image: "/images/cyber-defense.jpg",
    gallery: [],
    github: null,
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
    tech: ["MATLAB", "WLAN Toolbox", "RF Blockset", "Signal Processing"],
    image: "/images/mac-spoofing.jpg",
    gallery: [],
    github: null,
    live: null,
    featured: false,
    category: "Research",
    year: 2023
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description: "A website showcasing my professional experience, projects, and technical skills.",
    longDescription: "Built a modern, responsive, single-page comprehensive personal portfolio website using React and Vite for optimal performance. Features include an interactive experience section with sidebar navigation, a project gallery with lightbox functionality, a categorized skills section with color-coded technology chips, and an education timeline. The site utilizes TailwindCSS for modern styling, Lucide React for consistent iconography, and includes smooth animations and responsive design principles. Developed using Claude AI for high-level design andCursor AI for efficient development and implementation.",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript", "Lucide React", "PostCSS", "Cursor AI", "Claude AI"],
    image: "/images/portfolio-project.jpg",
    gallery: [],
    github: "https://github.com/jp0utside/jw-portfolio",
    live: null,
    featured: false,
    category: "Web Development",
    year: 2024
  }
];