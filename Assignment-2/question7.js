/**
 * ASSIGNMENT 2 - QUESTION 7: Customer Feedback Processor
 */
"use strict";
console.log("=== CUSTOMER FEEDBACK PROCESSOR ===\n");
let feedback = "Great product! Fast delivery and amazing sound quality!";
console.log("Customer Feedback:");
console.log("\n");console.log(feedback + "\n");
console.log("--- ANALYSIS ---\n");
let wordCount = feedback.split(' ').length;
console.log("Word Count: " + wordCount + " words");
let hasBadWords = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log("Contains negative words: " + hasBadWords);
if (hasBadWords) {
    console.log("⚠️ Status: Needs Improvement");
    console.log("Feedback contains negative keywords.\n");
} else {
    console.log("✅ Status: Positive Feedback");
    console.log("No negative keywords detected.\n");
}
let hasExcellent = feedback.toLowerCase().includes("great") || feedback.toLowerCase().includes("amazing") || feedback.toLowerCase().includes("excellent");
console.log("--- SENTIMENT DETAILS ---");
console.log("Contains positive words: " + hasExcellent);
console.log("Feedback length: " + feedback.length + " characters");
console.log("First word: " + feedback.split(' ')[0]);
console.log("Last word: " + feedback.split(' ')[wordCount - 1]);
console.log("\n✓ Feedback analysis complete!\n");
