function greetings()
{
    myName = document.getElementById("name").value;
    document.getElementById("myName").innerText = (`Гоша приветствует тебя, ${myName} `);
    myName = document.getElementById("name").value = " ";
}

