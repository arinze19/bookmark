var social = document.querySelector('.social a');
var socialImage = document.querySelector('.social img');
var hello = document.querySelector('.hello');



                                //social media link change function

                                
setInterval(function(){
    var whatsapp = 'https://whatsapp.com/+2348138736226';
    var insta = 'https://instagram.com/colossusart.co';
    var whatsappImage = './images/whatsapp.png';
    var instaImage = './images/insta.png';
    if(social.href == insta){
        social.href = whatsapp;
        socialImage.src = whatsappImage;
    } else {
        social.href = insta;
        socialImage.src = instaImage;
    }
}, 8000)

                                //greeting function

var greeting = ['Hello.','Hej.','Salut.','Yo.','Howdy.','How far.','Hola.','Aye.','Buenos.','Nnoo.','Sannu.']


if(hello){
    setInterval(function(){
        hello.textContent = greeting[Math.round(Math.random() * greeting.length)];
    }, 1000);
}


//                         // gallery modal 

// var modal = document.getElementById('myModal');
// var image =  document.querySelectorAll('.gallery-item img')
// var modalImg =  document.getElementById('img01');
// var captionText =  document.getElementById('caption');
// var span =  document.getElementsByClassName('close')[0];

// image.each(function(){
//         var $this = $(this);
//         $this.on('click', function(){
//             modal.style.display = 'block';
//             modalImg.src = $this.src
//         })
//     })

// span.addEventListener('click', function(){
//     modal.style.display = 'none';
// })


// forEach(i => {
//     i.addEventListener('click', function(){
//     modal.style.display = 'block';
//     modalImg.src = this.src;
//     })
// })



