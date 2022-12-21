# OnTech_Repair_Shop-Full_Stack_MERN

Live: https://ontech-2qzm.onrender.com/

Due to security reasons, you will not be able to log in into the system (unless you hack it lol then that's impressive). You will only be able to see the welcome public page and access the login page. Now you might ask what if I changed the url to ```/users``` or ```/notes```? well, that will not work either as these routes are protected as private routes and the app will redirect you back into the log in page.

## Image of application

The first page is the public page where customers can visit that page to grap the shop details such as location , number ,etc

![alt text](https://i.pinimg.com/originals/76/65/35/766535cb18ee58f0ac3860edddbadd98.jpg)

This is the log-in page for "Active" staff members. While customers can see the login button on the front welcome page, only employees with "Active" credentials are able to log in using their log-ins details into the system to add/see customer notes.

![alt text](https://i.pinimg.com/originals/10/87/ea/1087eaa3e8adcd761f0d2fae80f43d6a.jpg)

If the employee has an "Admin" or "Manager" role in their title (as can be seen at the bottom of page) then they are able to see the full list of operations they can do. In the following image Jedhabush is an "Admin" 

![alt text](https://i.pinimg.com/originals/45/ce/df/45cedf0567a3139110c187dce20fa2d1.jpg)

As an "Admin" or as "Manager" the user is able to do the following
- View user settings where he can deactivate an employee or edit an employee details

![alt text](https://i.pinimg.com/originals/1e/fb/ae/1efbae48af8c72d5f3bca75ec36748d4.jpg)

![alt text](https://i.pinimg.com/originals/73/c7/71/73c771dc96713bf9be8f8d94f38733ff.jpg)

- View add user page where the "Admin" or "Manager" can add a new user

![alt text](https://i.pinimg.com/originals/11/e3/72/11e3724409018eb7bb0766113307720f.jpg)

- View and edit all created notes

![alt text](https://i.pinimg.com/originals/23/d2/8b/23d28b1fd313ec32c28c6623a534015c.jpg)

![alt text](https://i.pinimg.com/originals/ef/d1/bc/efd1bced556189dbc44d640589e00150.jpg)

----------

Now, let's say an employee with credentials "Employee" logs in into the system. The user is limited to only do the following 

![alt text](https://i.pinimg.com/originals/8f/e0/66/8fe066fbbefce3f8ab4dd00b781e2bb8.jpg)

- Log in to the system and view "notes" that belong to them only

![alt text](https://i.pinimg.com/originals/bf/2a/bc/bf2abc5e1e75f1b16e4f14d671a1cfb0.jpg)

- Edit that note and mark it as complete if the job is done

![alt text](https://i.pinimg.com/originals/03/8d/41/038d41d4b189d1f6f1cef5e88bddc35b.jpg)

- Create a new note as well as assign that note to one of the staff if applicable. In that scenario the note can only be viewed by that staff or a staff member with "Admin" or "Manager" role

![alt text](https://i.pinimg.com/originals/d9/54/9f/d9549fb0a39191abd5e3f034cf25acf5.jpg)



## Description
A small computer/electronics repair shop would like to optimize the way they do things manually. Currently OnTech shop is using sticky notes to write the customer's name, the required repair, the employee in charge of repairing the device and any other related notes. The shop owner would like to have a web application to reduce manual errors, increase staff productivity and organization. The shop owner would like to implement the following:

**User Stories** (Current completed user stories marked with [X]) <br/>
[X] A public facing page with basic contact info <br/>
[X] An employee login to the notes app <br/>
[X] Display current user and assigned role <br/>
[X] Provide a logout option <br/>
[X] Require users to login at least once per week <br/>
[X] Provide a way to remove employee access asap if needed <br/>
[X] Notes are assigned to specific employees <br/>
[X] Notes have a ticket #, title, note body, created & updated dates <br/>
[X] Notes are either OPEN or COMPLETED <br/>
[X] Users can be Employees, Managers, or Admins <br/>
[X] Notes can only be deleted by Managers or Admins <br/>
[X] Anyone can create a note (when customer checks-in) <br/>
[X] Employees can only view and edit their assigned notes <br/>
[X] Managers and Admins can view, edit, and delete all notes <br/>
[X] Only Managers and Admins can access User Settings <br/>
[X] Only Managers and Admins can create new users <br/>
[X] Desktop mode is essential but should be available in mobile as well <br/>


## Tech Stack: <br/>
- Front-End <br/>
• ReactJS <br/>
• Redux <br/>

- Back-End <br/>
• NodeJS <br/>
• Express Js <br/>
• MongoDB <br/>
• Mongoose <br/>

- Packages and Libraries <br/>
• bcrypt <br/>
• nodemon <br/>
• JWT <br/>
• Dotenv <br/>
• cookie-parser <br/>

## Limitations Remarks
- The app is fully responsive to all devices. 
- While the app can be improved in terms of styles and design. The whole point of this app was to expose myself to wide range of technologies especially the backend aspect as well as solidify and expand my current knowledge on the frontend side.
- This project enabled me to see the full app life-cycle as well as how the backend and frontend work hand-in-hand to produce fully operational application. 
- The app task is relatively simple. Having said that, it did require a lot of work and consistency which makes me appreciate what I do even more.
