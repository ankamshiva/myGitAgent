'use strict';

const axios = require('axios').default;

export const gitSearch = async () => {
    let resp = await axios({
        method: 'get',
        // url: 'http://localhost:3000/search/repositories'
        url: 'https://api.github.com/search/repositories?q=+language:javascript+stars:>500&sort=updated&order=desc'
    })
    if(resp){
        return resp.data
    }else{
        return {}
    }
    
}
