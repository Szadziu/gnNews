import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Layout, Space, Typography} from 'antd';
import {UnorderedListOutlined, AppstoreOutlined, InfoCircleOutlined, TranslationOutlined} from '@ant-design/icons';
import CustomModal from '../CustomModal';
import {useTranslation} from 'react-i18next';
import {useBooleanState} from '../../hooks/useBoolean';
import {RootState} from '../../store/store';
import {toggle} from '../../store/slices/viewModeSlice';
import {Language, ViewMode} from '../../types/types';

const {Header} = Layout;
const {Title} = Typography;

const CustomHeader: React.FC = () => {
    const view = useSelector(({viewMode}: RootState) => viewMode.value);
    const dispatch = useDispatch();
    const [showModal, hideModal, isModalVisible] = useBooleanState(false);
    const {t, i18n} = useTranslation();
    const iconStyle = {fontSize: '1.5rem'};
    const isTilesView = view === ViewMode.Tiles;
    const viewIcon = isTilesView ? <AppstoreOutlined style={iconStyle} /> : <UnorderedListOutlined style={iconStyle} />;
    const handleViewToggle = () => dispatch(toggle());
    const buttonSize = 'large';

    const changeLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage: Language = currentLanguage === 'en' ? 'pl' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <>
            <Header style={headerStyle}>
                <Link to={`/`}>
                    <Title style={logoStyle}>gnNews</Title>
                </Link>
                <Space style={actionButtonsStyle}>
                    <Button size={buttonSize} icon={<InfoCircleOutlined style={iconStyle} />} onClick={showModal} />
                    <Button size={buttonSize} icon={viewIcon} onClick={handleViewToggle} />
                    <Button size={buttonSize} icon={<TranslationOutlined style={iconStyle} />} onClick={changeLanguage} />
                </Space>
            </Header>

            <CustomModal isOpen={isModalVisible} onClose={hideModal}>
                {t('modalAdditionalInfoText')}
            </CustomModal>
        </>
    );
};

export default CustomHeader;

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7dbcea',
};

const logoStyle: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Khand, sans-serif',
    margin: 0,
};

const actionButtonsStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
};
