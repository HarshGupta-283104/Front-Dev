/**
 * ASSIGNMENT 2 - QUESTION 5: Boolean Logic Access System
 * 
 * Purpose: Implement a smart home security system using boolean logic
 * to determine if the premises are secure.
 * 
 * Boolean Operators Used:
 * - && (AND): Both conditions must be true
 * - || (OR): At least one condition must be true
 * - ! (NOT): Inverts boolean value
 */

"use strict";

console.log("=== BOOLEAN LOGIC ACCESS SYSTEM ===\n");
console.log("Smart Home Security Check\n");

/**
 * Test Case 1: Ideal Secure Scenario
 */
console.log("━━━ TEST CASE 1: Ideal Secure Scenario ━━━\n");

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

console.log("Security Status:");
console.log(`  Door Locked: ${isDoorLocked}`);
console.log(`  Window Closed: ${isWindowClosed}`);
console.log(`  Alarm On: ${isAlarmOn}`);
console.log(`  Owner Inside: ${isOwnerInside}\n`);

/**
 * Security Logic:
 * System is SECURE only if ALL of the following are true:
 * 1. Alarm is on (isAlarmOn === true)
 * 2. Door is locked (isDoorLocked === true)
 * 3. Window is closed (isWindowClosed === true)
 * 4. Owner is inside (isOwnerInside === true)
 * 
 * Using AND (&&) operator - all conditions must be true
 */
let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("Security Check:");
console.log(`  isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside`);
console.log(`  ${isAlarmOn} && ${isDoorLocked} && ${isWindowClosed} && ${isOwnerInside}`);
console.log(`  Result: ${isSecure}\n`);

if (isSecure) {
    console.log("✅ STATUS: SECURE");
    console.log("All security conditions met. Home is protected.\n");
} else {
    console.log("⚠️ STATUS: UNSAFE");
    console.log("One or more security conditions not met!\n");
}

/**
 * Test Case 2: Window Open (Unsafe)
 */
console.log("\n━━━ TEST CASE 2: Window Open ━━━\n");

isDoorLocked = true;
isWindowClosed = false;  // CHANGED
isAlarmOn = true;
isOwnerInside = true;

console.log("Security Status:");
console.log(`  Door Locked: ${isDoorLocked}`);
console.log(`  Window Closed: ${isWindowClosed} ⚠️`);
console.log(`  Alarm On: ${isAlarmOn}`);
console.log(`  Owner Inside: ${isOwnerInside}\n`);

isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("Security Check:");
console.log(`  Result: ${isSecure}`);

if (isSecure) {
    console.log("✅ STATUS: SECURE\n");
} else {
    console.log("⚠️ STATUS: UNSAFE");
    console.log("Issue: Window is open - security breach!\n");
}

/**
 * Test Case 3: Alarm Off (Unsafe)
 */
console.log("\n━━━ TEST CASE 3: Alarm Off ━━━\n");

isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = false;  // CHANGED
isOwnerInside = true;

console.log("Security Status:");
console.log(`  Door Locked: ${isDoorLocked}`);
console.log(`  Window Closed: ${isWindowClosed}`);
console.log(`  Alarm On: ${isAlarmOn} ⚠️`);
console.log(`  Owner Inside: ${isOwnerInside}\n`);

isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("Security Check:");
console.log(`  Result: ${isSecure}`);

if (isSecure) {
    console.log("✅ STATUS: SECURE\n");
} else {
    console.log("⚠️ STATUS: UNSAFE");
    console.log("Issue: Alarm system is off!\n");
}

/**
 * Test Case 4: Owner Out (Special Scenario)
 */
console.log("\n━━━ TEST CASE 4: Owner Away ━━━\n");

isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = false;  // CHANGED

console.log("Security Status:");
console.log(`  Door Locked: ${isDoorLocked}`);
console.log(`  Window Closed: ${isWindowClosed}`);
console.log(`  Alarm On: ${isAlarmOn}`);
console.log(`  Owner Inside: ${isOwnerInside} ⚠️\n`);

isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

console.log("Security Check:");
console.log(`  Result: ${isSecure}`);

if (isSecure) {
    console.log("✅ STATUS: SECURE\n");
} else {
    console.log("⚠️ STATUS: UNSAFE");
    console.log("Issue: Owner is away - system requires owner presence!\n");
}

/**
 * Bonus: Alternative Security Mode
 * Using OR (||) and NOT (!) operators
 */
console.log("\n━━━ ALTERNATIVE: Away Mode ━━━\n");
console.log("When owner is away, system is secure if:");
console.log("  - Alarm is on");
console.log("  - AND (Door is locked OR Window is closed)\n");

isDoorLocked = true;
isWindowClosed = false;
isAlarmOn = true;
isOwnerInside = false;

let awayModeSecure = isAlarmOn && (isDoorLocked || isWindowClosed) && !isOwnerInside;

console.log("Away Mode Status:");
console.log(`  isAlarmOn && (isDoorLocked || isWindowClosed) && !isOwnerInside`);
console.log(`  ${isAlarmOn} && (${isDoorLocked} || ${isWindowClosed}) && !${isOwnerInside}`);
console.log(`  Result: ${awayModeSecure}\n`);

if (awayModeSecure) {
    console.log("✅ AWAY MODE: SECURE");
    console.log("System armed for owner absence.\n");
} else {
    console.log("⚠️ AWAY MODE: UNSAFE\n");
}

/**
 * Summary of Boolean Operators
 */
console.log("╔════════════════════════════════════════════╗");
console.log("║     BOOLEAN OPERATORS EXPLAINED            ║");
console.log("╠════════════════════════════════════════════╣");
console.log("║ && (AND): All must be true                 ║");
console.log("║   true && true = true                      ║");
console.log("║   true && false = false                    ║");
console.log("║                                            ║");
console.log("║ || (OR): At least one must be true         ║");
console.log("║   true || false = true                     ║");
console.log("║   false || false = false                   ║");
console.log("║                                            ║");
console.log("║ ! (NOT): Inverts the value                 ║");
console.log("║   !true = false                            ║");
console.log("║   !false = true                            ║");
console.log("╚════════════════════════════════════════════╝\n");

