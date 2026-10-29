import {test} from "@playwright/test"

test('dialogs',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //!event listerner
    page.once("dialog",async(dialog)=>{
        if(dialog.type()=="alert"){
            await dialog.accept()
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
            console.log(await dialog.message());
        }
        else if(dialog.type()=="prompt"){
            console.log(await dialog.defaultValue());
            await dialog.accept("Tommy")
        }
    })

    await page.getByRole("button",{name:"Simple Alert",exact:true}).click()
    page.once("dialog",async(dialog)=>{
        if(dialog.type()=="alert"){
            await dialog.accept()
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
            console.log(await dialog.message());
        }
        else if(dialog.type()=="prompt"){
            console.log(await dialog.defaultValue());
            await dialog.accept("Tommy")
        }
    })

    await page.getByRole("button",{name:"Confirmation Alert",exact:true}).click()
    page.once("dialog",async(dialog)=>{
        if(dialog.type()=="alert"){
            await dialog.accept()
        }
        else if(dialog.type()=="confirm"){
            await dialog.accept()
            console.log(await dialog.message());
        }
        else if(dialog.type()=="prompt"){
            console.log(await dialog.defaultValue());
            await dialog.accept("Tommy")
        }
    })

    await page.getByRole("button",{name:"Prompt Alert",exact:true}).click()

})

/**
 * 1- page.on --> handle all the dialogs in the test block
 * 2- page.once --> it will only handle the first occurance
 */