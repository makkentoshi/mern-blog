import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashboardComp from "../components/DashboardComp";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
      console.log(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSideBar></DashSideBar>
      </div>
      {tab === "profile" && <DashProfile></DashProfile>}

      {tab === "posts" && <DashPosts></DashPosts>}

      {tab === "users" && <DashUsers></DashUsers>}

      {tab === "comments" && <DashComments></DashComments>}

      {tab === "dash" && <DashboardComp></DashboardComp>}
    </div>
  );
}
