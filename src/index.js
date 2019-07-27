// 轮播图效果
var item = 0;
console.log($(".container li"));

$(".list li").hover(function () {
    item = $(this).index();
    //console.log(item);
    $(this).addClass('col').siblings().removeClass('col');
    $(".container ul li").eq(item).addClass('currImg').siblings().removeClass('currImg');

});

let autoPlay = ()=>{

    $(".list li a").eq(item).addClass('col').siblings().removeClass('col');
    $(".container li a").eq(item).addClass('currImg').siblings().removeClass('currImg');

    item++;
    //console.log(item);
    if(item >=7){
        item = 0;
    }
};

var timer = setInterval(autoPlay,3000);


$(".list").mouseover(function () {
    clearInterval(timer)
});
$(".list").mouseout(function () {
    timer = setInterval(autoPlay,3000)
});

// 显示电影
const URL = "http://127.0.0.1:1003/";
let page = 1, total = 1;
let current_movies = [];

$(document).ready(() => {
    // show the latest movies
    query({'opt': 'latest', 'limit': 50});

    $("#search").click(()=>{
        let keyword = $("#name").val();
        query({'opt': 'search', 'keyword': keyword, 'limit': 1000});  // search query
    });

    $(".type").on("click", (e)=>{
        query({'opt': 'category', 'type': e.target.text});  // category query
    });

    $("#lastpage").click(()=>{  // last page
        console.log("you clicked last page");
        if (page > 1) {
            page -= 1;
        }
        updatePage();
    });

    $("#nextpage").click(()=>{  // next page
        console.log("you clicked next page");
        if (page < total) {
            page += 1;
        }
        updatePage();
    });
});

function query(data) {
    $.ajax({
        'url': URL+"api",
        'type': "POST",
        'contentType': "text/plain",
        'data': JSON.stringify(data),
        'success': parseJson
    });
}

function parseJson(res) {
    let data = JSON.parse(res);
    current_movies = [];  // clear
    data.forEach(element => {
        current_movies.push({
            'id': element.id,
            'alt': element.alt,
            'year': element.year,
            'title': element.title,
            'rating': element.rating,
            'original_title': element.title,
            'directors': element.directors,
            'casts': element.casts,
            'genres': element.genres,
            'image': element.image
        });
    });
    page = 1;
    total = Math.ceil(current_movies.length/6);
    updatePage();
}

function updatePage() {
    $(".list-wp").html("");
    let front = 8 * (page-1);

    for (let i=front; i<current_movies.length && i<front+8; i++) {
        let ele = current_movies[i];
        $(".list-wp").append(
            `<div class="item" id=${ele.id} style="float: left; margin-left: 30px">
               
                <img src=${ele.image} alt=${ele.alt}>
                <p>
                    ${ele.original_title} 
                    ${ele.rating}
                </p>
            </div>`);
    }

    $(".item img, .item p").on("click", (e)=>{
        let id = e.target.parentElement.id;
        // movie info query
        window.location.href = 'info.html?id='+id;
    });

    $("#page").html(page);
    $("#total").html(total);
}