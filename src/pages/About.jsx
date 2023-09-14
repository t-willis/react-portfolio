import aboutImage from "../assets/aboutImage1.jpg";

export default function About() {
  return (
    <div className="container p-4">
      <div className="row text-center justify-content-center">
        <div className="col-lg-3 pb-4 order-md-1">
          <img src={aboutImage} height="400px"/>
        </div>
        <div className="col-lg-7 mx-4 order-md-2">
          <h5 className="pb-2">
            Hi, my name is Taylor and I&#39;m a web developer.
          </h5>
          <p className="pb-2">
            I&#39;ve always enjoyed learning new things, solving problems, as
            well as creating things from scratch. Web development satisfies all
            of those criteria quite well! In fact, this portfolio is my first
            attempt at building a React application from scratch and certainly
            won&#39;t be my last.
          </p>
          <p className="pb-2">
            In my time learning full-stack web development I&#39;ve become quite
            proficient in several front-end and back-end disciplines with a relatively heavy focus on best practices and various other methodologies.
          </p>
          <p className="pb-2">
            I&#39;m currently enrolled in, and nearing completion of, Vanderbilt
            University&#39;s Full Stack Web Development bootcamp.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
