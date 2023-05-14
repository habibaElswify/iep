
function login(){
    let userName = document.getElementById('username').value
    let pwd = document.getElementById('password').value
    
    if(userName == "teacher" && pwd == "Teacher1!"){
        window.location.href='teachpage.html';
    }
    else if (userName == "student" && pwd == "Student1!"){
        window.location.href='studentpage.html';
    }
    else{
        alert('Login failed, Check User ID or Password');
    }
}


