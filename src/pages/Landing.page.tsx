import HeroComponent from "../components/hero/Hero.component";

const LandingPage = () => {
  return (
    <>
      <HeroComponent />
      <div id="hire-me">Hire Me</div>
      <div id="portfolio">Portfolio</div>
      <div id="talks-publications">Talks and Publications</div>
    </>
  );
};

export default LandingPage;
