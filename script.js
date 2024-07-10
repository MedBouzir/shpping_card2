var btn_plus = document.querySelectorAll(".plus");
var btn_moin = document.querySelectorAll(".minus");
var price_index = document.querySelectorAll(".price");
var total_p = document.querySelector("#total");
var btn_delt = document.querySelectorAll(".delete");
var btn_like = document.querySelectorAll(".like");
var icon = document.querySelectorAll(".fas fa-heart");
var title = document.querySelector("h1");
console.log(icon);

//  -----------fun plus------------------
function buttom_p(e) {
  var click_buttom = e.target;
  var div = click_buttom.parentElement;
  var parag = div.querySelector("p");
  var value = parag.innerHTML;
  value++;
  parag.innerHTML = value;
  //   --- uniprice  -----
  var td_up = div.parentElement.parentElement;
  var uniprice_p = td_up.querySelector(".unitPrice");
  var uniprice = uniprice_p.innerHTML;
  //   --- price  -----
  var td_p = div.parentElement.parentElement;
  var price_p = td_p.querySelector(".price");
  var price = price_p.innerHTML;
  // ---------calcule----------
  price = value * uniprice;
  price_p.innerHTML = price;
  //  -------------------------

  //   console.log(price);
  summ_f();
}
//  fun  moin-----------------------
function buttom_m(e) {
  var click_buttom = e.target;
  var div = click_buttom.parentElement;
  var parag = div.querySelector("p");
  var value = parag.innerHTML;

  //   --- uniprice  -----
  var td_up = div.parentElement.parentElement;
  var uniprice_p = td_up.querySelector(".unitPrice");
  var uniprice = uniprice_p.innerHTML;
  //   --- price  -----
  var td_p = div.parentElement.parentElement;
  var price_p = td_p.querySelector(".price");
  var price = price_p.innerHTML;
  // ---------calcule----------
  if (value > 0) {
    value--;
    parag.innerHTML = value;
    price = value * uniprice;
    // console.log(price);
    price_p.innerHTML = price;
  }
  summ_f();
  //  -------------------------
}
// -------function delet----------
function buttom_d(e) {
  var click_buttom = e.target;
  var div = click_buttom.parentElement;
  var parag = div.parentElement.parentElement.parentElement.querySelector("p");
  var td_price_i = div.parentElement.parentElement.parentElement;
  var price_i = td_price_i.querySelector(".price");
  var price_i_n = Number(price_i.innerHTML);
  price_i.innerHTML = 0;

  //   console.log(price_i.innerHTML);

  var value = Number(parag.innerHTML);
  //   console.log(value);
  value = 0;
  //   parag_pr.innerHTML = 0;
  parag.innerHTML = 0;
  summ_f();
}

// -------buttom like function------------
function buttom_like(e) {
  var click_buttom = e.target;
  var div = click_buttom.parentElement;
  var icon = div.querySelector("i");
  console.log(icon);
  if (icon.style.color === "gray") {
    icon.style.color = "red";
  } else icon.style.color = "gray";
}

// -----------total----function-------
function summ_f() {
  sum = 0;
  for (let i = 0; i < price_index.length; i++) {
    sum = sum + Number(price_index[i].innerHTML);
    total_p.innerHTML = sum;
  }

  //   console.log(total_p);
}
// ----------------------------------------

for (let i = 0; i < btn_plus.length; i++) {
  btn_plus[i].addEventListener("click", buttom_p);
}
for (let i = 0; i < btn_moin.length; i++) {
  btn_moin[i].addEventListener("click", buttom_m);
}
for (let i = 0; i < btn_delt.length; i++) {
  btn_delt[i].addEventListener("click", buttom_d);
}
for (let i = 0; i < btn_like.length; i++) {
  btn_like[i].addEventListener("click", buttom_like);
}
