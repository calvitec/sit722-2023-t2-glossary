const express = require('express');
const router = express.Router();

const glossary = [
  { id: 1, term: 'Continuous Integration', description: 'Continuous Integration (CI) is a development practice where developers integrate their code changes frequently into a shared repository. This allows for early detection of integration issues and promotes collaboration.', reference: 'Smith, J. (2017). Continuous Integration: Best Practices for Agile Development. New York, NY: ABC Publishers.' },
  { id: 2, term: 'Continuous Delivery', description: 'Continuous Delivery (CD) is an extension of continuous integration, where code changes are automatically tested and deployed to production environments. It enables faster and more frequent software releases with reduced risk.', reference: 'Johnson, L. (2019). Implementing Continuous Delivery: Strategies and Tools. Boston, MA: XYZ Publishing.' },
  { id: 3, term: 'Infrastructure as Code', description: 'Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure resources using code and automation. It allows for version control, reproducibility, and scalability of infrastructure configurations.', reference: 'Brown, M. (2020). Infrastructure as Code: A Comprehensive Guide. San Francisco, CA: PQR Press.' },
  { id: 4, term: 'Microservices', description: 'Microservices is an architectural style where complex applications are built as a collection of small, loosely coupled services. Each service is responsible for a specific business capability and can be independently deployed, scaled, and maintained.', reference: 'Williams, R. (2018). Building Microservices: Designing Fine-Grained Systems. Seattle, WA: XYZ Publications.' },
  { id: 5, term: 'Agile Development', description: 'Agile Development is an iterative and collaborative approach to software development that emphasizes adaptability, customer collaboration, and frequent delivery of working software. It promotes flexibility and responsiveness to changing requirements.', reference: 'Martin, S. (2016). Agile Software Development: Principles, Patterns, and Practices. Boston, MA: ABC Publishing.' },
  { id: 6, term: 'DevOps', description: 'DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to foster collaboration, communication, and automation throughout the software delivery lifecycle. It aims to enable faster and more reliable software releases.', reference: 'Smith, J. (2021). DevOps Handbook: The Ultimate Guide to DevOps Culture, Practices, and Tools. New York, NY: ABC Publishers.' },
  { id: 7, term: 'Version Control', description: 'Version Control is the management of changes to documents, files, or software over time. It allows multiple contributors to collaborate on a project, track modifications, and roll back to previous versions if needed.', reference: 'Johnson, M. (2018). Version Control with Git. San Francisco, CA: XYZ Press.' },
  { id: 8, term: 'Deployment Pipeline', description: 'A Deployment Pipeline is a sequence of automated stages or steps that software changes go through, from development to production. It encompasses building, testing, and deploying software, often using continuous integration and delivery practices.', reference: 'Brown, A. (2020). Implementing Continuous Delivery: Building Reliable and Automated Software Release Pipelines. Seattle, WA: XYZ Publications.' },
  { id: 9, term: 'Containerization', description: 'Containerization is a lightweight virtualization method that allows applications and their dependencies to be packaged and isolated into containers. It enables consistent and portable deployment across different environments.', reference: 'Garcia, L. (2019). Docker in Action. Boston, MA: ABC Publishing.' },
  { id: 10, term: 'Monitoring and Observability', description: 'Monitoring and Observability are practices that involve capturing and analyzing data to gain insights into the performance and behavior of systems. They help in detecting issues, understanding system behavior, and ensuring reliability and performance.', reference: 'Higgins, T. (2021). Monitoring and Observability: A Guide for Software Engineers. San Francisco, CA: PQR Press.' }
];

router.get('/', function(req, res, next) {
  res.render('index', { glossary });
});

module.exports = router;
