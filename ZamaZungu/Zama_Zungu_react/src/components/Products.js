import CallToAction from "./CallToAction";
import image1 from "./../images/image1.jpg";

const Products = () => {
  return (
    <>
      <section className="products-container">
        <div className="products-pink">
          <div className="products-pink-container">
            <div className="products-pink-grid">
              <div className="grid-box1">
                <img src={image1} />
                <div className="grid-wrapper">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere odio, neque consequuntur, culpa esse molestias,
                    soluta libero molestiae pariatur asperiores distinctio. Eum
                    nobis doloribus iusto culpa beatae, obcaecati eaque laborum,
                    debitis officia quos recusandae. Culpa quibusdam ea cum
                    reprehenderit, repellendus architecto.
                  </p>
                  <a>Call Now</a>
                </div>
              </div>
              <div className="grid-box2">
                <div className="box1">
                  <div className="img"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere odio, neque consequuntur, culpa esse molestias,
                    soluta libero molestiae pariatur asperiores distinctio.{" "}
                  </p>
                </div>
                <div className="box2">
                  <div className="img"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere odio, neque consequuntur, culpa esse molestias,
                    soluta libero molestiae pariatur asperiores distinctio. Eum
                    nobis doloribus iusto culpa beatae, obcaecati eaque{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="green-container">
          <div className="green-box-1">
            <div className="green-img"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              vero necessitatibus delectus sint eligendi incidunt nihil aliquam
              mollitia cumque voluptates quibusdam fuga iusto beatae,
              consequatur quis modi exercitationem debitis suscipit, sunt enim
              eos nostrum at. Odio eligendi fuga excepturi.{" "}
            </p>
          </div>
          <div className="green-box-2">
            <div className="green-img"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              vero necessitatibus delectus sint eligendi incidunt nihil aliquam
              mollitia cumque voluptates quibusdam fuga iusto beatae,
              consequatur quis modi exercitationem debitis suscipit, sunt enim
              eos nostrum at. Odio eligendi fuga excepturi.{" "}
            </p>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default Products;
