var selectedRow =null;
let addBook=document.getElementById("btn");
let errorHai=document.getElementsByClassName("error");

addBook.addEventListener("click",formSubmit);
//constructor
class book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
    
}
class Display {
    constructor() {
    }
    add(book) {
        console.log("adding");

        let tableBody = document.getElementById("tablebody");

        let uiString = `<tr>
             <td class="data row">${book.name}</td>
             <td class="data row">${book.author}</td>
             <td  class="data row">${book.type}</td>
             <td class="row"> <button class="abc btn1"id="delete"onclick="deleteNode(this)">Delete</button>
             <button onclick ="editRow(this)" id="edit">Edit</button></td>
             </tr>`;
        tableBody.innerHTML += uiString;


    }
    update()
{
    let type;
    const friction=document.getElementById("friction");
    const programming=document.getElementById("programming");
    const maths=document.getElementById("maths");
    if(friction.checked){
        type= friction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(maths.checked)
    {
    type=maths.value;
    }
    let name=document.getElementById("bookname");
        let author=document.getElementById("authorname");
    selectedRow.cells[0].innerHTML=name.value;
    selectedRow.cells[1].innerHTML=author.value;
    selectedRow.cells[2].innerHTML=type;
    selectedRow=null;

}
 
    clear() {
        let form = document.querySelector("form");
        form.reset();
    }
    validate(book){
        let name=document.getElementById("bookname");
        let author=document.getElementById("authorname");
if(name.value<2||author.value<2){
    console.log("error");
    message.style.color= 'red';
    return false;
}
else{
    message.style.color= '#18A558';
    return true;
}
    }

    show(type,displayMessage){
        let message=document.getElementById("message");
        message.innerHTML=` <div class="alert}">
        <strong>${type}</strong> ${displayMessage}
      </div>`;
      setTimeout(function(){
           message.innerHTML="";
      },2000)
    }
}
function editRow(td){
    
   
    let author=document.getElementById("authorname");
    
    let tRow = document.querySelector("td").value;
    selectedRow=td.parentElement.parentElement;
    console.log(selectedRow);
    let type;
    const friction=document.getElementById("friction");
    const programming=document.getElementById("programming");
    const maths=document.getElementById("maths");
    if(friction.checked){
        type= friction.value;
    }
    else if(programming.checked){
        type=programming.value;
    }
    else if(maths.checked)
    {
    type=maths.value;
    }
    
    
    console.log("edit");
    document.getElementById("bookname").value = selectedRow.cells[0].innerHTML;
            document.getElementById("authorname").value = selectedRow.cells[1].innerHTML;
            type = selectedRow.cells[2].innerHTML; 
    
          
    }

function formSubmit(e){
   e.preventDefault();
   let name=document.getElementById("bookname").value;
let author=document.getElementById("authorname").value;
    let type;
    const friction=document.getElementById("friction");
const programming=document.getElementById("programming");
const maths=document.getElementById("maths");
if(friction.checked){
    type= friction.value;
}
else if(programming.checked){
 type=programming.value;
}
else if(maths.checked)
{
    type=maths.value;
}

console.log("submitted");
let addingBook=new book(name,author,type);
console.log(addingBook);
let display= new Display();
if(display.validate(addingBook)){
    if(selectedRow==null){

        display.add(addingBook);
    }else{
       display.update(addingBook);
    }
    display.clear();
    display.show("success","your book has been successfully added");
}
else{
    //show error
   
    display.show("Fail!","sorry,you can't add this book");
}   


}
function deleteNode(td){
let row=td.parentElement.parentElement;
document.getElementById("tablebody").removeChild(row); 
}
// on editing the row   

//search
let search=document.getElementById("searchtxt");
search.addEventListener("input",handle);

function handle(){


    let filter=search.value.toUpperCase();
    console.log("input event fired",filter);
    let table=document.getElementById("bookStore");
    tr=table.getElementsByTagName("tr");
    for(let i=0;i<tr.length;i++)
    {   
 
        td=tr[i].getElementsByTagName("td")[0];
        console.log(td);
        if(td){
            let txtValue=td.textContent||td.innerHTML;
            if(txtValue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
    
}

