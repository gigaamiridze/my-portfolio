const otherProjects = [
  {
    id: 1,
    title: "Todo List",
    description: "Todo List App is a kind of app that is generally used to maintain our day-to-day tasks or list everything that we have to do. It helps plan our daily schedules.",
    designLink: "https://todo-list-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/todo-list",
    techList: ["React", "JavaScript", "HTML", "SCSS"],
    animateDelay: 0.2,
  },
  {
    id: 2,
    title: "Shopping Cart",
    description: "This is a shopping cart website where various products are placed. The user can add the product to the cart, if desired, increase its quantity, and dynamically understand the current price of the product.",
    designLink: "https://shopping-cart-rc.vercel.app/store",
    githubLink: "https://github.com/justtfelix/shopping-cart-rc",
    techList: ["React", "React Router", "TypeScript"],
    animateDelay: 0.4,
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description: "This is a tic tac toe game that anyone can see and play. Built into it is the game logic to find out which player has won the game.",
    designLink: "https://tic-tac-toe-ox.vercel.app",
    githubLink: "https://github.com/justtfelix/Tic-Tac-Toe",
    techList: ["JavaScript", "HTML", "CSS"],
    animateDelay: 0.6,
  },
  {
    id: 4,
    title: "Shopping Cart",
    description: "This is a landing page website where various products are placed. The user can add the product to the cart, if desired, increase its quantity and dynamically understand the current price of the product.",
    designLink: "https://product-shopping-cart.vercel.app",
    githubLink: "https://github.com/justtfelix/Shopping-Cart",
    techList: ["JavaScript", "HTML", "SCSS"],
    animateDelay: 0.2,
  },
  {
    id: 5,
    title: "Devfinder",
    description: "The project with dark and light theme modes, where you can find registered users on GitHub. This app uses the GitHub API.",
    designLink: "https://github-devfinder-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/github-user-search-app",
    techList: ["React", "TypeScript", "SCSS", "GitHub API"],
    animateDelay: 0.4,
  },
  {
    id: 6,
    title: "Accordion Card",
    description: "The project through which the user can view the questions and on pressing the drop-down button, see the corresponding answer to the question.",
    designLink: "https://accordion-card-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/accordion-card",
    techList: ["React", "JavaScript", "HTML", "SCSS"],
    animateDelay: 0.6,
  },
  {
    id: 7,
    title: "Registration Form",
    description: "Registration form through which the user enters data. Errors occur if invalid data is entered.",
    designLink: "https://registration-form-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/registration-form",
    techList: ["React", "React Hook Form", "JS", "HTML"],
    animateDelay: 0.2,
  },
  {
    id: 8,
    title: "Interactive Card",
    description: "Interactive card details form where the customer enters information and this information is dynamically displayed on the card.",
    designLink: "https://card-details-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/interactive-card-details-form",
    techList: ["React", "JavaScript", "HTML", "SCSS"],
    animateDelay: 0.4,
  },
  {
    id: 9,
    title: "Interactive Rating Card",
    description: 'The project where users can rate a support request on a range of 1 to 5. After giving a rating, a "thank you" template is displayed.',
    designLink: "https://interactive-rating-component-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/interactive-rating-component",
    techList: ["React", "TypeScript", "HTML", "SCSS"],
    animateDelay: 0.6,
  },
  {
    id: 10,
    title: "Advice Generator",
    description: "The app uses the Advice Slip API to generate random quotes of advice.",
    designLink: "https://slip-advice-generator.vercel.app",
    githubLink: "https://github.com/justtfelix/advice-generator",
    techList: ["React", "Styled Comp.", "Framer Mot."],
    animateDelay: 0.2,
  },
  {
    id: 11,
    title: "NFT Card",
    description: "NFT preview card using React and TypeScript.",
    designLink: "https://nft-preview-card-rc.vercel.app",
    githubLink: "https://github.com/justtfelix/nft-preview-card",
    techList: ["React", "TypeScript", "HTML", "CSS"],
    animateDelay: 0.4,
  },
  {
    id: 12,
    title: "Paradise",
    description: "Paradise is a music streaming website where users can register, login and add music if they want or listen to music added by others. Users can also view their statistics on the page. For example, how much music he listened to or uploaded. The website is under development.",
    designLink: undefined,
    githubLink: "https://github.com/justtfelix/Paradise",
    techList: ["Python", "Flask", "SQLAlchemy", "JS"],
    animateDelay: 0.6,
  },
  {
    id: 13,
    title: "Travel",
    description: "Travel website featuring photos and information about various places. This website is a test assignment for an internship. Also located on the page is the products page, from which I fetched information from the API located in the online space.",
    designLink: "https://unilab-project.vercel.app",
    githubLink: "https://github.com/justtfelix/Unilab-Project",
    techList: ["JavaScript", "HTML", "SCSS"],
    animateDelay: 0.2,
  },
  {
    id: 14,
    title: "Tokyo",
    description: "This is an article-type website that contains information about various people and their photos.",
    designLink: "https://tokyo-tau.vercel.app",
    githubLink: "https://github.com/justtfelix/Tokyo",
    techList: ["JavaScript", "HTML", "SCSS"],
    animateDelay: 0.4,
  },
  {
    id: 15,
    title: "Photography Portfolio",
    description: "This is my photography portfolio website, where I have information about myself, a gallery of my work, information about my camera and photos, and contact information.",
    designLink: "https://photography-portfolioo.vercel.app",
    githubLink: "https://github.com/justtfelix/Photography-Portfolio",
    techList: ["JavaScript", "HTML", "CSS"],
    animateDelay: 0.6,
  },
  {
    id: 16,
    title: "Delux",
    description: "This is a landing page website that provides information about a delux company. The website contains information about the company, employees, agenda, and contact information.",
    designLink: "https://delux-one.vercel.app",
    githubLink: "https://github.com/justtfelix/Delux",
    techList: ["JavaScript", "HTML", "SCSS"],
    animateDelay: 0.2,
  },
]

export default otherProjects;