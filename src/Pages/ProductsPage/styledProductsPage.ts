import styled from 'styled-components';

// styles
export const Container = styled.div`
    min-height: 100vh;
    background-color: #1C1C1C;
    color: #FFFF;
    font-family: system-ui;
`;

export const AreaDiv = styled.div`
    height: 90vh;
    display: flex;
    background-color: #1C1C1C;
    padding: 50px;
    justify-content: left;
    align-content: center;
`;

export const ImageDiv = styled.img`
    width: 40%;
    background-color: #C6C6C6;
`;

export const ContainerArea = styled.div`
    width: 60%;
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 50px;
`;

export const ButtomItem = styled.button`
    width: 200px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    transition: all .10s;
    border: 0px solid transparent;
    background: #0066A2;
    color: #ffff;
    font-size: 16px;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(0.5);
        transform: scale(1.05);
    }
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


export const TextItem = styled.h1`
    text-align: center;
    font-size: 40px;
`;

export const ContainerAreaLeft = styled.div`
    width: 60%;
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 50px;
`;

export const DivButtom = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const SubTextItem = styled.text`
    font-size: 28px;
`;