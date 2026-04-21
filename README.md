HEAD
A bug‑tracking program designed to document software issues, assign priority or severity levels, and specify the project in which each bug occurs.
We created a multi functioning program capable of storing multiple users and their data. While being able to edit the users data in realtime with the program.

# Bug Tracking System

## Project Overview
This Bug Tracking System is a web-based application designed to track software issues (bugs) within different projects. It allows users to create issue tickets, assign them to team members, update their status and priority, and monitor progress from creation to resolution.

This system was developed as part of the Web Programming 271 group assignment.

## Purpose of the System
The purpose of the system is to:
- Record and manage software issues
- Assign issues to responsible team members
- Track the progress and resolution of issues
- Organise issues according to projects

## Main Features
- Create issue tickets
- Assign and reassign issues to people
- Edit and update issues
- View all issues in a dashboard
- View a single issue with full details
- Create and manage people
- Create and manage projects
- Store data using localStorage (data persists after refresh)

## Technologies Used
- HTML (structure)
- CSS (styling)
- JavaScript (logic and functionality)
- Bootstrap (UI design)
- localStorage (data persistence)

## Functional Requirements Covered
The system supports the following requirements:
- Issue creation
- Issue assignment
- Viewing all issues
- Viewing a single issue
- Editing issues
- Creating people
- Creating projects
- Data persistence using localStorage

## Issue Fields
Each issue contains the following information:
- Summary of the issue
- Detailed description
- Person who identified the issue
- Date identified
- Related project
- Assigned person
- Status (Open / Resolved / Overdue)
- Priority (Low / Medium / High)
- Target resolution date
- Actual resolution date
- Resolution summary

## Status Logic
The system uses the following statuses:
- Open: Issue is newly created and not yet resolved
- Resolved: Issue has been completed
- Overdue: Issue has passed the target resolution date without being resolved

## Priority Logic
The system uses:
- Low priority
- Medium priority
- High priority

## How to Use the Application
1. Open the application in the browser.
2. Create people who will be assigned issues.
3. Create projects.
4. Create a new issue ticket.
5. Assign the issue to a person.
6. View all issues on the dashboard.
7. Open a single issue to view details.
8. Edit the issue when necessary.
9. Refresh the browser to confirm that data is still stored.

## Test Data
The system has been populated with at least 10 realistic issues to demonstrate functionality.

The issues include:
- Different projects
- Different assigned people
- Different priority levels
- Different statuses (open, resolved, overdue)
- Different dates (identified, target, and resolution)

## End-to-End Workflow
The system demonstrates a complete workflow:
Create → Assign → View → Edit → Persist

This confirms that all parts of the system are integrated and working together.

## Evidence
Screenshots of the system functionality are stored in the `evidence` folder. These screenshots demonstrate:
- Issue creation
- Issue assignment and reassignment
- Viewing all issues
- Viewing a single issue
- Editing issues
- Data persistence after refresh
- localStorage usage

## Group Roles
- Member 1: Issue (Ticket) Management
- Member 2: People and Project Management
- Member 3: Issue Viewing and Dashboard
- Member 4: Documentation, Demo, and Integration

## Contribution 
Member 4 focused on:
- Improving and completing project documentation
- Preparing realistic test data (10+ issues)
- Ensuring full system integration
- Collecting evidence through screenshots
- Preparing the demonstration flow for presentation

## Conclusion
The Bug Tracking System successfully meets the requirements of the assignment by allowing users to manage issues efficiently. The integration of all components and the use of localStorage ensures that the system is functional, user-friendly, and persistent across sessions. (Documentation, demo script and evidence added)
