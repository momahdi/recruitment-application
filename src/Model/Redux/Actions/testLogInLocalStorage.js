export const testing = () => {


    return (dispatch, getState) => {
        dispatch({type:"LOG_IN_USER", role:"admin", fname:"seb", ename:"paz", dateOfBirth: "12-12-12"})
    }
}

export const testingSignOut = () => {


    return (dispatch, getState) => {
        dispatch({type:"LOG_OUT_USER"})
    }
}