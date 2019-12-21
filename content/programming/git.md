Short git status

```
git status -s
```

Delete multiple branches using a pattern

```
gb | rg 'put-pattern-here-' | xargs git branch -D
```

Git Branches
---

Git commit contains pointer to the snapshot of the content you staged. This object also contains the author’s name and email address, the message that you typed, and pointers to the commit or commits that directly came before this commit (its parent or parents) : ::zero parents for the initial commit::, one parent for normal commit, and multiple parents for a commit that results from a merge of two or more branches.

Better Diff
---

[GitHub - so-fancy/diff-so-fancy: Good-lookin’ diffs. Actually… nah… The best-lookin’ diffs.](https://github.com/so-fancy/diff-so-fancy)

How to Write a Git Commit Message
---------------------------------

The 7 rules of great Git commit message
---

1.	Separate subject from body with a blank line
2.	Limit the subject line to 50 characters
3.	Capitalize the subject line
4.	Do not end the subject line with period
5.	Use the imperative mood in the subject line
6.	Wrap the body at 72 characters
7.	Use the body to explain what and why vs. how

Links
---

-	[How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
-	[Karma git commit message pattern](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)
