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

//images
import logoWhats from '../../images/logoWhats.webp';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';

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
                    <ImageLink src={facebook} />
                    <ImageLink src={instagram} />
                    <ImageLink src={linkedin} />
                    <ImageLink src={twitter} />
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