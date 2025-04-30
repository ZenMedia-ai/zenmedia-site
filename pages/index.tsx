export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #f0f4f8)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        🎉 Welcome to ZenMedia.ai
      </h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
        Motivation, Monetization & Momentum — for super-parents and digital creators.
      </p>
      <a
        href="https://zenmedia.systeme.io/zenstarterkit"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem'
        }}
      >
        🚀 Get the Free Guide
      </a>
    </main>
  );
}
Update index.tsx to full homepage layout
