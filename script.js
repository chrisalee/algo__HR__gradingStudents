function gradingStudents(grades) {
    let finalGrades = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 38) {
            console.log(grades[i]);
            finalGrades.push(grades[i]);
        } else {
            if(grades[i] % 5 >= 2.5) {
                let higherGrade = parseInt(grades[i] / 5) * 5 + 5;
                console.log(higherGrade, '>>>higherGrade1')
                if(higherGrade - grades[i] < 3){
                    grades[i] = higherGrade;
                    console.log(grades[i]);
                    finalGrades.push(grades[i]);
                } else {
                    console.log(grades[i]);
                    finalGrades.push(grades[i]);
                }  
            } else {
                let higherGrade = parseInt(grades[i] / 5) * 5 + 5;
                console.log(higherGrade, '>>>higherGrade2')
                if(higherGrade - grades[i] < 3){
                    grades[i] = higherGrade;
                    console.log(grades[i]);
                    finalGrades.push(grades[i]);
                } else {
                    console.log(grades[i]);
                    finalGrades.push(grades[i]);
                } 
            }
                   
        }
    }
    return finalGrades;
}
