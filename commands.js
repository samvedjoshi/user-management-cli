#!/usr/bin/env node
const {Command} = require("Commander");

const program = new Command();
const { prompt } = require("inquirer")

const {
    addUser,
    findUser,
    updateUser,
    deleteUser,
    listUsers,
} = require('./index.js')

const questions = [
    {
        type : 'input',
        name : 'firstname',
        message : 'User first name : ',
    },
    {
        type : 'input',
        name : 'lastname',
        message : 'User last name : ',
    },
    {
        type : 'input',
        name : 'phone',
        message : 'User phone number : ',
    },
    {
        type : 'input',
        name : 'email',
        message : 'User email address : ',
    }
];


program 
    .version('1.0.0')
    .description('User management system')

program 
    .command("adduser")
    .alias('a')
    .description('Add a user')
    .action(()=>{
       prompt(questions).then(answers=>addUser(answers));
    })

program 
    .command("find <name>")
    .alias('f')
    .description('Find a user')
    .action((name)=>{
        findUser(name);
    })

program 
    .command("updateuser <email>")
    .alias('u')
    .description('Update a user by email id')
    .action((email)=>{
        prompt(questions).then(answers=>updateUser(email,answers));
    })

program
    .command("deleteuser <email>")
    .alias('d')
    .description("Delete a user by email id")
    .action(email=>{
        console.log(email)
        deleteUser(email);
    })

program 
    .command("showusers")
    .alias("showu")
    .description("Show all users")
    .action(()=>{
        listUsers();
    })

program.parse(process.argv);