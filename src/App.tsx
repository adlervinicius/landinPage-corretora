import { 
  Container,
} from './App.styles';

import { Product } from './Pages/Product';
import { Home } from './Pages/Home/index';
import { Assessment } from './Pages/assessment';
import { Footer } from './Pages/Footer';

// main
export const App =  () => {

  return (
    <Container>
      <Home />
      <Product />
      <Assessment />
      <Footer />
    </Container>
  );
}