function grader() {
    let testScores = [85, 90, 78, 92, 88];
    let sum = 0;
    for (let i = 0; i < testScores.length; i++) {
        sum += testScores[i];
    }
    let average = sum / testScores.length;

    console.log(average);
}