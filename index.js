const readline = require('readline');
const consoleTable = require('console.table');
const yargs = require('yargs');
const chalk = require('chalk');

const students=[
     {id:1, name: 'chintha',age:70, gender:'female'},
     {id:2, name: 'host',   age:80, gender:'male'},
     {id:3, name: 'farha',  age:24, gender:'female'},
     {id:4, name: 'honey',  age:23, gender:'female'},
     {id:5, name: 'ajay',   age:25, gender: 'male'},
     {id:6, name: 'thata',  age:70, gender: 'male'},
     {id:7, name: 'charry', age:80, gender:'female'},
     {id:8, name: 'nithin', age:30, gender: 'male'},
     {id:9, name: 'chintha',age:40, gender:'female'},
     {id:10,name: 'vaishu', age:22, gender:'female'}
];

// Define the readline interface
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Define the CLI commands and options
yargs.command({
    command: 'list',
    describe: 'List all students',
    handler: displayStudents
});

yargs.command({
    command:'add',
    describe:'add new student',
    handler:addStudents
});

yargs.command({
    command:'edit',
    describe:'update existing student',
    handler:editStudents
});

yargs.command({
    command:'delete',
    describe:'deleting a student',
    handler:deleteStudents
});

yargs.command({
    command:'filter',
    describe:'filtering the age',
    handler:filterStudents
});

yargs.command({
    command:'search',
    describe:'searching the student',
    handler:searchStudents
})

yargs.parse()

// Define the CLI functions
//Function to display Students list
 function displayStudents(){
    console.log(chalk.bgCyanBright("List of Students"))
    console.table(students)
    rl.close()
 }


//Function to add a student
function addStudents(){
    console.log(chalk.red("Adding new student "))
    rl.question(chalk.green('Enter new student id:'),(id) => {
        const student=students.find(s => s.id == id)
        if(student){
            console.log(chalk.red("Student id already exit"))
            rl.close()
            return;
        }
        if(!(parseInt(id))){
            console.log(chalk.red('Invalid  input! id must be in number' ))
            rl.close()
            return;
        }
        rl.question(chalk.magenta('Enter new student name :'),(name) => {
            rl.question(chalk.blue('Enter new student age :'),(age) => {
               if(!(parseInt(age))){
                  console.log(chalk.red('Invalid  input! age must be in number' ))
                  rl.close()
                  return;
                }
                rl.question(chalk.red('Enter new student gender :'),(gender) => {
                    if (gender !== 'male' && gender !== 'female') { 
                        console.log(chalk.red('Invalid input! gender must be "male" or "female".'));
                        rl.close();
                        return;  
                    }    
                    students.push({id:parseInt(id),name,age:parseInt(age),gender})
                    console.log(chalk.red("student added successfully"))
                    rl.close()
                    displayStudents()
                })
            })
        })
    })
}


//Function to edit a student
function editStudents(){
    rl.question(chalk.green('Enter student id : '), (id) => {
        const student = students.find(s => s.id == id);
        if (!student) {
            console.log(chalk.redBright("student is not found"))
            rl.close()
            return;
        }
        rl.question(chalk.blue('Enter new name for the student:'),(name) => {
            rl.question(chalk.red('Enter new age for the student:') ,(age) => {
                if(!(parseInt(age))){
                   console.log(chalk.magenta('Invalid  input! age must be in number'))
                   rl.close()
                   return;
                }
                rl.question(chalk.magenta('Enter the gender:'),(gender) => {
                   if (gender !== 'male' && gender !== 'female') {
                      console.log(chalk.red('Invalid input! gender must be "male" or "female"'));
                      rl.close();
                      return;  
                   }     
                   student.name = name;
                   student.age = parseInt(age);
                   student.gender = gender;
                   console.log(chalk.bold("student updated successfully"))
                   rl.close()
                   displayStudents()
                })     
            }) 
        })   
    })
}


//Function to delete a student
function deleteStudents(){
    rl.question(chalk.magenta('Enter the student id:'),(id) => {
        const index = students.findIndex(s => s.id == id)
        if(index == -1){
          console.log(chalk.red("student is not found"))
          rl.close()
          return;
        }
        students.splice(index,1)
        console.log(chalk.red('student deleted successfully'))
        displayStudents()
    })
}


// Function to filter students based on age or gender
function filterStudents(){
    console.log(chalk.red("Filter by Gender")) 
    const femaleStudents = students.filter(s => s.gender === 'female');
    console.table(femaleStudents);
    const maleStudents = students.filter(s => s.gender === 'male');
    console.table(maleStudents);

    console.log(chalk.green("Filter by Age"))
    const uniqueAges = [...new Set(students.map(s => s.age))];
    uniqueAges.forEach((data) => {
        const filterAge = students.filter(s => s.age == data)
        console.log(data,':')
        console.table(filterAge)
    })
    rl.close()
}


// Function to search a student based on their name
function searchStudents(){
    rl.question(chalk.blueBright('enter student name :'),(name) => {
        const student = students.find(s => s.name === name)
        if(!student){

            console.log(chalk.red("student is not found"))
            rl.close()
            return;
        }
        else{

            console.table([student])
            rl.close()
            return;
        }
    })
}

