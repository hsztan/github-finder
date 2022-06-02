import { Suspense } from 'react';
import Spinner from '../components/layout/Spinner';
import UserResults from '../components/users/UserResults';

function Home() {
  return (
    <>
      {/* Search component goes here */}
      <Suspense fallback={<Spinner />}>
        <UserResults />
      </Suspense>
    </>
  );
}

export default Home;
