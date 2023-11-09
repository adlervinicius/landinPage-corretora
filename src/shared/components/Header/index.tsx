// react-router-dom
import { useNavigate } from 'react-router-dom';

// images
import logoCorretora from '../../../images/logoCorretora.jpg'
import logoWhats from '../../../images/logoWhats.webp';
import publicService from '../../../images/publicService.png';

// styles
import {
    Container,
    DivAreaName,
    ImageItem,
    TextItem,
    ImageItemPublic
} from './styledHeader';

// main
export const Header = () => {

    const navigate = useNavigate();

    // navegação para tela de produtos
    const HandleClickProduct = () => {
        navigate('/produtos')
    }

    // navegação para tela de home
    const HandleClickHome = () => {
        navigate('/pagina-inicial')
    }

    // navegação para tela de home
    const HandleClickWhats = () => {
        window.location.href='https://api.whatsapp.com/send/?phone=5541995129297&text&type=phone_number&app_absent=0'
    }

    return (
        <Container>
            <DivAreaName>
                <ImageItem onClick={HandleClickHome} src={logoCorretora} />
            </DivAreaName>
            <DivAreaName>
                <ImageItemPublic onClick={HandleClickProduct} src={publicService} />
                <TextItem>Nossos produtos</TextItem>
            </DivAreaName>
            <DivAreaName>
                <TextItem>Fale com um consultor de seguros</TextItem>
                <ImageItem onClick={HandleClickWhats} src={logoWhats} />
            </DivAreaName>
        </Container>
    );
}