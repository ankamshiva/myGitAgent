https://api.github.com/search/repositories?q=+language:javascript+stars:>500&sort=updated&order=desc
https://github.com/search?l=&o=desc&q=stars%3A>500+language%3AJavaScript&s=updated&type=Repositories




to get the backgroung process

ps aux | grep index.js


npm install forever -g


cd /Users/aahlad/Documents/proj/personalCode/myGitAgent && forever start -c node_modules/.bin/babel-node index.js

forever list
forever stop <process-id>
forever stopall



Apple script

tell application "iTerm"
	set newWindow to (create window with default profile)
	tell current session of newWindow
		write text "forever stopall && cd /Users/aahlad/Documents/proj/personalCode/myGitAgent && forever start -c node_modules/.bin/babel-node index.js && forever list"
	end tell
end tell

