const CHANGE_THEME = 'CHANGE_THEME'
export type ThemeType =  'dark' | 'green' | 'light'
const initState = {
    theme: 'light' as ThemeType
};

type initStateType = typeof initState

export const themeReducer = (state:initStateType = initState, action: changeThemeActionType): initStateType => {
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.payload.theme};
        }
        default: return state;
    }
};

export type changeThemeActionType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: ThemeType) => {
    return {
        type: CHANGE_THEME,
        payload: {theme},
    } as const
}