import { Suspense } from 'react';
import UserResults from '../components/users/UserResults';

function Home() {
  return (
    <>
      {/* Search component goes here */}
      <Suspense fallback={<div>Loading...</div>}>
        <UserResults />
      </Suspense>
    </>
  );
}

export default Home;
