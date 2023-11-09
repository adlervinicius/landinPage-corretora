// styles
import {
    Container,
    ContainerAreaLinks,
    ContainerAreaContact,
    DivImageText,
    Image,
    TextArea,
    DivAreaRedes,
    ImageLink,
    FormArea,
    DivForm,
    InputForm,
    TextAreaForm,
    ButtonSend,
    AreaButtom
} from './styledFooter';

import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter
 } from 'react-icons/fa';

//images
import logoWhats from '../../images/logoWhats.webp';

// main
export const Footer = () => {
    return (
        <Container>
            <ContainerAreaLinks>
                <DivImageText>
                    <Image src={logoWhats} />
                    <TextArea>chame um consultor de seguro para tirar suas duvidas é rápido e fácil!</TextArea>
                </DivImageText>
                <DivAreaRedes>
                    <ImageLink><FaFacebook size={35} /></ImageLink>
                    <ImageLink><FaInstagram size={35} /></ImageLink>
                    <ImageLink><FaLinkedin size={35} /></ImageLink>
                    <ImageLink><FaTwitter size={35} /></ImageLink>
                </DivAreaRedes>
            </ContainerAreaLinks>
            <ContainerAreaContact>
                <FormArea>
                    <DivForm>
                        <InputForm type="text" placeholder="Digite seu nome" />
                    </DivForm>
                    <DivForm>
                        <InputForm type="email" placeholder="Digite seu e-mail" />
                    </DivForm>
                    <DivForm>
                        <TextAreaForm placeholder="Deixe aqui sua duvida" />
                    </DivForm>
                </FormArea>
                <AreaButtom>
                    <ButtonSend>Enviar</ButtonSend>
                </AreaButtom>
            </ContainerAreaContact>
        </Container>
    )
}