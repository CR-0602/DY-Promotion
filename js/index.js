const section = document.querySelectorAll('.section')
const html = document.querySelector('html')
const filpBtn = document.querySelector('.filp-btn')
const wrap = document.querySelector('.wrap')
const card = document.querySelector('.card')

let page = 0;
let lastPage = section.length - 1 ;

$('.filp-btn').on('click', function () {
    $('.card').toggleClass('flipped');
  });

window.addEventListener('wheel', function(e) {

    e.preventDefault();

    if(e.deltaY > 0){
        page++;
    }else if(e.deltaY < 0){
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;
    }
    
    wrap.style.top = page * -100 + 'vh';

  }, {passive: false}
)


var count = 1;
var num = 2;
const visual_init = function () {
    $('.down').bind("click", function () {
        var cnt = $(this).index();

        $('.img .slide .item.i' + count).addClass('active');
        $('.shape .img .obj' + count).addClass('active');
        $('.main_visual .right .over.a1').removeClass('active');
        $('.shape .img .slide .item .t.a1').removeClass('active');


        $('.main_visual .right .over.a' + num).addClass('active').siblings().removeClass('active');
        $('.shape .img .slide .item .t.a'+ num).addClass('active').parent(".item").siblings().children(".t").removeClass('active');
        $('.main_visual .bg >div.b' + count).addClass('active');

        if (count == 3 && num == 4) {
            $('.main_visual *').removeClass('active')
            $('.main_visual .right .over.a1').addClass('active');
            $('.shape .img .slide .item .t.a1').addClass('active');
            count = 1;
            num = 2;
        } else {
            count++;
            num++;

        }
    })
}
