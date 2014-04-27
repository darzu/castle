#Welcome to the Castle project!

The goal of this project is to teach you guys how to program while we all have fun making a game!

##Setup

###Setup Task 0: Downloading the stuffs

This step will get you the tools and accounts you need to start programming with Node.js and Javascript!

- Get an account at https://github.com/ (email your username to Daryl)
- Download "SublimeText 3" (text editor) http://www.sublimetext.com/3
- Download "git" (version control) http://git-scm.com/
- Download "node.js" (server) http://nodejs.org/
- Make sure you have Google Chrome installed

####About Git
Git is a "distributed version control system". Git allows us to keep a record of every change we will ever make to our code files. This is important so that we don't accidently loose anything or make other irreversible mistakes! (Note when you install git, it also installs a specail command line tool called "git bash". We will be using this for all our work with git!)

####About GitHub
Github.com is a site that will host (for free!) our central git system. It will be the central location from which we can each get copies of the code files and submit changes we make to code files. Github is were the master copy of each file will live, while locally on each of our own computers we will have our own copy of the files.

####About SublimeText 3
Sublime is a text editor. We will use it for all our javascript, html, and css code editing.

####About Node.js
Node is a platform that lets us create servers in javascript.

####Helpful links
- [Learning git](http://try.github.io/)

###Setup Task 1: Setting up your SSH keys

SSH stands for "Secure Shell". It is protocal for doing secure communication accross networks. SSH uses special 'keys' for verifying the identity of the people doing the commincation (aka authentication). We use SSH to establish a secure connection between our computer and "githuh.com". In order to do this, we need to create some new keys for you and then let github.com know about them. Github can do this automatically for us if we install there desktop application, but I think it is better if we do this on our own so we can use the command line to start.

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

For more detail instructions and help, see: [Setting up SSH with Github](https://help.github.com/articles/generating-ssh-keys)
 
###Setup Task 2: Your very own .profile

Another menial task. Here we set up a special file called ".profile". This is used to configure bash (the command line tool for git). We need to configure bash with some helper "aliases". These aliases are shortcuts for common commands that we'll me using frequently.

0. Open git bash
0. Run `cd ~`
0. Run `notepad .profile`
0. paste in the following contents and save the file:
```
alias ls="ls -a"
alias ll="ls -l"
alias subl="/cygdrive/c/Program\ Files/Sublime\ Text\ 3/sublime_text.exe"
alias ssh-reload="eval `ssh-agent`; ssh-add ~/.ssh/github_bash_rsa"
alias profile-reload=" . ~/.profile"

ssh-reload;
```
0. exit and reopen git bash

##Coding!

Cool! Hopefully we've got the boring setup out of the way. Let's see if we can get fun stuff to happen!

###Coding Task 0: Running your first server

Here we are going to try to "clone" the master git repository that github is hosting for us. This creats a local copy of that repsitory and all of its files so that we can use and edit the files offline! Cloning will also keep a link between this new local repository and the one living up at github so that we can synchronize between the two. We are also going to run the mini server that I've set up for us to start with.

0. Open git bash
0. Run `cd ~`
0. Run `git clone git@github.com:Darzu/castle.git`
0. Run `cd castle`
0. Run `npm install`
0. Run `node server`
0. Open chrome and go to http://localhost:3000/

###Coding Task 1: Committing your first change!

Now that you've got your own local git repository and all of our project files, we're going to try to get you to do your first file edit and we'll have you synchronize your edit with the central authority at github (this makes it visible for everyone else on the project to see!).

0. Open git bash
0. Run `cd ~/castle`
0. Run `subl .`
0. This should open sublime! Find the "readme.md" file in the sidebar on the left. Scroll down until you see source text for this list:
  - ~~Daryl needs to do his first commit!~~
  - Josh needs to do his first commit!
  - Kyle needs to do his first commit!
0. Add two tilda `~~` on each side of the line that has your name on it then save and close the file.
0. Run `git status`
0. Run `git add readme.md`
0. Run `git commit -m "This is my first commit!"`
0. Run `git push`
0. Reload the webpage with this readme. The line with your name in the list above should be crossed out!

###Coding Task 2: Getting familiar

Now that you've run the server and done a little bit with git , let's take a peak into the server and see what the code looks like!

0. Open 'server.js'
0. Read through the comments.
