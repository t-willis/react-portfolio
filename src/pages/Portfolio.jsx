import Project from "../components/Project";

export default function Portfolio() {
  const projects = [
    {
      srcUrl: "https://placehold.co/426x240",
      title: "Project 1",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
    {
      srcUrl: "https://placehold.co/426x240",
      title: "Project 2",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
    {
      srcUrl: "https://placehold.co/426x240",
      title: "Project 3",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
    {
      srcUrl: "https://placehold.co/426x240",
      title: "Project 4",
      description: "this is a test description",
      deployedLink: "test-deployed-link",
      gitLink: "test-git-link",
    },
  ];

  return (
    <>
      <div className="container p-4">
        <h3 className="text-center pb-4">Portfolio</h3>
        <div className="d-flex flex-wrap flex-grow-1">
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
