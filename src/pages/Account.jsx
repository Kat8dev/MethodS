import { useState, useEffect, useContext } from "react";
import { AccountWrapper } from "../styled/AccountWrapper";
import { TiCamera } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Account = () => {
  const { user } = useContext(AuthContext);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.profilePicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      await axios.put(`/users/${user._id}`, newPost);
      window.location.reload();
    } catch (err) {
      // TODO: bugsnag
    }
  }


  return (
    <AccountWrapper>
      <div className="account">
        <div className="avatar">
          <div className="image">
            <img src={user.profilePicture ? publicFolder + user.profilePicture : publicFolder + "noAvatar.png"} alt="" />
          </div>
          <form className="img_uploads" onSubmit={handleSubmit}>
            <label htmlFor="files"><TiCamera /></label>
            <input type="file" id="files" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
            <button className="photo_button" type="submit">Subir</button>
          </form>
        </div>
        
        <div className="create_group">
          <Link to="/createevent">
            <div>
              <AiOutlinePlus />
            </div>
          </Link>
          <p>clica aquí para crear un evento</p>
        </div>
      </div>
      <Footer />
    </AccountWrapper>
  )
}

export default Account;







/*import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { Avatar } from '@mui/material';
import { upload } from "../context/AuthContext";
import { AccountWrapper } from "../styled/AccountWrapper";
import { TiCamera } from "react-icons/ti";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Account = () => {
  const { user } = UserAuth();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {

    upload(image, user, setLoading);

  };

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user, photoURL]);

  return (
    <AccountWrapper>
      <div className="account">
        <div className="avatar">
          <div className="image">
            <Avatar src={photoURL} sx={{ width: 150, height: 150 }} />
          </div>
          <div className="img_uploads">
            <label for="files"><TiCamera /></label>
            <input type="file" id="files" onChange={handleImageChange} />
            <button className="photo_button" onClick={handleSubmit}>Subir</button>
          </div>
        </div>
        <div className="about_me">
          <h2>Acerca de mi</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium hic debitis temporibus, perspiciatis fugiat voluptatum sit architecto ipsa veniam, provident consectetur iusto quaerat odit molestias fugit atque esse suscipit. Fugiat!</p>
        </div>
        <div className="create_group">
          <Link to="/createevent">
            <div>
              <AiOutlinePlus />
            </div>
          </Link>
          <p>clica aquí para crear un evento</p>
        </div>
      </div>
      <Footer />
    </AccountWrapper>
  )
}

export default Account;*/
