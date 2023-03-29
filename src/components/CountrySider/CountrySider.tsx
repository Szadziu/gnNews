import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, List, Typography} from 'antd';
import {FlagIconCode} from 'react-flag-kit';
import Country from '../../components/Country';
import {flagIconCodes} from '../../constants/countryCodes';
import {useTranslation} from 'react-i18next';
import useIsMobile from '../../hooks/useIsMobile';
import styled from 'styled-components';

const {Item} = List;
const {Sider} = Layout;
const countries = flagIconCodes;

const CountrySider: React.FC = () => {
    const {t} = useTranslation();
    const isMobile = useIsMobile();

    return (
        <SiderStyled width={isMobile ? 85 : 200}>
            {!isMobile && <CountryListHeader>{t('asideHeader')}</CountryListHeader>}
            <ScrollableContent>
                <List
                    bordered
                    style={{border: 'none'}}
                    dataSource={countries}
                    renderItem={(item: FlagIconCode) => (
                        <Link to={`/country/${item}`}>
                            <Item>
                                <Country countryCode={item} />
                            </Item>
                        </Link>
                    )}
                />
            </ScrollableContent>
        </SiderStyled>
    );
};

export default CountrySider;

const CountryListHeader = styled.header`
    position: sticky;
    top: 0;
    font-size: 1.5rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    z-index: 1000;
    background-color: #3ba0e9;
    font-family: 'Khand', sans-serif;
`;

const ScrollableContent = styled.div`
    max-height: calc(100vh - 12rem);
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 0.5rem;
    }
`;

const SiderStyled = styled(Sider)`
    position: relative;
    line-height: 120%;
    background-color: #3ba0e9 !important;
    overflow-y: hidden;
    width: ${(props) => props.width};
    border: none;
`;
