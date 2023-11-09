// styles
import { 
    Container,
    AreaDiv,
    ImageDiv,
    ContainerArea,
    TextItem,
    SubTextItem,
    ButtomItem,
    DivButtom
} from './styledProductsPage';

// pages
import { Header } from '../../shared/components/Header';

// main
export const ProductsPage = () => {

    const HandleProducts = (text: string, subText: any) =>{
        return (
            <AreaDiv>
                <ImageDiv />
                <ContainerArea>
                    <TextItem>{text}</TextItem>
                    <SubTextItem>{subText}</SubTextItem>
                    <DivButtom>
                        <ButtomItem>saber mais</ButtomItem>
                    </DivButtom>
                </ContainerArea>
            </AreaDiv>
        )
    }

    const HandleProductsLeft = (text: string, subText: any) =>{
        return (
            <AreaDiv>
                <ContainerArea>
                    <TextItem>{text}</TextItem>
                    <SubTextItem>{subText}</SubTextItem>
                    <DivButtom>
                        <ButtomItem>saber mais</ButtomItem>
                    </DivButtom>
                </ContainerArea>
                <ImageDiv />
            </AreaDiv>
        )
    }

    return (
        <Container>
            <Header />
            {HandleProducts('Automóvel', 'Somos uma empresa com um novo propósito, somos especialistas do ramo de seguros e temos o propósito de DESCOMPLICAR o seguro para você, cliente.')}
            {HandleProductsLeft('Residencial', 'Somos uma empresa com um novo propósito, somos especialistas do ramo de seguros e temos o propósito de DESCOMPLICAR o seguro para você, cliente.')}
            {HandleProducts('Empresarial ', 'Somos uma empresa com um novo propósito, somos especialistas do ramo de seguros e temos o propósito de DESCOMPLICAR o seguro para você, cliente.')}
            {HandleProductsLeft('Vida Individual', 'Somos uma empresa com um novo propósito, somos especialistas do ramo de seguros e temos o propósito de DESCOMPLICAR o seguro para você, cliente.')}
        </Container>
    )
}