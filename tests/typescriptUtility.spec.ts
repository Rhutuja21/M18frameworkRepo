import {test} from "@playwright/test"
import { getCurrentDate, getDate, getRandomNumber, getRandomString, getTimestamp } from "../utils/typescriptUtility"

test("typescript Utility",async()=>{

    let data=await getRandomNumber(5000000000,10000000000)
    console.log(data);


    let data2=getRandomString(5)    
    console.log(data2+"@gmail.com");


    let date=getCurrentDate()
    console.log(date);

    let timestamp=getTimestamp()
    console.log(timestamp);

    console.log(getDate(5));
    
    
    
    

})