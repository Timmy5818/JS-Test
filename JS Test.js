// ###
// JS Test

// For any question of this document, we aren 't waiting for a number or answer, but we are waiting for javascript functions.

// Make a git public repo or add @loiu92 to your private repos.

// ####Assuming we have an array of factories

const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
];


// 1. Count Employees Number by Factory  => [ {name: 'BR1', count: 4}, ... ]
var count_employees = "";
for (i = 0; i <= 3; i++) {
    count_employees = count_employees + '{name: ' + factories[i].name + ' , count: ' + factories[i].employees.length + '},';
}
console.log(count_employees);

// 2. Count Factories Number by Employee  => [ {employee: 'John', count: 2}, ... ]
var count_employees_factories = "";
for (i = 0; i <= 3; i++) {
    if (factories[i].employees.length != 0) {　
        count_employees_factories = count_employees_factories + factories[i].employees + ",";
    }
}
ar_count_employees_factories = count_employees_factories.split(',');
ar_count_employees_factories.pop();

var counts = {};
ar_count_employees_factories.forEach(
    function(x) {
        counts[x] = (counts[x] || 0) + 1;
    }
);
console.log(counts);



// 3. Order employees list by alphabetical order  =>   { name: "BR2", employees: ["Jessie", "John", "Karen"] }
factories.forEach(element => console.log('name： ' + element.name + ', employees: ' + element.employees.sort()));

// #### Assuming we have a different array

const employeeType = [
    { id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
    { id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
    { id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
    { id: 1, name: "Alice", type: 2 },
    { id: 2, name: "Bob", type: 3 },
    { id: 3, name: "John", type: 2 },
    { id: 4, name: "Karen", type: 1 },
    { id: 5, name: "Miles", type: 3 },
    { id: 6, name: "Henry", type: 1 }
];

const tasks = [
    { id: 1, title: "task01", duration: 60 }, //min
    { id: 2, title: "task02", duration: 120 },
    { id: 3, title: "task03", duration: 180 },
    { id: 4, title: "task04", duration: 360 },
    { id: 5, title: "task05", duration: 30 },
    { id: 6, title: "task06", duration: 220 },
    { id: 7, title: "task07", duration: 640 },
    { id: 8, title: "task08", duration: 250 },
    { id: 9, title: "task09", duration: 119 },
    { id: 10, title: "task10", duration: 560 },
    { id: 11, title: "task11", duration: 340 },
    { id: 12, title: "task12", duration: 45 },
    { id: 13, title: "task13", duration: 86 },
    { id: 14, title: "task14", duration: 480 },
    { id: 15, title: "task15", duration: 900 }
];

// 4. Count total hours worked in 1 day ? => 39
var midnight = 0;
count_employees_id1 = Number((employeeType[0].work_end).substr(0, 2)) - Number((employeeType[0].work_begin).substr(0, 2));
count_employees_id2 = Number((employeeType[1].work_end).substr(0, 2)) - Number((employeeType[1].work_begin).substr(0, 2));

midnight = 24;
count_employees_id3 = midnight - Number((employeeType[2].work_begin).substr(0, 2));

var count_employees_sum;
count_employees_sum = count_employees_id1 + count_employees_id2 + count_employees_id3;

console.log(count_employees_sum);



// 5. Make a function that take as parameters dayTime and return number of employee working howManyEmployeeByTime(time) => int



// 6. How many days of work needed to done all tasks ?  => 1 day = 9:00 to 00:00 between 00:00 and 09:00 doesnt count.
var count_tasks = 0;
for (i = 0; i <= 14; i++) {　
    count_tasks = count_tasks + tasks[i].duration;
}
count_tasks = (count_tasks / 60) / 15; //除以每天只有工作15小時
console.log("總共需要: " + count_tasks + " 天");