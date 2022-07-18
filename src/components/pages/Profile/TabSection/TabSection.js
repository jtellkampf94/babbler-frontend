import React from "react";
import Tabs from "./Tabs/Tabs";
import TabList from "./TabList/TabList";
import Tab from "./Tab/Tab";
import TabPanel from "./TabPanel/TabPanel";
import TabPanels from "./TabPanels/TabPanels";
import Post from "../../../shared/Post/Post";
import ProfileListItem from "../../../shared/ProfileListItem/ProfileListItem";

const TabSection = ({ posts, user, currentUser, followUser, unfollowUser }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <span>Posts</span>
        </Tab>
        <Tab>
          <span>Followers</span>
        </Tab>
        <Tab>
          <span>Following</span>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {posts &&
            posts.map(post => (
              <Post
                allowHover
                postId={post._id}
                key={post._id}
                avatarUrl={
                  post.postedBy.profilePictureUrl
                    ? post.postedBy.profilePictureUrl
                    : null
                }
                posterId={post.postedBy._id}
                myAvatarUrl={
                  user.profilePictureUrl ? user.profilePictureUrl : null
                }
                name={post.postedBy.name}
                username={post.postedBy.username}
                date={post.createdAt}
                post={post.text}
                imageUrl={post.imageUrl ? post.imageUrl : null}
                comments={post.comments}
                likes={post.likes}
                deletable={post.postedBy._id === user._id ? true : false}
              />
            ))}
        </TabPanel>
        <TabPanel>
          {user.followers &&
            user.followers.map(follower => (
              <ProfileListItem
                currentUser={currentUser}
                followers={follower.followers}
                userId={follower._id}
                followUser={followUser}
                followUserType={
                  currentUser._id
                    ? currentUser._id === user._id
                      ? "follower"
                      : "following"
                    : "following"
                }
                unfollowUser={unfollowUser}
                unfollowUserType={
                  currentUser._id
                    ? currentUser._id === user._id
                      ? "unfollower"
                      : "unfollowing"
                    : "unfollowing"
                }
                key={follower._id}
                name={follower.name}
                username={follower.username}
                avatarUrl={follower.profilePictureUrl}
                alt
              />
            ))}
        </TabPanel>
        <TabPanel>
          {user.following &&
            user.following.map(following => (
              <ProfileListItem
                currentUser={currentUser}
                followers={following.followers}
                userId={following._id}
                followUser={followUser}
                followUserType={
                  currentUser._id
                    ? currentUser._id === user._id
                      ? "follower"
                      : "following"
                    : "following"
                }
                unfollowUser={unfollowUser}
                unfollowUserType={
                  currentUser._id
                    ? currentUser._id === user._id
                      ? "unfollower"
                      : "unfollowing"
                    : "unfollowing"
                }
                key={following._id}
                name={following.name}
                username={following.username}
                avatarUrl={following.profilePictureUrl}
                alt
              />
            ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabSection;
