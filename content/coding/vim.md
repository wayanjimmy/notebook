---
title: "Vim"
metaTitle: "Vim"
metaDescription: "Vim editor for mouse-free development"
---

Vim adalah salah satu editor penunjang produktivitas yang saya pelajari. Dengan vim saya bisa meminimalkan perpindahan tangan ke mouse dan sebaliknya. Belajar vim rasanya seperti belajar bahasa pemrograman, karena jika digunakan secara intensif, setiap harinya ada saja hal baru yang dipelajari.

Untuk mulai belajar saya sarankan untuk membaca buku ini [Practical Vim](https://pragprog.com/book/dnvim/practical-vim). Jika sudah lumayan terbiasa dengan vim, lanjut belajar [Tmux](/coding/tmux) melalui buku ini [Tmux 2](https://pragprog.com/book/bhtmux2/tmux-2).

Tmux & vim adalah pasangan yang bagus untuk "Productive Mouse-Free Development". Saat ini saya menggunakan [Neovim](https://neovim.io) karena saat itu, sebelum munculnya vim8, saya melihat developmentnya cukup intensif dibanding vim7 saat itu.

## Notes

- Edit file lain yang masih 1 direktori dengan file yang sedang diedit
  ```
  :e %:h/${filename}
  tabe %:h/${filename}
  ```
- Pindah buffer dengan [LeaderF](https://github.com/Yggdroot/LeaderF), LeaderF memungkin pindah buffer dengan fuzzy search mirip dengan `Ctrl + P` di fzf
  - `, + fb` untuk pindah-pindah buffer
  - Lebih detail cek di [neovim config](https://github.com/wayanjimmy/dotfiles/blob/master/.config/nvim/init.vim#L186-L189)

- Melihat petunjuk tentang arti key notation seperti <CR> (Carriage Return)
  - ketik `:help key-notation`

## Links

- [Tmux](/coding/tmux)
- [Neovim](https://neovim.io)
- [Tmux 2](https://pragprog.com/book/bhtmux2/tmux-2)
- [Vimcasts](http://vimcasts.org)
- [LeaderF](https://github.com/Yggdroot/LeaderF)
- [MasteringVim](https://twitter.com/masteringvim)
- [Vim Ctrlspace](https://github.com/vim-ctrlspace/vim-ctrlspace)
- [Practical Vim](https://pragprog.com/book/dnvim/practical-vim)
- [Neovim Terminal Emulator](https://thoughtbot.com/upcase/videos/neovims-terminal-emulator)
