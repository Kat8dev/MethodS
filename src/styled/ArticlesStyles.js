import styled from "styled-components";
import { Colors } from "./globalStylesVariables/colors";

export const ArticlesHelperWrapper = styled.div`
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.11);
    margin: 2rem;
    padding: 1rem;

    .article-upper-bar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        height: 3rem;
        .post-user-avatar {
            img {
                border: solid 1px #aaaa;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
            }  
        }
        .crud-options {
            cursor: pointer;
            display: flex;
            margin-left: auto;
        }
    }
   
    .article-image {
        width: 100%;
        max-width: 20rem;
        height: auto;
    }

    #my-div {
        margin: 1rem;
        cursor: pointer;
        border-radius: 3px;
        color: white;
        transition: 0.5s;
        background-color: ${Colors.primeryColor};
        &:hover {
            background-color: ${Colors.primaryColorHover}
        }
        .like {
            padding: 0.1rem 1rem;
        }
        .liked {
            background-color: #00b4d8;
            border-radius: 3px;
            padding: 0.1rem 1rem;
            transition: 0.5s;
            &:hover {
                background-color: #0077b6;
            }
        }
    }
`

export const PostArticleWrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
 
    form{
        padding: 2rem;
        .share-top {
             textarea {
             width: 100%;
             &:focus {
                outline: none;    
             }
            }
        }
        hr {
            margin: 1rem 0;
        }
        .share-bottom {
            .photo-video {
                cursor: pointer;
            }
            display: flex;
            justify-content: space-between;
        }
    }
      
`;

export const ArticlesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50rem;
    max-width: 50rem;
    .loading-spinner {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
    .no-article {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
`

export const CrudOptionDiv = styled.div`
  
    .show {
        z-index: 1;  
        -webkit-box-shadow: 0px 0px 4px -1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 4px -1px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 4px -1px rgba(0,0,0,0.75);
        width: 8rem;
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: start;
        background-color: white;
        border-radius: 10px;
        flex-direction: column;
        padding: 2rem 0.5rem;
        button {
            padding: 0.2rem;
            width: 100%;
            &:hover {
                background-color: #DCDCDC;
                border-radius: 10px;
            }
         }
    }
    .hide {
        display: none;
    }
`