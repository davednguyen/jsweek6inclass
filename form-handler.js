function capture(){
    //this will always needed for form submit functions
    event.preventDefault();
    console.log("form submitted");
    var theName = document.infoCustomer.name.value;
    var phone = document.infoCustomer.phone.value;

    console.log(theName);
    console.log(phone);
}

