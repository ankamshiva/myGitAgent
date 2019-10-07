'use strict';

import { gitSearch } from "./getGitSearch"
import jsonata from "jsonata"
import moment from "moment"
import {writeFile} from "./writeFiles"

let start = async () => {
    let gitSearchResp = await gitSearch();
    let expression = jsonata('$$.items.{"name": name, "url": url, "full_name": full_name, "html_url": html_url, "stars": stargazers_count, "forks": forks_count}');
    let result = expression.evaluate(gitSearchResp);
    console.log(result)
    const currentstamp = moment().format('MMMM-Do-YYYY')
    if(result){
        writeFile("./dailyArchive/" + currentstamp +".json", JSON.stringify(result, "", 4))
        writeFile("./currentFile.json", JSON.stringify(result, "", 4))
        console.log(moment().format('MMMM-Do-YYYY, h:mm:ss a'))
    }
}


setInterval(start, 5000)