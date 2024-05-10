var output= document.getElementById("result")

function display(arg)
{
    output.value += arg;

}

function calculate()
{
    try {
       output.value = eval(output.value) 
        
    } catch (error) {
        output.value="Invalid";
    }
}

function Clear()
{
    output.value= " ";
}

function del()
{
    output.value = output.value.slice(0,-1)
}