import axios from 'axios'
import opts from "../../config/base"
import qs from "qs"

export default function (Vue, options) {
    Vue.prototype.clone = function (initalObj, finalObj) {
        var obj = finalObj || {};
        for (var i in initalObj) {
            if (typeof initalObj[i] === 'object') {
                obj[i] = (initalObj[i].constructor === Array) ? [] : {};
                Vue.prototype.clone(initalObj[i], obj[i]);
            } else {
                obj[i] = initalObj[i];
            }
        }
        return obj;
    };
    axios.defaults.baseURL = opts.serviceConfig.baseURL;
    axios.defaults.transformRequest = [function (data) {
        let postdata = {
            token: "this is token",
            type: 1,
            data: data
        }
        return qs.stringify(postdata);
    }];
    Vue.prototype.$http = axios;
};
