const projects = document.querySelectorAll('.project');
const projectHeaders = document.querySelectorAll('.projectHeader');
const projectList = document.querySelector('#projects');

//  handles the click event for a projectHeader
projectHeaders.forEach(projectHeader => projectHeader.addEventListener('click', function(){
  const project = projectHeader.parentElement;

  //  clicking on the active project will remove the 'activeProject' class from it and format the list as initial
  if(project.classList.contains('activeProject')){
    project.classList.remove('activeProject');
    document.querySelector('#projectContainer').style.setProperty('--scroll', 0 + 'px');
    project.style.minHeight = 100 + 'px';
    project.style.height = 100 + 'px';
    projects.forEach(proj => proj.style.display = '');
    return;
  };

  //  clicking on an inactive project will assign the class 'activeProject' to it
  projects.forEach(proj => proj.classList.remove('activeProject'));
  projects.forEach(proj => proj.style.minHeight = 100 + 'px');
  project.classList.add('activeProject');

  //  active project will occupy the whole window
  const scroll = -100*(1 + Array.prototype.indexOf.call(projectList.children, project));
  document.querySelector('#projectContainer').style.setProperty('--scroll', scroll + 'px');
  const height = window.innerHeight;
  project.style.minHeight = height + 'px';
  // project.style.overflowY = 'scroll';
  window.scrollTo(0,0);

  //  remove the inactive projects from the page to keep the scrollable length of the page constant
  // projects.forEach(proj => proj.style.display = 'none');
  // project.style.display = '';

}));
