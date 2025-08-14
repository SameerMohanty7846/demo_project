import React, { useState } from 'react'

const Header2 = () => {
  const employeeData = [
    // Engineering Department
    { id: 1, name: "Bob Smith", department: "Engineering", salary: 70000 },
    { id: 2, name: "Ethan Wright", department: "Engineering", salary: 72000 },
    { id: 3, name: "Ian Walker", department: "Engineering", salary: 68000 },
    { id: 4, name: "Olivia Turner", department: "Engineering", salary: 71000 },
    { id: 5, name: "Nathan Reed", department: "Engineering", salary: 69000 },

    // Marketing Department
    { id: 6, name: "Charlie Brown", department: "Marketing", salary: 52000 },
    { id: 7, name: "Jane Adams", department: "Marketing", salary: 53000 },
    { id: 8, name: "Emily Brooks", department: "Marketing", salary: 51000 },
    { id: 9, name: "Samuel Morris", department: "Marketing", salary: 55000 },
    { id: 10, name: "Mia Johnson", department: "Marketing", salary: 54000 },

    // HR Department
    { id: 11, name: "Sophia Clark", department: "HR", salary: 48000 },
    { id: 12, name: "Daniel Carter", department: "HR", salary: 50000 },
    { id: 13, name: "Ella Martinez", department: "HR", salary: 49000 },

    // Finance Department
    { id: 14, name: "James Hall", department: "Finance", salary: 75000 },
    { id: 15, name: "Ava Wilson", department: "Finance", salary: 74000 },
    { id: 16, name: "Michael Evans", department: "Finance", salary: 76000 },

    // IT Support
    { id: 17, name: "Lucas Scott", department: "IT Support", salary: 60000 },
    { id: 18, name: "Grace Lewis", department: "IT Support", salary: 59000 },
    { id: 19, name: "Benjamin Young", department: "IT Support", salary: 61000 },
  ];

  const uniqueDepartments = [...new Set(employeeData.map(emp => emp.department))];
  const allKeys = [...new Set(employeeData.flatMap(Object.keys))];
  console.log(allKeys);

  const [departments] = useState(uniqueDepartments);
  const [employees, setEmployees] = useState(employeeData);

  // functions
  const filterByDepartment = (department) => {
    setEmployees(employeeData.filter((data) => data.department === department));
  };

  const resetEmployees = () => {
    setEmployees(employeeData);
  };

  return (
    <div>
      <header style={{
        width: "100%",
        height: "60px",
        backgroundColor: "red",
      }}>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            justifyContent: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          <li
            onClick={resetEmployees}
            style={{ backgroundColor: "white", borderRadius: "10px", padding: "5px", cursor: "pointer" }}
          >
            All
          </li>
          {departments.map((dept) => (
            <li
              key={dept}
              onClick={() => filterByDepartment(dept)}
              style={{ backgroundColor: "white", borderRadius: "10px", padding: "5px", cursor: "pointer" }}
            >
              {dept}
            </li>
          ))}
        </ul>
      </header>

      <main style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "10px" }}>
        {employees.map((emp) => (
          <div key={emp.id} style={{ width: "200px", border: "2px solid black", padding: "10px" }}>
            <p><b>Name:</b> {emp.name}</p>
            <p><b>Department:</b> {emp.department}</p>
            <p><b>Salary:</b> ${emp.salary}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Header2;
