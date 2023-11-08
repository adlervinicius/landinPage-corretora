import styled from 'styled-components';

export const Container = styled.div`
    min-height: 50vh;
    background-color: #4F4F4F;
    color: #FFFF;
    font-family: system-ui;
    display: flex;
    padding: 10px;
`;

export const ContainerAreaLinks = styled.div`
    width: 50%;
`;

export const ContainerAreaContact = styled.div`
    width: 50%;
    display: grid;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    width: 150px;
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
    font-size: 25px;
    width: 60%;
`;

export const DivAreaRedes = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`;

export const ImageLink = styled.img`
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

export const LabelForm = styled.label``;

export const InputForm = styled.input`
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    border: none;
    margin-bottom: 10px;
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
`;

export const ButtonSend = styled.div`
    background-color: #1347A2;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
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