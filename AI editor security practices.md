# Protect your .env in Cursor

## Inspiration for this post

Recently we started using cursor in addition to GitHub copilot, and I was personally impressed with how much more productive I could be coding with in addition to GitHub copilot.\
\
However there were some things I did not love that I recently ran into so I thought I would share my experience, specifically around .env variables. I recently started a new pet project, and that would specifically leverage a GitHub token, so I created a .env variable, and to my shock AI autocomplete was trying to guess or generate an answer. Despite still having Cursor privacy mode turned on, having a .gitignore with .env file, and even messing with a .cursorignore I expected the AI to ignore my .env similar to GitHub copilot. Apparently, from what I read Cursor has an edge case where is a file is open in the active editor it can still be a target for AI request. I will say Cursor does point out that all data/context/code in privacy mode should be promptly deleted after the request, but this still stressed me out. Luckily I did not open any important project .env files in Cursor, but it did make inspire me to be proactive and rotate all major API secrets for any key projects that I opened with Cursor just in case, because it is always better to be safe than sorry?

## So how do I fix it?

So at this point you are likely wondering how can I avoid any stress and worry around .env files variables in Cursor? So a couple things, one always make sure .gitignore includes .env file. Also add a .cursorignore file as well with .env file.\
\
The biggest thing that will likely save you a lot stress is going into the vscode settings(remember cursor is a vscode fork) and prevent any .env file from being open in Cursor ever.

![](/img/cursorfix.png)So this prevents you from opening an .env file in Cursor in general, but it also prevents things like composer and chat from having access to it(at least from what I have seen).

![](/img/composer.png)

## Final notes

Also the last thing I want to do is stress more people out, so if you find yourself stressed that you opened a project in Cursor, it does not appear you have to be too stressed out about your .env, because if you are in private mode they seem to claim to delete your data and your context as mentioned in this [thread](https://forum.cursor.com/t/are-environment-variables-used-for-cursor-training/12855/5). But if you are like me and are super paranoid about everything I hope my tips help! Happy coding!
