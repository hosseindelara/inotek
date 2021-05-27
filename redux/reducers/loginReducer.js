export const loginReducer = (islogin = {login:false,idUser:0,loginDate:new Date().getTime()}, action) => {
    switch (action.type) {
        case 'login':
            return islogin = action.paylod;
        case 'logout':
            return islogin = action.paylod;
        default:
            return islogin;
    }
}