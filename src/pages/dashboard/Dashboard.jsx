import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components";
import { useEffect } from "react";
import {
  animeEndpoints,
  userEndpoints,
  studioEndpoints,
  authorEndpoints,
  commentEndpoints,
} from "../../api";

const Dashboard = () => {
  useEffect(() => {
    userEndpoints.getAllUsers().then(console.log).catch(console.log);
    animeEndpoints.getAllAnimes().then(console.log).catch(console.log);
    studioEndpoints.getAllStudios().then(console.log).catch(console.log);
    authorEndpoints.getAllAuthors().then(console.log).catch(console.log);
    commentEndpoints.getAllComments().then(console.log).catch(console.log);
  }, []);
  return (
    <div>
      <Sidebar />
      <main className="pl-[13vw] h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
