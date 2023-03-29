import React from 'react';
import {List, Typography} from 'antd';
import styled from 'styled-components';
import CustomModal from '../../CustomModal';
import ModalContent from '../../ModalContent';
import {useBooleanState} from '../../../hooks/useBoolean';
import {Article} from '../../../types/types';
import formatDate from '../../../helpers/formatDate';
import { useTranslation } from 'react-i18next';

interface ListItemProps {
    item: Article;
}

const {Text} = Typography;

const ListItem: React.FC<ListItemProps> = ({item}) => {
    const [showModal, hideModal, isModalVisible] = useBooleanState(false);
    const {t} = useTranslation();

    return (
        <>
            <ListItemStyled className="custom-list-item" onClick={showModal}>
                <StyledText strong ellipsis>
                    {item.title}
                </StyledText>
                <StyledText>
                    {item.source.name}
                </StyledText>
                <StyledText>
                    {t('dateOfPublication')}{formatDate(item.publishedAt)}
                </StyledText>
            </ListItemStyled>
            <CustomModal isOpen={isModalVisible} onClose={hideModal}>
                <ModalContent author={item.author} content={item.content} url={item.url} />
            </CustomModal>
        </>
    );
};

export default ListItem;

const ListItemStyled = styled(List.Item)`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(125, 188, 234);
    }
`;

const StyledText = styled(Text)`
    width: 100%;
`;