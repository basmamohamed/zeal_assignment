import { StackActions, CommonActions, useRoute } from '@react-navigation/native';

let _navigator;


function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        CommonActions.navigate(routeName, params)
    );
}

function replace(routeName, params = null) {

    _navigator.dispatch(
        StackActions.replace(routeName, params)
    );

}

function getRoute() {
    let name = _navigator.getCurrentRoute().name
    return name
}

function getParams() {
    let params = _navigator.getCurrentRoute().params
    return params
}

function reset(routeName, params) {

    const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: routeName, params }]
    })

    _navigator.dispatch(resetAction);

}

function goBack() {
    _navigator.dispatch(CommonActions.goBack());
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    replace,
    reset,
    setTopLevelNavigator,
    getRoute,
    getParams
};
