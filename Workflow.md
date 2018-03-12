Short of a full tutorial, I'd like to explain how a pull request would work for us. If you don't understand the basics of _git/version control_ and using **GitHub** to collaborate, please refer to [these resources in the README file](https://github.com/chrisvneal/practice-project#learning-git-and-github) to get up to speed. 

Here is a quick run down of how to contribute to this project.

## 1. Fork the main project repo

1. **Do not fork my copy!** lol Visit [GWGweb-projectgroup/practice-project](https://github.com/GWGweb-projectgroup/practice-project)

2. **"Fork the repo"**. This means you have to click the fork icon at the top right of the page. This will make a copy of our project, take you back to _your own GitHub account_ and copy it there. Same project, same files, same everything. Now you can work on the project from your own environment!

<hr>

## 2. Clone your copy
1. Click the **"Clone or download"** button. This will give you options for dowloading all the files to your local machine.

![](img/team/clone_download.jpg)

2. If you want to clone using your terminal, open the terminal, navigate to where you want to dump the files. It will create its own folder so putting it in your _[open-source_projects]_ folder is fine. Copy the link, https://github.com/GWGweb-projectgroup/practice-project.git
and in your terminal where you want to put the project type

```git clone https://github.com/GWGweb-projectgroup/practice-project.git``` and pess Enter. You should now be on the **[master]** branch of your copy of the project.

<hr>

## 3. Create an "upstream" to the main repo
In order to stay up to date with what's going on and keeping your **master** code current, create an _upstream_ to the main project repository so that you can easily pull in the latest changes to your local copy. Doing this will allow you to create a separate branch and work from the most current project state avoiding a lot of complications down the road. 

1. In your terminal type

```git remote add upstream https://github.com/GWGweb-projectgroup/practice-project.git``` 

2. Whenever you feel there's been changes to our **master**, just type

```git pull upstream master``` and that should pull the current code down from our **[master]** branch.

<hr>

## 4. Make a separate branch to work on
1. To always have a clean copy to work from, leave your copy's **[master]** branch alone and create a separate branch to work on by typing

```git checkout -b [yourname-dev]```

>_That branch syntax is preferred, but call it whatever you like_!

2. Now you're free to play around and make changes as you see fit

>IMPORTANT: Pull the main repo's **[master]** branch onto your machine everytime before you begin working on additions, ensuring your working with the latest changes.

<hr> 

## 5. Push your separate branch up to your GitHub account
1. Any serious changes should be committed and pushed to your online GitHub copy of the project repo by typing in the terminal

```git push -u origin [this branch name]```

The ```origin``` was already created when you cloned this repo and the ```-u``` is creating an upstream to that repo. 

2. Now whenever you want to push your changes, just type ```git push``` in that branch and it will do just that

<hr>

## 6. Make a pull request
This part usually trips people up, but it's easy

1. When you go back to your copy of the repo on GitHub, it will prompt you to **make a pull request** and allow you to add some message.

>IMPORTANT: Make sure your changes are going into to our **[dev]** branch and not the **[master]** branch.

2. When you click to make the pull request, it will take you to the main repo's copy to compare if you need to and confirm the request. If everything is good to go, you'll see green text confirming that a merge would be successful!

<hr>


### Conclusion
After this, members of the [**Git Assistance** team](https://github.com/GWGweb-projectgroup/practice-project#git-assistance) will review and accept the merge to the **[dev]** branch. I can help with any part of this process as I am also still learning git and GitHub so bear with me. All I ask is that you either refer to the resources mentioned earlier or get through this quick rundown for making a basic pul request.

#### most used git commands
* ```git pull upstream master```

* ```git checkout -b [yourname-dev]```

* ```git push -u origin [this branch name]```

* ```git push```

* On your branch separate from master, ```git merge master``` to copy the latest changes after you pull from the **_upstream_** _(main project repo)_

