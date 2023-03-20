import { Chip, Button, Grid, Container } from "@mui/material";
import "./Hero.css";

interface Props {
  loading: boolean;
}

const HeroScreen = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className="hero-container"
      >
        <Grid item xs={12} md={12} className="hero-item">
          <h2 id="title">Alexio Rodrigues</h2>
        </Grid>

        <Grid item xs={12} md={3} className="hero-item">
          <Chip color="primary" label="Mobile" />
        </Grid>
        <Grid item xs={12} md={3} className="hero-item">
          <Chip color="secondary" label="Frontend" />
        </Grid>
        <Grid item xs={12} md={3} className="hero-item">
          <Chip color="warning" label="Backend" />
        </Grid>
        <Grid item xs={12} md={3} className="hero-item">
          <Chip color="error" label="DevOps" />
        </Grid>

        <Grid item xs={12} md={3} className="hero-item">
          <a href="#hire-me">
            <Button variant="outlined">Hire Me</Button>
          </a>
        </Grid>
        <Grid item xs={12} md={3} className="hero-item">
          <a href="#portfolio">
            <Button variant="outlined">Portfolio</Button>
          </a>
        </Grid>
        <Grid item xs={12} md={3} className="hero-item">
          <a href="#talks-publications">
            <Button variant="outlined">Talks and Publications</Button>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroScreen;
