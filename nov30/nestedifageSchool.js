const age = 23
if (age > 0 && age < 11) 
{
    if (age < 4){
        console.log("Your still a baby. Enjoy Exploring");
    }
    else {
        console.log("Your are in elementary school");
    }
}
else if (age >= 11 && age < 14) 
{
    console.log("You are a middle schooler. Stop growing up so fast");
}
else if (age <= 17 && age < 18) 
{
    console.log("Your in HS and Good luck!");
    if (age >= 16) {
        console.log("Your in HS and you can drive");
    }
    else {
        console.log("Your a high schooler");
    }
}
else 
{
    console.log("Your in college. Get that degree!");
    if (age > 22 ) {
        console.log("Your an adult");
    }
}