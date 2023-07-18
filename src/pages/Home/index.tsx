import React, { Suspense } from 'react';

const TestCom = React.lazy(() => import('app1/TestCom'));

export default function Home() {
  return (
    <>
      <div>
        <h2>Home</h2>
      </div>
      <Suspense fallback="loading">
        <TestCom />
      </Suspense>
    </>
  );
}
