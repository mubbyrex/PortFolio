const header = {
  homepage: "https://mubbycodes.vercel.app",
  title: "MUBARAK",
};

const about = {
  name: "Mubarak Ibrahim",
  role: ["DevOps Engineer", "Platform Engineer"],
  description: [
    "I build secure, scalable cloud infrastructure and platform automation for regulated and high-traffic environments across fintech, healthtech, and ecommerce.",
    "My work spans AWS, Kubernetes, Terraform, CI/CD, observability, infrastructure automation, and multi-cloud operations. I focus on reducing operational toil, improving deployment reliability, and helping engineering teams ship safely.",
  ],
  resume:
    "https://drive.google.com/file/d/1moqGeAWtrzOZzq7v0AVgC5IpWhiC-kr4/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/mubarakibrahimofficial5/",
    github: "https://github.com/Mubbyrex",
  },
  image: "/images/dp.jpeg",
};

const achievements = [
  {
    title: "Cut deployment times by 50%",
    description:
      "Migrated legacy Jenkins pipelines to GitHub Actions with reusable workflow templates, halving release cycle times and eliminating manual deployment steps across production environments.",
  },
  {
    title: "Reduced MTTR by 30%",
    description:
      "Rolled out end-to-end observability using OpenTelemetry, Prometheus, and Grafana — giving teams the visibility to catch and resolve incidents faster across Kubernetes and cloud-native services.",
  },
  {
    title: "Dropped operational overhead by 40%",
    description:
      "Automated infrastructure provisioning and compliance checks with Terraform and Ansible, eliminating manual toil across cloud and hybrid environments in a regulated financial services context.",
  },
  {
    title: "Delivered multi-cloud platform for financial systems",
    description:
      "Designed and maintained production infrastructure spanning AWS, OCI, and GCP for finance and treasury applications, with RBAC controls, disaster recovery, and IaC-driven compliance built in.",
  },
];

const projects = [
  {
    name: "Enterprise microservices modernization",
    description:
      "Led the migration of a monolithic system into Kubernetes-based microservices. GitHub Actions handles CI/CD; Terraform manages infrastructure across AWS and Oracle Cloud. Includes service mesh with Istio for traffic management and observability.",
    stack: [
      "AWS",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Docker",
      "Istio",
    ],
    sourceCode: "https://github.com/Mubbyrex/monolith-to-microservices-project",
  },
  {
    name: "CI/CD and Kubernetes pipeline architecture",
    description:
      "End-to-end CI/CD pipeline for containerised applications — Jenkins, Docker, and Kubernetes wired together to support automated test, build, and deployment stages with rollback capability.",
    stack: ["Jenkins", "Kubernetes", "Docker", "Git", "Ansible"],
    sourceCode: "https://github.com/Mubbyrex/Jenkins-Project",
  },
  {
    name: "Serverless automation platform",
    description:
      "Serverless task orchestration on AWS: Lambda, API Gateway, DynamoDB, and Cognito for auth. Built to be cost-efficient and operationally lean with no servers to manage.",
    stack: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Cognito",
      "Serverless",
      "Node.js",
    ],
    sourceCode: "https://github.com/Mubbyrex/Serverless_TODO",
  },
  {
    name: "Global content delivery platform",
    description:
      "Highly available static site architecture on AWS — S3 + CloudFront with automated deployment pipelines. Straightforward but a clean example of IaC-driven AWS delivery.",
    stack: ["AWS S3", "CloudFront", "AWS CLI", "Terraform"],
    sourceCode: "https://github.com/Mubbyrex/Deploy-Static-Website-on-AWS",
  },
];

const skills = [
  // Cloud
  "AWS",
  "AZURE",
  "OCI",
  // Containers & orchestration
  "Kubernetes",
  "Docker",
  "Helm",
  "Istio",
  // IaC & config management
  "Terraform",
  "Ansible",
  "CloudFormation",
  // CI/CD
  "GitHub Actions",
  "Jenkins",
  // Observability
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  // Core
  "Linux",
  "Site Reliability Engineering",
  "Infrastructure as Code",
];

const contact = {
  email: "mubarak.olalekan.ibrahim@gmail.com",
};

const certifications = [
  {
    title: "AWS Certified DevOps Engineer – Professional",
    provider: "Amazon Web Services",
    year: "2025",
    link: "https://www.credly.com/badges/aa3f6d9a-7039-47d5-8c12-93559ba95663",
  },
  {
    title: "AWS Certified SysOps Administrator – Associate",
    provider: "Amazon Web Services",
    year: "2024",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/672660aea75e4de3b81c1ed0b4ba24d0",
  },
  {
    title: "OCI Certified DevOps Professional",
    provider: "Oracle Cloud",
    year: "2023",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5C444A1B762BFF98856A3125DE4268059C980D372607D86340FB4DCA867FE769",
  },
];

const workExperience = [
  {
    jobTitle: "Senior DevOps Engineer",
    company: "Seaico Technologies Limited",
    duration: "June 2023 – Present",
    description: [
      "Own the cloud infrastructure for a regulated financial services platform — multi-cloud (AWS, OCI, GCP), fully automated with Terraform and Ansible, with end-to-end observability across Kubernetes workloads.",
      "Key outcomes: 50% reduction in deployment time, 30% improvement in MTTR, 40% drop in operational overhead.",
    ],
  },
  {
    jobTitle: "Cloud DevOps Engineer",
    company: "Zepto Leaps",
    duration: "November 2022 – April 2023",
    description: [
      "Designed and automated cost-efficient AWS infrastructure for a startup — Spot Instances, Auto Scaling, Systems Manager, and RDS backup automation.",
    ],
  },
  {
    jobTitle: "Cloud Engineer",
    company: "Cloud Heroes Africa",
    duration: "July 2022 – May 2023",
    description: [
      "Led cloud migration and containerisation projects for client workloads onto Linode Cloud, and provided ongoing infrastructure advisory across a range of environments.",
    ],
  },
];

const openSource = [
  {
    title: "Ansible Galaxy – published automation role",
    description:
      "Published a reusable Ansible role to Ansible Galaxy for provisioning and configuring cloud infrastructure. Available for community use.",
    link: "https://galaxy.ansible.com/ui/standalone/roles/mubbyrex/java_installer/install/",
  },
  //   {
  //     title: "Reusable GitHub Actions workflows",
  //     description:
  //       "Open workflow templates for CI/CD pipelines and Kubernetes deployments — designed to be composable and drop into any project.",
  //     link: "https://github.com/Mubbyrex",
  //   },
];

const articles = [
  {
    title:
      "Building Production-Ready Ansible Roles: Lessons from Creating a Multi-Distribution Java Installer",
    date: "June 2025",
    summary:
      "A deep dive into the design and development of a reusable Ansible role for installing Java across multiple Linux distributions. Covers best practices for role structure, idempotency, testing, and publishing to Ansible Galaxy.",
    link: "https://medium.com/@mubbyrex/building-production-ready-ansible-roles-lessons-from-creating-a-multi-distribution-java-installer-8d5a13660d45",
  },
  // {
  //   title: "Scaling Kubernetes for high-availability workloads",
  //   date: "Coming soon",
  //   summary:
  //     "Cluster design, autoscaling strategies, and release safety patterns for teams running Kubernetes in production.",
  //   link: "",
  // },
];

export {
  header,
  about,
  projects,
  skills,
  contact,
  certifications,
  workExperience,
  achievements,
  openSource,
  articles,
};
