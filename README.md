# Simple Task Manager

## What This System Does
This is a minimal task management system where tasks can be created and assigned to users.

## Database Design
The system uses three tables:
- users
- tasks
- assignments

Each table has a primary key and constraints such as NOT NULL, UNIQUE, and FOREIGN KEY.

## Enforced Rule
The system prevents assigning the same task to the same user more than once.
This rule is enforced using a UNIQUE constraint on (task_id, user_id) in the assignments table.

## State Representation
The state.json file represents the current state of a task and the allowed next states.
This demonstrates how the system controls valid state transitions.

## How to Run
1. Execute `schema.sql` in any SQL database (SQLite/MySQL compatible).
2. Open `index.html` in a browser.
3. Enter a task title and create a task