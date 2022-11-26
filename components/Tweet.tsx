import React from "react";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";

interface Props {
  description: string;
  haveImage: boolean;
  profileImageURL: string;
  fullName: string;
}

const Tweet = ({
  description,
  haveImage,
  profileImageURL,
  fullName,
}: Props) => {
  return (
    <div className="flex flex-col space-x-3 border-y p-5">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={profileImageURL}
          alt=""
        />

        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{fullName}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{fullName.replace(/\s/g, "").toLowerCase()}
            </p>

            <div className="text-sm text-gray-500">40 minutes ago</div>
          </div>

          <p className="pt-1">{description}</p>

          {haveImage && (
            <img
              className="m-5 ml-0 mb-1 max-h-60 rounded object-cover shadow-sm w-full"
              src={""}
              alt=""
            />
          )}
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h-5 w-5" />
          <p>5</p>
        </div>

        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>

        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h-5 w-5" />
        </div>

        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
