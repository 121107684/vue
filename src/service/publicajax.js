import axios from 'axios'
import opts from '../config/base'


const httpServer = (opts,data) => {
    let pubilcData = {
        token:'tokeninthis',
        type:1
    }

    let httpDefaultOpt = {
        method:opts.method,
        baseURL,
        url:opts.url,
        timeout,
    }
    


}



export default httpServer