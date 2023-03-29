import {Button, Modal, Space} from 'antd';
import {createPortal} from 'react-dom';
import { useTranslation } from 'react-i18next';

interface CustomModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({children, isOpen, onClose}) => {
    const {t} = useTranslation();

    return createPortal(
        <Modal
            title={t('customModalHeader')}
            footer={
                <Space>
                    <Button type="primary" onClick={onClose}>
                        OK
                    </Button>
                </Space>
            }
            open={isOpen}
            onCancel={onClose}>
            {children}
        </Modal>,
        document.getElementById('modals') as HTMLElement
    );
};

export default CustomModal;
