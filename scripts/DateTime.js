function ChangeGreeting()
{
    const hour = new Date().getHours(); 
    let greeting;
    if (hour < 12){
    greeting = "Good Morning";
    }
    else if (hour >= 12 && hour < 18 ){
    greeting = "Good Afternoon";
    }
    else if (hour >= 18 && hour < 22 ){
    greeting = "Good Evening";
    }
    else if(hour >= 22){
        greeting = "Good Night";
    }
    document.getElementById("greetings").textContent = greeting;
}