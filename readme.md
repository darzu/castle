#Welcome to the Castle project!

##Setup

###Setup Task 0: Downloading the stuffs
- Get an account at https://github.com/
- Download "SublimeText 3" (text editor) http://www.sublimetext.com/3
- Download "git" (version control) http://git-scm.com/
- Download "node.js" (server) http://nodejs.org/
- Make sure you have Google Chrome installed

####Helpful links
- http://try.github.io/

###Setup Task 1: Setting up SSH
0. Open git bash
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
0. run ```ssh -T git@github.com```. You should see "Hi username! You've successfully authenticated".

####Helpful links
- https://help.github.com/articles/generating-ssh-keys
 
###Setup Task 2: Running your first server
0. Open git bash
0. run ```cd ~```
0. run ```git clone git@github.com:Darzu/castle.git```
0. run ```cd castle```
0. run ```npm install```
0. run ```node server```
0. Open chrome and go to http://localhost:3000/

###Setup Task 3: Your very own .profile
0. Open git bash
0. run ```cd ~```
0. run ```notepad .profile```
0. paste in the following contents and save:
```
alias ls="ls -a"
alias ll="ls -l"
alias subl="/cygdrive/c/Program\ Files/Sublime\ Text\ 3/sublime_text.exe"
alias ssh-reset="eval `ssh-agent`; ssh-add ~/.ssh/github_bash_rsa"
alias reload=" . ~/.profile"
```