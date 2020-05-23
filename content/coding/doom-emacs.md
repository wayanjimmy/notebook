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

### Packages

After editing `~/.doom.d/packages.el` make sure run `doom refresh`

## Links

- [Doom emacs Gettings Stardted Macos](https://github.com/hlissner/doom-emacs/blob/develop/docs/getting_started.org#with-homebrew)
- [Zaiste Programming: Emacs Doom Episode](https://www.youtube.com/watch?v=rCMh7srOqvw)
- [Own Your Second Brain: Set Up org-roam on Your Own Machine](https://www.ianjones.us/blog/2020-05-05-doom-emacs/)
