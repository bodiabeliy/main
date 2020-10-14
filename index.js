


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

function Click() {
  var pop_up = document.getElementById('popup');
  pop_up.classList.add('animate__animated', 'animate__backInDown');
  pop_up.style.setProperty('--animate-duration', '1s');
}

function Close() {
  var pop_up = document.getElementById('popup');
  pop_up.classList.add('animate__animated', 'animate__fadeOutUp');
  pop_up.style.setProperty('--animate-duration', '.5s');
}


function InputSearch() {
  /*
  var searching = document.getElementById('search').value;
  var position = document.getElementById("6").innerHTML;
  if (searching === position) {
    var one = document.querySelector('.one')
    one.style.display = "none"
  }
  */
  var searching = document.getElementById('search') //значение инпута
  var filter = searching.value
  var all = document.querySelector('.page')  //список всех должностей
  var span, div = document.querySelector('.content-container').textContent;
    var div_num = document.querySelectorAll(".num");

    for (var i = 0; i < div_num.length; i++) {
      span = div_num[i].querySelectorAll('.content-container')[0]
      
      var city = document.querySelectorAll('.city')[i]
      var ex =  document.querySelectorAll('.exp')[i]
      sal =  document.querySelectorAll('.sal')[0]
      console.log(ex);
      if (span.innerHTML.indexOf(filter) > -1 ) {
        span.style.display = ""
      }
      else {
        span.style.display = "none"
      }
    }


}

