import React from 'react';

export default function Generate(props) {
    return  (<>
    <div id="p"></div>
    <div id="s"></div>
     <input type="text" id={"txtenter"+props.no} onKeyUp={hello}  style={{display: props.display}} autoFocus maxLength={4}></input>
    <span class="b"id={"b" + props.no} style={{display: props.display}}></span>
    <span class="c" id={"c" + props.no} style={{display: props.display}}></span>
    <br></br>
    </>);
}
let arr=["FADE","POLE","SWIM","REST"];
let entered=[];
let index=Math.floor(Math.random() * (arr.length - 0) + 0);
let globalval=arr[index];

function hello(event){
    let bo=false;
    let id = event.target.id;
    console.log(id);
    let value=event.target.value.toUpperCase();
    document.getElementById(event.target.id).value = value;
    if(event.key=="Enter"){
        var v=value;
        if(v.length<4){
        document.getElementById("p").innerHTML="enter a 4 digit value"
            return;
        }
      let un=unique(v);
      if(un){
        document.getElementById(id).value=" ";
        document.getElementById(id).focus();
      }
      else{
      let res=check(v,globalval);
      res=res.toUpperCase();
      let ch=id.charAt(id.length-1);
      document.getElementById("b"+ch).innerHTML =res.split(" ")[0];
      document.getElementById("c"+ch).innerHTML =res.split(" ")[1] ?? "";
      let nextId = parseInt(ch) + 1;
      let nextEle = (id.substring(0,id.length-1)) + nextId;
    
      if (nextId < 10) {
        
         if (res.split(" ")[0] !== "4B") {
            if(entered.includes(v)){
                document.getElementById("p").innerHTML="alredy exist,so please edit it";
                document.getElementById(id).focus();
                document.getElementById(id).value="";
            }
    
            else{
                entered.push(event.target.value);
                document.getElementById("p").innerHTML=" ";
            document.getElementById(nextEle).style.display = "inline";
            document.getElementById("b" + nextId).style.display = "inline";
            document.getElementById("c" + nextId).style.display = "inline";
            document.getElementById(nextEle).focus();
            document.getElementById(event.target.id).disabled = true;
            
            }
        } else {
            document.getElementById("p").innerHTML=" ";
            document.getElementById("s").innerHTML="WON!!";
            document.getElementById(event.target.id).disabled = true;
        }
      } else {
        document.getElementById("p").innerHTML="GAME OVER";
        document.getElementById(event.target.id).disabled = true;
      }
    }
    }
}
  

  function check( val1, val2){
    let s="";let c=0;let b=0;
    if(val1===val2){
      return "4b 0c";
    }
    for(let i=0;i<4;i++){
      for(let j=0;j<4;j++){
        if(val1.charAt(i)==val2.charAt(j)){
          if(i==j){
            b++;
          }
          else{
            c++;
        
          }
        }
      }
    }
    s+=b+"b "+c+"c";
    return s;
  }
  function unique(val){

    for(let i=0;i<4;i++){
        for(let j=i+1;j<4;j++){
            if(val.charAt(i)==val.charAt(j)){
                return true;
            }
        }
    }
    return false;
  }