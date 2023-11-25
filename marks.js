function Student(name, roll_no, class_, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_ = class_;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {

        const sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);

        // Print the top three subject names
        console.log("Top Three Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]}`);
        }
    };

    this.printReportCard = function () {
        // Calculate the percentage
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0);
        const percentage = (totalMarks / 500) * 100;

        // Print the report card
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no} |`);
        console.log(`| Class    - ${this.class_} |`);
        console.log(`| Section  - ${this.section} |`);

        // Print individual subject marks
        Object.entries(this.marks_of_5_subjects).forEach(([subject, marks]) => {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${marks} |`);
        });

        console.log(`| Percentage - ${percentage.toFixed(1)} % |`);
        console.log("+--------------------+");
    };
}

const student1 = new Student("Huzaifa", 16, "X", "A", {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
});

student1.printTop3Subjects();
student1.printReportCard();
