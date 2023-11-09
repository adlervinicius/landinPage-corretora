import styled from 'styled-components';

// styles
export const Container = styled.div`
    min-height: 50vh;
    background: linear-gradient(to bottom, #1C1C1C  0%, #1347A2 34.48%,  #1347A2 100%);
    color: #FFFF;
    font-family: Helvetica, sans-serif;
    display: flex;
    padding: 10px;
`;

export const ContainerAreaLinks = styled.div`
    width: 50%;
    display: grid;
`;

export const ContainerAreaContact = styled.div`
    display: grid;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 100px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
`;

export const DivImageText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextArea = styled.text`
    font-size: 20px;
    width: 60%;
`;

export const DivAreaRedes = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`;

export const ImageLink = styled.div`
    width: 50px;
    padding: 20px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
`;

export const TextAreaFooter = styled.text`
    font-size: 12px;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: 15%;
`;

export const FormArea = styled.form`
    width: 100vh;
    display: grid;
`;

export const DivForm = styled.div`
    padding: 10px;
`;

export const InputForm = styled.input`
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    border: none;
    margin-bottom: 10px;
    font-family: system-ui;
    border-radius: 10px;
`;

export const TextAreaForm = styled.textarea`
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    border: none;
    border-radius: 10px;
    resize: none;
    height: 100px;
    font-family: system-ui;
    outline: 1px solid white;
`;

export const ButtonSend = styled.div`
    background: #0066A2;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    border: none;
    transition: all .10s;
    border: 1px solid #ffff;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(0.5);
        transform: scale(1.05);
    }
`;

export const AreaButtom = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    margin-bottom: 50px;
`;