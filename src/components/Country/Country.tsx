import React from 'react';
import {Space, Typography} from 'antd';
import {FlagIcon, FlagIconCode} from 'react-flag-kit';
import {useTranslation} from 'react-i18next';
import useIsMobile from '../../hooks/useIsMobile';
import styled from 'styled-components';

interface CountryProps {
    countryCode: FlagIconCode;
}

const Country: React.FC<CountryProps> = ({countryCode}) => {
    const {t} = useTranslation('countries');
    const isMobile = useIsMobile();

    return (
        <StyledCountryItem>
            <FlagIcon code={countryCode} size={32} />
            {!isMobile && <Typography.Text style={{width: '100%', fontSize: 12}}>{t(countryCode)}</Typography.Text>}
        </StyledCountryItem>
    );
};

export default Country;

const StyledCountryItem = styled(Space)`
    width: 100%;
    transition: border 0.3s;
    border-bottom: 1px solid transparent;

    &:hover {
        border-bottom: 1px solid white;
    }
`;
