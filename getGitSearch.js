'use strict';

const axios = require('axios').default;

export const gitSearch = async () => {
    let resp = await axios({
        method: 'get',
        url: 'http://localhost:3000/search/repositories'
    })
    return resp.data
}
