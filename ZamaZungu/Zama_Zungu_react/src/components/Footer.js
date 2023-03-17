const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <p>Zama Zungu 27 Mshayeni Road eMpangeni</p>
        <a href="mailto:email@example.com">Zamazungu@gmail.com</a>
        <div className="contacts-container">
          <img src={require("./../images/facebook2.png")} />
          <img src={require("./../images/instagram2.png")} />
          <img src={require("./../images/twitter2.png")} />
          <img src={require("./../images/phone.webp")} />
        </div>
      </div>
      <p>
        Developed by <a href="/">Sqiniseko Zulu</a>
      </p>
    </section>
  );
};
export default Footer;
