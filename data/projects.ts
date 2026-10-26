export type Step = {
  name: string;
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  github: string;
  problem: string;
  architecture: Step[];
  learned: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  roleOrDegree: string;
  details: string;
};

export const profile = {
  name: 'Hidayat Hatta Irsyad',
  role: 'Data Enthusiast',
  tagline: 'Informatics graduate passionate about building robust ETL pipelines, data warehouses, and actionable analytics systems.',
  bio: 'Informatics graduate from Universitas Riau with strong focus on data engineering, analytics, and backend workflows. Experienced in designing relational schemas, orchestrating scheduled pipelines with Python & SQL, and building scalable data solutions.',
  cv: '/cv.pdf',
  email: 'hidayathatta834@gmail.com',
  github: 'https://github.com/hidayathatta',
  linkedin: 'https://www.linkedin.com/in/hidayat-hatta-irsyad-36809a279/',
  location: 'Pekanbaru, Riau, Indonesia',
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Querying',
    skills: ['Python', 'SQL (PostgreSQL, MySQL)', 'TypeScript / JavaScript', 'Bash / Shell Scripting'],
  },
  {
    title: 'Data Pipelines & ETL',
    skills: ['Apache Airflow', 'dbt (data build tool)', 'Pandas & NumPy'],
  },
  {
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'MySQL', 'Oracle Database', 'DuckDB', 'MinIO / S3', 'Parquet'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Docker & Docker Compose', 'Git & GitHub Actions', 'Linux / CLI'],
  },
];

export const educationAndExperience: ExperienceItem[] = [
  {
    roleOrDegree: 'Universitas Riau (UNRI) - Bachelor of Informatics Engineering',
    details: 'Awarded as the top graduate (Pemuncak 1) at the Faculty of Engineering level for the Bachelor’s degree program, achieving the highest academic performance among graduates in May 2026.',
  },
  {
    roleOrDegree: 'Laboratory Assistant - Database',
    details:
      'Instructed SQL programming laboratory sessions using Oracle Database for undergraduate students. Guided practical implementations of relational database design, query optimization, and advanced SQL commands across DML, DDL, DCL, and TCL.',
  },
  {
    roleOrDegree: 'Bangkit Academy Batch 2 (2024) - Machine Learning Cohort ',
    details:
      'Completed an intensive Machine Learning program with 905 total learning hours, achieving an average score of 91.40 (Grade A) across all courses. Collaborated with a cross-functional team of 6 members from the Machine Learning, Mobile Development, and Cloud Computing tracks to develop BatikLoka, a mobile application for batik pattern recognition. Performed data preprocessing and data cleaning to ensure dataset quality and consistency. Optimized image classification performance through transfer learning, improving model accuracy during evaluation.',
  },
];

export const projects: Project[] = [
  {
    slug: 'nyc-taxi-weather-analytics',
    title: 'NYC Taxi & Weather Analytics: End-to-End Data Pipeline',
    summary:
      'Built an end-to-end data pipeline processing over 10 million cleaned NYC Yellow Taxi records enriched with hourly weather data, using a medallion architecture, automated orchestration, data quality checks, and an interactive analytics dashboard.',

    stack: ['Python', 'SQL', 'DuckDB', 'Apache Airflow', 'MinIO', 'Parquet', 'Docker Compose', 'Streamlit'],

    github: 'https://github.com/HidayatHatta/medallion-project',

    problem:
      'Raw taxi trip data alone provides limited context for understanding how weather conditions relate to travel patterns and tipping behavior. The project addresses this by building a reliable, repeatable data pipeline that integrates NYC Yellow Taxi records with hourly weather data, validates data quality, and transforms the results into analytics-ready datasets.',

    architecture: [
      { name: 'Data Ingestion', note: 'Python & MinIO (Bronze Layer)' },
      { name: 'Data Transformation', note: 'DuckDB & Parquet (Silver Layer)' },
      { name: 'Data Quality', note: 'Automated Validation Checks' },
      { name: 'Data Aggregation', note: 'SQL Analytics (Gold Layer)' },
      { name: 'Orchestration & Dashboard', note: 'Apache Airflow & Streamlit' },
    ],

    learned: [
      'Designed an end-to-end data pipeline using a Bronze–Silver–Gold medallion architecture.',
      'Implemented idempotent ingestion, date-based partitioning, and reproducible monthly processing.',
      'Applied SQL-based transformations and data modeling with DuckDB and Parquet.',
      'Built automated data quality checks and audit-before-publish safeguards to improve pipeline reliability.',
      'Orchestrated dependent tasks and monthly data processing with Apache Airflow.',
      'Integrated external API data and developed an interactive dashboard for analytical insights.',
    ],
  },

  {
    slug: 'virtual-agent-pelayanan-masyarakat',
    title: 'Sahabat Kominfo: Public Service Virtual Agent',
    summary: 'Developed a public service virtual agent to support community access to government service information, integrating a machine learning model with a Python Flask backend through REST APIs for real-time response processing.',

    stack: ['Python', 'Flask', 'REST API', 'Machine Learning', 'NLP'],

    github: 'https://github.com/HidayatHatta/Virtual-Agent-Pelayanana-Masyarakat',

    problem:
      'Accessing public service information can be challenging when information needs to be delivered efficiently and consistently. This project addresses the challenge by developing a virtual agent that connects users with a machine learning model through a Flask backend, enabling real-time response processing and a structured interaction flow.',

    architecture: [
      {
        name: 'User Interaction',
        note: 'Receives User Queries and Sends Requests',
      },
      {
        name: 'Backend Processing',
        note: 'Python & Flask Application',
      },
      {
        name: 'API Integration',
        note: 'REST API Communication Between Application and Model',
      },
      {
        name: 'Machine Learning',
        note: 'Processes Queries and Generates Responses',
      },
      {
        name: 'Response Delivery',
        note: 'Returns Model Responses to the User in Real Time',
      },
    ],

    learned: [
      'Analyzed system requirements for a public service virtual agent.',
      'Developed a Python Flask backend and integrated a machine learning model through REST APIs.',
      'Designed the communication flow between users, the application, and the machine learning model.',
      'Performed functional testing, debugging, and troubleshooting to improve system reliability.',
      'Prepared technical documentation covering system architecture, API integration, and implementation procedures.',
    ],
  },

  {
    slug: 'batikloka-batik-pattern-classification',
    title: 'BatikLoka: Indonesian Batik Pattern Classification',
    summary:
      'Developed an image classification model using EfficientNetV2S and TensorFlow to recognize 10 Indonesian batik patterns, collaborating with Mobile Development and Cloud Computing teams to integrate the machine learning model into an application.',

    stack: ['Python', 'TensorFlow', 'EfficientNetV2S', 'Deep Learning', 'Image Classification'],

    github: 'https://github.com/AgusSyuhada/batik-loka',

    problem:
      'Indonesia has a diverse range of traditional batik patterns that can be difficult to identify visually, especially for users unfamiliar with their characteristics. BatikLoka addresses this challenge by developing a deep learning-based image classification model that recognizes 10 types of Indonesian batik patterns and supports integration into a user-facing application.',

    architecture: [
      {
        name: 'Dataset Preparation',
        note: 'Dataset Preprocessing and Validation',
      },
      {
        name: 'Model Development',
        note: 'EfficientNetV2S with TensorFlow',
      },
      {
        name: 'Model Evaluation',
        note: 'Training, Validation, and Classification Performance Assessment',
      },
      {
        name: 'Model Integration',
        note: 'Collaboration with Mobile Development and Cloud Computing Teams',
      },
      {
        name: 'Application Testing',
        note: 'Testing Model Integration and Application Functionality',
      },
    ],

    learned: [
      'Collaborated with a multidisciplinary team across Machine Learning, Mobile Development, and Cloud Computing.',
      'Developed and optimized an EfficientNetV2S image classification model using TensorFlow to recognize 10 Indonesian batik patterns.',
      'Performed dataset preprocessing and validation to improve data quality before model training.',
      'Collaborated with Mobile Development and Cloud Computing teams to integrate the trained model into the application.',
      'Participated in model testing and evaluation to assess classification performance and application requirements.',
    ],
  },
];
