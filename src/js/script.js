// Mobil Görünümde Drawer'ı açıp kapatma kontrolü

const drawerMenu = document.getElementById('drawerMenu');
const drawerMenuButton = document.getElementById('drawerMenuButton');

drawerMenuButton.addEventListener('click', () => {
    drawerMenu.classList.toggle('hidden');
});





// Üretim Sayfasındaki Image No kontrolü

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const imageNo = document.getElementById('imageNo');

image1.addEventListener('click',()=>{
    imageNo.innerHTML='01';
})
image2.addEventListener('click',()=>{
    imageNo.innerHTML='02';
})
image3.addEventListener('click',()=>{
    imageNo.innerHTML='03';
})
image4.addEventListener('click',()=>{
    imageNo.innerHTML='04';
})
image5.addEventListener('click',()=>{
    imageNo.innerHTML='05';
})


// "Devamı" Butonuna tıklandığında gerçekleşen işlemler

const nextButton1 = document.getElementById('nextButton1');
const next1_1 = document.getElementById('next1_1');
const next1_2 = document.getElementById('next1_2');

nextButton1.addEventListener('click', ()=>{
    nextButton1.classList.add('hidden');
    next1_1.classList.remove('hidden')
    next1_2.classList.remove('hidden')
    hiddenButton1.classList.remove('hidden')

})

const nextButton2 = document.getElementById('nextButton2');
const next2_1 = document.getElementById('next2_1');
const next2_2 = document.getElementById('next2_2');

nextButton2.addEventListener('click', ()=>{
    nextButton2.classList.add('hidden');
    next2_1.classList.remove('hidden')
    hiddenButton2.classList.remove('hidden')

})



// "Gizle" Butonuna tıklandığında gerçekleşen işlemler
const hiddenButton1 = document.getElementById('hiddenButton1');
const hiddenButton2 = document.getElementById('hiddenButton2');

hiddenButton1.addEventListener('click', ()=>{
    nextButton1.classList.remove('hidden');
    hiddenButton1.classList.add('hidden')
    next1_1.classList.add('hidden')
    next1_2.classList.add('hidden')

})

hiddenButton2.addEventListener('click', ()=>{
    nextButton2.classList.remove('hidden');
    hiddenButton2.classList.add('hidden')
    next2_1.classList.add('hidden')

})




document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.custom-card');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const mainCardTexts = document.getElementById('mainCard').querySelectorAll('.update');
      const cardTexts = card.querySelectorAll('.card-text');

      mainCardTexts.forEach((mainText, index) => {
        mainText.textContent = cardTexts[index].textContent;
      });


    });
  });
});


