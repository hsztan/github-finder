import HashLoader from 'react-spinners/HashLoader';

function Spinner() {
  return (
    <div className="w-100 mt-20 mx-auto text-center">
      <HashLoader size="100" color="#a6adba" loading />
    </div>
  );
}

export default Spinner;
