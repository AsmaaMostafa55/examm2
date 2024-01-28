//loading screen
$(function(){
    $('.loader').fadeOut(1500,function(){
        $('.loading').fadeOut(1500,function(){
            $('body').css('overFlow','auto');
            // $('loading').remove();
        });
    });
   

})
//aside
// $('#sea').hide();
// $('#cat').hide();


$('#i').on("click",function(){
    $('.side').animate({width:'toggle'},1000);
    $('#i').hide();
    $('.non').show();
    $("#sea").addClass("w3-animate-left").show(1000,function(){

        $("#cat").addClass("w3-animate-left");
        $("#Are").addClass("w3-animate-left");
        $("#Ing").addClass("w3-animate-left");
        $(" #con").addClass("w3-animate-left");
    });
    

    // $('.non').animate({display:'toggle'});
    // $('#iiicon').animate({display:'toggle'});  
})
$('.non').on("click",function(){
    $('.side').animate({width:'toggle'},1000);
    $('.non').hide();
    $('#i').show();

    // $('#sea').delay(3000);
   

    // $("#sea").animate({top: "0px"});
 




// 
// $("#sea").addClass(className);('')
    // $('#sea').animate({height:"250px"},1000);
    // $('#cat').animate({height:'250px'},1000);

//  $('#sea').css('transform','translateY(0px)',function(){
   


//  });

    // $('#sea').fadeOut(100,function(){
    //     $('#sea').show();
    //     $('#cat').fadeOut(200,function(){
    //         $('#cat').show();
    //         $('#Are').fadeOut(300,function(){
    //             $('#Are').show();
    //             $('#Ing').fadeOut(400,function(){
    //                 $('#Ing').show();
    //                 $('#con').fadeOut(500,function(){
    //                     $('#con').show();
    //                 })
    //             })
    //         })

    //     })
    // })



})

var data2=[];
var data3=[];
var lengthh;
var ROW=document.getElementById("Row");

//cards body
 async function getdata(){
    var response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    var wdata2=await response.json();
    data2=wdata2;
    data3=data2.meals;
    // console.log(data3);
    // data3=Object.keys(wdata2);
    lengthh=(data2.meals).length;
   
// console.log(data2.meals);
// console.log(lengthh);
display();

}
// console.log(data3);


getdata();

function display(){
    var cartona='';
    for(var i=0;i<25;i++)
    {
        cartona+=`
        <div class="col-md-3   ">
    <div class="dd">
        <img src="${data3[i].strMealThumb}" alt="" class="w-100 ">
<div class="w-100 ite ">
    <h1 >${data3[i].strMeal}</h1>
</div>
    </div>
</div>
        `
    }
ROW.innerHTML=cartona;

}
//search page input name
// var inputname=document.getElementById("byna");
// console.log(inputname.value);
var RRRow=document.getElementById("RRow");
var data22=[];
var data33=[];

async function getdata2(su){
    var response1=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${su}`);
    var wdata2=await response1.json();
    data22=wdata2;
    data33=data22.meals;
    // console.log(data33[0].strMeal);

    displayy();


}

getdata2();


function displayy(){
        var cartona1='';
        for(var i=0;i<1;i++)
        {
            cartona1+=`
            <div class="col-md-3   ">
        <div class="dd">
            <img src="${data33[0].strMealThumb}" alt="" class="w-100 ">
    <div class="w-100 ite ">
        <h1 >${data33[0].strMeal}</h1>
    </div>
        </div>
    </div>
            `
        }
    
        RRRow.innerHTML=cartona1;
    
    }
    



const inputname = document.getElementById('byna');
// const result = document.getElementById('result');
var x;
var inputHandler = function(e) {
  x=e.target.value;
//   console.log( x);
 getdata2(x);
}
// console.log(x);
inputname.addEventListener('input', inputHandler); 



//search page input char


var RRRow=document.getElementById("RRow");
// var RRRRow=document.getElementById("RRow")
var data2x=[];
var data3x=[];

async function getdata5(){
    var response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
    var wxdata2=await response.json();
    data2x=wxdata2;
    // data3x=data2x.meals;
    console.log(data3x[0].strMeal);
    // data3=Object.keys(wdata2);
    // lengthh=(data2x).length;
   
// console.log(data2.meals);
// console.log(lengthh);
// display();
display5();
}



getdata5();
var z=document.getElementById("RRow");
function display5(){
    var cartonax='';
    for(var i=0;i<5;i++)
    {
        cartonax+=`
        <div class="col-md-3   ">
    <div class="dd">
        <img src="${data3x[i].strMealThumb}" alt="" class="w-100 ">
<div class="w-100 ite ">
    <h1 >${data3x[i].strMeal}</h1>
</div>
    </div>
</div>
        `
        console.log(cartonax)
    }
  
// ROW.innerHTML=cartona5;
z.innerHTML=cartonax;
}



// async function getdata3(su){
//     var response2=await fetch(`www.themealdb.com/api/json/v1/1/search.php?f=${su}`);
//     var wdata3=await response1.json();
//     data22=wdata2;
//     data33=data22.meals;
//     console.log(data33.);

//     displayy();


// }

// getdata2();


// function displayy(){
//         var cartona1='';
//         for(var i=0;i<1;i++)
//         {
//             cartona1+=`
//             <div class="col-md-3   ">
//         <div class="dd">
//             <img src="${data33[0].strMealThumb}" alt="" class="w-100 ">
//     <div class="w-100 ite ">
//         <h1 >${data33[0].strMeal}</h1>
//     </div>
//         </div>
//     </div>
//             `
//         }
    
//         RRRow.innerHTML=cartona1;
    
//     }
    



// const inputname = document.getElementById('byna');
// // const result = document.getElementById('result');
// var x;
// var inputHandler = function(e) {
//   x=e.target.value;
//   console.log( x);
//  getdata2(x);
// }
// // console.log(x);
// inputname.addEventListener('input', inputHandler); 




//category
