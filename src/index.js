import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import TalentUIBootstrap from "./root-class";
import configureStore from "./configure-store";

export const kickoff = options => {
    let { reducer, loader, reduxMiddleware = [], initialState } = options;
    let store = configureStore(reducer, initialState, reduxMiddleware);
    return app => {
        render(
            <Provider store={store}>
                <TalentUIBootstrap app={app} loader={loader} />
            </Provider>,
            document.getElementById("bsMain")
        );
    };
};
