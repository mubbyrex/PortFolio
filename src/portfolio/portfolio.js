// all the properties are optional - can be left empty or deleted
const header = {
  homepage: "https://github.com/Mubbyrex",
  title: "MUBARAK",
};

const about = {
  name: "Mubarak Ibrahim",
  role: ["Senior DevOps Engineer", "Cloud Infrastructure Leader"],
  description: [
    "I drive scalable, secure cloud platforms for high-growth and regulated businesses using automation, observability, and infrastructure-as-code.",
    "My work focuses on improving release velocity, operational resilience, and cross-functional delivery through end-to-end DevOps, SRE, and cloud engineering practices.",
  ],
  resume:
    "https://drive.google.com/file/d/1moqGeAWtrzOZzq7v0AVgC5IpWhiC-kr4/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/mubarakibrahimofficial5/",
    github: "https://github.com/Mubbyrex",
  },
  image: "/images/dp.jpeg",
  location: "Lagos, Nigeria",
};

const achievements = [
  {
    title: "Delivered production-grade platform engineering",
    description:
      "Designed multi-cloud infrastructure for AWS, OCI, and GCP workloads, enabling secure service delivery with automation pipelines and observability frameworks.",
  },
  {
    title: "Scaled automation and CI/CD delivery",
    description:
      "Built reusable GitHub Actions and Jenkins workflows for containerized applications, reducing deployment time and improving reliability across development and production environments.",
  },
  {
    title: "Improved operational visibility",
    description:
      "Integrated OpenTelemetry, Prometheus, and Grafana for end-to-end monitoring, tracing, and alerting across Kubernetes and cloud-native services.",
  },
  {
    title: "Strengthened cloud security and compliance",
    description:
      "Implemented infrastructure-as-code best practices, RBAC controls, and resilient disaster recovery strategies for finance and enterprise-grade applications.",
  },
];

const projects = [
  {
    name: "Enterprise microservices modernization",
    description:
      "Led the migration of a monolithic system into Kubernetes-based microservices, with GitHub Actions driving CI/CD and Terraform managing infrastructure across AWS and Oracle Cloud.",
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
    name: "Global content delivery platform",
    description:
      "Delivered a highly available static website architecture using AWS S3, CloudFront, and automated deployment pipelines for fast global performance.",
    stack: ["AWS S3", "CloudFront", "AWS CLI", "Infrastructure as Code"],
    sourceCode: "https://github.com/Mubbyrex/Deploy-Static-Website-on-AWS",
  },
  {
    name: "Serverless automation platform",
    description:
      "Built a serverless task orchestration system using AWS Lambda, API Gateway, and DynamoDB with secure authentication and efficient cloud-native operations.",
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
    name: "CI/CD and Kubernetes workflow architecture",
    description:
      "Designed an end-to-end CI/CD pipeline for containerized applications, connecting Jenkins, Docker, and Kubernetes to support automated test, build and deployment stages.",
    stack: ["Jenkins", "Kubernetes", "Docker", "Git", "Ansible"],
    sourceCode: "https://github.com/Mubbyrex/Jenkins-Project",
  },
];

const skills = [
  "AWS",
  "OCI",
  "GCP",
  "Kubernetes",
  "Docker",
  "Terraform",
  "GitHub Actions",
  "Jenkins",
  "Helm",
  "Prometheus",
  "Grafana",
  "OpenTelemetry",
  "Linux",
  "Ansible",
  "CI/CD",
  "Site Reliability Engineering",
  "Infrastructure as Code",
];

const contact = {
  email: "mubarak.olalekan.ibrahim@gmail.com",
};

const certifications = [
  {
    title: "AWS Certified SysOps Administrator - Associate",
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
  {
    title: "OCI Foundations Associate",
    provider: "Oracle Cloud",
    year: "2023",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5C444A1B762BFF98856A3125DE4268059C980D372607D86340FB4DCA867FE769",
  },
];

const workExperience = [
  {
    jobTitle: "Senior DevOps Engineer & Cloud Developer",
    company: "Seaico Technologies Limited",
    duration: "June 2023 - Present",
    description: [
      "Delivered secure and automated infrastructure using Terraform, Ansible, and Kubernetes across cloud and hybrid environments.",
      "Developed GitHub Actions pipelines to replace legacy Jenkins workflows, enabling faster release cycles and better version control integration.",
      "Built observability platforms with OpenTelemetry, Prometheus, Grafana, and CloudWatch to support proactive incident response and performance tuning.",
      "Implemented disaster recovery, load balancing, and service reliability improvements for production systems serving finance and treasury applications.",
      "Partnered with product and engineering teams to align infrastructure strategy with business goals and drive measurable platform maturity.",
    ],
  },
  {
    jobTitle: "Cloud DevOps Engineer",
    company: "Zepto Leaps",
    duration: "November 2022 - April 2023",
    description: [
      "Architected resilient AWS deployments using Spot Instances, Auto Scaling, and Load Balancers for cost-efficient startup infrastructure.",
      "Automated backup processes and infrastructure management using AWS Systems Manager and RDS snapshot automation.",
      "Captured operational runbooks and deployment patterns to support team handover and repeatable cloud practices.",
    ],
  },
  {
    jobTitle: "Cloud Engineer",
    company: "Cloud Heroes Africa",
    duration: "July 2022 - May 2023",
    description: [
      "Led containerization and cloud migration efforts for on-premises applications to Linode Cloud, improving scalability and maintainability.",
      "Evaluated technology tradeoffs to recommend secure, cost-effective infrastructure solutions for client environments.",
      "Provided operational support and cloud guidance that reduced downtime and improved system reliability for customers.",
    ],
  },
];

const openSource = [
  {
    title: "Reusable Terraform network modules",
    description:
      "Shared infrastructure code patterns for secure VPC and networking deployments in AWS and hybrid cloud environments.",
    link: "https://github.com/Mubbyrex",
  },
  {
    title: "Community automation workflows",
    description:
      "Published reusable CI/CD workflows for GitHub Actions and Kubernetes deployments to help teams automate delivery safely.",
    link: "https://github.com/Mubbyrex",
  },
];

const articles = [
  {
    title: "Building production-grade observability with OpenTelemetry",
    date: "Planned",
    summary:
      "A practical guide for senior engineers to instrument cloud-native applications and correlate logs, traces, and metrics.",
    link: "",
  },
  {
    title: "Scaling Kubernetes for high-availability workloads",
    date: "Planned",
    summary:
      "Best practices for cluster design, autoscaling, and release safety in modern cloud environments.",
    link: "",
  },
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
