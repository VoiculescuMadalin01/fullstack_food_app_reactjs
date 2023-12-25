const alertReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_SUCCESS":
            return action.alert;
            break;

        case "SET_WARNING":
            return action.alert;
            break;

        case "SET_DANGER":
            return action.alert;
            break;

        case "SET_INFO":
            return action.alert;
            break;

        case "SET_ALERT_NULL":
            return action.alert;
            break;
        default:
            return state;
    }
};

export default alertReducer;
