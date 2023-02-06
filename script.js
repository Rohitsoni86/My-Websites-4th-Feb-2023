
var userData;

function submitData(event){ 
    event.preventDefault();

    var Name = document.getElementById("Emp_Name").value;
    userData = {
      Name : document.getElementById("Emp_Name").value,
      Age : document.getElementById("Emp_Age").value,
      Gender : document.querySelector('input[name="Emp_gender"]:checked').value,
      Designation : document.getElementById("Emp_Designation").value,
      Salary : document.getElementById("Emp_Salary").value,
      location : document.querySelector("#Emp_location").value,
      Email : document.getElementById("Emp_Email_id").value,
      Date_joining : document.getElementById("Date_joining").value,
      Contact : document.getElementById("Contact").value,
}

var test_data = JSON.stringify(userData);
sessionStorage.setItem(Name,test_data);
localStorage.setItem(Name,test_data)
}


function RetriveData(event) {
    event.preventDefault();
    var data = document.getElementById('userData');
    var name = document.getElementById('Emp_Name').value;
    var entry = sessionStorage.getItem(name);
    console.log(JSON.parse(entry));
    data.innerHTML = '<div>'+ entry +'</div>' 
}