'use strict';

import { gitSearch } from "./getGitSearch"
import jsonata from "jsonata"
import moment from "moment"
import {writeFile} from "./writeFiles"
import {commitAndPush} from "./gitCli"

let start = async () => {
    let gitSearchResp = await gitSearch();
    let expression = jsonata('$$.items.{"name": name, "url": url, "full_name": full_name, "html_url": html_url, "stars": stargazers_count, "forks": forks_count}');
    let result = expression.evaluate(gitSearchResp);
    // console.log(result)
    const currentstamp = moment().format('MMMM-Do-YYYY, h:mm:ss a')
    if(result){
        // const writeArch = await writeFile("./dailyArchive/" + currentstamp +".json", JSON.stringify(result, "", 4))
        const writeCurr = await writeFile("./currentFile.json", JSON.stringify(result, "", 4))
        console.log(moment().format('MMMM-Do-YYYY, h:mm:ss a'))
        //if(writeArch && writeCurr){
            console.log(moment().format('MMMM-Do-YYYY, h:mm:ss a'))
            commitAndPush()
        //}
    }
}

// Run this every one hour
setInterval(start, 3600000)