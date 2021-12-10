let numarray = []
value = 2
for(let r=0; r<5; r++)
{
    numarray[r]=[]    //create the 1st -D array so it loops it
    for(let c=0; c<6; c++)
    {
        numarray[r][c]=value
        value+=2
    }
}
console.log(numarray);