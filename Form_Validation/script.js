const Validate = ()=>{
    console.log("Form validation");

    // Get user values
    const user_name = username.value;
    const user_email = email.value;
    const user_password = password.value;
    const user_password_2 = password2.value;
    console.log(user_name,user_email,user_password,user_password_2);

   if (user_name == '') {
    output.textContent="YOu username is empty"
   }
   else if(user_email == ''){
    output.textContent="YOu email is empty"

   }
   else if (user_password == ''){
    output.textContent="YOu password is empty"

}
else{
  

    if(user_password == user_password_2){
        output.textContent="Login sucessful"

    }
    else{
        output.textContent="Password aren't same"

   }
}



}


const See = ()=>{
    return "Hi"
}