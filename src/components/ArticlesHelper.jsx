import { useEffect, useState, useContext } from 'react';
import { ArticlesHelperWrapper, CrudOptionDiv } from '../styled/ArticlesStyles';
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import { MoreVert } from "@mui/icons-material";

const ArticlesHelper = ({ article }) => {
    const [like, setLike] = useState(article.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [cOptions, setCOptions] = useState(false);
    const [articleUser, setArticleUser] = useState({});
    const { user } = useContext(AuthContext);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        setIsLiked(article.likes.includes(user._id));
    }, [user&&user._id, article.likes]);

    const fetchPostUserAvatar = async () => {
        try {
            const res = await axios.get(`/users?userId=${article.userId}`);
            setArticleUser(res.data);
        } catch { }
    };

    useEffect(() => {
        fetchPostUserAvatar();
    }, [article.userId]);

    //I'm not sure shoult I make this function async? as it's make slow to like and dislike..
    const handleClick = () => {
        try {
            axios.put("/posts/" + article._id + "/like", { userId: user._id });
        } catch (err) { }

        if (!isLiked) {
            setLike(prev => prev + 1);
            setIsLiked(prev => !prev);
        } else {
            setLike(prev => prev - 1);
            setIsLiked(prev => !prev);
        }
    };

    const deleteHandle = async () => {
     //TODO: crud
    }

    const updateHandle = async () => {
        //TODO: crud
      };
    

    return (
        <ArticlesHelperWrapper key={article._id}>
            <h3>{article.header}</h3>
            <div className='article-upper-bar'>
                <div className="post-user-avatar">
                    <img
                        src={
                            articleUser.profilePicture ?
                                publicFolder + articleUser.profilePicture :
                                publicFolder + "noAvatar.png"
                        }
                        alt=''
                    />
                </div>
                <CrudOptionDiv className='crud-options'>
                    <div className={cOptions ? "show" : "hide"}>
                        <button onClick={deleteHandle}>Borrar</button>
                        <button onClick={updateHandle}>Actualizar</button>
                    </div>
                </CrudOptionDiv>
                <div onClick={() => setCOptions(prev => !prev)} className="post-options">
                    <MoreVert />
                </div>
            </div>
            {article.img && <img className='article-image' src={publicFolder + article.img} alt="art" />}
            <p>
                {article.desc}
            </p>
            <div id="my-div" onClick={handleClick}>
                <span className={isLiked ? "liked" : "like"}>{isLiked ? "liked" : "like"}</span>
            </div>
            <span>{like ? like : ""}</span>
        </ArticlesHelperWrapper>
    )
}

export default ArticlesHelper;
