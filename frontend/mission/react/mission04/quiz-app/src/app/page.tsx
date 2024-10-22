import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Quiz App</h1>
      <nav>
        <Link href="/question">
          <button style={{ margin: '10px', padding: '10px 20px' }}>Question</button>
        </Link>
        <Link href="/state">
          <button style={{ margin: '10px', padding: '10px 20px' }}>State</button>
        </Link>
        <Link href="/quiz">
          <button style={{ margin: '10px', padding: '10px 20px' }}>Quiz</button>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
