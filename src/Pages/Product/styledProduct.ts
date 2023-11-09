import styled from 'styled-components';

// styles
export const Container = styled.div`
    min-height: 100vh;
    background-color: #1C1C1C;
    color: #FFFF;
    font-family: system-ui;
    display: grid;
    justify-content: center;
    aling-items: center;
    margin-top: 100px;
`;

export const TextArea = styled.text`
    color: #FFFF;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
`;

export const ContainerAreaDivs = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`;

export const AreaServices = styled.div`
    width: 320px;
    background-color: #FFFF;
    display: grid;
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

export const ImageItem = styled.div`
    width: 320px;
    height: 410px;
    background-color: #ffff;
`;

export const ButtomNavigate = styled.button`
    background: #0066A2;
    color: white;
    border-style: none;
    border-color: #0066A2;
    height: 50px;
    font: bold15px arial,sans-serif;
    cursor: pointer;
    text-shadow: none;
`;