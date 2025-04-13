// JAVASCRIPT DASAR
// VARIABEL (let, var, const)

// 1. let
let nama = 'Erika';
console.log(nama);  
{
    let nama = 'Inthumaktics';
    console.log(nama);
}
console.log(nama);

// 2. var
var input = 'Matkul';
console.log(input);
{
    var input = 'jadwal kuliah';
    console.log(input);
}
console.log(input)

// 3. const

const PRAK = '15 April 2025';
console.log(PRAK);
// PRAK = '20 April 2025'; tidak boleh dilakukan karena sudah konstan.

// 4. Kasus khusus tanpa keyword akan menjadi var
code = 'javascript dassar';
{
    code = 'CSS sudah selesai';
    console.log(code);
}
console.log(code)
