let one_rgb = document.querySelector('.one-rgb')
let tow_rgb = document.querySelector('.tow-rgb')
let thrid_rgb = document.querySelector('.thrid-rgb')
let four_rgb = document.querySelector('.four-rgb')
let faive_rgb = document.querySelector('.faive-rgb')
let six_rgb = document.querySelector('.six-rgb')


let one = document.querySelector('.one')
let tow = document.querySelector('.tow')
let thrid = document.querySelector('.thrid')
let four = document.querySelector('.four')
let faive = document.querySelector('.faive')
let six = document.querySelector('.six')

let colors1 = document.querySelector('.colors1');



// RGB qiymatlarini boshlang'ich qiymatlari
let greenValue = 0; // Yashil (G)
let blueValue = 0; // Ko'k (B)
let incrementStep = 5; // Oshish qadami


// Rangni oshirish funksiyasi
colors1.addEventListener('click', () => {
    if (blueValue < 255) {
        // Agar ko'k qiymati 255 dan kichik bo'lsa, uni oshirish
        blueValue += incrementStep;
    } else if (greenValue < 255) {
        // Agar ko'k qiymati 255 bo'lsa va yashil qiymati 255 dan kichik bo'lsa
        blueValue = 0; // Ko'kni qayta 0 ga tushirish
        greenValue += incrementStep; // Yashilni oshirish
    } else {
        // Agar ikkalasi ham 255 ga to'lgan bo'lsa
        greenValue = 0; // Yashilni qayta 0 ga tushirish
        blueValue = 0; // Ko'kni qayta 0 ga tushirish
        incrementStep += 5; // Qadamni oshirish
    }

    // Rangni yangilash va RGB qiymatini ko'rsatish
    one.style.backgroundColor = `rgb(0, ${greenValue}, ${blueValue})`;
    one_rgb.textContent = `rgb(0, ${greenValue}, ${blueValue})`;
});

