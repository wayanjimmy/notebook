---
title: "Doom Emacs"
metaTitle: "Doom Emacs"
metaDescription: "Exploring doom emacs"
---

> Think like Emacs a programmable text user interface -- Zaiste

## Install

1. Install `emacs-plus`

```
brew tap d12frosted/emacs-plus
brew install emacs-plus
ln -s /usr/local/opt/emacs-plus/Emacs.app /Applications/Emacs.app
```

2. start service `emacs-plus` dan restart

## Before you doom your self

1. Don't forget to run `doom sync` then restart Emacs, after modifying `~/.doom.d/init.el` or `~/.doom.d/packages.el`
1. If something goes wrong run `doom doctor`
1. Use `doom upgrade` to update Doom
1. Access Doom's documentation from withtin emacs via `SPC h D` or `C-h D` (or `M-x doom/help`)

## Notes

### Keys

- `SPC` - space
- `M-x` (pronounced meta x) - command + X
- `SPC f .` or `SPC .` - search in directory
- `SPC p p` - swith between projects
- `SPC f p` - quickly edit doom's config
- `SPC f r` - open recent
  e
- `SPC f R` - open recently visited files on context the current project
- `SPC b b` or `SPC ,`- switch between buffers
- `SPC SPC` - file search within a project
- `<s` followed by TAB - insert code snippets on org mode

### Packages

After editing `~/.doom.d/packages.el` make sure run `doom refresh`

## Links

- [OrgMode Tutorial](https://www.youtube.com/playlist?list=PLVtKhBrRV_ZkPnBtt_TD1Cs9PJlU0IIdE)
- [Doom Emacs Search](https://www.reddit.com/r/emacs/comments/gr72by/how_do_you_guys_refine_search_results_doom_emacs/)
- [Getting Started Org Mode](https://www.youtube.com/watch?v=SzA2YODtgK4)
- [Dired rename multiple files](http://pragmaticemacs.com/emacs/dired-rename-multiple-files/)
- [Doom emacs Gettings Stardted Macos](https://github.com/hlissner/doom-emacs/blob/develop/docs/getting_started.org#with-homebrew)
- [Zaiste Programming: Emacs Doom Episode](https://www.youtube.com/playlist?list=PLhXZp00uXBk4np17N39WvB80zgxlZfVwj)
- [Full IDE features support for golang in Doom Emacs](https://www.reddit.com/r/emacs/comments/gq6jz2/full_ide_features_support_for_golang_in_doom_emacs/)
- [Full IDE features support for golang in Doom Emacs](https://stackoverflow.com/questions/61998389/full-ide-features-support-for-golang-in-doom-emacs)
- [Own Your Second Brain: Set Up org-roam on Your Own Machine](https://www.ianjones.us/blog/2020-05-05-doom-emacs/)
