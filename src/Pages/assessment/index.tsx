// styles
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

//main
export const Assessment = () => {

    // component card
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