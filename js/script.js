// ini file javascript
console.log('Javascript telah terhubung');

//mengambil semua elemen yang dibutuhkan
let inputan = document.getElementById('inputan');
let outputan = document.getElementById('outputan');
let caraKalkulasi = document.getElementById('cara-kalkulasi');
let labelInputan = document.getElementsByClassName("inputan")[0];
let labelOutputan = document.getElementsByClassName('outputan')[0];
let caraKonversi = document.querySelector(".rumus p");
console.log(caraKonversi);

// Validasi dan konversi inputan
function konversi() {
    let labelSuhu = labelInputan.innerHTML;

    // Jika konversi dari celcius ke fahrenheit
    if (labelSuhu == "Celcius \u00B0C :") {
        let suhu = inputan.value;
        if (suhu == "") {
            alert("Anda belum memasukkan angka");
        } else if (suhu >= 100) {
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
        } else if (suhu <= 32 && suhu >= 212) {
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
        caraKalkulasi.value = `(${inputan.value}\u00B0 - 32) * 5 / 9 = ${outputan.value}`

        // bagian penjelasan
        caraKonversi.innerHTML = "S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 9/5) + 32"


    } else {
        labelInputan.innerHTML = "Celcius \u00B0C :";
        inputan.placeholder = "Masukkan suhu antara 0 sampai 100";
        labelOutputan.innerHTML = "Fahrenheit \u00B0F :";
        inputanBaru = inputan.value;
        inputan.value = outputan.value;
        outputan.value = inputanBaru;
        caraKalkulasi.value = inputan.value + "\u00B0 * (5/9) + 32 = " + outputan.value;
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