import {
    Container,
    DivAreaText,
    TextTitle,
    SubText,
    DivAreaTotal,
    DivAreaImage,
    Image
} from './styledHome';

import logoCorretora from '../../images/logoCorretora.jpg';

import { Header } from '../Header';

export const Home = () => {
    return (
        <Container>
            <Header />
            <DivAreaTotal>
                <DivAreaText>
                    <TextTitle>
                        Precisa contratar um seguro e tem dúvidas sobre o que e como contratar? 
                        Temos a solução!!
                    </TextTitle>
                    <SubText>
                        Somos uma empresa com um novo propósito, somos especialistas do ramo de seguros e temos o propósito de DESCOMPLICAR o seguro para você, cliente.
                    </SubText>
                    <SubText>
                        Tire suas dúvidas conosco, sobre as coberturas, sobre franquias e receba indicações de qual o melhor pacote de coberturas e as melhores seguradoras para o que você busca!
                    </SubText>
                    <SubText>
                        Contratou um seguro e precisa entender o que foi contratado? Te auxiliamos também, entre em contato agora mesmo e conte conosco!
                    </SubText>
                </DivAreaText>
                <DivAreaImage>
                    <Image src={logoCorretora} />
                </DivAreaImage>
            </DivAreaTotal>
        </Container>
    )
}

export default Home;