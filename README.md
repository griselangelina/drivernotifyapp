Overview
=============

Projek ini terdiri dari 1 page dan 4 component
1 page tersebut berupa homepage dimana table dan modal ditampilkan.
4 component berupa modal,textarea ,button dan backdrop.
Backdrop adalah layer untuk menampilkan modal agar menampilkan efek blur pada sisi selain modal.
textarea dan button adalah component untuk emndukung modal.

alasan dibentuk sedemikian rupa agar tiap komponen menampilkan fungsi nya masing-masing.

Projek ini berfungsi untuk menampilkan data driver yang dibentuk dalam tabel dan jika 
driver tidak suspend maka user dapat menampilkan modal melalui button Notify.
Modal dapat diisi dengan text pada kolom textarea dan jika di send maka hasil inputan pada
textarea akan muncul di alert.

Extra Work
=================
1. Terdapat paging button jika data tiap page lebih dari yang ditentukan.
2. Menampilkan modal dan menyimpan message melalui redux agar memudahkan developer
 dalam menentukan nilai state
 
SetUp Instruction
===================
1. download file pada github https://github.com/griselangelina/drivernotifyapp
2. masuk ke folder frontendtest dengan cd frontendtest
3. pada layar console tulis perintah npm install
4. setelah install selesai jalankan apps dengan perintah npm start pada console
5. untuk build ketikan perintah npm run build
6. untuk test ketikan perintah npm test


