import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useSelector } from "react-redux";


export default function DashSideBar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className="w-full md:w-56 ">
      <Sidebar.Items className="">
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={
                currentUser.isAdmin ? <div className="">Admin</div> : "User"
              }
              labelColor="dark"
              className="font-medium"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=posts">
              <Sidebar.Item
                active={tab === "posts"}
                icon={HiDocumentText}
                as="div"
                className="font-medium"
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <Link to="/dashboard?tab=users">
              <Sidebar.Item
                active={tab === "users"}
                icon={HiOutlineUserGroup}
                as="div"
                className="font-medium"
              >
                Users
              </Sidebar.Item>
            </Link>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer font-medium"
            onClick={handleSignOut}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
