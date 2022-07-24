import styled from "styled-components";



export  const DivCard = styled.div`
        width: 13em;
        margin: 5em auto;
        overflow: hidden;
        & > img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
        }
`;




export const Enlace1 = styled.span`
        text-align: center;
        /* padding: 1em; */
        margin-bottom: 1.5em;
        a{
                text-decoration: none;
                color: black;
                background-color: aquamarine;
                padding: 1em 40%;
                border-radius:1.5em;
                width: max(43ch, 80%);
        }
`

export const DivPadre = styled.div`
        display: flex;
        margin-top: 5em;
        flex-direction: column;
        justify-content: center;
`