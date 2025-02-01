interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Owen",
    lastName: "Fernandez",
    age: 21,
    location: "Montevideo"
};

const student2: Student = {
    firstName: "Ignacio",
    lastName: "Capesan",
    age: 27,
    location: "Montevideo"
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
  
    studentsList.forEach((student) => {
        const row = document.createElement("tr");      const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");
  
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
  
        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
  });