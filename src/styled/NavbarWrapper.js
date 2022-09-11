import styled from "styled-components";

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    box-shadow: 5px 10px 20px #e5e5e5;
    .logo {
        margin-right: auto;
        margin-left: 5rem;
        img {
            width: 60px;
            height: 60px;
        }
    }
    .links {
        width: 441px;
        display: flex;
        align-items: center;
        margin-right: 55px;
        .user_logout {
            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                color: #ef476f;               
            }
        }
    }
`