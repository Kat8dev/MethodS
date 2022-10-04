import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { RightBarHelperWrapper } from '../styled/RightBarWrapper';

const RightBarHelper = ({ friend }) => {
    const { user, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState(
        user && user.followings.includes(friend._id)
    );
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put(`/users/${user._id}/unfollow`, {
                    userId: friend._id,
                });
                dispatch({ type: "UNFOLLOW", payload: friend._id });
            } else {
                await axios.put(`/users/${user._id}/follow`, {
                    userId: friend._id,
                });
                dispatch({ type: "FOLLOW", payload: friend._id });
            }
            setFollowed(!followed);
        } catch (err) {
        }
    };

    return (
        <RightBarHelperWrapper>
            <div>
                <img
                    src={
                        friend.profilePicture
                            ? PF + friend.profilePicture
                            : PF + "noAvatar.png"
                    }
                    alt=""
                />
                <span>{friend.username}</span>
            </div>
            <button className="btn btn-outline btn-success" onClick={handleClick}>
                {followed ? "Unfollow" : "Follow"}
            </button>
        </RightBarHelperWrapper>
    )
}

export default RightBarHelper
