var count = 10; //всего записей
var cnt = 5; //сколько отображаем сначала
var cnt_page = Math.ceil(count / cnt); //кол-во страниц

//выводим список страниц
var paginator = document.querySelector(".pagination");
var page = "";
for (var i = 0; i < cnt_page; i++) {
 

  page += "<div class='first_pagination'><span class='pagin_text f_' data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span></div>";
}
paginator.innerHTML = page;

//выводим первые записи {cnt}
var div_num = document.querySelectorAll(".num");
for (var i = 0; i < div_num.length; i++) {
  if (i < cnt) {
    div_num[i].style.display = "block";
  }
}

var main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");

//листаем
function pagination(event) {
  var e = event || window.event;
  var target = e.target;
  var id = target.id;
  
  if (target.tagName.toLowerCase() != "span") return;
  
  var num_ = id.substr(4);
  var data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  var j = 0;
  for (var i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";

  }
  for (var i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
    j++;
  }
}


$('#arrow').click(() => {
 $('.detal_info').animate({"opacity": 1}, 1200, function() {
   $('.top').click(() => {
 $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
  });
 })
});

$('#arrow2').click(() => {
  $('.detal_info').animate({"opacity": 1}, 1200, function() {
    $('.top').click(() => {
  $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
   });
  })
 });
 

 $('#arrow3').click(() => {
  $('.detal_info').animate({"opacity": 1}, 1200, function() {
    $('.top').click(() => {
  $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
   });
  })
 });
 
 $('#arrow4').click(() => {
   $('.detal_info').animate({"opacity": 1}, 1200, function() {
     $('.top').click(() => {
   $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
    });
   })
  });

  $('#arrow5').click(() => {
    $('.detal_info').animate({"opacity": 1}, 1200, function() {
      $('.top').click(() => {
    $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
     });
    })
   });
   
   $('#arrow6').click(() => {
     $('.detal_info').animate({"opacity": 1}, 1200, function() {
       $('.top').click(() => {
     $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
      });
     })
    });
    
   
    $('#arrow7').click(() => {
     $('.detal_info').animate({"opacity": 1}, 1200, function() {
       $('.top').click(() => {
     $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
      });
     })
    });
    
    $('#arrow8').click(() => {
      $('.detal_info').animate({"opacity": 1}, 1200, function() {
        $('.top').click(() => {
      $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
       });
      })
     });

     $('#arrow9').click(() => {
      $('.detal_info').animate({"opacity": 1}, 1200, function() {
        $('.top').click(() => {
      $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
       });
      })
     });
     
     $('#arrow10').click(() => {
       $('.detal_info').animate({"opacity": 1}, 1200, function() {
         $('.top').click(() => {
       $('.detal_info').animate({"height": 0}, 600).fadeOut(0)
        });
       })
      });
