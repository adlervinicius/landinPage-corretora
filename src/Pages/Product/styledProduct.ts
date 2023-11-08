import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: #1C1C1C;
    color: #FFFF;
    font-family: system-ui;
    display: grid;
    justify-content: center;
    aling-items: center;
`;

export const TextArea = styled.text`
    color: #FFFF;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
`;

export const ContainerAreaDivs = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`;

export const AreaServices = styled.div``;

export const ImageItem = styled.div`
    width: 320px;
    height: 450px;
    background-color: #FFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 5px;
    transition: all .10s;
    border: 0px solid transparent;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(0.5);
        transform: scale(1.05);
    }
`;