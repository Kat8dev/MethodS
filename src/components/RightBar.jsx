import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { RightBarWrapper } from "../styled/RightBarWrapper";
import RightBarHelper from "./RightBarHelper";

export default function Rightbar() {
  const [friends, setFriends] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const Rightbar = () => {
    return (
      <>
        <RightBarWrapper>
          <h4>Seguidores:</h4>
          <hr />
          {friends.map((friend) => (
            <RightBarHelper key={friend._id} friend={friend} />
          ))}
        </RightBarWrapper>
        <div style={{margin: "2rem"}}>
          <h4>Gente que quizá conozcas:</h4>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user && <Rightbar />}
      </div>
    </div>
  );
}