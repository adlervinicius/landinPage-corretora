import {
    Container,
    AreaServices,
    ImageItem,
    TextArea,
    ImageItemStar,
    ContainerAreaDivs,
    TextAreaDiv
} from './styledAssessment';

//images
import stars from '../../images/stars.webp';

export const Assessment = () => {

    const HandleServices = () => {
        return (
            <>
                <AreaServices>
                    <ImageItem />
                    <ImageItemStar src={stars} />
                    <TextAreaDiv>Nossos produtos</TextAreaDiv>
                </AreaServices>
            </>
        )
    }


    return (
        <Container>
            <TextArea>Avaliação dos nossos clientes</TextArea>
            <ContainerAreaDivs>
                {HandleServices()}
                {HandleServices()}
                {HandleServices()}
                {HandleServices()}
            </ContainerAreaDivs>
        </Container>
    )
}