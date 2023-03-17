import CallToAction from "./CallToAction";
import image1 from "./../images/image1.jpg";
import image5 from "./../images/image5.jpg";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-pink">
        <div className="about-pink-container">
          <div className="about-pink-grid grid">
            <img src={image1} className="img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              vero necessitatibus delectus sint eligendi incidunt nihil aliquam
              mollitia cumque voluptates quibusdam fuga iusto beatae,
              consequatur quis modi exercitationem debitis suscipit,{" "}
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero
            necessitatibus delectus sint eligendi incidunt nihil aliquam
            mollitia cumque voluptates quibusdam fuga iusto beatae, consequatur
            quis modi exercitationem debitis suscipit, sunt enim eos nostrum at.
            Odio eligendi fuga excepturi. Beatae quasi, vel maiores at mollitia
            cupiditate quae tempora velit
          </p>
        </div>
      </div>
      <div className="about-green">
        <div className="about-green-container">
          <div className="about-green-grid grid">
            <img src={image5} className="img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              vero necessitatibus delectus sint eligendi incidunt nihil aliquam
              mollitia cumque voluptates quibusdam fuga iusto beatae,
              consequatur quis modi exercitationem debitis suscipit,{" "}
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero
            necessitatibus delectus sint eligendi incidunt nihil aliquam
            mollitia cumque voluptates quibusdam fuga iusto beatae, consequatur
            quis modi exercitationem debitis suscipit, sunt enim eos nostrum at.
            Odio eligendi fuga excepturi. Beatae quasi, vel maiores at mollitia
            cupiditate quae tempora velit
          </p>
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default About;
