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

let colors1 = document.querySelector('.one');
let colors2 = document.querySelector('.tow')


// RGB qiymatlarini boshlang'ich qiymatlari
let green = 0; // Yashil (G)
let blue = 0; // Ko'k (B)
let Step = 5; // Oshish qadami
let red = 0


// Rangni oshirish funksiyasi
colors1.addEventListener('click', () => {
    if (blue < 255) {
        // Agar ko'k qiymati 255 dan kichik bo'lsa, uni oshirish
        blue += Step;
    } else if (green < 255) {
        // Agar ko'k qiymati 255 bo'lsa va yashil qiymati 255 dan kichik bo'lsa
        blue = 0; // Ko'kni qayta 0 ga tushirish
        green += Step; // Yashilni oshirish
    } else {
        // Agar ikkalasi ham 255 ga to'lgan bo'lsa
        green = 0; // Yashilni qayta 0 ga tushirish
        blue = 0; // Ko'kni qayta 0 ga tushirish
        Step += 5; // Qadamni oshirish
    }

    // Rangni yangilash va RGB qiymatini ko'rsatish
    one.style.backgroundColor = `rgb(0, ${green}, ${blue})`;
    one_rgb.textContent = `rgb(0, ${green}, ${blue})`;
});
colors2.addEventListener('click', () => {
    if (blue < 255 > red) {
        
        // Agar ko'k qiymati 255 dan kichik bo'lsa, uni oshirish
        blue += Step;
        red += Step
    }else {
        // Agar ikkalasi ham 255 ga to'lgan bo'lsa
        red = 0; // red qayta 0 ga tushirish
        blue = 0; // Ko'kni qayta 0 ga tushirish
    }

    // Rangni yangilash va RGB qiymatini ko'rsatish
    tow.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
    tow_rgb.textContent = `rgb( ${red},0, ${blue})`;
});

