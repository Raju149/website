
var set=0;

function validity(){
    var ptrn=/^[a-zA-Z]*$/
    if(name('fn')||name('ln')){
        set=1;
        setTimeout(timeOut,3000);
        return false;
    }
    function name(d){
        var fn=document.getElementById(d).value;
        var dict={'fn':1,'ln':2,'mn':3}
        var num=dict[d];
        var length=fn.length;
        if(num==3){
            length=10;
        }
        if(length<3 || !(ptrn.test(fn))){
            document.getElementById(d).style.border="3px solid red";
            document.getElementById('inv'+num).innerText='invalid data !!!';
            document.getElementById('inv'+num).style.color='red';
            setTimeout(timeOut,3000);
            return true;
        }
    }
    var selection=document.getElementById('sel').value;
    var ph=document.getElementById('phn').value;
    if(selection=='India'){
        ptrn=/^\d{10}$/
        
    }else if(selection=='USA'){
        ptrn=/^\d{3}-\d{3}-\d{4}$/
    }
    if(!ptrn.test(ph)){
        document.getElementById('phn').style.border="3px solid red";
        setTimeout(timeOut,3000);
        return false;
    }
    // var idd='c';
    // var count=0;
    // for(let i=1;i<6;i++){
    //     if(document.getElementById(idd+i).checked){
    //         count+=1;
    //     }
    // }
    // if(count<2){
    //     document.getElementById('inv3').innerText='At least to Hobbies have to be Selected !!!';
    //     document.getElementById('inv3').style.color='red';
    //     setTimeout(timeOut,3000);
    //     return false;
    // }
    

    var k=document.getElementById('im').files[0].size; 
    if((k/1024)>50){
        console.log("file size is tooo large");
        return false;
    }
    var j=document.getElementById('agree').checked;
    console.log('Checking.. '+j)
    if(j==false){
        return false;
    }
    /*fn=document.getElementById('ln').value;
    if(fn.length<3 || !(ptrn.test(fn))){
        document.getElementById('ln').style.border="3px solid red";
        document.getElementById('inv2').innerText='invalid data !!!';
        document.getElementById('inv2').style.color='red';
        return false;
    }
    fn=document.getElementById('mn').value;
    if(fn.length<3 || !(ptrn.test(fn))){
        document.getElementById('ln').style.border="3px solid red";
        document.getElementById('inv2').innerText='invalid data !!!';
        document.getElementById('inv2').style.color='red';
        return false;
    } */
    return true;
}

function restore(){
    if(confirm("Continue to Reset Form....?")){
        document.getElementById('details').reset();
    }
}

function Agecalc(){
    document.getElementById('fln').placeholder=document.getElementById('fn').value+document.getElementById('ln').value;
    var db=document.getElementById('dob').value;
    if(db!=''){
        db=new Date(db);
        var k=new Date();
        db=new Date(k-db);
        document.getElementById('age').placeholder=(db.getDay()+1)+'Days'+(db.getMonth()+1) +'Months'+(db.getFullYear()-1970)+'years';
        if((db.getFullYear()-1970)<0){
            document.getElementById('inv3').innerText='Not born.Check your DOB';
            document.getElementById('inv3').style.color='red';
            setTimeout(timeOut,3000);
        }
    }
    // setTimeout(Agecalc,1000);
}
// Agecalc();
function validate(){
    var mail=document.getElementById('mail').innerText;
    if(mail==''){
        var j=/^[a-z_0-9]*@[a-z]*(\.[a-z]*)?\.[a-z]*$/i
        while(1){
            mail=prompt("Enter Your email Id:");
            if(j.test(mail)){
                alert("Your Mail has been taken");
                document.getElementById('mail').innerText=mail;             
                break;
            }
        }
    }
}

//validate();

function timeOut(){
        var arr=['*','*','',' ']
        for(let i=1;i<4;i++){
            document.getElementById('inv'+i).innerText =arr[i-1];
        }
        set=0;
}

function dis(){
    var s=document.getElementById('show').src;
var ptr=/[a-z]*.png$/;
var path=s.split(ptr)[0];
    var j=s.match(ptr);
    
    if(j=='show.png'){
        j='unshow.png';
        document.getElementById('pswd').type='text';
    }else if(j=='unshow.png'){
        j='show.png';
        document.getElementById('pswd').type='password';
    }
    document.getElementById('show').src=path+j;
}


function add(){
    var text=document.getElementById('hobby').value;
    var l=document.createElement('li');
    l.innerHTML=text+"<button class='del'>X</button>"
    document.getElementById('lists').append(l);
}

document.getElementById('lists').addEventListener('click',del,false);

function del(e){
  if(e.target.classList.contains('del')){
      e.target.parentElement.remove();
  }
}

function reFresh(){
    var j=document.getElementById('mail');
    if(j.innerText=='Login'){
        console.log('executed..');
        j.innerText='Register';
        document.getElementById('details').style.display='none';
        document.getElementById('info').style.display='inline-block';
    }else{
        console.log('executed..1');
        j.innerText='Login';
        document.getElementById('details').style.display='inline-block';
        document.getElementById('info').style.display='none';
    }
}
