# CONTRIBUTING

## Welcome!

Welcome to the **GWGweb-projectgroup** practice project repository, below are details on how to contribute to the project. If you have any questions, you can always ask by creating an **Issue** here in the repository.


Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Your First Contribution

### Getting started
If you are a first time contributor, acknowledge that a healthy understanding of the fundamentals of git and collaborating on Github are necessary and required. There are helpful tutorials on both in the [README](https://github.com/GWGweb-projectgroup/practice-project/blob/master/README.md) file.

Here are a couple of friendly tutorials to look over

* [Make A Pull Request](http://makeapullrequest.com/)
* [First Timers Only](http://www.firsttimersonly.com/)
* Free tutorial series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

### The workflow

>If you have time, also refer to the [GitHub Flow](https://guides.github.com/introduction/flow/) workflow, which is similar and recommended

1. Fork this repository **GWGweb-projectgroup/practice-project** into your own GitHub account

2. Clone that forked copy of the **practice-project** repo onto your local machine

3. On your machine, add an upstream to the main repo to help pull our master branch to your machine

```
git remote add upstream https://github.com/GWGweb-projectgroup/practice-project.git
```

Whenever you want to pull our latest changes

``` 
git pull upstream master 
```

4. Create a separate branch in your repository to begin the work, preferably using **yourname-dev** syntax, I would write

```
git checkout -b chrisvneal-dev
```

5. Push your commits to your GitHub repository

```
git push -u origin [name-of-your-branch]
```

The **-u** is to indicate that that branch will be an "upstream" branch: so that now whenever you want to push changes you can just type ```git push```

6. Make the pull request to the necessary branch on our main repo and the **Git Assistance** team will handle everything from there _(reviewing and merging code)_

<br>

> NOTE: Making a pull request for the **[master]** branch is ok for now, however when we begin adding more files and merging code, please pull request for the **[dev]** branch!

<br>

>NOTE: We will aslo be using the pull request feature as a means of discussing code issues during review and going over ideas. Even if you have a feature you want to discuss with others, make a pull request and explain your feature and we can take it from there!

<br>

## Code review process
Members of the **Git Assistance** team will be reviewing code to be merged into our branches, especially the master. If you have experience with this, [join the team](https://github.com/GWGweb-projectgroup/practice-project#project-team-sign-up)! 

As we all have varying time constraints, someone will get to your pull request and review in a timely manner. We are all here to help each other and get your code through!

After feedback has been given, we expect responses and any changes to be made within a few days from feedback. After that period, we may close the pull request if it isn't showing any activity or isn't something we can fix ourselves.

<br>

## Commit message & branch naming conventions

* We really don't have any conventions on commit messages, but I heard it was useful to use an "imperative" tone. <br><br>
"```add stylesheet link to index.html```" would be a good commit message if you added a link in the index.html file, for example. Other than, it really doesn't matter. Come up with a style that is meaningful to you.

* To reiterate branch naming, branches you create from **[master]** could be <br><br>
```yourname-dev``` <br><br>
Or whatever you like, just make sure you push to the right branch.

<hr>

Thank you for reviewing the CONTRIBUTING.md file, if you are a contributor and have feedback or issues, make a pull request with your changes or ask myself **@chrisvneal** using an Issue.










