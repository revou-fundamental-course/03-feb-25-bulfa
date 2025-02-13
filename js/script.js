// ini file javascript
console.log('Javascript telah terhubung');

//mengambil semua elemen yang dibutuhkan
let inputan = document.getElementById('inputan');
let outputan = document.getElementById('outputan');
let caraKalkulasi = document.getElementById('cara-kalkulasi');
let labelInputan = document.getElementsByClassName("inputan")[0];
let labelOutputan = document.getElementsByClassName('outputan')[0];
let penjelasan = document.querySelector('.penjelasan');
let rumus = document.querySelector('.rumus');
console.log(rumus);

// Validasi dan konversi inputan
function konversi() {
    let labelSuhu = labelInputan.innerHTML;

    // Jika konversi dari celcius ke fahrenheit
    if (labelSuhu == "Celcius \u00B0C :") {
        let suhu = inputan.value;
        if (suhu == "") {
            alert("Anda belum memasukkan angka");
        } else if (suhu > 100) {
            alert("Anda memasukkan angka tidak sesuai dengan batasannya");
            inputan.value = "";
        } else {
            outputan.value = rumusKeFahrenheit(suhu);
            caraKalkulasi.value = suhu + "\u00B0 * 5 / 9 + 32 = " + outputan.value;
        }
    } 
    
    // Jika konversi dari fahrenheit ke celcius
    else if (labelSuhu == "Fahrenheit \u00B0F :") {
        let suhu = inputan.value;
        if (suhu == "") {
            alert("Anda belum memasukkan angka");
        } else if (suhu < 32 || suhu > 212) {
            alert("Anda memasukkan angka tidak sesuai dengan batasannya");
            inputan.value = "";
        } else {
            outputan.value = rumusKeCelcius(suhu);
            caraKalkulasi.value = `(${suhu} - 32) * 5 / 9 = ${outputan.value}`
        }
    }

}

//Tombol reset
function ulang() {
    inputan.value = '';
    outputan.value = '';
    caraKalkulasi.value = '';
}

//Tombol reverse
//Menukar fungsi tombol, hasil konversi saat ini dan tampilan cara konversi
function tukar() {
    let labelSuhu = labelInputan.innerHTML;
    let inputanBaru = "";
    if (labelSuhu == "Celcius \u00B0C :") {
        // bagian form
        labelInputan.innerHTML = "Fahrenheit \u00B0F :";
        inputan.placeholder = "Masukkan suhu antara 32 sampai 212";
        labelOutputan.innerHTML = "Celcius \u00B0C :";
        inputanBaru = inputan.value;
        inputan.value = outputan.value;
        outputan.value = inputanBaru;
        if (inputan.value != "") {
            caraKalkulasi.value = `(${inputan.value}\u00B0 - 32) * 5 / 9 = ${outputan.value}`
        }

        // bagian penjelasan
        penjelasan.innerHTML = "<h3>Cara Konversi Dari Fahrenheit (&deg;F)  ke Celcius (&deg;C)</h3><hr><p>Suhu <span class='simbol'>S</span> dalam derajat Celcius (&deg;C) sama dengan suhu <span class='simbol'>S</span> dalam derajat Fahrenheit (&deg;F) dikurangi <span class='angka'>32</span> dulu, lalu kali <span class='angka'>5/9</span>.</p>";

        //bagian rumus
        rumus.innerHTML = `<p>
                    S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) * 5/9
                </p>
                <p>
                    atau
                </p>
                <p>
                    S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) * 5.6
                </p>`;

    } else {
        //bagian form
        labelInputan.innerHTML = "Celcius \u00B0C :";
        inputan.placeholder = "Masukkan suhu antara 0 sampai 100";
        labelOutputan.innerHTML = "Fahrenheit \u00B0F :";
        inputanBaru = inputan.value;
        inputan.value = outputan.value;
        outputan.value = inputanBaru;
        if (inputan.value != "") {
            caraKalkulasi.value = inputan.value + "\u00B0 * (5/9) + 32 = " + outputan.value;
        }

        // bagian penjelasan
        penjelasan.innerHTML = "<h3>Cara Konversi Dari Celcius (&deg;C) ke Fahrenheit (&deg;F)</h3><hr><p>Suhu <span class='simbol'>S</span> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <span class='simbol'>S</span> dalam derajat Celcius (&deg;C) kali <span class='angka'>9/5</span> tambah <span class='angka'>32</span>.</p>";

        //bagian rumus
        rumus.innerHTML = "<div class='rumus'>               <p>S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 9/5) + 32</p><p>atau</p><p>S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 1.8) + 32</p></div>"
    }
}


// Rumus dari celcius ke fahrenheit 
function rumusKeFahrenheit(c) {
    return c * 9 / 5 + 32;
}

// Rumus dari fahrenheit
function rumusKeCelcius(f) {
    return (f - 32) * 5 / 9;
}