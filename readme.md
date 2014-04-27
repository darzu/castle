#Welcome to the Castle project!

##Setup

###Setup Task 0
- Get an account at https://github.com/
- Download "SublimeText 3" (text editor) http://www.sublimetext.com/3
- Download "git" (version control) http://git-scm.com/
- Download "node.js" (server) http://nodejs.org/
- Make sure you have Google Chrome installed

###Setup Task 1
0. Open "git bash"
0. run ```cd ~/.ssh```
0. run ```ssh-keygen -t rsa -C "your_email@example.com"```
0. Don't enter a passphrase (leave it blank)
0. run ```ssh-add ~/.ssh/id_rsa```
0. run ```pbcopy < ~/.ssh/id_rsa.pub```
0. Go to github.com > account settings > SSH Keys
0. Click add SSH Key
0. Enter a name for your (probably your computer e.g. "Daryl Laptop")
0. Paste your key into the key field
0. Go back to your git bash window
0. run ```ssh -T git@github.com```. You should see "Hi <username>! You've successfully authenticated".

####Link
- https://help.github.com/articles/generating-ssh-keys
 
###Setup Task 2
0. Open ```git bash```
0. run ```cd ~```
0. run ```git clone git@github.com:Darzu/castle.git```
0. run ```cd castle```
0. run ```node server```
0. Open chrome and go to http://localhost:3000/
