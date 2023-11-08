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

export const ImageItem = styled.div`
    width: 120px;
    height: 120px;
    background-color: #FFFF;
    border-radius: 50%;
`;

export const ImageItemStar = styled.img`
    width: 120px;
`;

export const AreaServices = styled.div`
    display: grid;
    text-align: center;
    margin: 100px;
`;

export const TextAreaDiv = styled.text``;

export const TextArea = styled.div`
    color: #FFFF;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-top: 100px;
`;

export const ContainerAreaDivs = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 100px;
`;