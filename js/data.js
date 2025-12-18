const SITE_DATA = {
  links: {
    github: 'https://github.com/Karthikheyaa',
    kaggle: 'https://www.kaggle.com/karthikheyaa',
    email: 'mailto:karthikheyaa@gmail.com'
  },
  stats: [
    { label: 'Years solving data problems', value: '5+' },
    { label: 'Models in production', value: '18' },
    { label: 'Mentored analysts', value: '12' },
    { label: 'Datasets explored', value: '140+' }
  ],
  skills: [
    {
      title: 'Machine Learning & MLOps',
      description: 'End-to-end lifecycle from feature design to monitoring with scikit-learn, TensorFlow, MLflow, and FastAPI.',
      icon: '🤖'
    },
    {
      title: 'Analytics & Storytelling',
      description: 'Experiment design, cohorting, KPI design, and crisp data narratives through Notebooks, Tableau, and dashboards.',
      icon: '📈'
    },
    {
      title: 'Data Engineering',
      description: 'Pipelines with Airflow and dbt, warehouse modeling, and dependable batch/stream ETL into Snowflake and BigQuery.',
      icon: '🛠️'
    },
    {
      title: 'Product Collaboration',
      description: 'Partnering with PM, design, and engineering to translate ambiguous ideas into shipped experiments and features.',
      icon: '🤝'
    }
  ],
  projects: [
    {
      title: 'Dog Breed Image Classifier',
      description: 'Fine-tuned EfficientNet on 120+ breeds, adding interpretability overlays and drift monitoring to keep deployments healthy.',
      tags: ['Computer Vision', 'TensorFlow', 'MLOps'],
      link: 'https://www.kaggle.com/code/karthikheyaa/dog-breed-classification',
      image: 'images/Screenshot 2024-03-25 182452.png'
    },
    {
      title: 'Churn Early-Warning System',
      description: 'Predicts churn risk weekly, surfaces drivers with SHAP, and triggers lifecycle journeys that cut churn by 14%.',
      tags: ['Classification', 'SHAP', 'Product Analytics'],
      link: '#',
      image: 'images/data-services.png'
    },
    {
      title: 'Pricing A/B Test Evaluator',
      description: 'Reusable calculator that debugs experiments, checks power, and reports revenue lift with sequential testing controls.',
      tags: ['Experimentation', 'Bayesian', 'Dashboards'],
      link: '#',
      image: 'images/money.png'
    },
    {
      title: 'Data Quality Pulse',
      description: 'Lightweight observability with freshness SLAs, schema alerts, and anomaly detection across the warehouse.',
      tags: ['Data Engineering', 'Airflow', 'dbt'],
      link: '#',
      image: 'images/system.png'
    }
  ],
  notes: [
    {
      title: 'Tuning image models without overfitting',
      description: 'A hands-on look at regularization tricks and data augmentation patterns that keep convolutional nets honest.',
      link: 'https://karthikheyaa-kurra.medium.com/tuning-image-models',
      date: '2024-01-11'
    },
    {
      title: 'Making dashboards that people actually use',
      description: 'Practical heuristics to avoid dashboard sprawl, plus a checklist for clean, legible analytics stories.',
      link: '#',
      date: '2023-10-01'
    },
    {
      title: 'Shipping ML like a product team',
      description: 'Templates for planning, risk-checks, and postmortems when your models need to align with customer value.',
      link: '#',
      date: '2023-06-16'
    },
    {
      title: 'What I learned mentoring junior analysts',
      description: 'Coaching patterns, feedback cadences, and pairing rituals that speed up early-career growth.',
      link: '#',
      date: '2023-02-07'
    }
  ],
  highlights: [
    {
      title: 'Reducing false positives in fraud',
      summary: 'Partnered with trust & safety to retrain models with balanced costs, unlocking a 9% approval lift.',
      icon: '🛡️'
    },
    {
      title: 'Building data culture',
      summary: 'Introduced weekly readouts and playbooks that helped product squads adopt experiment-first thinking.',
      icon: '📘'
    },
    {
      title: 'Operationalizing monitoring',
      summary: 'Rolled out drift/quality monitors with alerting to keep pipelines stable across deployments.',
      icon: '📡'
    }
  ]
};
