const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>MEREKO NAHI PATA KYA HO RAHA HAI </h1>
        <p>
          "Crafting digital wonders with a keyboard and code, a web developer
          transforms visions into interactive realities, one line of code at a
          time."
        </p>
        <div className="button">
            <button className="git">Github</button>
            <button className="lin">Linkedin</button>
        </div>
      </div>
      <div className="hero-image">
       <img src="/images/bck.png" alt="NoImg" className="beanimage" />
      </div>
    </main>
  );
};
export default HeroSection;
