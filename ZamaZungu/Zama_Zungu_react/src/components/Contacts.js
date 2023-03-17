import CallToAction from "./CallToAction";

const Contacts = () => {
  return (
    <>
      <section className="contacts-page-container">
        <div className="form-container">
          <form>
            <div className="form-grid">
              <div className="input-container">
                <label className="label">Name:</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input"
                />
              </div>
              <div className="input-container">
                <label className="label">Surname:</label>
                <input
                  name="surname"
                  type="text"
                  placeholder="Surname"
                  className="input"
                />
              </div>
            </div>
            <div className="form-grid">
              <div className="input-container">
                <label className="label">Town:</label>
                <input
                  name="town"
                  type="text"
                  placeholder="Town"
                  className="input"
                />
              </div>
              <div className="input-container">
                <label className="label">Contanct(Whatsapp/Email):</label>
                <input
                  name="contact"
                  type="text"
                  placeholder="Contact"
                  className="input"
                />
              </div>
            </div>
            <div className="form-div">
              <div className="input-container">
                <label className="label">Proof of payment:</label>
                <input name="payment" type="file" className="input" />
              </div>
              <div className="input-container">
                <label className="label">Product(s):</label>
                <textarea
                  name="order"
                  type="textarea"
                  placeholder="Type your order here"
                  className="input"
                ></textarea>
              </div>
              <input type="submit" value="Submit" className="button" />
            </div>
          </form>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default Contacts;
