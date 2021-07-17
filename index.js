$("#success").hide();
$("#failure").hide();

let fname = document.getElementById("fname");
fname.addEventListener("blur", fname_valid);

let mname = document.getElementById("mname");
mname.addEventListener("blur", mname_valid);

let lname = document.getElementById("lname");
lname.addEventListener("blur", lname_valid);

let email = document.getElementById("email");
email.addEventListener("blur", email_valid);

let check = document.getElementById("check");

let state_v = document.getElementById("state");
state.addEventListener("blur", state_check);

let districts = document.getElementById("districts");
districts.addEventListener("blur", district_check);

let address = document.getElementById("address");
address.addEventListener("blur", address_check);
//setting the pattern of first , middle , last name and getting checked also
function fname_valid() {
  let fname = document.getElementById("fname");
  regex = /^[a-zA-Z]{3,10}$/;
  input_val = fname.value;
  if (regex.test(input_val)) {
    fname.classList.remove("is-invalid");
  } else {
    fname.classList.add("is-invalid");
  }
}
function mname_valid() {
  regex = /^[a-zA-Z]{3,10}$/;
  input_val = mname.value;
  if (regex.test(input_val)) {
    mname.classList.remove("is-invalid");
  } else {
    mname.classList.add("is-invalid");
  }
}
function lname_valid() {
  regex = /^[a-zA-Z]{3,10}$/;
  input_val = lname.value;
  if (regex.test(input_val)) {
    lname.classList.remove("is-invalid");
  } else {
    lname.classList.add("is-invalid");
  }
}

//setting the pattern for e-mail and getting checked also
function email_valid() {
  regular = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-z]){2,7}$/;
  eVal = email.value;
  if (regular.test(eVal)) {
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
  }
}

// select  each and every districts of each states
$(document).ready(function () {
  select_state();
  $("#state").change(function () {
    select_districts($(this).val());
  });
});

function select_state() {
  let optstate;
  $.getJSON("states.json", function (result) {
    optstate = '<option value=" ">Select State</option>';
    $.each(result, function (key, value) {
      optstate += '<option value="' + key + '">' + key + "</option>";
    });
    $("#state").empty();
    $("#state").html(optstate);
  });
}
function select_districts(state) {
  let optdistricts;
  $.getJSON("states.json", function (result) {
    optdistricts = '<option value="">Select Districts</option>';
    $.each(result[state], function (key, value) {
      optdistricts += '<option value="' + value + '">' + value + "</option>";
    });
    $("#districts").html(optdistricts);
  });
}

function state_check()
{
  if(state_v.value.length==1)
  {
    state_v.classList.add("is-invalid");
  }
  else{
    state_v.classList.remove("is-invalid");
  }
}

function district_check() {
  if (districts.checkValidity()) {
    districts.classList.remove("is-invalid");
  } else {
    districts.classList.add("is-invalid");
  }
}
function address_check() {
  if (address.checkValidity()) {
    address.classList.remove("is-invalid");
  } else {
    address.classList.add("is-invalid");
  }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  fname_valid();
  mname_valid();
  lname_valid();
  email_valid();
  state_check();
  district_check();
  address_check();
  
  if(check.checked){
      $("#success").show();
      setTimeout(() => {
          $("#success").hide();
      }, 2000);
  }
  else{
      check.classList.add("is-invalid");
      $("#failure").show();
      setTimeout(() => {
        $("#failure").hide();
      }, 2000);
  }
});

