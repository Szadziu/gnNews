import {useCallback, useState} from 'react';

type UseBooleanStateReturnType = [() => void, () => void, boolean];

const useBooleanState = (initialValue: boolean): UseBooleanStateReturnType => {
    const [value, setValue] = useState(initialValue);
    const setTrue = useCallback(() => setValue(true), []);
    const setFalse = useCallback(() => setValue(false), []);

    return [setTrue, setFalse, value];
};

export {useBooleanState};
