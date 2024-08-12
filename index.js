function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let surname = document.forms["myForm"]["surname"].value;
  let email = document.forms["myForm"]["email"].value;
  let phone = document.forms["myForm"]["phone"].value;

  if (name == "" || surname == "" || email == "" || phone == "") {
    alert("Все поля должны быть заполнены!");
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Пожалуйста, введите действительный адрес электронной почты!");
    return false;
  }

  let phonePattern = /^\d+$/;
  if (!phonePattern.test(phone)) {
    alert("Пожалуйста, введите действительный номер телефона!");
    return false;
  }

  return true;
}
