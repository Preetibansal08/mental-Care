import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Mental Health & Wellness Hub</h1>
    <p>Play games, track your mood, and improve mental well-being.</p>
    <Link to="/signup" className="cta-button">Get Started</Link>
  </div>
);

export default Landing;