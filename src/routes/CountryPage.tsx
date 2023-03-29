import {Layout, Typography, Spin} from 'antd';
import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import GridListView from '../components/GridListView';
import {useArticlesAmountContext} from '../contexts/ArticlesAmountContext';
import {Article} from '../types/types';

const {Content} = Layout;
const {Title} = Typography;

type CountryPageParams = Partial<Record<string, string>>;

const CountryPage: React.FC = () => {
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {setArticlesAmount} = useArticlesAmountContext();
    const {countryId = ''} = useParams<CountryPageParams>();
    const {t} = useTranslation('countries');

    const getArticles = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryId}&apiKey=acd6a057abc84b2a95f486b007f12fce`);
            const data = await response.json();
            setAllArticles(data.articles);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [countryId]);

    useEffect(() => {
        getArticles();
    }, [countryId]);

    useEffect(() => {
        setArticlesAmount(allArticles.length);
    }, [allArticles]);

    return (
        <>
            <Content style={{overflowY: 'auto', position: 'relative'}}>
                <Title level={3} style={titleStyle}>
                    {t(countryId)}
                </Title>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Content>
                        {isLoading ? (
                            <div style={{textAlign: 'center', padding: 24}}>
                                <Spin />
                            </div>
                        ) : (
                            <GridListView data={allArticles} />
                        )}
                    </Content>
                </Layout>
            </Content>
        </>
    );
};

export default CountryPage;

const titleStyle: React.CSSProperties = {
    position: 'sticky',
    color: '#3ba0e9',
    textAlign: 'center',
    padding: '16px 0',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 1000,
};
