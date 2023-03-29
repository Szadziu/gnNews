import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {Layout} from 'antd';
import CountrySider from '../CountrySider';
import CustomFooter from '../CustomFooter';
import CustomHeader from '../CustomHeader';
import ArticlesAmountContextProvider from '../../contexts/ArticlesAmountContext';

const AppLayout: React.FC = () => {
    return (
        <LayoutStyled>
            <CustomHeader />
            <ArticlesAmountContextProvider>
                <Layout>
                    <CountrySider />
                    <Outlet />
                </Layout>
                <CustomFooter />
            </ArticlesAmountContextProvider>
        </LayoutStyled>
    );
};

export default AppLayout;

const LayoutStyled = styled(Layout)`
    max-height: 100vh;
    overflow-y: auto;
`;
