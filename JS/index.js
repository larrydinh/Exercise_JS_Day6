/** bai 1  */
console.log("Bai 1------------------------------------------------");

document.getElementById("btnFind").addEventListener("click", function () {
  number = findUnsignedNum();
  document.getElementById("txtDisp1").innerHTML =
    "The minimum unsigned integer is: " + number;
});

// function: find the minimum unsigned integer
findUnsignedNum = function () {
  var sum = 1;
  var n = 1;
  while (sum < 10000) {
    sum += n;
    n++;
  }
  console.log(n);
  return n;
};

/** bai 2  */
console.log("Bai 2------------------------------------------------");

document.getElementById("btnSum").addEventListener("click", function () {
  result_2 = calcSum();
});
//function: calculate the sum
calcSum = function () {
  var tong = 0;
  x = document.getElementById("numX").value;
  n = document.getElementById("numN").value;
  for (i = 1; i <= n; i++) {
    tong += x ** i;
  }
  console.log(n);
  console.log(tong);
};

/** bai 3  */
console.log("Bai 3------------------------------------------------");

document.getElementById("btnCalc_3").addEventListener("click", function () {
  result_3 = factorialCalc();
});

factorialCalc = function () {
  n = +document.getElementById("numN_3").value;
  var factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(factorial);
};

/** bai 4  */
console.log("Bai 4------------------------------------------------");

document.getElementById("btnCalc_4").addEventListener("click", function () {
  // Create 10 div tag
  for (i = 0; i <= 9; i++) {
    var div = document.createElement("div");
    div.id = "container";
    div.innerHTML = "Hi there!";
    div.className = "border pad";
    document.body.appendChild(div);
  }
  // Colorize div tags based on conditions
  var x = document.getElementsByClassName("border pad");
  var i;
  for (i = 0; i < x.length; i++) {
    if (i % 2 == 0) {
      x[i].style.backgroundColor = "green";
    } else {
      x[i].style.backgroundColor = "red";
    }
  }
});
