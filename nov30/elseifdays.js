let day = 9
switch(day)
{
    case 1: {
        console.log("You entered Sunday..");
        break;
    }
    case 2: {
        console.log("You entered Monday..");
        break;
    }
    case 3: {
        console.log("You entered Tuesday..");
        break;
    }
    case 4: {
        console.log("You entered Wednesday..");
        break;
    }
    case 5: {
        console.log("You entered Thursday..");
        break;
    }
    case 6: {
        console.log("You entered Friday..");
        break;
    }
    case 7: {
        console.log("You entered Saturday..");
        break;
    }
    default:
        console.log("You entered an invalid day");
        console.log("Enter in the range from (1-7)");
}
// start at 0, and break on default
//else is set to day and you check these conditions for if it lands on the 