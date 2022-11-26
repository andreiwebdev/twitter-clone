import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import Tweet from "./Tweet";
import TweetBox from "./TweetBox";

import { useSelector } from "react-redux";
import { RootState } from "../store";

const Feed = () => {
  const tweets = useSelector((state: RootState) =>
    state.tweet.tweetsList.slice(1)
  );
  const profileImageURL = useSelector(
    (state: RootState) => state.user.userInfo.profileImageURL
  );
  const fullName = useSelector(
    (state: RootState) => state.user.userInfo.fullName
  );

  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className=" flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      <div>
        <TweetBox />
      </div>

      {tweets &&
        tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            description={tweet.description}
            haveImage={false}
            profileImageURL={profileImageURL}
            fullName={fullName}
          />
        ))}
    </div>
  );
};

export default Feed;
