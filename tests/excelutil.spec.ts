import {test} from "@playwright/test"
import { readExcel } from "../utils/excelUtility"
import { getRowValues } from "../utils/excelUtility"
import { getCellValue } from "../utils/excelUtility"
import { writeExcel } from "../utils/excelUtility"

test("excel util",async()=>{
    // let value=await readExcel("C:/Users/rhutuja/Desktop/PW_PM/DDT/excelfile1.xlsx","Sheet2")

    // console.log(value);


    // let value1=await getRowValues("C:/Users/rhutuja/Desktop/PW_PM/DDT/excelfile1.xlsx","Sheet2",4)
    // console.log(value1);


    // let value2=await getCellValue("C:/Users/rhutuja/Desktop/PW_PM/DDT/excelfile1.xlsx","Sheet2",2,3)
    // console.log(value2);


    await writeExcel("C:/Users/rhutuja/Desktop/PW_PM/DDT/excelfile1.xlsx","Sheet6",1,1,"Playwright")

})