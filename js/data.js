const SITE_DATA = {
  links: {
    github: 'https://github.com/Karthikheyaa',
    linkedin: 'https://www.linkedin.com/in/karthikheyaa',
    email: 'mailto:karthikheyaa@gmail.com'
  },
  stats: [
    { label: 'Years solving data problems', value: '3+' },
    { label: 'Active projects', value: '3' },
    { label: 'Mentored students', value: '60+' }
  ],
  skills: [
    {
      title: 'Pipelines (ETL/ELT)',
      description: 'Build Python + SQL pipelines with orchestration and incremental loads. Batch-first; streaming when needed.',
      icon: '🤖'
    },
    {
      title: 'Warehousing & modeling',
      description: 'Design clean tables for analytics (facts/dims), handle joins/partitions, and keep schemas consistent.',
      icon: '📈'
    },
    {
      title: 'Data quality & operations',
      description: 'Validation checks, retries, backfills, and logging so jobs are debuggable and outputs are trustworthy.',
      icon: '🛠️'
    },
    {
      title: 'SWE foundations',
      description: 'Git/PRs, CI, Docker, and APIs when useful. I build maintainable, reproducible systems with clear docs.',
      icon: '🤝'
    }
  ],
  projects: [
    {
      title: 'DE Batch Platform',
      description: 'Batch data platform on AWS: ingestion → transformation → curated tables, with orchestration and quality checks.',
      tags: ['Python', 'SQL', 'AWS', 'Airflow', 'ETL'],
      link: 'https://github.com/Khey17/de-batch-platform',
      image: 'images/projects/de-batch-platform.svg',
      buttonText: 'View on GitHub'
    },
    {
      title: 'Sentinel Execution Layer',
      description: 'Execution/orchestration layer for document/AI workflows with traceability, validation steps, and structured outputs.',
      tags: ['Python', 'APIs', 'Orchestration', 'Observability'],
      link: 'https://github.com/NSF-DARSE/sentinel-nextgenai-execution-layer',
      image: 'images/projects/sentinel-execution-layer.svg',
      buttonText: 'View on GitHub'
    },
    {
      title: 'Semilinear Elliptic PDEs (Research)',
      description: 'Research codebase for numerical PDE solvers and experiments (spectral/HPS-style methods and learning-based components).',
      tags: ['Research', 'Python', 'Scientific Computing', 'PDEs'],
      link: 'https://github.com/Khey17/semilinear-elliptic-PDEs/tree/main',
      image: 'public/assets/thumbnails/semilinear.svg',
      buttonText: 'View on GitHub'
    }
  ],
  notes: [
    {
      title: 'Polars vs Pandas: what I’d use and why',
      description: 'A practical comparison of Polars and Pandas for speed, memory, and workflow tradeoffs.',
      link: 'https://medium.com/@karthikheyaa/polars-vs-pandas-5f44051f98bf',
      date: '2025-01-01'
    },
    {
      title: 'KNN Imputer explained (with intuition + usage)',
      description: 'How KNN-based imputation works, when it helps, and the pitfalls to watch for.',
      link: 'https://medium.com/@karthikheyaa/k-nearest-neighbor-knn-imputer-explained-1c56749d0dd7',
      date: '2025-01-02'
    },
    {
      title: 'Feature scaling techniques: when to use what',
      description: 'Standardization vs normalization vs robust scaling — what changes and why it matters.',
      link: 'https://medium.com/@karthikheyaa/techniques-of-feature-scaling-75a6aa6e9469',
      date: '2025-01-03'
    }
  ],
  highlights: [
    {
      title: 'Idempotent runs & backfills',
      summary: 'Pipelines can rerun safely without duplicating data; backfills are planned and repeatable.',
      icon: '🛡️'
    },
    {
      title: 'Data quality checks',
      summary: 'Schema + null/row-count sanity checks before writing curated tables.',
      icon: '📘'
    },
    {
      title: 'Debuggability',
      summary: 'Logs, run metadata, and clear failure paths so issues are traceable.',
      icon: '📡'
    }
  ],
  milestones: [
    {
      title: 'AWS Certified Machine Learning Engineer – Associate',
      meta: 'Issued: Dec 17, 2024 · Expires: Dec 17, 2027',
      linkLabel: 'Verify',
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/3346c0ac44e14820974f92143c134a2d'
    },
    {
      title: 'TensorFlow Developer Certificate',
      meta: '',
      linkLabel: 'Verify',
      link: 'https://www.credential.net/d08b3cde-7418-4b92-b04f-8671caf0fa93'
    }
  ]
};
