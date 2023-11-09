// styles
import { 
    Container,
    AreaDiv,
    ImageDiv,
    ContainerArea,
    TextItem,
    SubTextItem,
    ButtomItem,
    DivButtom,
    ImageWhats,
    ContainerAreaLeft
} from './styledProductsPage';

// images
import logoWhats from '../../images/logoWhats.webp';

// pages
import { Header } from '../../shared/components/Header';
import { Footer } from '../Footer';

// main
export const ProductsPage = () => {

    // automovel texto
    const textOneAutomovel = 'Principais coberturas: Roubo ou furto, colisão, incêndio e danos causados por desastres naturais.';
    const textTwoAutomovel = 'Coberturas adicionais: Danos aos vidros do veículo, faróis, lanternas e retrovisores, carro reserva, entre outros.';
    const textThreeAutomovel = 'Principais assistências: Guincho, chaveiro, troca de pneus, entre outros.';

    // Residencial texto
    const textOneResidencial = 'Principais coberturas: Danos causados por Incêndios, Raios ou Explosões.';
    const textTwoResidencial = 'Coberturas adicionais: Roubo, Danos Elétricos, Vendaval, Destelhamento, Responsabilidade Civil, Equipamentos Eletrônicos, Vazamentos, entre outros.';
    const textThreeResidencial = 'Principais assistências: Encanador, Eletricista, Chaveiro, Vidraceiro, Reparo de Eletrodomésticos, Reparo de Eletrônicos, entre outros.';

    // Empresarial texto
    const textOneEmpresarial = 'Principais coberturas: Danos causados por Incêndios, Raios ou Explosões';
    const textTwoEmpresarial = 'Coberturas adicionais: Lucros Cessantes, Perda/pagamento de Aluguel, Roubo, Danos Elétricos, Vendaval, Destelhamento, Responsabilidade Civil, Vazamentos.';
    const textThreeEmpresarial = 'Principais assistências: Encanador, Eletricista, Chaveiro, entre outros.';

    // Vida texto
    const textOneVida = 'Principais coberturas: Morte ou Invalidez.';
    const textTwoVida = 'Coberturas Adicionais: Diagnóstico de doenças graves, diária de internação hospitalar, diária de incapacidade temporária.';
    const textThreeVida = 'Principais assistências: Assistência funeral, 2ª opinião médica, telemedicina (a confirmar com a seguradora contratada)';
 
    const HandleProducts = (text: string, subText: string, textTwo: string, textThree: string) =>{
        return (
            <AreaDiv>
                <ImageDiv />
                <ContainerArea>
                    <TextItem>{text}</TextItem>
                    <SubTextItem>{subText}</SubTextItem>
                    <br />
                    <SubTextItem>{textTwo}</SubTextItem>
                    <br />
                    <SubTextItem>{textThree}</SubTextItem>
                    <DivButtom>
                        <ButtomItem>saber mais</ButtomItem>
                    </DivButtom>
                </ContainerArea>
            </AreaDiv>
        )
    }

    const HandleProductsLeft = (text: string, subText: string, textTwo: string, textThree: string) =>{
        return (
            <AreaDiv>
                <ContainerAreaLeft>
                    <TextItem>{text}</TextItem>
                    <SubTextItem>{subText}</SubTextItem>
                    <br />
                    <SubTextItem>{textTwo}</SubTextItem>
                    <br />
                    <SubTextItem>{subText}</SubTextItem>
                    <DivButtom>
                        <ButtomItem>saber mais</ButtomItem>
                    </DivButtom>
                </ContainerAreaLeft>
                <ImageDiv />
            </AreaDiv>
        )
    }

    return (
        <Container>
            <Header />
            {HandleProducts('Automóvel', textOneAutomovel, textTwoAutomovel, textThreeAutomovel)}
            {HandleProductsLeft('Residencial', textOneResidencial, textTwoResidencial, textThreeResidencial)}
            {HandleProducts('Empresarial', textOneEmpresarial, textTwoEmpresarial, textThreeEmpresarial)}
            {HandleProductsLeft('Vida individual', textOneVida, textTwoVida, textThreeVida)}
            <Footer />
            <ImageWhats src={logoWhats} />
        </Container>
    )
}