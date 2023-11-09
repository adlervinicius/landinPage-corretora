import { Route, Navigate, BrowserRouter, Routes } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { ProductsPage } from '../Pages/ProductsPage';

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pagina-inicial" element={<Home />} />
                <Route path="/produtos" element={<ProductsPage />} />
                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Routes>
        </BrowserRouter>
    );
};