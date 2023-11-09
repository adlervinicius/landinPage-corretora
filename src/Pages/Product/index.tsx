// react-router-dom
import { useNavigate } from 'react-router-dom';

// styles
import {
    Container,
    TextArea,
    AreaServices,
    ImageItem,
    ContainerAreaDivs,
    ButtomNavigate
} from './styledProduct';

// main
export const Product = () => {
    const navigate = useNavigate();

    // navegação para tela de produtos
    const HandleClick = () => {
        navigate('/produtos')
    }

    // componente de cards de produtos
    const HandleServices = () => {
        return (
            <>
                <AreaServices onClick={HandleClick}>
                    <ImageItem />
                    <ButtomNavigate>Saber mais</ButtomNavigate>
                </AreaServices>
            </>
        )
    }

    return (
        <Container>
            <TextArea>Nossos produtos</TextArea>
            <ContainerAreaDivs>
                {HandleServices()}
                {HandleServices()}
                {HandleServices()}
                {HandleServices()}
            </ContainerAreaDivs>
        </Container>
    )
}