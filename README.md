# MyGitAgent!

Prerequsits:
- Nodejs
- Gitcli
- Github account
- iTerm(Optional)
- forever


Steps:
1. Fork or download this repo
2. From Forked repo clone it using ssh url
2. Go to the repo directory and install packages
3. For the repo directory you can just run 
    ```sh
        npm run start
    ```

If you want to automate this and run in the background. Follow below steps.
1. Install forever globally
    ```sh
    npm install forever -g
    ```
For Mac users
- start Automator.app
- select Application
- click Show library in the toolbar (if hidden)
- search for "apple script"
- copy & paste below script (Note: Mind the repo url)
    ```applescript
        tell application "iTerm"
            set newWindow to (create window with default profile)
            tell current session of newWindow
                write text "forever stopall && cd <TO YOUR REPO> && forever start -c node_modules/.bin/babel-node index.js && forever list"
            end tell
        end tell
    ```
- test it
- save in applications directory and name MyGitAgent
- go to System Preferences -> Accounts -> Login items





### URL Referencde

https://api.github.com/search/repositories?q=+language:javascript+stars:>500&sort=updated&order=desc
https://github.com/search?l=&o=desc&q=stars%3A>500+language%3AJavaScript&s=updated&type=Repositories



forever list
forever stop <process-id>
forever stopall