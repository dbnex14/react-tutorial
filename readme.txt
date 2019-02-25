As we said before, what we did in Intro folder where we loaded React and Babel
into a static HTML using scripts tab is not efficient and is not eacy to maintain.

For that reason, Facebook created Create React App which is an enviroment that
comes with everything you need to build a React app.  It will create a live
dev server, use Webpack to automatically compile React, JSX and ES6, auto-prefix
CSS files, and use ESLint to test and warn about mistakes in the code.

To set up create-react-app, run the following in your terminal, one directory up
from where you want the project to live.  So in this case, my project will live
in

/Users/dinob/Desktop/work/react-learning/taniarascia/react-tutorial

Note that I dont have 'react-tutorial' directory created yet.  That will be
created for me with the command below.  So, I am currently at the location

/Users/dinob/Desktop/work/react-learning/taniarascia

, and I  run command below inside of taniarascia directory:

npx create-react-app react-tutorial

This will run installation and install what is needed inside newly created
directory react-tutorial with following content

-rwxr-xr-x     1 dinob  staff    2881 23 Feb 12:29 README.md
drwxr-xr-x  1049 dinob  staff   33568 23 Feb 17:12 node_modules/
-rw-r--r--     1 dinob  staff     487 23 Feb 17:07 package.json
drwxr-xr-x     5 dinob  staff     160 23 Feb 17:07 public/
-rw-r--r--@    1 dinob  staff    1653 23 Feb 17:13 readme.txt
drwxr-xr-x     9 dinob  staff     288 23 Feb 17:07 src/
-rw-r--r--     1 dinob  staff  421100 23 Feb 17:07 yarn.lock

Once installed, cd into react-tutorial

cd react-tutorial

, and issue

yarn start

, and a new window will pop up at localhost:3000 with your new React app.

