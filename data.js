const nama = "muhammad hendry irawan ramadhan";
let usia = 18;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia <= 18) {
        generasi = "GENERASI ANAK MUDA"
    } 
    else if (usia > 18 && usia < 30) {
        generasi = "GENERASI DEWASA"
    }
    else if (usia < 10 && usia >= 1){
        generasi = "GENERASI BOCIL"
    }
    else if (usia > 30) {
        generasi = "GENERASI MBAH MBAH"
    }
    else {
        console.log('APA YAAA')
    }
    return biodata.innerHTML =generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();