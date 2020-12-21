import React from "react";
import s from "./Profile.module.css";
console.log(s);
const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://via.placeholder.com/125x125" alt=""></img>

      <div>ava+description</div>
      <div className={s.posts}>
        My Posts
        <div className={`${s.item} ${s.active}`}>New post</div>
        <div className={s.item}>Post 1</div>
        <div className={s.item}>Post 2</div>
      </div>
    </div>
  );
};

export default Profile;
