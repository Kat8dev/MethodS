import styled from "styled-components";

export const FooterWrapper = styled.div`
    height: 200px;
    display: grid;
    .upper_container {
        background-color: #5b8e7d;
        color: #f9eae1;
        display: flex;
        justify-content: space-evenly;
        @media(max-width: 600px){
            flex-direction: column;
        }
        h4, p {
            margin: 20px 10px;
            width: fit-content;
            padding: 4px;
            border-radius: 5px;
            box-shadow: 1px 1px 1px #2c6e49 inset; 
        }    
    }
    .lower_container {
        background-color: #333533;
        color: #f9eae1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media(min-width: 600px) {
            flex-direction: row;
            justify-content: space-between;
        }
        .logo {
            margin: 10px;
            img {
                width: 50px;
                @media(min-width: 600px) {
                    width: 80px;
                }
            }
        }
        .external_links {
            margin: 10px;
            span {
                margin: 0 3px;
                font-size: 20px;
            }
        }
    }
`

