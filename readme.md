#Welcome to the Castle project!

##Setup

###Setup Task 0: Downloading the stuffs
- Get an account at https://github.com/ (email your username to Daryl)
- Download "SublimeText 3" (text editor) http://www.sublimetext.com/3
- Download "git" (version control) http://git-scm.com/
- Download "node.js" (server) http://nodejs.org/
- Make sure you have Google Chrome installed

####Helpful links
- http://try.github.io/

###Setup Task 1: Setting up SSH
0. Open git bash
0. Run `cd ~/.ssh`
0. Run `ssh-keygen -t rsa -C "your_email@example.com"`
0. Don't enter a passphrase (leave it blank)
0. Run `ssh-add ~/.ssh/id_rsa`
0. Run `pbcopy < ~/.ssh/id_rsa.pub`
0. Go to github.com > account settings > SSH Keys
0. Click add SSH Key
0. Enter a name for your (probably your computer e.g. "Daryl Laptop")
0. Paste your key into the key field
0. Go back to your git bash window
0. Run `ssh -T git@github.com`. You should see "Hi username! You've successfully authenticated".

####Helpful links
- https://help.github.com/articles/generating-ssh-keys
 
###Setup Task 2: Your very own .profile
0. Open git bash
0. Run `cd ~`
0. Run `notepad .profile`
0. paste in the following contents and save the file:
```
alias ls="ls -a"
alias ll="ls -l"
alias subl="/cygdrive/c/Program\ Files/Sublime\ Text\ 3/sublime_text.exe"
alias ssh-reset="eval `ssh-agent`; ssh-add ~/.ssh/github_bash_rsa"
alias reload=" . ~/.profile"
```
0. exit and reopen git bash

##Coding!

###Coding Task 0: Running your first server
0. Open git bash
0. Run `cd ~`
0. Run `git clone git@github.com:Darzu/castle.git`
0. Run `cd castle`
0. Run `npm install`
0. Run `node server`
0. Open chrome and go to http://localhost:3000/

###Coding Task 1: Committing your first change!
0. Open git bash
0. Run `cd ~/castle`
0. Run `subl .`
0. This should open sublime! Find the "readme.md" file in the sidebar on the left. Then scroll down until you see source text for this checklist:
- [x] Daryl has done his first commit!
- [ ] Josh has done his first commit!
- [ ] Kyle has done his first commit!
0. Change the line that has your name on it to have a `[x]` instead of `[ ]` then save and close the file.
0. Run `git status`
0. Run `git add readme.md`
0. Run `git commit -m "This is my first commit!"`
0. Run `git push`
0. Reload the webpage with this readme. You should see a check next to your name in the checklist just above!

