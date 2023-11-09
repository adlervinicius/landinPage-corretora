import styled from 'styled-components';

// styles
export const Container = styled.div`
    min-height: 100vh;
    background-color: #1C1C1C;
    color: #FFFF;
    font-family: system-ui;
`;

export const DivAreaText = styled.div`
    display: grid;
    font-family: verdana;
    width: 50%;
`;

export const TextTitle = styled.h1`
    font-family: verdana;
`;

export const SubText = styled.text`
    font-size: 18px;
    width: 80%;
`;

export const DivAreaTotal = styled.div`
    display: flex;
    justify-content: space-around;
    aling-items: center;
    padding: 50px;
`;

export const Image = styled.img`
    width: 30vw;
    border-radius: 10px;
`;

export const ImageWhats = styled.img`
    width: 70px;
    position:fixed;
    bottom: 20px;
    left: 10px;
    border-radius: 50%;
    box-shadow: 1px 1px 1px 1px #0066A2;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

export const DivAreaImage = styled.div``;