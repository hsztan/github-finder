// import { useEffect } from 'react';
import useSWR from 'swr';

function UserResults() {
  const { data, error } = useSWR(`${process.env.REACT_APP_GITHUB_URL}users`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  });
  console.log(data);

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {data.map((user, i) => (
        <h3 key={i}>{user.login}</h3>
      ))}
    </div>
  );
}

export default UserResults;
