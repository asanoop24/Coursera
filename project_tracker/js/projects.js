const projects = document.querySelectorAll('.project');
const projectHeaders = document.querySelectorAll('.projectHeader');
const projectList = document.querySelector('#projects');
const editIcon = document.querySelector('#editIcon');
const saveIcon = document.querySelector('#saveIcon');
editProjectFields = document.querySelectorAll('.editProjectField');
viewProjectFields = document.querySelectorAll('.viewProjectField');
currentProject = undefined;

//  handles the click event for a projectHeader
projectHeaders.forEach(projectHeader => projectHeader.addEventListener('click', function(){
  const project = projectHeader.parentElement;
  currentProject = project;
  if(project.classList.contains('viewProject')) closeProject(project);
  else viewProject(project);
}));

function viewProject(project){

  //  clicking on an inactive project will assign the class 'viewProject' to it
  projects.forEach(proj => proj.classList.remove('viewProject'));
  projects.forEach(proj => proj.style.minHeight = 100 + 'px');
  project.classList.add('viewProject');

  //  active project will occupy the whole window
  const scroll = -100*(1 + Array.prototype.indexOf.call(projectList.children, project));
  document.querySelector('#projectContainer').style.setProperty('--scroll', scroll + 'px');
  const height = window.innerHeight;
  project.style.minHeight = height + 'px';
  window.scrollTo(0,0);
  document.querySelector('#sidePanel').style.right = '-50px';

  editIcon.style.left = '5px';
  saveIcon.style.left = '5px';

}
function closeProject(project){

    project.classList.remove('viewProject');
    project.classList.remove('editProject');
    document.querySelector('#projectContainer').style.setProperty('--scroll', 0 + 'px');
    project.style.minHeight = 100 + 'px';
    project.style.height = 100 + 'px';
    projects.forEach(proj => proj.style.display = '');
    document.querySelector('#sidePanel').style.right = '-100px';

}
function editProject(project){

  currentProject.classList.add('editProject');
  currentProject.querySelectorAll('.editProjectField').forEach(field => field.style.top = '-40px');
  currentProject.querySelectorAll('.viewProjectField').forEach(field => field.style.top = '-40px');

  currentProject.querySelectorAll('.editProjectField').forEach(field => field.placeholder = field.previousElementSibling.innerHTML);

  editIcon.style.left = '-45px';
  saveIcon.style.left = '-40px';


}

function saveProject(project){

  currentProject.classList.remove('editProject');
  currentProject.querySelectorAll('.editProjectField').forEach(field => field.style.top = '0px');
  currentProject.querySelectorAll('.viewProjectField').forEach(field => field.style.top = '0px');
  editIcon.style.left = '5px';
  saveIcon.style.left = '5px';

}

editIcon.addEventListener('click', function(){
  editProject(currentProject);
});
saveIcon.addEventListener('click', function(){
  saveProject(currentProject);
});
