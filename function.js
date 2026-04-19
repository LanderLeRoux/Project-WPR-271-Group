// ==============================================================
// Data structures

let people = [];
let projects = [];
let issues = [];

// ==============================================================

// Functions

// ---------------------------------------------------------------------------------
// Storage - Local
// ---------------------------------------------------------------------------------
function saveToLocalStorage() 
{
    localStorage.setItem('bugTracker_people', JSON.stringify(people));
    localStorage.setItem('bugTracker_projects', JSON.stringify(projects));
    localStorage.setItem('bugTracker_issues', JSON.stringify(issues));
}

function loadFromLocalStorage() 
{
const storedPeople = localStorage.getItem('bugTracker_people');
const storedProjects = localStorage.getItem('bugTracker_projects');
const storedIssues = localStorage.getItem('bugTracker_issues');

if (storedPeople) people = JSON.parse(storedPeople);
if (storedProjects) projects = JSON.parse(storedProjects);
if (storedIssues) issues = JSON.parse(storedIssues);
}

// ---------------------------------------------------------------------------------
// Management - People
// ---------------------------------------------------------------------------------
function addPerson(name, surname, email, username, avatar = '') 
{
    const id = Date.now().toString();
    const newPerson = 
    {
        id: id,
        name: name,
        surname: surname,
        email: email,
        username: username,
    };

    people.push(newPerson);
    saveToLocalStorage();
    renderPeopleList();
    updateDropdowns();
    return newPerson;
}

function deletePerson(personId) 
{
    const hasIssues = issues.some(issue => issue.assignedTo === personId);
    if (hasIssues) 
    {
        alert('Person is assigned to bugs! Please reassign their bugs first.');
        return false;
    }

    people = people.filter(person => person.id !== personId);
    saveToLocalStorage();
    renderPeopleList();
    updateDropdowns();
    renderIssuesList();
    return true;
}

function renderPeopleList() 
{
    const peopleListDiv = document.getElementById('peopleList');
    if (!peopleListDiv) return;
    if (people.length == 0) 
    {
        peopleListDiv.innerHTML = '<div class="col-12"><div class="alert alert-info">No people added yet. \nAdd your first team member.</div></div>';
        return;
    }

    peopleListDiv.innerHTML = people.map(person => `
        <div class="col-md-4 mb-3">
            <div class="card">
                <img src="${person.avatar}" class="card-img-top" alt="${person.name}" style="height: 150px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${person.name} ${person.surname}</h5>
                    <p class="card-text">
                            <strong>Username:</strong> ${person.username}<br>
                            <strong>Email:</strong> ${person.email}<br>
                            <strong>ID:</strong> ${person.id}
                    </p>
                <button class="btn btn-danger btn-sm" onclick="deletePerson('${person.id}')">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ---------------------------------------------------------------------------------
//Management - Projects
// ---------------------------------------------------------------------------------

function addProject(name) 
{
    const id = Date.now().toString();
    const newProject = 
    {
        id: id,
        name: name
    };
    projects.push(newProject);
    saveToLocalStorage();
    renderProjectsList();
    updateDropdowns();
    return newProject;
}

function deleteProject(projectId) 
{
    const hasIssues = issues.some(issue => issue.project == projectId);
    if (hasIssues) 
    {
        alert('Project has bugs! More or delete bugs before deleting project.');
        return false;
    }
    projects = projects.filter(project => project.id != projectId);
    saveToLocalStorage();
    renderProjectsList();
    updateDropdowns();
    renderIssuesList();
    return true;
}

function renderProjectsList() 
{
    const projectsListDiv = document.getElementById('projectList');
    if (!projectsListDiv) return;
    if (projectsListDiv.length == 0) 
    {
        projectsListDiv.innerHTML = '<div class="alert alert-info">No projects added yet. \nCreate your first project!</div>'
    }
    projectsListDiv.innerHTML = projects.map
    (project =>`
        <div class="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <strong>${project.name}</strong>
                <small class="text-muted ms-2">ID: ${project.id}</small>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteProject('${project.id}')">Delete</button>
        </div>
    `).join('');
}

// ---------------------------------------------------------------------------------
//Management - Issues
// ---------------------------------------------------------------------------------

function addIssue(tile, description, projectId, assignedTo, priority) 
{
    const id = Date.now().toString();
    const newIssue = 
    {
        id: id,
        title: title,
        description: description,
        projectId: projectId,
        assignedTo: assignedTo,
        priority: priority,
        status: 'Open',
        createdAt: new Date().toISOString()
    };
    issues.push(newIssue);
    saveToLocalStorage();
    renderIssuesList;
    return newIssue;
}

function deleteIssue(issueId) 
{
    issues = issues.filter(issue => issue.id != issueId);
    saveToLocalStorage();
    renderIssuesList();
}

function updateIssueStatus(issueId, newStatus) 
{
    const issue = issues.find(issueId);
    if (issue) 
    {
        issue.status = newStatus;
        saveToLocalStorage();
        renderIssuesList();
    }
}

function renderIssuesList() 
{
    const issuesListDiv = document.getElementById('issuesList');
    if (!issuesListDiv) return;
    if (issues.length == 0) 
    {
        issuesListDiv.innerHTML = '<div class="alert alert-info">No bugs have been reported</div>';
        return;
    };
    const getPersonName = (personId) => 
    {
        const person = people.find(personId);
        return person;
    };

    const getPriorityBadge = (priority) => 
    {
        const colors = 
        {
            'Low': 'success',
            'Medium': 'warning',
            'High':'danger',
            'Critical':'dark'
        };
        return `badge bg-${colors[priority] || 'secondary'}`;
    }

    issuesListDiv.innerHTML = issues.map(issue => 
    `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                    <h5 class="card-title">${issue.title}</h5>
                    <span class="${getPriorityBadge(issue.priority)}">${issue.priority}</span>
                </div>
                <p class="card-text">${issue.description}</p>
                <p class="card-text">
                    <small class="text-muted">
                        <strong>Project:</strong> ${getProjectName(issue.projectId)}<br>
                        <strong>Assigned to:</strong> ${getPersonName(issue.assignedTo)}<br>
                        <strong>Status:</strong> 
                        <select class="form-select form-select-sm d-inline-block w-auto" onchange="updateIssueStatus('${issue.id}', this.value)">
                            <option value="Open" ${issue.status === 'Open' ? 'selected' : ''}>Open</option>
                            <option value="In Progress" ${issue.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                            <option value="Resolved" ${issue.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
                            <option value="Closed" ${issue.status === 'Closed' ? 'selected' : ''}>Closed</option>
                        </select><br>
                        <strong>Created:</strong> ${new Date(issue.createdAt).toLocaleDateString()}
                    </small>
                </p>
                <button class="btn btn-danger btn-sm" onclick="deleteIssue('${issue.id}')">Delete Bug</button>
            </div>
        </div>
    `).join('');
}

// ---------------------------------------------------------------------------------
//Management - Dropdown
// ---------------------------------------------------------------------------------



// ==============================================================

//Form Handlers


// ==============================================================

//Initiazation
function init() 
{
    loadFromLocalStorage();
    renderPeopleList();
    renderProjectsList();
    renderIssuesList();
    updateDropdowns();
    
    if (people.length == 0 && projects.length == 0) 
    {
        addPerson('John', 'Doe', 'john@example.com', 'johndoe');
        addPerson('Jane', 'Smith', 'jane@example.com', 'janesmith');
        addProject('Website Redesign');
        addProject('Mobile App Development');
        addProject('Database Migration');
        addIssue(
            'Login button not working',
            'The login button on the homepage does not respond to clicks',
            projects[0]?.id || '',
            people[0]?.id || '',
            'High'
        );
    }
    
    const personForm = document.getElementById('personForm');
    if (personForm) personForm.addEventListener('submit', handlePersonFormSubmit);
    
    const projectForm = document.getElementById('projectForm');
    if (projectForm) projectForm.addEventListener('submit', handleProjectFormSubmit);
    
    const issueForm = document.getElementById('issueForm');
    if (issueForm) issueForm.addEventListener('submit', handleIssueFormSubmit);
}
window.addEventListener('DOMContentLoaded', init);

// ==============================================================