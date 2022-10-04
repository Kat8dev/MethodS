import { useEffect, useState, useContext } from 'react'
import ArticlesHelper from "./ArticlesHelper";
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";
import PostArticle from "./PostArticle";
import { ArticlesWrapper } from "../styled/ArticlesStyles";

const Articles = () => {
    const [post, setPost] = useState([]);
    const { user } = useContext(AuthContext);

    const fetchPost = async () => {
        try {
            const res = await axios.get("posts/timeline/" + user._id);
            setPost(
                res.data.sort((A1, A2) => {
                    return new Date(A2.createdAt) - new Date(A1.createdAt);
                }).filter(article => !article.eventDate)
            );
        } catch {
            // TODO: bugsnag
        }

    }

    useEffect(() => {
        fetchPost();
    }, [user && user._id]);

    return (
        <ArticlesWrapper>
            <PostArticle />
            <div>
                {
                    post.length ? post.map(article =>
                        <ArticlesHelper key={article._id} article={article} />
                    ) :
                        <div className='loading-spinner'>
                            <progress className="progress w-56 progress-success"></progress>
                        </div>

                }
            </div>
        </ArticlesWrapper>
    );
};

export default Articles;
