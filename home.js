
function display(id){
    console.log(id);
    var j=document.getElementById(id).children;
    var x= j[1].style.display;
    if(x=='block'){
        j[1].style.display="none";
    }else{
        j[1].style.display="block";
    } 
}

function show(e){
    e.preventDefault;
    var x=document.getElementById('v-nav');
    if(x.style.display=='none'){
        x.style.display='inline-block';
    }else{
        x.style.display='none';
    }
}
document.getElementById('option').addEventListener('click',show);
document.getElementById('option').addEventListener('click',NavShow);



function notification(l){
    var note=[
        '2018_End_SEM Results',
            'Tentative TimeTable',
            'Remidial List',
            'Interships..',
            'Placements',
            'Cultural Events',
            'Sports',
            'New Technologies Emerging..',
            'Artificial Intelligence'
    ];
    var k=l;
    for(let i=1;i<8;i++){
        document.getElementById('div_'+i).innerText=note[k];
        k+=1;
        if(k==note.length){
            k=0;
        }
    }
    setTimeout(notification,1000,((l+1)%note.length));
}
notification(0);


var arr=['img1.jpg','img2.jpg','img3.jpg'];
var k=0;
function slid(){
    k=(k+1)%arr.length;
    var l;
    document.getElementById('slide').setAttribute('src',arr[k]);
    if(k===0){
       l=3;
    }else{
        l=(k-1)%arr.length +1;
    }
    document.getElementById('l' + l).style.backgroundColor='';
    document.getElementById('l'+(k+1)).style.backgroundColor='black';
}
setInterval(slid,3000);


function incre(){
    // k=(k+1)%arr.length;
    // var l;
    // document.getElementById('slide').setAttribute('src',arr[k]);
    // if(k===0){
    //    l=3;
    // }else{
    //     l=(k-1)%arr.length +1;
    // }
    // document.getElementById('l' + l).style.backgroundColor='';
    // document.getElementById('l'+(k+1)).style.backgroundColor='black';
    console.log('called function.....');
}




function search(){
    var j=document.getElementById('entry').value.toLocaleLowerCase();
    var k;
    for(let i=1;i<12;i++){
        k=document.getElementById('v'+i).innerText.toLocaleLowerCase();
        if(k.indexOf(j)==-1){
            document.getElementById('v'+i).style.display='none';
        }else{
            document.getElementById('v'+i).style.display='inline-block';
        }
    }
}

setInterval(search,1000);

function NavShow(){
    if(window.innerWidth<600){
        var l=document.getElementsByTagName('aside')[0];
        var j=document.getElementById('nav');
        if(l.style.display!='none'){
          j.style.display='none';
        }else{
            j.style.display='block';
        }
    }
}