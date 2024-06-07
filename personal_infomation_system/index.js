// Import the readline-sync module for user input
const readline = require('readline-sync');

// Define the Person class
class Person {
    constructor(firstName, lastName, age, email, hobbies = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.hobbies = hobbies;

        if (!Number.isInteger(age) || age <= 0) {
            console.error("Age must be a positive integer");
            throw new Error("Invalid age");
        }
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        const index = this.hobbies.indexOf(hobby);
        if (index !== -1) {
            this.hobbies.splice(index, 1);
        }
    }

    sendEmail(subject, message) {
        return [
            `Email sent to ${this.email}`,
            `Subject: ${subject}`,
            `Message: ${message}`
        ];
    }

    getDetails() {
        return [
            `Full Name: ${this.getFullName()}`,
            `Age: ${this.age}`,
            `Email: ${this.email}`,
            `Hobbies: ${this.hobbies.join(', ')}`
        ];
    }
}

try {
    // Array to hold all outputs
    let outputs = [];

    // Get user input for person details
    const firstName = readline.question('Enter first name: ');
    const lastName = readline.question('Enter last name: ');
    const age = parseInt(readline.question('Enter age: '));
    const email = readline.question('Enter email: ');
    const hobbies = readline.question('Enter hobbies (comma separated): ').split(',').map(hobby => hobby.trim());

    // Create a new Person object
    const person = new Person(firstName, lastName, age, email, hobbies);

    // Collect the person details
    outputs = person.getDetails();
    console.log(outputs);

    // Add a new hobby
    const newHobby = readline.question('Enter a new hobby to add: ');
    person.addHobby(newHobby);
    outputs = person.getDetails();
    console.log(outputs);

    // Remove a hobby
    const hobbyToRemove = readline.question('Enter a hobby to remove: ');
    person.removeHobby(hobbyToRemove);
    outputs = person.getDetails();
    console.log(outputs);

    // Send an email
    const subject = readline.question('Enter email subject: ');
    const message = readline.question('Enter email message: ');
    const emailInfo = person.sendEmail(subject, message);
    outputs.push(...emailInfo); //... (spread operator) -> allows to spread out the elements of an array or object into seprate arguments or variables
    console.log(outputs);

} catch (error) {
    console.error(error.message);
}
