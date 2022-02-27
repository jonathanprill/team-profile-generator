const Prompt = require('../lib/Prompt');
const Employee = require('../lib/Employee');

const generateEmployee = employee => {

  //this.employee = new Employee(name, id, email);
  //console.log(this.employee.getName());

  return `
        <div>
        ${employee.getName()}
        </div>
  `
}
//${employee.getRole()}
module.exports = employee => {
    //(organized into 3 separate sets of data)destructure projects and about data from tempalteData based on their property key names
    

    //const { employee } = templateData;
      //this.employee = employee;
      
     // console.log(employee.getName());
    

    
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
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
    ${generateEmployee(employee)}
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3"></h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/">}</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
        
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;  by </h3>
      </footer>
    </body>
    </html>
    `;
  };