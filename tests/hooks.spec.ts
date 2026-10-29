import {test} from "@playwright/test"

test("test1",async()=>{
    console.log('add user');
})

test("test2",async()=>{
    console.log('edit user');
})

test("test3",async()=>{
    console.log('delete user');
})

test.beforeAll(async()=>{
    console.log("read excel");
    console.log("connect to Database");
    console.log("genearting the test data");
    console.log("read configuration file"); 
})

test.afterAll(async()=>{
    console.log("disconnect database");
    console.log("deleting the temporary testdata");
    console.log("generate HTml report");
    console.log("close the external resoucres");
})

test.beforeEach(async({page})=>{
    console.log("launch the browser");
    console.log("launch the url");
    console.log("login");
    await page.goto('https://www.amazon.in/')
})

test.afterEach(async()=>{
    console.log("logout");
    console.log("close browser manually");
    console.log('screenshot after failure');
    console.log("clear temporary testdata");
  
})


/**
 * beforeAll()
 * 
 * beforeEach()
 * testscript 1
 * afterEach()
 * 
 * beforeEach()
 * testscript 2
 * afterEach()
 * 
 * beforeEach()
 * testscript 3
 * afterEach()
 * 
 *  beforeEach()
 * testscript 4
 * afterEach()
 * 
 * afterAll()
 */