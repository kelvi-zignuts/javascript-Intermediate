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
        console.log(`Email sent to ${this.email}`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
    }
}

let person;

document.getElementById('personForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    const hobbies = document.getElementById('hobbies').value.split(',').map(hobby => hobby.trim());

    try {
        person = new Person(firstName, lastName, age, email, hobbies);
        displayPersonDetails();
    } catch (error) {
        document.getElementById('output').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});

document.getElementById('addHobbyButton').addEventListener('click', function() {
    const newHobby = document.getElementById('newHobby').value;
    if (person && newHobby) {
        person.addHobby(newHobby);
        displayPersonDetails();
        document.getElementById('newHobby').value = '';
    }
});

document.getElementById('removeHobbyButton').addEventListener('click', function() {
    const hobbyToRemove = document.getElementById('removeHobby').value;
    if (person && hobbyToRemove) {
        person.removeHobby(hobbyToRemove);
        displayPersonDetails();
        document.getElementById('removeHobby').value = '';
    }
});

document.getElementById('sendEmailButton').addEventListener('click', function() {
    const subject = document.getElementById('emailSubject').value;
    const message = document.getElementById('emailMessage').value;
    if (person && subject && message) {
        person.sendEmail(subject, message);
        document.getElementById('output').innerHTML = `<p style="color: green;">Email sent successfully to ${person.email}</p>`;
        document.getElementById('emailSubject').value = '';
        document.getElementById('emailMessage').value = '';
    }
});

function displayPersonDetails() {
    const output = `
        <p><strong>Full Name:</strong> ${person.getFullName()}</p>
        <p><strong>Age:</strong> ${person.age}</p>
        <p><strong>Email:</strong> ${person.email}</p>
        <p><strong>Hobbies:</strong> ${person.hobbies.join(', ')}</p>
    `;
    document.getElementById('personDetails').innerHTML = output;
}