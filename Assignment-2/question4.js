/**
 * ASSIGNMENT 2 - QUESTION 4: Array Performance Analyzer
 * 
 * Purpose: Analyze student performance using array methods to calculate
 * statistics and filter results.
 * 
 * Array Methods Used:
 * - map(): Transform array elements
 * - filter(): Select elements based on condition
 * - reduce(): Accumulate values into single result
 * - Math.max/min with spread operator
 */

"use strict";

console.log("=== ARRAY PERFORMANCE ANALYZER ===\n");

/**
 * Generate array of 8 random scores between 30 and 100
 * Formula: Math.floor(Math.random() * 71) + 30
 * - random() * 71 gives 0 to 70.999
 * - + 30 shifts range to 30 to 100.999
 * - floor() gives integers 30 to 100
 */
let scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

console.log("Student Scores:", scores);
console.log(`Total Students: ${scores.length}\n`);

/**
 * Analysis 1: Find Highest and Lowest Scores
 * Using spread operator (...) with Math.max/min
 * Spread operator expands array into individual arguments
 */
console.log("--- SCORE RANGE ANALYSIS ---");
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Score Range: ${highestScore - lowestScore} points\n`);

/**
 * Analysis 2: Calculate Average Score
 * Using reduce() to sum all scores, then divide by count
 * 
 * reduce() accumulates values:
 * - Takes accumulator (sum) and current value
 * - Returns new accumulator value
 * - 0 is the initial accumulator value
 */
console.log("--- AVERAGE CALCULATION ---");
let totalScore = scores.reduce(function(sum, score) {
    return sum + score;
}, 0);

let average = totalScore / scores.length;

console.log(`Total Score: ${totalScore}`);
console.log(`Number of Students: ${scores.length}`);
console.log(`Average Score: ${average.toFixed(2)}\n`);

/**
 * Analysis 3: Count Passing Students (score >= 50)
 * Using filter() to select only passing scores
 * filter() creates new array with elements that pass the test
 */
console.log("--- PASS/FAIL ANALYSIS ---");
let passingScores = scores.filter(function(score) {
    return score >= 50;
});

let passingCount = passingScores.length;
let failingCount = scores.length - passingCount;
let passPercentage = (passingCount / scores.length) * 100;

console.log(`Passing Students (≥50): ${passingCount}`);
console.log(`Failing Students (<50): ${failingCount}`);
console.log(`Pass Percentage: ${passPercentage.toFixed(1)}%\n`);

/**
 * Detailed Student Report
 * Using map() to create formatted strings for each student
 * map() transforms each element and returns new array
 */
console.log("--- DETAILED STUDENT REPORT ---");
let studentReports = scores.map(function(score, index) {
    let status = score >= 50 ? "PASS" : "FAIL";
    let grade;
    
    // Determine grade
    if (score >= 90) grade = "A+";
    else if (score >= 80) grade = "A";
    else if (score >= 70) grade = "B";
    else if (score >= 60) grade = "C";
    else if (score >= 50) grade = "D";
    else grade = "F";
    
    return `Student ${index + 1}: ${score} points - Grade ${grade} [${status}]`;
});

// Display each student's report
studentReports.forEach(function(report) {
    console.log(report);
});

/**
 * Performance Distribution Analysis
 * Group students by performance level
 */
console.log("\n--- PERFORMANCE DISTRIBUTION ---");

let excellent = scores.filter(s => s >= 90).length;
let good = scores.filter(s => s >= 70 && s < 90).length;
let average_range = scores.filter(s => s >= 50 && s < 70).length;
let poor = scores.filter(s => s < 50).length;

console.log(`Excellent (90-100): ${excellent} students`);
console.log(`Good (70-89): ${good} students`);
console.log(`Average (50-69): ${average_range} students`);
console.log(`Poor (<50): ${poor} students`);

/**
 * Final Summary
 */
console.log("\n╔════════════════════════════════════════╗");
console.log("║      PERFORMANCE SUMMARY               ║");
console.log("╠════════════════════════════════════════╣");
console.log(`║ Total Students:     ${scores.length.toString().padEnd(17)}║`);
console.log(`║ Average Score:      ${average.toFixed(2).padEnd(17)}║`);
console.log(`║ Highest Score:      ${highestScore.toString().padEnd(17)}║`);
console.log(`║ Lowest Score:       ${lowestScore.toString().padEnd(17)}║`);
console.log(`║ Pass Rate:          ${passPercentage.toFixed(1)}%`.padEnd(41) + '║');
console.log("╚════════════════════════════════════════╝\n");

console.log("✓ Performance analysis completed!\n");

