function Submit(){
    // input value 
    let AC_Title_Input = document.getElementById("AC_Title_Input").value;
    let AC_No_Input = document.getElementById("AC_No_Input").value;
    let AC_Mobile_No_Input = document.getElementById("AC_Mobile_No_Input").value;
    // end input value 

    // document.getElementById("AC_Title_Show").innerHTML = AC_Title_Input;
    // document.getElementById("AC_No_Show").innerHTML = AC_No_Input;
    // document.getElementById("AC_Mobile_No_Show").innerHTML = AC_Mobile_No_Input;
    
    // if(AC_Title_Input.length === 0 ){
    //     alert('Please enter correct name');
    //   }else if(AC_No_Input.length < 1){
    //     alert('Please enter the correct Account Number');
    //   }else if(AC_Mobile_No_Input.length <= 10 || AC_Mobile_No_Input.length  >= 12){
    //     alert('Please enter correct Mobile Number');
    //   }else{
        // alert('Congratulations! you can print this account information.');
  
        document.getElementById("AC_Title_Show").innerHTML = AC_Title_Input;
        document.getElementById("AC_No_Show").innerHTML = AC_No_Input;
        document.getElementById("AC_Mobile_No_Show").innerHTML = AC_Mobile_No_Input;
        
    //   }







}





function Print(DivName){
    var printContents = document.getElementById(DivName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
    // alert("Test")

}