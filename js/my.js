//1
function compute()
{
    var score = 0;
    if(a1.checked == true)
    {
        score += 0;
    }
    else if(a2.checked == true)
    {
        score += 0;
    }
    else if(a3.checked == true)
    {
        score += 50;
    }
    else if(a4.checked == true)
    {
        score += 0;
    }

    if(b1.checked == true)
    {
        score += 0;
    }
    else if(b2.checked == true)
    {
        score += 50;
    }
    else if(b3.checked == true)
    {
        score += 0;
    }
    else if(b4.checked == true)
    {
        score += 0;
    }

    alert("你的總分是:" + score);
}

//2
function css()
{
    if(a1.value == 25)
    {
        document.getElementById("b1").style.fontSize = '25px';
    }
    else if(a1.value == 50)
    {
        document.getElementById("b1").style.fontSize = '50px';
    }
    else if(a1.value == 75)
    {
        document.getElementById("b1").style.fontSize = '75px';
    }
    else if(a1.value == 100)
    {
        document.getElementById("b1").style.fontSize = '100px';
    }
    document.getElementById("b1").style.backgroundColor = a2.value;
    document.getElementById("b1").style.color = a3.value;
}

//3
function show()
{
    b1 = (parseFloat(a1.value)+ parseFloat(a2.value)) * parseFloat(a3.value) / 2
    document.getElementById("b1").value = b1;
}

//4
function log()
{
    if(a2.value == 123)
    {
        document.getElementById("b1").innerHTML = a1.value + "，你已經成功登入網站";
    }
    if(a2.value != 123)
    {
        document.getElementById("b1").innerHTML = a1.value + "，你的密碼輸入錯誤";
    }
}

//5
function table()
{
    //a1
    document.getElementById("b1").style.backgroundColor = a1.value;
    document.getElementById("b2").style.backgroundColor = a1.value;
    document.getElementById("b3").style.backgroundColor = a1.value;
    document.getElementById("b4").style.backgroundColor = a1.value;
    document.getElementById("b5").style.backgroundColor = a1.value;
    document.getElementById("b6").style.backgroundColor = a1.value;
    document.getElementById("b7").style.backgroundColor = a1.value;
    document.getElementById("b8").style.backgroundColor = a1.value;

    //a2
    document.getElementById("c1").style.backgroundColor = a2.value;
    document.getElementById("c2").style.backgroundColor = a2.value;
    document.getElementById("c3").style.backgroundColor = a2.value;
    document.getElementById("c4").style.backgroundColor = a2.value;
    document.getElementById("c5").style.backgroundColor = a2.value;
    document.getElementById("c6").style.backgroundColor = a2.value;

}