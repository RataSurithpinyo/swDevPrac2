let selectedSize = "";

function checkValidInput() {
  let name = document.getElementById("name");
  let contactPerson = document.getElementById("contactPerson");
  let phone = document.getElementById("phone");
  if (name.value === "") alert("กรุณากรอกชื่อบริษัทก่อนส่งฟอร์ม");
  if (contactPerson.value === "") alert("กรุณากรอกชื่อผู้ติดต่อก่อนส่งฟอร์ม");
  if (phone.value === "") alert("กรุณากรอกเบอร์ผู้ติดต่อก่อนส่งฟอร์ม");

  let numberOfChairs = document.getElementById("chairs");
  console.log(numberOfChairs.value);
  if (numberOfChairs.value < 1 || numberOfChairs.value > 10) {
    console.log(numberOfChairs.value);
    alert("จำนวนเก้าอี้ต้องอยู่ระหว่าง 1 ถึง 10");
  }

  if (selectedSize == "") alert("กรุณาเลือกขนาดของบูธก่อนส่งฟอร์ม");
}

function showBoothSize(selectedItem) {
  let selectedValue = selectedItem.getAttribute("value");
  document.getElementById("dropdownMenuButton").innerHTML =
    selectedItem.innerHTML;
  if (selectedValue) {
    selectedSize = selectedValue;
  }
}
