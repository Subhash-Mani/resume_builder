
 
  
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
//   import { getFirestore,addDoc ,collection, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
 

//   const firebaseConfig = {
//     apiKey: "AIzaSyC01qYXTX2pCptvC1TWQR3RVCTa6zs58JY",
//     authDomain: "resumebuilder-244be.firebaseapp.com",
//     projectId: "resumebuilder-244be",
//     storageBucket: "resumebuilder-244be.appspot.com",
//     messagingSenderId: "311583133777",
//     appId: "1:311583133777:web:4b420881d6e6e4454ba870",
//     measurementId: "G-BPMK8BHBGF"
//   };

  
//   const app = initializeApp(firebaseConfig);
//   const db= getFirestore(app)
  

// async function add () {
//   let reg_name=document.getElementById("name").value
//   let reg_email=document.getElementById("mail").value
//   let reg_password=document.getElementById("pass").value


// await addDoc (collection(db,"register"),{
//    name:reg_name,
//    email:reg_email,
//    password:reg_password


// })}
// window.add=add

// ----------------------------------------------------------------------------------------------------

if(!localStorage.getItem('user')){
        localStorage.setItem('user',JSON.stringify([]))
    }
    let userlist=JSON.parse(localStorage.getItem("user"))



// ------------------------------------------------------------------------------    
// ---register--------------------------------------------------------------



function  add(){
        let username =document.getElementById("name").value
        let usermail =document.getElementById("mail").value
        let userpassword =document.getElementById("pass").value


        let re=false
        let reg=JSON.parse(localStorage.getItem("user"))
       


    for(let e of reg){
         if (e.email==usermail){
            re=true}
          }
          if(re==true){
        alert(" already registered") 
        }
        else if(re==false || reg==""){
          let  object={}
          object.name=username
          object.email=usermail
          object.password=userpassword
          userlist.push(object)
          
          
          localStorage.setItem("user",JSON.stringify(userlist))
          
  
          document.getElementById("name").value=""
          document.getElementById("mail").value=""
          document.getElementById("pass").value=""


          alert("Register sucessfully")
          window.location="index.html"
     
        }
    
      }


// ----------------------------------------------------------------------------------------------------------------------     
// ---login--------------------------------------------------------------------------------------------------------------



function create(){
    
    email=document.getElementById("usermail").value
    password=document.getElementById("userpassword").value
    let a=false
    for(let each of userlist){
         if (each.email==email && each.password==password){
            a=true
            } }
        if(a==true){
          localStorage.setItem("signin","true")
          alert(" login successfully") 
            window.location="create.html"
        }
        
       
        else if(a==false){alert("invalid")}


      localStorage.setItem('usermail',email)

        document.getElementById("usermail").value=""
        document.getElementById("userpassword").value=""


     
 }
  
function register(){
  window.location="register.html"
}

// ------------------------------------------------------------------------------------------------------------------------
// -----resumecreate----------------------------------------------------------------------------------------------------------------

let adminid = localStorage.getItem('usermail')
let resume ={ personaldetails:{languages:[]},skills:[],educationdetails:[],projects:[],workexperience:[]
 }
  resume.admin=adminid

//  --name and personaldetails------------------------------------------------------------------

function file(e,key,pkey,){
    if(pkey){
  resume[pkey][key] = e.value;}
  
    else{
  resume [key]=e.value;}
  
}

// ---skills and language---------------------------------------------------------------------


function add1(id,key,pkey){
    if(pkey){
    let languages=document.getElementById(id).value
    resume[pkey][key].push(languages)
    document.getElementById(id).value=""
    
  }
  else{
    let skills=document.getElementById(id).value
    resume[key].push(skills)
    document.getElementById(id).value=""
    
    }
    tskill(key,pkey)
  }
  // --skilltable----------------------------------------------------------------------------------------------------------
 
  function tskill(keyname,pkeyname){
    let list=""
     if(pkeyname){
      for(let each in resume[pkeyname][keyname]){
    
      list=list+`<tr>
      <td>${resume[pkeyname][keyname][each]}</td>
      <td> <button onclick="del(${each},'${keyname}','${pkeyname}')" >delete</button></td>
       </tr>`
    }
    
    document.getElementById("stable1").innerHTML=list
    }
  
    else{
    for(let each in resume[keyname]){
    
    list=list+`<tr>
    <td>${resume[keyname][each]}</td>
    <td><button onclick="del(${each},'${keyname}')" >delete</button></td>
    </tr>`
   }
  document.getElementById("stable").innerHTML=list
  }}

  // --skill delete--------------------------------------------------------------------------------------------

  function del(index,keyname,pkeyname){
    let value=[]
    if(pkeyname){
      for(let e in resume[pkeyname][keyname]){
        if(e!=index){
          value.push(resume[pkeyname][keyname][e])
           }
      }
      resume[pkeyname][keyname]=value
    }

    else {
    for(let e in resume[keyname]){
      if(e!=index){
        value.push(resume[keyname][e])
         }
    }
    resume[keyname]=value
  }
  tskill(keyname,pkeyname)
} 
  
     

// --education------------------------------------------------------------------------------------------------------------------------

  function add2(key,id,firstparam, secondparam, thirdparam, fourthparam) {
    let firstvalue = document.getElementById(firstparam)
    let secondvalue = document.getElementById(secondparam)
    let thirdvalue = document.getElementById(thirdparam)
    let fourthvalue = document.getElementById(fourthparam)
    let object = {}
    if (fourthparam) {
      object[firstparam] = firstvalue.value
      object[secondparam] = secondvalue.value
      object[thirdparam] = thirdvalue.value
      object[fourthparam] = fourthvalue.value

    document.getElementById(fourthparam).value = ""
    }


  else {
      object[firstparam] = firstvalue.value
      object[secondparam] = secondvalue.value
      object[thirdparam] = thirdvalue.value
      
    }
    resume[key].push(object)
    document.getElementById(firstparam).value = ""
    document.getElementById(secondparam).value = ""
    document.getElementById(thirdparam).value = ""
    
    teducation(key,id,firstparam, secondparam, thirdparam, fourthparam)
  }


// --education table--------------------------------------------------------------------------------------------------------

function teducation(keyvalue,idname,param1,param2,param3,param4){
  let listn=""
  if(param4){
    for(let n in  resume[keyvalue]){
      listn=listn+`<tr>
                    <td>${resume[keyvalue][n][param1]}</td>
                    <td>${resume[keyvalue][n][param2]}</td>
                    <td>${ resume[keyvalue][n][param3]}</td>
                    <td>${ resume[keyvalue][n][param4]}</td>
                   <td><button onclick="delt(${n},'${keyvalue}','${idname}','${param1}','${param2}','${param3}','${param4}')" >delete</button></td>
                   </tr>`

  }
}

else if (param3){
  for(let n in  resume[keyvalue]){
    listn=listn+`<tr>
                    <td>${resume[keyvalue][n][param1]}</td>
                    <td>${resume[keyvalue][n][param2]}</td>
                    <td>${resume[keyvalue][n][param3]}</td>
                    <td><button onclick="delt(${n},'${keyvalue}','${idname}','${param1}','${param2}','${param3}')" >delete</button></td>
                 </tr>`
                   

}
}
document.getElementById(idname).innerHTML=listn
}

// ---educationdelete-------------------------------------------------------------------------------------------------------

function delt(index,key,idname,p1,p2,p3,p4){
  let value=[]
    for(let each in resume[key]){
      if(each!=index){
        value.push(resume[key][each])
         }
    }
    resume[key]=value
    teducation(key,idname,p1,p2,p3,p4)
  }
  

// ----submit-------------------------------------------------------------------------------------------

if(!localStorage.getItem('user_resume')){
  localStorage.setItem('user_resume',JSON.stringify([]))
}
let userresume=JSON.parse(localStorage.getItem("user_resume"))
function sub( ){
userresume.push(resume)
        
      
        localStorage.setItem("user_resume",JSON.stringify(userresume))
        alert("saved sucessfully")
        window.location="resumelist.html"
}

     

// ----------------------------------------------------------------------------------------------------------------------
// --resumelist--------------------------------------------------------------------------------------------------------
adminid = localStorage.getItem("usermail")
let list=JSON.parse(localStorage.getItem("user_resume"))
function relist (){
  let lis=""
  for(let n in list){
    
    if(list[n].admin==adminid){
    lis=lis+`<tr>
    <td>${list[n].name}</td>
    <td>${list[n].mail}</td>
    <td>${list[n].phone}</td>
    <td><button onclick="deletefun(${n})">Delete</button></td>
    <td> <a href="re1.html?index=${n}"><button>view</button></a></td>

    </tr>`
  }}
  
  
  document.getElementById('listtable').innerHTML=lis

}
// --delete------------------------------------------------------------------------------

function deletefun(index){
  let new_value=[];
  for(let e in list){
    if(e!=index){
      new_value.push(list[e])
    }
  }
  list=new_value
  localStorage.setItem('user_resume',JSON.stringify(new_value))
  relist()
}

// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

function logout(){
  localStorage.removeItem("signin")
}
