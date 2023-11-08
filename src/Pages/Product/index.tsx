import {
    Container,
    TextArea,
    AreaServices,
    ImageItem,
    ContainerAreaDivs,
} from './styledProduct';

export const Product = () => {

    const HandleServices = () => {
        return (
            <>
                <AreaServices>
                    <ImageItem />
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