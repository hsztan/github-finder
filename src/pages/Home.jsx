import { Suspense } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import UserResults from '../components/users/UserResults';

function Home() {
  return (
    <>
      {/* Search component goes here */}
      <Suspense fallback={<ClipLoader color="#a6adba" loading />}>
        <UserResults />
      </Suspense>
    </>
  );
}

export default Home;
