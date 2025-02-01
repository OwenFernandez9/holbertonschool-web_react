interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}


interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
};


const teacher1: Teacher = {
    firstName: "Mauri",
    lastName: "Urroz",
    fullTimeEmployee: true,
    location: "Las Vegas",
    contract: true,
};

const teacher2: Teacher = {
    firstName: "Nacho",
    lastName: "Vanzo",
    fullTimeEmployee: false,
    yearsOfExperience: 10,
    location: "India",
    contract: false,
};

const director1: Directors = {
    firstName: 'Marcos',
    lastName: 'Pessano',
    location: 'Jamaica',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

const student1 = new StudentClass("Owen", "Fernandez");
const student2 = new StudentClass("Ignacio", "Capesan");

printTeacher(teacher1.firstName, teacher1.lastName);
printTeacher(teacher2.firstName, teacher2.lastName);
printTeacher(director1.firstName, director1.lastName);

console.log(student1.workOnHomework());
console.log(student2.displayName());
console.log(teacher1);
console.log(teacher2);
console.log(director1);
