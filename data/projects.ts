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
  name: "Hidayat Hatta Irsyad",
  role: "Data Engineering & Analytics Enthusiast",
  tagline: "Informatics graduate passionate about building robust ETL pipelines, data warehouses, and actionable analytics systems.",
  bio: "Informatics graduate from Universitas Riau with strong focus on data engineering, analytics, and backend workflows. Experienced in designing relational schemas, orchestrating scheduled pipelines with Python & SQL, and building scalable data solutions.",
  cv: "/cv.pdf",
  email: "hidayat.hatta1397@student.unri.ac.id",
  github: "https://github.com/hidayathatta",
  linkedin: "https://linkedin.com/in/hidayathatta",
  location: "Pekanbaru, Riau, Indonesia",
};

export const heroPipelineSteps: Step[] = [
  { name: "Extract Sources", note: "PostgreSQL & REST APIs" },
  { name: "Validate & Buffer", note: "Kafka & Pydantic" },
  { name: "Transform & Model", note: "dbt & Apache Airflow" },
  { name: "Analytics Warehouse", note: "BigQuery / Star Schema" },
  { name: "BI Visualization", note: "Metabase & Reports" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Querying",
    skills: ["Python", "SQL (PostgreSQL, MySQL)", "TypeScript / JavaScript", "Bash / Shell Scripting"],
  },
  {
    title: "Data Pipelines & ETL",
    skills: ["Apache Airflow", "dbt (data build tool)", "Pandas & NumPy", "Apache Kafka (Basics)"],
  },
  {
    title: "Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "Google BigQuery", "Redis", "Supabase"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker & Docker Compose", "Git & GitHub Actions", "Linux / CLI", "Metabase / Looker Studio"],
  },
];

export const educationAndExperience: ExperienceItem[] = [
  {
    roleOrDegree: "Universitas Riau (UNRI) — Bachelor of Computer Science (Informatics)",
    details: "Graduated with focused coursework in Database Systems, Data Mining, Software Engineering, and Distributed Systems.",
  },
  {
    roleOrDegree: "Data Engineering & Analytics Independent Projects",
    details: "Designed end-to-end data pipelines, star schema data warehouses, and interactive reporting dashboards.",
  },
  {
    roleOrDegree: "Open Source & Continuous Learning",
    details: "Active practitioner in data pipeline architecture, database query optimization, and modern data stack tooling.",
  },
];

export const projects: Project[] = [
  {
    slug: "e-commerce-etl-pipeline",
    title: "E-Commerce Ingestion & Star Schema Warehouse",
    summary: "Automated batch ETL pipeline extracting raw transactional data, executing dbt dimensional modeling, and loading into an analytics warehouse.",
    stack: ["Python", "Apache Airflow", "PostgreSQL", "dbt", "Docker"],
    github: "https://github.com/hidayathatta/ecommerce-data-pipeline",
    problem: "Operational transactional databases were experiencing performance degradation due to ad-hoc analytical queries, with unstandardized customer and revenue metrics across departments.",
    architecture: [
      { name: "Raw Ingestion", note: "Airflow DAG & Python" },
      { name: "Staging Area", note: "PostgreSQL raw schema" },
      { name: "Dimensional Modeling", note: "dbt transformations" },
      { name: "Fact & Dim Tables", note: "Optimized Star Schema" },
      { name: "BI Reporting", note: "Metabase dashboard" },
    ],
    learned: [
      "Configured idempotent Airflow DAGs with automatic backfills and alerting mechanisms.",
      "Modeled Kimball star schemas with fact tables and slowly changing dimensions (SCD).",
      "Automated schema validation and freshness tests using dbt test suites.",
      "Containerized multi-service pipeline using Docker Compose.",
    ],
  },
  {
    slug: "realtime-event-streaming",
    title: "Real-Time Event Streaming & Anomaly Detection",
    summary: "Event-driven telemetry ingestion engine buffering user interactions with Kafka and detecting activity spikes in real-time.",
    stack: ["Apache Kafka", "Python", "FastAPI", "Redis", "Docker"],
    github: "https://github.com/hidayathatta/streaming-log-analytics",
    problem: "Critical application errors and abnormal activity patterns were only discovered hours after occurrence due to legacy batch log processing.",
    architecture: [
      { name: "Event Producer", note: "FastAPI REST API" },
      { name: "Message Broker", note: "Apache Kafka Topics" },
      { name: "Stream Worker", note: "Python Async Consumer" },
      { name: "Sliding Window", note: "Redis in-memory caching" },
      { name: "Alert Trigger", note: "Real-time webhook notification" },
    ],
    learned: [
      "Implemented Kafka producer-consumer patterns with distinct consumer groups.",
      "Handled partition balancing, at-least-once delivery guarantees, and backpressure.",
      "Maintained rolling window aggregations and metric caching in Redis.",
    ],
  },
  {
    slug: "market-data-pipeline",
    title: "Market Intelligence Scraper & Analytics Pipeline",
    summary: "Automated scheduled web scraping pipeline aggregating financial and commodity pricing data with strict schema validation.",
    stack: ["Python", "BeautifulSoup4", "Pydantic", "SQLite", "Streamlit"],
    github: "https://github.com/hidayathatta/market-data-pipeline",
    problem: "Regional commodity prices were scattered across non-standardized government portals without public APIs, making historical trend analysis tedious.",
    architecture: [
      { name: "Data Extraction", note: "Automated BS4 crawler" },
      { name: "Validation", note: "Pydantic schema enforcement" },
      { name: "Cleaning & Normalization", note: "Pandas pipeline" },
      { name: "Storage", note: "Indexed SQLite database" },
      { name: "Dashboard", note: "Streamlit analytics view" },
    ],
    learned: [
      "Built resilient scrapers with automated retries, user-agent rotation, and error logging.",
      "Enforced type-safe data validation with Pydantic to catch unexpected web structure changes.",
      "Generated analytical time-series metrics such as moving averages and price volatility.",
    ],
  },
  {
    slug: "customer-churn-analytics",
    title: "Customer Churn Feature Store & Scoring Pipeline",
    summary: "Analytical feature pipeline calculating RFM (Recency, Frequency, Monetary) metrics and scoring customer retention risks.",
    stack: ["Python", "Scikit-Learn", "PostgreSQL", "Pandas", "Matplotlib"],
    github: "https://github.com/hidayathatta/customer-churn-analytics",
    problem: "A subscription business experienced elevated customer drop-offs because warning signals were buried in raw event logs without centralized feature modeling.",
    architecture: [
      { name: "Activity Logs", note: "Raw user session database" },
      { name: "Feature Engineering", note: "RFM & behavioral transforms" },
      { name: "Model Training", note: "Random Forest Classifier" },
      { name: "Daily Scoring", note: "Automated batch inference" },
      { name: "Action Dashboard", note: "High-risk customer segment export" },
    ],
    learned: [
      "Constructed reusable feature tables from unstructured event timestamps.",
      "Tackled dataset class imbalance using SMOTE and evaluated performance via PR-AUC and F1-score.",
      "Automated batch prediction exports to prioritize customer success outreach.",
    ],
  },
];
