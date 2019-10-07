const { exec } = require('child_process');
import moment from "moment"
export const commitAndPush = () => {
    exec('git status && git add . && git commit -am"Added new files at'+ moment().format('MMMM-Do-YYYY, h:mm:ss a') +'" && git push origin master', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
    });
}