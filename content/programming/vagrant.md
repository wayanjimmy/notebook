---
title: "Vagrant"
metaTitle: "Vagrant"
metaDescription: "Vagrant"
---

Basic vagrant box using Ubuntu 16.04 as a base

```
Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/xenial64"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1524"
  end

end
```

-	[Install vagrant on MacOS](https://sourabhbajaj.com/mac-setup/Vagrant/README.html)
