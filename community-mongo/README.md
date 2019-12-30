# Community

User service 
- Add 
- Remove 
- Edit 
- Add alias Register 
- Profile pic 
/user/regiser 
/user/register 
- name: string 
-- college: string 
-- Branch : string 
-- Gender: male/female ( Dropdown ) 
-- DOB: Calender and time picker 
-- phone: string with phone validation
-- email: string with email validation current addr: string max-length 
-- permanent addr: string max-length with radio button to choose current as permanent addr 
-- profile pic: file type request type: POST /user method: PUT /user method POST 


PUT for edit
- body- {field: newValue}
{field1: value1, field2: newVal2}

/user method: DELETE request: params id

register return id: string

edit return true boolean


List of users 

view route - /users - list of all users

/user/register - registration form

/register/:id
/register/201
/register?id=201
query
/register
{"id": 201}
id=201&name=something
