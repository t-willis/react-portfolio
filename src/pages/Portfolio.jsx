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
      description: "this is a test description",
      deployedLink: "https://maintenance-manatee-20230807-e071f072b462.herokuapp.com/",
      gitLink: "https://github.com/cdgonzo23/maintenance-manatee",
    },
    {
      srcUrl: portfolioImage2,
      title: "SVG Logo Generator",
      description: "this is a test description",
      deployedLink: "N/A",
      gitLink: "test-git-link",
    },
    {
      srcUrl: portfolioImage3,
      title: "Weather Dashboard",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
    {
      srcUrl: portfolioImage4,
      title: "JavaScript-based Quiz",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
    {
      srcUrl: portfolioImage5,
      title: "HTML/CSS Project Portfolio",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
    {
      srcUrl: portfolioImage6,
      title: "Employee Tracker API",
      description: "this is a test description",
      deployedLink: "N/A",
      gitLink: "test-git-link",
    },
    {
      srcUrl: portfolioImage7,
      title: "CMS Style Blog",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
    {
      srcUrl: portfolioImage8,
      title: "Social Media API",
      description: "this is a test description",
      deployedLink: "N/A",
      gitLink: "test-git-link",
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
