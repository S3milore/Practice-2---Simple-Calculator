
      function clr() {
        document.getElementById("result").value = "0";
      }

      function dis(val) {
            document.getElementById("result").value += val
}
function result(){
let currentValue=document.getElementById("result").value;
let evaluatedValue=eval(currentValue);
document.getElementById("result").value=evaluatedValue;
}