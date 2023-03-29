import React, {useState, useEffect} from 'react';
import {Typography} from 'antd';

const {Paragraph} = Typography;
const formatTime = (date: Date) => date.toLocaleTimeString('pl-PL', {timeZone: 'Europe/Warsaw'});

const CurrentTime: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Paragraph style={paragraphStyle} strong data-testid="current-time">
            {formatTime(time)}
        </Paragraph>
    );
};

export default CurrentTime;

const paragraphStyle: React.CSSProperties = {
    margin: 0,
};
