---
title: "Go Dep"
metaTitle: "Go Dep"
metaDescription: "Go Dep"
---

Go dependency management tool

## Notes

Solve library yang ada di local $GOPATH
Go dep belum mensupport untuk solve library yang ada di local $GOPATH. Baca [ini](https://github.com/golang/dep/issues/935)

Solusinya adalah:

1. Saat mendevelop hal yang berkaitan dengan library itu, pastikan commit versi yang ingin ditest dan push ke github, kemudian set di Gopkg.toml pada dependency library tersebut.
2. Ubah nilai `branch` agar menunjuk ke branch yang diinginkan.
3. Membuat symbolic link dari dependency yang diperlukan di folder vendor. Sebagai contoh jika bekerja di [github.com/wayanjimmy/account](http://github.com/wayanjimmy/account) ` sedangkan memerlukan dependency [github.com/wayanjimmy/payment](http://github.com/wayanjimmy/payment).

```
cd $GOPATH/src/github.com/wayanjimmy/account
cd vendor/github.com
rm -rf payment
ln -s $GOPATH/src/github.com/wayanjimmy/payment .
cd lontong
rm -rf vendor #pastikan folder vendor dihapus
```

## Links

- [Go](/coding/go)
- [https://github.com/GetStream/vg](https://github.com/GetStream/vg)

#golang
