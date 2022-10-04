import { PermMedia, Cancel } from "@mui/icons-material";
import { PostArticleWrapper } from "../styled/ArticlesStyles";
import { useRef, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const PostArticle = () => {
    const [file, setFile] = useState(null);
    const textareaRef = useRef();
    const { user } = useContext(AuthContext);

    const handlePostForm = async (e) => {
        e.preventDefault();

        if (textareaRef.current.value.length !== 0 || file) {// make sure a user cant upload empty article
            console.log(textareaRef.current.value.length)
            const newPost = {
                userId: user._id,
                desc: textareaRef.current.value,
            };
            if (file) {
                const data = new FormData();
                const fileName = Date.now() + file.name;
                data.append("name", fileName);
                data.append("file", file);
                newPost.img = fileName;
                console.log(newPost);
                try {
                    await axios.post("/upload", data);
                } catch (err) { }
            }
            try {
                await axios.post("/posts", newPost);
                window.location.reload();
            } catch (err) {
                // TODO: bugsnag
            }
        }
    }

    return (
        <PostArticleWrapper>
            <form onSubmit={handlePostForm}>
                <div className="share-top">
                    <textarea
                        ref={textareaRef}
                        placeholder="Escribe articulo"
                        className="sharetextarea"
                    />
                </div>
                <hr />
                {file && (
                    <div>
                        <img src={URL.createObjectURL(file)} alt="" />
                        <Cancel onClick={() => setFile(null)} />
                    </div>
                )}
                <div className="share-bottom">
                    <label htmlFor="file" className="photo-video">
                        <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            accept=".png,.jpeg,.jpg"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <PermMedia htmlColor="tomato" />
                        <span>Photo or Video</span>
                    </label>
                    <button type="submit" className="btn btn-success">Compartir</button>
                </div>
            </form>
        </PostArticleWrapper>
    )
}

export default PostArticle
