const initState = {
    PreloaderStatus: false,
    SecondPreloaderStatus: false,
}

export type initialStateType = typeof initState
export type ActionType = loadingACType
    | activesPreloaderACType

export const loadingReducer = (state: initialStateType = initState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'CHANGE_PRELOADER_STATUS': {
            return {
                ...state,
                PreloaderStatus: action.PreloaderStatus
            }
        }
        case 'CHANGE_SECOND_PRELOADER_STATUS': {
            return {
                ...state,
                SecondPreloaderStatus: action.SecondPreloaderStatus
            }
        }
        default:
            return state
    }
}
export type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (PreloaderStatus: boolean) => {
    return {
        type: 'CHANGE_PRELOADER_STATUS',
        PreloaderStatus,
    } as const
}

export type activesPreloaderACType = ReturnType<typeof activesPreloaderAC>
export const activesPreloaderAC = (SecondPreloaderStatus: boolean) => {
    return {
        type: 'CHANGE_SECOND_PRELOADER_STATUS',
        SecondPreloaderStatus,
    } as const
}