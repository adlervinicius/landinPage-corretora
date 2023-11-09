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
    padding: 20px;
`;

export const ImageDiv = styled.img`
    width: 40%;
    background-color: pink;
`;

export const ContainerArea = styled.div`
    width: 60%;
    // background-color: red;
    display: grid;
    justify-content: center;
    align-content: center;
    padding: 50px;
    text-align: center;
`;

export const ButtomItem = styled.button`
    width: 200px;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    transition: all .10s;
    border: 0px solid transparent;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(0.5);
        transform: scale(1.05);
    }
`;

export const TextItem = styled.h1``;

export const SubTextItem = styled.h3``;

export const DivButtom = styled.div``;