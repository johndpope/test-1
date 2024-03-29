import {DefaultReducer} from './DefaultReducer';
import * as constants from './actionConstants'
import { combineReducers } from 'redux';


export const makeRootReducer = () => combineReducers({
    // app,
    website: DefaultReducer(constants.WEBSITE_RECORD, {
        bride_first: "",
        bride_last: "",
        groom_first: "",
        groom_last: "",
        bride_father: "",
        bride_mother: "",
        groom_father: "",
        groom_mother: "",
        show_parents: false,
        template: 0,
        template_main: "",
        template_bottom: "",
        title: "",
        date: "",
        country: "",
        city: "",
        hash: "",
        stories: [],
        photos: [],

        show_events: false,
        events_page_title: "",
        events_description: "",
        events: [],

        faqs: [],
        show_faqs: false,

        "public": false
    }),
    user: DefaultReducer(constants.USER_RECORD, {
        email: "",
        token: ""
    }),

    templates: DefaultReducer(constants.TEMPLATE_RECORD, {}),
});

export default makeRootReducer;
