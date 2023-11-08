
// images
import logoCorretora from '../../images/logoCorretora.jpg'
import logoWhats from '../../images/logoWhats.webp';

// styles
import {
    Container,
    DivAreaName,
    ImageItem,
    TextItem,
} from './styledHeader';


// main
export const Header = () => {
    return (
        <Container>
            <DivAreaName>
                <ImageItem src={logoCorretora} />
            </DivAreaName>
            <DivAreaName>
                <TextItem>Fale com um consultor de seguros</TextItem>
                <ImageItem src={logoWhats} />
            </DivAreaName>
        </Container>
    );
}