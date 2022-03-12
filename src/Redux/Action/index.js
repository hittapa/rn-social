import * as types from './Actiotype'



const getNotification = (data) => ({
    type: types.GET_NOTIFICATIONDATA,
    payload: data
})


export const getNotificationData = (data) => {
    return function (dispatch) {
        dispatch(getNotification(data));
    }
}

const getNavigation = (data1) => ({
    type: types.GET_NAVIGATION,
    payload: data1
})


export const getNavigationData = (data1) => {
    return function (dispatch) {
        dispatch(getNavigation(data1));
    }
}