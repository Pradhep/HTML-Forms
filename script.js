function Submit() {
   console.log("Hi")

   if(validateForm()==false){return false}
   var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   var chk=checkboxes.value;
   
   let fname = document.getElementById("first-name").value;
   let lname = document.getElementById("last-name").value;
   let address = document.getElementById("address").value;

   
   let pincode = document.getElementById("pincode").value;
   let gender = document.getElementById("gender").value;
   let state = document.getElementById("state").value;

   
   let country = document.getElementById("country").value;
   //let sno = 1;

let Addrow= document.getElementById("tableid");

let Foodall = getSelectedItems()

let node1 = document.createElement("tr")

// let td0= document.createElement("td")
// td0.innerHTML = '<td>' + sno + '</td>'
// node1.append(td0)

let td1= document.createElement("td")
td1.innerHTML = '<td>' + fname + '</td>'
node1.append(td1)

let td2= document.createElement("td")
td2.innerHTML = '<td>' + lname + '</td>'
node1.append(td2)

let td3= document.createElement("td")
td3.innerHTML = '<td>' + address + '</td>'
node1.append(td3)

let td4= document.createElement("td")
td4.innerHTML = '<td>' + pincode + '</td>'
node1.append(td4)

let td5= document.createElement("td")
td5.innerHTML = '<td>' + gender + '</td>'
node1.append(td5)

let td6= document.createElement("td")
td6.innerHTML = '<td>' + Foodall + '</td>'
node1.append(td6)

let td7= document.createElement("td")
td7.innerHTML = '<td>' + state + '</td>'
node1.append(td7)

let td8= document.createElement("td")
td8.innerHTML = '<td>' + country + '</td>'
node1.append(td8)

Addrow.append(node1);
clear();
}

function clear(){

   document.getElementById("first-name").value =""
   document.getElementById("last-name").value =""
   document.getElementById("address").value =""

   
   document.getElementById("pincode").value =""
   document.getElementById("gender").value =""
   document.getElementById("state").value =""

   
   document.getElementById("country").value =""

   uncheckAll();
}

function validateForm() {
   var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
   var errorSpan = document.getElementById("error");
   if (checkboxes.length < 2) {
       error.innerHTML = "Please select at least 2 options.";
       return false;
      } else {
         error.innerHTML = "";
         var selectedValues = [];
         checkboxes.forEach(function(checkbox) {
             selectedValues.push(checkbox.value);
         });
      }

      let foodarr=(()=>{
         var count=""
         for(i=0;i<selectedValues.length;i++){
            //count= count+"," +selectedValues[i];
            console.log(selectedValues[0]);
            console.log(selectedValues[1]);
         }
         //return count;
      })

      //console.log(foodarr);
}

function getSelectedItems() {
   var checkboxes = document.querySelectorAll('#Foodcheckbox input[type="checkbox"]');
   var selectedItems = [];
   var Foodwholeval=""
   
   checkboxes.forEach(function(checkbox) {
       if (checkbox.checked) {
           selectedItems.push(checkbox.value);
       }
   });
   
   Foodwholeval = selectedItems.join(", ");
   return Foodwholeval;
}

function uncheckAll() {
   var checkboxes = document.querySelectorAll('#Foodcheckbox input[type="checkbox"]');
   
   checkboxes.forEach(function(checkbox) {
       checkbox.checked = false;
   });
}