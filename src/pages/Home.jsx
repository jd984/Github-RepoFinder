import React from "react";
import UserResults from "../component/users/UserResults";
import UserSearch from "../component/users/UserSearch";

const Home = () => {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;
