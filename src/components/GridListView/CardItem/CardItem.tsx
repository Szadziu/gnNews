import React from 'react';
import styled from 'styled-components';
import {Card, Image, Typography, Skeleton} from 'antd';
import CustomModal from '../../CustomModal';
import ModalContent from '../../ModalContent';
import {fallbackUrl} from '../../../constants/fallbackUrl';
import {useBooleanState} from '../../../hooks/useBoolean';
import {useTranslation} from 'react-i18next';
import {Article} from '../../../types/types';
import {mediaQueries} from '../../../constants/breakpoints';
import useIsMobile from '../../../hooks/useIsMobile';
import formatDate from '../../../helpers/formatDate';

interface CardItemProps {
    item: Article;
}

const {Meta} = Card;
const {Text} = Typography;

const CardItem: React.FC<CardItemProps> = ({item}) => {
    const [showModal, hideModal, isModalVisible] = useBooleanState(false);
    const {t} = useTranslation();
    const isMobile = useIsMobile();

    return (
        <>
            <Card
                style={{...cardStyle, margin: `16px ${isMobile ? 'auto' : '16px'}`}}
                bodyStyle={{textAlign: 'center'}}
                hoverable
                onClick={showModal}>
                {item.urlToImage ? (
                    <Skeleton loading={!item.urlToImage} avatar active>
                        <Image placeholder src={item.urlToImage} fallback={fallbackUrl} preview={false} />
                    </Skeleton>
                ) : (
                    <Image src={fallbackUrl} preview={false} />
                )}
                <Meta title={item.title} style={{padding: '1rem'}} />
                <StyledText ellipsis>{item.description}</StyledText>
                <Typography.Paragraph style={{paddingTop: '0.5rem'}} strong>{item.source.name}</Typography.Paragraph>
                <StyledText ellipsis>
                    {t('dateOfPublication')}               
                    {formatDate(item.publishedAt)}
                </StyledText>
            </Card>
            <CustomModal isOpen={isModalVisible} onClose={hideModal}>
                <ModalContent author={item.author} content={item.content} url={item.url} />
            </CustomModal>
        </>
    );
};

export default CardItem;

const cardStyle: React.CSSProperties = {
    maxWidth: 350,
};

const StyledText = styled(Text)`
    width: 100%;
`;
