# Data Model

#### Party

Sebuah entitas Person bisa tergabung pada lebih dari satu perusahaan
Maka akan lebih back jika di buat perpanjangan entitas yang dapat disebut dengan Party
Seperti diterangkan pada buku Martin Fowler

![Address Book](001-address-book.png)

Diagram diatas dapat di-generalisasi lagi menjadi seperti ini

![Address Book](002-address-book.png)

Kesimpulan yang bisa saya ambil berdasarkan gambar diatas antara lain
* Sebuah party bisa memiliki 0 atau 1 Nomor telepon
* Sebuah party bisa memiliki 0 atau 1 Alamat
* Sebuah party bisa memiliki 0 atau 1 Email
* Sebuah party bisa memiliki 0 atau 1 Person
* Sebuah party bisa memiliki 0 atau 1 Organisasi

Menurut saya ketika di gambarkan dalam bentuk Diagram Database menjadi seperti dibawah

![Database](003-database-address-book.png)



