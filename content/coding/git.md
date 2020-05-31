---
title: "Git"
metaTitle: "Git"
metaDescription: "Git"
---

Cara cepat dan mudah push ke current branch

According to git [push documentation](https://git-scm.com/docs/git-push#Documentation/git-push.txt-codegitpushoriginHEADcode) :
git push origin HEAD
A handy way to push the current branch to the same name on the remote.

Cara ganti username & email git

```bash
git config --global user.name "Wayan Jimmy"
git config --global user.email "jimmyeatcrab@gmail.com"
```

Cara menggabungkan beberapa commit menjadi 1 commit (squash merge)

```bash
git checkout master
git merge --squash bugfix
git commit
```

[https://stackoverflow.com/questions/5308816/how-to-use-git-merge-squash](https://stackoverflow.com/questions/5308816/how-to-use-git-merge-squash)

Error: bad index – Fatal: index file corrupt

```
rm -f .git/index
git reset
```

[https://stackoverflow.com/questions/1115854/how-to-resolve-error-bad-index-fatal-index-file-corrupt-when-using-git](https://stackoverflow.com/questions/1115854/how-to-resolve-error-bad-index-fatal-index-file-corrupt-when-using-git)

Short git status

```
git status -s
```

Delete multiple branches using a pattern

```
gb | rg 'put-pattern-here-' | xargs git branch -D
```

## Git Branches

Git commit contains pointer to the snapshot of the content you staged. This object also contains the author’s name and email address, the message that you typed, and pointers to the commit or commits that directly came before this commit (it's parent or parents)

> zero parents for the initial commit

one parent for normal commit, and multiple parents for a commit that results from a merge of two or more branches.

## Better Diff

[GitHub - so-fancy/diff-so-fancy: Good-lookin’ diffs. Actually… nah… The best-lookin’ diffs.](https://github.com/so-fancy/diff-so-fancy)

## How to Write a Git Commit Message

## The 7 rules of great Git commit message

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

## Git at 15: How Git Changed the Way We Code

But git approaches the task a bit differently than most Version Control Systems. Most systems store information as a list of file-based changes, so both the file and the changes made to the file over time is stored. Git, on the other hand, looks at data as _a series of snapshots on a miniature filesystem_.

## Links

- [Commit Lint](https://github.com/conventional-changelog/commitlint)
- [Git Explorer](https://gitexplorer.com/)
- [Gitlab Training](https://github.com/NETWAYS/gitlab-training)
- [Github gists from command line](https://github.com/danielecook/gg)
- [Forgit: using git interactively](https://github.com/wfxr/forgit)
- [Tech Talk: Linus Torvalds on git](https://www.youtube.com/watch?v=4XpnKHJAok8&feature=youtu.be)
- [Karma git commit message pattern](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [The mind behind Linux | Linus Torvalds](https://www.youtube.com/watch?v=o8NPllzkFhE)
- [Gitlet, your own version-control system](https://inst.eecs.berkeley.edu/~cs61b/fa15/hw/proj3/)
- [Git at 15: How Git Changed the Way We Code](https://thenewstack.io/git-at-15-how-git-changed-the-way-we-code/)
- **SHOULD READ** [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)
- [How the Internet will (one day) transform government](https://youtu.be/CEN4XNth61o?list=PLhXZp00uXBk7MyKJt_lABUHjJJAM78HZM)
- [https://twitter.com/flexdinesh/status/1215119465068675072](https://twitter.com/flexdinesh/status/1215119465068675072?s=20)
- ["LOTS of People Have IDEAS. Can You EXECUTE YOURS?" - Linus Torvalds - Top 10 Rules](https://www.youtube.com/watch?v=xZRo37r70lE)
- **SHOULD READ** [https://owenou.com/ten-things-you-didnt-know-git-and-github-could-do](https://owenou.com/ten-things-you-didnt-know-git-and-github-could-do/)

#git #github #gitlab #linus
