import {createSlice} from '@reduxjs/toolkit';
import {ViewMode} from '../../types/types';

export interface ViewModeState {
    value: ViewMode;
}

const initialState: ViewModeState = {
    value: ViewMode.List,
};

export const viewModeSlice = createSlice({
    name: 'viewMode',
    initialState,
    reducers: {
        toggle: (state) => {
            if (state.value === ViewMode.List) {
                state.value = ViewMode.Tiles;
            } else {
                state.value = ViewMode.List;
            }
        },
    },
});

export const {toggle} = viewModeSlice.actions;
export default viewModeSlice.reducer;
