# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: resgistration.spec.ts >> DemoQA Registration Form
- Location: tests\resgistration.spec.ts:6:5

# Error details

```
Error: keyboard.press: Unknown key: "Arrowdown"
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]:
        - generic [ref=e25] [cursor=pointer]: Forms
        - list [ref=e38]:
          - listitem [ref=e39] [cursor=pointer]:
            - link "Practice Form" [ref=e40]:
              - /url: /automation-practice-form
      - generic [ref=e43]: Alerts, Frame & Windows
      - generic [ref=e55]: Widgets
      - generic [ref=e68]: Interactions
      - generic [ref=e80]: Book Store Application
    - generic [ref=e93]:
      - heading "Practice Form" [level=1] [ref=e94]
      - heading "Student Registration Form" [level=5] [ref=e95]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - generic [ref=e98]: Name
          - textbox "First Name" [ref=e101]: Rhutuja
          - textbox "Last Name" [ref=e103]: Patil
        - generic [ref=e104]:
          - generic [ref=e105]: Email
          - textbox "name@example.com" [ref=e108]: rhutuja@example.com
        - generic [ref=e109]:
          - generic [ref=e110]: Gender
          - generic [ref=e111]:
            - generic [ref=e112]:
              - radio "Male" [ref=e113]
              - generic [ref=e114]: Male
            - generic [ref=e115]:
              - radio "Female" [checked] [ref=e116]
              - generic [ref=e117]: Female
            - generic [ref=e118]:
              - radio "Other" [ref=e119]
              - generic [ref=e120]: Other
        - generic [ref=e121]:
          - generic [ref=e122]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e125]: "9876543210"
        - generic [ref=e126]:
          - generic [ref=e127]: Date of Birth
          - textbox [ref=e132]: 05 May 2000
        - generic [ref=e133]:
          - generic [ref=e134]: Subjects
          - generic [ref=e137]:
            - log [ref=e139]: 4 results available for search term A.Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.
            - combobox [expanded] [active] [ref=e143]: A
            - listbox [ref=e147]:
              - option "Maths" [ref=e148]
              - option "Accounting" [ref=e149]
              - option "Arts" [ref=e150]
              - option "Social Studies" [ref=e151]
        - generic [ref=e152]:
          - generic [ref=e153]: Hobbies
          - generic [ref=e155]:
            - generic [ref=e156]:
              - checkbox "Sports" [ref=e157]
              - generic [ref=e158]: Sports
            - generic [ref=e159]:
              - checkbox "Reading" [ref=e160]
              - generic [ref=e161]: Reading
            - generic [ref=e162]:
              - checkbox "Music" [ref=e163]
              - generic [ref=e164]: Music
        - generic [ref=e165]:
          - generic [ref=e166]: Picture
          - button "Choose File" [ref=e169] [cursor=pointer]
        - generic [ref=e170]:
          - generic [ref=e171]: Current Address
          - textbox "Current Address" [ref=e174]
        - generic [ref=e175]:
          - generic [ref=e176]: State and City
          - generic [ref=e179]:
            - log [ref=e181]
            - generic [ref=e183]:
              - generic [ref=e184]: Select State
              - combobox [ref=e186]
          - generic [ref=e192]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e195] [cursor=pointer]
  - contentinfo [ref=e202]:
    - generic [ref=e203]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1   | import { Locator,Page } from "@playwright/test";
  2   | 
  3   | class Register{
  4   |     page:Page
  5   |     txtName:Locator
  6   |     txtLastName:Locator
  7   |     txtEmail:Locator
  8   |     RBtnMale:Locator
  9   |     RBtnFemale:Locator
  10  |     RBtnOthers:Locator
  11  |     txtMobileNo:Locator
  12  |     CalnDOB:Locator
  13  |     DDyear:Locator
  14  |     DDmonth:Locator
  15  |     date:Locator
  16  |     DDSubjects:Locator
  17  |     CBoxSports:Locator
  18  |     CBoxReading:Locator
  19  |     CBoxMusic:Locator
  20  |     UBTnChooseFile:Locator
  21  |     txtAddress:Locator
  22  |     DDstate:Locator
  23  |     DDCity:Locator
  24  |     BtnSubmit:Locator
  25  | 
  26  |     constructor(page:Page){
  27  |         this.page=page
  28  |         this.txtName=page.locator('#firstName')
  29  |         this.txtLastName=page.getByPlaceholder("Last Name",{exact:true})
  30  |         this.txtEmail=page.getByPlaceholder("name@example.com",{exact:true})
  31  |         this.RBtnMale=page.locator('#gender-radio-1')
  32  |         this.RBtnFemale=page.locator('#gender-radio-2')
  33  |         this.RBtnOthers=page.locator('#gender-radio-3')
  34  |         this.txtMobileNo=page.getByPlaceholder("Mobile Number",{exact:true})
  35  |         this.CalnDOB=page.locator("#dateOfBirthInput")
  36  |         this.DDyear=page.locator('.react-datepicker__year-select')
  37  |         this.DDmonth=page.locator('.react-datepicker__month-select')
  38  |         this.date=page.getByText("5",{exact:true})
  39  |         this.DDSubjects=page.locator('#subjectsInput')
  40  |         this.CBoxSports=page.locator('#hobbies-checkbox-1')
  41  |         this.CBoxReading=page.locator('#hobbies-checkbox-2')
  42  |         this.CBoxMusic=page.locator('#hobbies-checkbox-3')
  43  |         this.UBTnChooseFile=page.locator('#uploadPicture')
  44  |         this.txtAddress=page.getByPlaceholder('Current Address',{exact:true})
  45  |         this.DDstate=page.locator('//div[@class="css-13cymwt-control"]')
  46  |         this.DDCity=page.locator("#city")
  47  |         this.BtnSubmit=page.getByRole("button",{name:"Submit",exact:true})
  48  |     }
  49  | 
  50  |     async launchURl(url){
  51  |         await this.page.goto(url)
  52  |     }
  53  |     async entername(name,lastName,email){
  54  |         await this.txtName.fill(name)
  55  |         await this.txtLastName.fill(lastName)
  56  |         await this.txtEmail.fill(email)
  57  |     }
  58  | 
  59  |     async selectgender(gender){
  60  |         if(gender === "Male"){
  61  |             await this.RBtnMale.click()
  62  |         }
  63  |         else if(gender === "Female"){
  64  |             await this.RBtnFemale.click()
  65  |         }
  66  |         else if (gender === "Others"){
  67  |             await this.RBtnOthers.click()
  68  |         }
  69  |     }
  70  | 
  71  |     async enterMobileNo(mob){
  72  |         await this.txtMobileNo.fill(mob)
  73  |     }
  74  | 
  75  |     async selectdate(year,month){
  76  |         await this.CalnDOB.click()
  77  |         await this.DDyear.selectOption({label:year})
  78  |         await this.DDmonth.selectOption({value:month})
  79  |         await this.date.first().click()
  80  |         await this.page.keyboard.press("Tab")
  81  |     }
  82  | 
  83  |     async selectSubject(subject){
  84  |         await this.DDSubjects.fill(subject)
> 85  |         await this.page.keyboard.press("Arrowdown")
      |                                  ^ Error: keyboard.press: Unknown key: "Arrowdown"
  86  |         // await this.page.keyboard.press("Arrowdown")
  87  |         await this.page.keyboard.press("Enter")
  88  |     }
  89  | 
  90  |     
  91  |   async selectHobbies(hobbies: string[]): Promise<void> {
  92  |     for (const hobby of hobbies) {
  93  |       if (hobby === "Sports") {
  94  |         await this.CBoxSports.click();
  95  |       } else if (hobby === "Reading") {
  96  |         await this.CBoxReading.click();
  97  |       } else if (hobby === "Music") {
  98  |         await this.CBoxMusic.click();
  99  |       }
  100 |     }
  101 |   }
  102 | 
  103 |   //!---------
  104 |   async uploadPicture(picturePath?: string): Promise<void> {
  105 |     if (picturePath) {
  106 |       await this.UBTnChooseFile.setInputFiles(picturePath);
  107 |     }
  108 |   }
  109 | 
  110 |   async enterAddress(address: string): Promise<void> {
  111 |     await this.txtAddress.fill(address);
  112 |   }
  113 | 
  114 |   async selectStateAndCity(state: string, city: string): Promise<void> {
  115 |     await this.DDstate.click();
  116 |     await this.page.getByText(state, { exact: true }).last().click();
  117 | 
  118 |     await this.DDCity.click();
  119 |     await this.page.getByText(city, { exact: true }).last().click();
  120 |   }
  121 | 
  122 |   async submitForm(): Promise<void> {
  123 |     await this.BtnSubmit.click();
  124 |   }
  125 | 
  126 | 
  127 | }
  128 | export default Register
```