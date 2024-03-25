// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'KunalGeed', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['KunalGeed/Cell_simulation', 'KunalGeed/DC-LCR-Rot-hop_plus_plus', 'KunalGeed/imbalance_class_sklearn'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Predictive Modeling of Cell Dynamics',
          description:
            'I engineered a predictive model aimed at simulating cell dynamics, a breakthrough contribution that has significantly enhanced disease prognosis and guided informed treatment decisions. My work involved establishing a robust pipeline capable of predicting future cell states, incorporating three meticulously crafted models designed to operate efficiently with just a single static image. Through rigorous testing and validation, I successfully demonstrated the models efficacy in capturing underlying cellular dynamics, culminating in a compelling presentation to supervisors and achieving a notable grade of 8.0. This project exemplifies my ability to blend cutting-edge technology with practical applications in the field of biomedical research, showcasing my commitment to advancing healthcare through innovative computational approaches.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Explainable AI for Aspect-Based Sentiment classification model',
          description:
            'Implemented a cutting-edge neural network model for aspect-based sentiment analysis achieving an impressive accuracy rate of 95%. Additionally, I constructed diagnostic classifiers to systematically test hypotheses regarding the information stored in each layer of the intricate neural network. Through rigorous experimentation and analysis, I verified hypotheses on information preservation across various layers of the model. This research culminated in the acceptance of my thesis paper at ICWE 2022, showcasing my expertise in advancing the field of sentiment analysis and neural network research.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Kunal Geed',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'kunal-geed',
    instagram: 'kunal.geed',
    phone: '+31 626519564',
    email: 'kunalgeed15@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1V64o_uZUxcju9i7xdrqgZEyfO4YaoOlQ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'React.js',
    'Java',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PyTorch',
  ],
  experiences: [
    {
      company: 'Nubis: The Digital Tech Agency',
      position: 'Data Analyst',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://nubisonline.com',
    },
    {
      company: 'Serpentine AI',
      position: 'Commissioner of Internal Affairs',
      from: 'August 2022',
      to: 'September 2023',
      companyLink: 'https://serpentine.ai',
    },
  ],
  certifications: [
    //{
     // name: 'Lorem ipsum',
      //body: 'Lorem ipsum dolor sit amet',
      //year: 'March 2022',
      //link: 'https://example.com',
    //},
  ],
  educations: [
    {
      institution: 'Eindhoven University of Technology',
      degree: 'Masters in Data Science and Artificial Intelligence (Msc)',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Erasmus University Rotterdam',
      degree: 'Double Bachelor (Bsc) in Econometrics and Buisness Economics',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'Diagnostic Classifiers for Explaining a Neural Model with Hierarchical Attention for Aspect-based Sentiment Classification',
      conferenceName: 'ICWE 2022',
      journalName: 'Journal of Web Engineering',
      authors: 'Kunal Geed, Flavius Frasincar, Maria Mihaela Trusca',
      link: 'https://journals.riverpublishers.com/index.php/JWE/article/view/22329',
      description:
        'The current models proposed for aspect-based sentiment classification (ABSC) are mainly developed with the purpose of providing high rates of accuracy, regardless of the inner working which is usually difficult to understand. Considering the state-of-art model LCR-Rot-hop++ for ABSC, we use diagnostic classifiers to gain insights into the encoded information of each layer. Starting from a set of various hypotheses, we test how sentiment-related information is captured by different layers of the model. Given the model architecture, information about the related words to the target is easily extracted. Also, the model is able to detect to some extent information about the sentiments of the words and, in particular, sentiments of the words related to the target. However, the model is less effective in extracting the aspect mentions associated with a word and the general structure of the sentence.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    //source: 'dev', // medium | dev
    //username: 'arifszn', // to hide blog section, keep it empty
    //limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
