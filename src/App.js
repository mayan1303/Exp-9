import './App.css';

const highlights = [
  'Multi-stage Docker build with Node + Nginx',
  'Compressed static delivery through Nginx gzip',
  'Immutable cache headers for bundled assets',
  'GitHub Actions testing, build, push, and Slack notification'
];

function App() {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';
  const environment = process.env.REACT_APP_ENVIRONMENT || 'production';

  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Experiment 9</p>
        <h1>React Deployment Pipeline</h1>
        <p className="lead">
          This sample app is prepared for containerized deployment with a
          production-ready Nginx server and a GitHub Actions CI/CD workflow.
        </p>

        <div className="env-grid">
          <article>
            <span className="label">Environment</span>
            <strong>{environment}</strong>
          </article>
          <article>
            <span className="label">API Base URL</span>
            <strong>{apiBaseUrl}</strong>
          </article>
        </div>

        <ul className="feature-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
