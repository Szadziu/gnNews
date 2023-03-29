import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import AppLayout from './components/AppLayout';
import CountryPage from './routes/CountryPage';
import Root from './routes/Root';
import store from './store/store';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Root />,
            },
            {
                path: 'country/:countryId',
                element: <CountryPage />,
            },
        ],
    },
]);

const App = () => {
    return (
        <ReduxProvider store={store}>
            <RouterProvider router={router} />
        </ReduxProvider>
    );
};

export default App;
