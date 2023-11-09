import styled from 'styled-components';

// styles
export const Container = styled.div`
    background: linear-gradient(to bottom, #1347A2 0%, #1347A2 34.48%,  #1C1C1C 100%);
    display: flex;
    justify-content: space-between;
    font-family: Helvetica, sans-serif;
    outline: 1px solid #1347A2;
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
`;

export const ImageItemPublic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 2px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
`;