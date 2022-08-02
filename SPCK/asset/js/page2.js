//== INIT ==//
let index = 1;
const msg__err = document.getElementById('msg__err');

// Main item
const main_list = document.getElementsByClassName('main-sell-name');
const main_img  = document.getElementsByClassName('sell-item-img')[0];
const main_name = document.getElementsByClassName('sell-item-name')[0];
const main_cost = document.getElementsByClassName('sell-item-cost')[0];
const main_left = document.getElementsByClassName('sell-item-cost')[0];
const main_text = document.getElementsByClassName('sell-item-explain')[0];

// Item name
const name1 = document.getElementById('sell-item-1').getElementsByClassName('sell-item-name')[0];
const name2 = document.getElementById('sell-item-2').getElementsByClassName('sell-item-name')[0];
const name3 = document.getElementById('sell-item-3').getElementsByClassName('sell-item-name')[0];
const name4 = document.getElementById('sell-item-4').getElementsByClassName('sell-item-name')[0];
const name5 = document.getElementById('sell-item-5').getElementsByClassName('sell-item-name')[0];
const name  = [name1,name2,name3,name4,name5];

// Item cost
const cost1 = document.getElementById('sell-item-1').getElementsByClassName('sell-item-cost')[0];
const cost2 = document.getElementById('sell-item-2').getElementsByClassName('sell-item-cost')[0];
const cost3 = document.getElementById('sell-item-3').getElementsByClassName('sell-item-cost')[0];
const cost4 = document.getElementById('sell-item-4').getElementsByClassName('sell-item-cost')[0];
const cost5 = document.getElementById('sell-item-5').getElementsByClassName('sell-item-cost')[0];
const cost = [cost1,cost2,cost3,cost4,cost5];

// Item left
const left1 = document.getElementById('sell-item-1').getElementsByClassName('sell-item-left')[0];
const left2 = document.getElementById('sell-item-2').getElementsByClassName('sell-item-left')[0];
const left3 = document.getElementById('sell-item-3').getElementsByClassName('sell-item-left')[0];
const left4 = document.getElementById('sell-item-4').getElementsByClassName('sell-item-left')[0];
const left5 = document.getElementById('sell-item-5').getElementsByClassName('sell-item-left')[0];
const left = [left1,left2,left3,left4,left5];

// Item explain
const text1 = document.getElementById('sell-item-1').getElementsByClassName('sell-item-explain')[0];
const text2 = document.getElementById('sell-item-2').getElementsByClassName('sell-item-explain')[0];
const text3 = document.getElementById('sell-item-3').getElementsByClassName('sell-item-explain')[0];
const text4 = document.getElementById('sell-item-4').getElementsByClassName('sell-item-explain')[0];
const text5 = document.getElementById('sell-item-5').getElementsByClassName('sell-item-explain')[0];
const text = [text1,text2,text3,text4,text5];

// Item img
const img=[
    "./asset/img/ticket/Disney-land.png",
    "./asset/img/ticket/rainbow-moutain.png",
    "./asset/img/ticket/Ang-co-vat.png",
    "./asset/img/ticket/pike.png",
    "./asset/img/ticket/Tree.png"
]

// Run
change();

//== Function ==//
// Change
function change() {
    main_name.innerHTML=name[index-1].innerHTML;
    main_cost.innerHTML=cost[index-1].innerHTML;
    main_left.innerHTML=left[index-1].innerHTML;
    main_text.innerHTML=text[index-1].innerHTML;
    main_img.src = img[index-1];
    if (left[index-1].innerHTML != "Còn lại: 0"){
        msg__err.innerHTML = "";
    }
    window.location.href = '#top';
}
// Add to cart
function addToCart() {
    if (left[index-1].innerHTML != "Còn lại: 0"){
        let text = left[index-1].innerHTML.slice(9,11);
        left[index-1].innerHTML = "Còn lại: "
        left[index-1].innerHTML += parseInt(text)-1;
        msg__err.innerHTML = "";
    }
    else{
        msg__err.innerHTML = "Không còn hàng";
    }
    change();
}