// import { useEffect } from 'react';
import useSWR from 'swr';

function UserResults() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_GITHUB_URL}users/hsztan`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );
  console.log(data);

  return <div>{data.login}</div>;
}

export default UserResults;
