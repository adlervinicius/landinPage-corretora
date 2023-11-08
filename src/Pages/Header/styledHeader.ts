import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to bottom, #1347A2 0%, #1bace2 34.48%,  #1C1C1C 100%);
    display: flex;
    justify-content: space-between;
`;

export const ImageItem = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 2px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
`;

export const DivAreaName = styled.div`
    display: flex;
    aling-items: center;
    justify-content: center;
    padding: 10px;
`;

export const TextItem = styled.h3`
    padding: 8px;
    font-size: 16px;
    color: #FFFF;
    font-family: system-ui;
`;