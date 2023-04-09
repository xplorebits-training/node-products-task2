# How To Run The Program

This program is a CLI apllication that manages List of students.
It allows the user to display,add,edit,delete,filter,search the list of students by using command line interface.

Now run the command " node index.js command ",where index.js is the file name and where command is one of the  available command, thay are:

* list : Display the list of students.
* add  : Allows you  to add the new student to the list.
* edit : Allows you to edit  the  existing student information.
* delete: Allows you to delete the existing student in the list.
* filter: Allows you filter list of students based on their age or gender.
* search: Allows you to search  a student by their name.

# Required Modules And Packages
  
* readline module : To promt the user for input.
* console.table package : To display data in Table format.
* yargs package : To parse the command-line arguments and options.
* chalk package : To add the color to the output.

# Instructions 
 
Here some of the insructions:

* The program provided is a Command-Line Interface(CLI) application built in a Node js and several extra modules and packages.
* Run the command *npm install readline console.table chalk yargs*  to install        required modules.
* Run the command *node index.js command* to execute the program ,here 'index.js' is  your file name and where command is one of the availble commands:'display','add','edit','delete','filter','search'.
* Each command will prompt you to give required information.
 
 # Implemented Some Other Features

 * Where Each student object should have the  properties: name, age, gender, and I also included 'id' for to make students data unique. 
 * I  also implemented error handling to prevent the user from entering invalid input.
 * I  used chalk package to add color to the output.
