var ww=[];
var zeft=[];var rtlf=[];
var Row=document.getElementById("Row");
async function getdatacat(){
    var rescat=await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    var datacat= await rescat.json();
ww=datacat;
console.log(ww)



    console.log(ww.categories[13]);
    // var rtlf=(Object.entries(ww.categories))  
    // console.log(rtlf[12]);

    // console.log(zeft)
    // console.log(zeft[0].categories.strCategory)
   // .strCategoryThumb
    // Object.keys(ww).strCategoryDescription
    // console.log(typeof(zeft));
    display95();
}
getdatacat();


function display95(){
    var cartonax='';
    for( let i=0;i<1;i++)
    {cartonax+=`
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[0].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[0].strCategory}</h2>
<h6 >${ww.categories[0]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[1].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[1].strCategory}</h2>
<h6 >${ww.categories[1]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[2].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[2].strCategory}</h2>
<h6 >${ww.categories[2]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[3].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[3].strCategory}</h2>
<h6 >${ww.categories[3]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[4].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[4].strCategory}</h2>
<h6 >${ww.categories[4]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[4].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[4].strCategory}</h2>
<h6 >${ww.categories[4]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[5].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[5].strCategory}</h2>
<h6 >${ww.categories[5]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[6].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[6].strCategory}</h2>
<h6 >${ww.categories[6]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[7].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[7].strCategory}</h2>
<h6 >${ww.categories[7]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[8].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[8].strCategory}</h2>
<h6 >${ww.categories[8]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[9].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[9].strCategory}</h2>
<h6 >${ww.categories[9]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[10].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[10].strCategory}</h2>
<h6 >${ww.categories[10]. strCategoryDescription}</h6>
</div>
    </div>
</div>
        <div class="col-md-3   ">
    <div class="dde">
        <img src="${ww.categories[11].strCategoryThumb}" alt="" class="w-100 ">
    
<div class="w-100 itee ">
<h2>${ww.categories[11].strCategory}</h2>
<h6 >${ww.categories[11]. strCategoryDescription}</h6>
</div>
    </div>
</div>


        `
        console.log(i);
    }
  
// ROW.innerHTML=cartona5;
Row.innerHTML=cartonax;
}





//cards body

// $('#i').on("click",function(){
//     $('.side').animate({width:'toggle'},1000);
//     $('#i').hide();
//     $('.non').show();
//     $("#sea").addClass("w3-animate-left").show(1000,function(){

//         $("#cat").addClass("w3-animate-left");
//         $("#Are").addClass("w3-animate-left");
//         $("#Ing").addClass("w3-animate-left");
//         $(" #con").addClass("w3-animate-left");
//     });
    

//     // $('.non').animate({display:'toggle'});
//     // $('#iiicon').animate({display:'toggle'});  
// })
// $('.non').on("click",function(){
//     $('.side').animate({width:'toggle'},1000);
//     $('.non').hide();
//     $('#i').show();

 

// })