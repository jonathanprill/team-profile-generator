const Prompt = require('../lib/Prompt');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

//${employee.team.name}

//////////////Generate Manager//////////////////
const generateManager = teamArr => {
  console.log(teamArr)
 
  return `
        ${teamArr
          .filter(({ office }) => office)
          .map(({ name, id, email, office, getRole }) => {
            return ` 
            <article class="project-article" style="border-top-color:#08fdd8;">
                <div class="project-content">
                    <div class="post-data" style="color:#08fdd8;"><span class="oi oi-briefcase"></span>${getRole()}</div>
                    <h5 class="post-title">${name}</h5>
                    <div class="post-desc">ID: ${id} <br> Email: ${email} <br> Office: ${office}</div>
                </div>
            </article>
          `;
          })
          .join('')}
        
  `
}

//////////////Generate Engineer//////////////////
const generateEngineer = teamArr => {
  //console.log(teamArr)
 
  return `
        ${teamArr
          .filter(({ github }) => github)
          .map(({ name, id, email, github, getRole }) => {
            return `
            <article class="project-article" style="border-top-color:#FD2155;">
                <div class="project-content">
                    <div class="post-data" style="color:#FD2155;"><span class="oi oi-cog"></span>${getRole()}</div>
                    <h5 class="post-title">${name}</h5>
                    <div class="post-desc">ID: ${id} <br> Email: ${email} <br> Github: ${github}</div>
                </div>
            </article>
          `;
          })
          .join('')}
        
  `
}

//////////////Generate Intern//////////////////
const generateIntern = teamArr => {
  //console.log(teamArr)
 
  return `
        ${teamArr
          .filter(({ school }) => school)
          .map(({ name, id, email, school, getRole }) => {
            return `
            <article class="project-article" style="border-top-color:#E4EE89;">
                <div class="project-content">
                    <div class="post-data" style="color:#E4EE89;"><span class="oi oi-signal"></span>${getRole()}</div>
                    <h5 class="post-title">${name}</h5>
                    <div class="post-desc">ID: ${id} <br> Email: ${email} <br> School: ${school}</div>
                </div>
            </article>
          `;
          })
          .join('')}
        
  `
}

//${employee.getRole()}
module.exports = employee => {
   
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    

      <link rel="stylesheet" href="style.css">
    </head>

    
  
    <body>
    
      <header>
       
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Generator</h1>
        
      </header>
      
      <section class="section-project">
        <div class="project-articles">
          ${generateManager(employee)}
          ${generateEngineer(employee)}
          ${generateIntern(employee)}
        <div>
      </section>

    </body>
    </html>
    `;
  };


