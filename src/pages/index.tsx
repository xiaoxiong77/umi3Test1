import React, { Suspense } from 'react';
import styles from './index.less';

// const TestCom = React.lazy(() => import('app1/TestCom'));

export default function IndexPage() {
  return (
    <>
      <div>
        <h1 className={styles.title}>Page index</h1>
      </div>
      {/* <Suspense fallback="loading">
        <TestCom />
      </Suspense> */}
    </>
  );
}
