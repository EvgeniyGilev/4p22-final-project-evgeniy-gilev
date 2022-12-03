import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import IndexPage from './Pages/IndexPage/IndexPage';
import ContactsPage from './Pages/Contacts/Contacts';
import BasketPage from './Pages/Basket/Basket';
import DefaultLayout from './Layouts/DefaultLayout';
import ProductPage from './Pages/Product/Product';
import Page404 from './Pages/Page404/Page404';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import ErrorBoundary from './Layouts/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <ErrorBoundary>
            <Routes>
              <Route path={'/'} element={<DefaultLayout />}>
                <Route index element={<IndexPage />}></Route>
                <Route path={'contacts'} element={<ContactsPage />}></Route>
                <Route path={'basket'} element={<BasketPage />}></Route>
                <Route path={'products'}>
                  <Route path={':productId'} element={<ProductPage />} />
                </Route>
                <Route path={'*'} element={<Page404 />}></Route>
              </Route>
            </Routes>
          </ErrorBoundary>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
