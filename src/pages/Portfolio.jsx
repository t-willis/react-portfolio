import Project from "../components/Project";
import portfolioImage1 from "../assets/portfolioImage1.png";
import portfolioImage2 from "../assets/portfolioImage2.png";
import portfolioImage3 from "../assets/portfolioImage3.png";
import portfolioImage4 from "../assets/portfolioImage4.png";
import portfolioImage5 from "../assets/portfolioImage5.png";
import portfolioImage6 from "../assets/portfolioImage6.png";
import portfolioImage7 from "../assets/portfolioImage7.png";
import portfolioImage8 from "../assets/portfolioImage8.png";

export default function Portfolio() {
  const projects = [
    {
      srcUrl: portfolioImage1,
      title: "Maintenance Manatee",
      description: "Full Stack car maintenance App",
      deployedLink: "https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/",
      gitLink: "https://github.com/cdgonzo23/maintenance-manatee",
    },
    {
      srcUrl: portfolioImage2,
      title: "SVG Logo Generator",
      description: "Node-based CLI SVG logo generator using Inquirer and Jest",
      deployedLink: "N/A",
      gitLink: "https://github.com/t-willis/svg-logo-maker",
    },
    {
      srcUrl: portfolioImage3,
      title: "Weather Dashboard",
      description: "Weather Dashboard utilizing multiple APIs to populate page",
      deployedLink: "https://t-willis.github.io/weather-dashboard/",
      gitLink: "https://github.com/t-willis/weather-dashboard",
    },
    {
      srcUrl: portfolioImage4,
      title: "JavaScript-based Quiz",
      description: "Quiz powered almost entirely with JavaScript",
      deployedLink: "https://t-willis.github.io/quiz-js-powered/",
      gitLink: "https://github.com/t-willis/quiz-js-powered",
    },
    {
      srcUrl: portfolioImage5,
      title: "HTML/CSS Project Portfolio",
      description: "A very early attempt at a portfolio",
      deployedLink: "https://t-willis.github.io/portfolio-html-css-projects/",
      gitLink: "https://github.com/t-willis/portfolio-html-css-projects",
    },
    {
      srcUrl: portfolioImage6,
      title: "Employee Tracker API",
      description: "Node/SQL based Employee Tracking API",
      deployedLink: "N/A",
      gitLink: "https://github.com/t-willis/employee-tracker",
    },
    {
      srcUrl: portfolioImage7,
      title: "CMS Style Blog",
      description: "Built using Node/Sequelize for back-end and Handlebars for front-end",
      deployedLink: "https://immense-fortress-78270-b7ac6b6eb7bd.herokuapp.com/",
      gitLink: "https://github.com/t-willis/tech-blog",
    },
    {
      srcUrl: portfolioImage8,
      title: "Social Network API",
      description: "A MongoDB/Mongoose based social network API using Express.js",
      deployedLink: "N/A",
      gitLink: "https://github.com/t-willis/social-network-api",
    },
  ];

  return (
    <>
      <div className="container p-4">
        <h3 className="text-center pb-4">Portfolio</h3>
        <div className="d-lg-flex d-md-col flex-wrap">
          {projects.map((project) => (
            <Project
              key={project.title}
              srcUrl={project.srcUrl}
              title={project.title}
              description={project.description}
              deployedLink={project.deployedLink}
              gitLink={project.gitLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}
