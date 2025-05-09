const students =[
	
	{firstName: "Tunde",
     lastName: "Dada",
	 age: 19,
	 score: 75,
	 courses:["Math", "Biology"]},

	 {firstName: "Wale",
     lastName: "Kunle",
	 age: 30,
	 score: 85,
	 courses:["Physics", "Chemistry"]},

	 {firstName: "Balikis",
     lastName: "Raji",
	 age: 18,
	 score: 95,
	 courses:["Commerce", "Literature"]},

	 {firstName: "Sharon",
     lastName: "Olayiwola",
	 age: 31,
	 score: 55,
	 courses:["History", "English"]},

	 {firstName: "Tinubu",
     lastName: "Adenekan",
	 age: 33,
	 score: 98,
	 courses:["Economics", "Statistics"]}
];

const studentDescriptions = students.map(student=>{const{firstName, lastName, age, score,courses} = student; return `${firstName} is ${age}years old and scored ${score}. He/She is taking: ${courses.join(",")}`;});

studentDescriptions.forEach(description => {console.log(description);});