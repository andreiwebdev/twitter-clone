import React, { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";

import { useDispatch } from "react-redux";
import { addTweet } from "../store/tweet-slice";

import { useSelector } from "react-redux";
import { RootState } from "../store";

const TweetBox = () => {
  const [input, setInput] = useState<string>("");
  const profileImageURL = useSelector(
    (state: RootState) => state.user.userInfo.profileImageURL
  );

  const dispatch = useDispatch();

  const onChangeDescription = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInput(e.target.value);
  };

  const onSubmitTweet = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(
      addTweet({
        id: Math.random(),
        description: input,
      })
    );
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 object-cover rounded-full mt-5"
        src={profileImageURL}
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form onSubmit={onSubmitTweet} className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={onChangeDescription}
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            placeholder="What's happening?"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>

            <button
              disabled={!input}
              className="bg-twitter text-white px-5 py-2 font-bold rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
