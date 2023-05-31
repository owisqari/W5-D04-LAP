const weekDays = ["Sunday", "Monday", "Tuesday"];
const weekDays2 = ["Wednesday", "Thursday", "Friday", "Saturday"];
const week = weekDays.concat(weekDays2);

const words = ["knot", "roof", "snake", "humanity", "available", "automatic"];
const longWords = words.filter((word) => word.length > 6);
const shortWords = words.filter((word) => word.length < 6);

const num = [1, 3, 9, 16, 15, 36, 45];

const mutiplyByItself = num.map((n) => n * n);

const squerRoot = num.map((n) => Math.sqrt(n));

const dividByThreeAndFive = num.find((n) => n % 3 == 0 && n % 5 == 0);

const dividByTwo = num.find((n) => n % 2 == 0);

const weekAndNum = week.concat(num);

const findThree = num.includes(3);

const reverseWeek = week.reverse();
const text =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit, Eveniet beatae ut sequi ipsa, labore commodi,";
const stringToArr = text.split(",");

console.log("==================mutiplyByItself==================");
console.log(mutiplyByItself);
console.log("==================squerRoot==================");
console.log(squerRoot);
console.log("==================week==================");
console.log(week);
console.log("==================longWords==================");
console.log(longWords);
console.log("================shortWords====================");
console.log(shortWords);
console.log("====================================");
console.log("==================stringToArr==================");
console.log(stringToArr);
console.log("==================reverseWeek==================");
console.log(reverseWeek);
console.log("===================findThree=================");
console.log(findThree);
console.log("================weekAndNum====================");
console.log(weekAndNum);
console.log("=================dividByThreeAndFive===================");
console.log(dividByThreeAndFive);
console.log("==================dividByTwo==================");
console.log(dividByTwo);

const username = document.getElementById("username");
username.textContent = "Owis Bukhari";
username.onclick = function () {
  alert(new Date());
};

const btn = document.getElementById("btn");
const h1Text = document.getElementById("btnText");
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
btn.addEventListener("click", () => {
  h1Text.style.display = "block";
  h1Text.textContent = "Hello World";
});
increaseFont.addEventListener("click", () => {
  h1Text.style.fontSize = "30px";
});
decreaseFont.addEventListener("click", () => {
  h1Text.style.fontSize = "10px";
});

const inputText = document.getElementById("inputText");
const inputBtn = document.getElementById("inputBtn");
const addingTo = document.getElementById("addingTo");
addingTo.style.display = "none";
inputBtn.addEventListener("click", () => {
  addingTo.style.display = "block";
  addingTo.innerHTML = inputText.value;
});

const changeImage = document.getElementById("changeImage");
const image = document.getElementById("image");
changeImage.addEventListener("click", () => {
  image.src = "https://picsum.photos/200/300";
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sum = document.getElementById("sum");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const result = document.getElementById("result");
result.style.display = "none";
sum.addEventListener("click", () => {
  result.style.display = "block";
  result.innerHTML = Number(num1.value) + Number(num2.value);
});
sub.addEventListener("click", () => {
  result.style.display = "block";
  result.innerHTML = Number(num1.value) - Number(num2.value);
});
mul.addEventListener("click", () => {
  result.style.display = "block";

  result.innerHTML = Number(num1.value) * Number(num2.value);
});
div.addEventListener("click", () => {
  result.style.display = "block";
  result.innerHTML = Number(num1.value) / Number(num2.value);
});
