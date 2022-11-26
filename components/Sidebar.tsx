import React from "react";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Sidebar = () => {
  const auth = getAuth();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
        <img
          className="h-10 w-10 m-3"
          src="https://via.placeholder.com/150"
          alt=""
        />
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HashtagIcon} title="Explore" />
        <SidebarRow Icon={BellIcon} title="Notifications" />
        <SidebarRow Icon={MailIcon} title="Messages" />
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRow Icon={CollectionIcon} title="Lists" />
        <SidebarRow Icon={UserIcon} title="Sign In" />
        <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
      </div>

      <div
        onClick={handleSignOut}
        className="flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 group cursor-pointer"
      >
        <XCircleIcon className="h-6 w-6" />
        <p className="group-hover:text-twitter hidden lg:inline-flex text-base font-light lg:text-xl">
          Sign Out
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
