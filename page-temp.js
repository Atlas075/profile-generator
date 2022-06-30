const generateTeam = (team) => {
    console.log(team)

    const html = []

    const generateManager = manager => {
         console.log(manager)
        let managerHtml = `
        
        <div class="employee" id="manager">
        <div id="manager-card" class="card">
            <div class="card-header">
                ${manager.name} 
                <br>
                <i>Manager</i>
            </div>
            
            <div class="card-info">
                <ul>
                    <li>ID: ${manager.id}</li>
                    <li>Email: <a href="${manager.email}">${manager.email}</a> </li>
                    <li>Office number: ${manager.managerOffice}</li>
                </ul>
            </div>
          
        </div>
        
    </div >
        `
        html.push(managerHtml)
    }

    const generateEngineer = engineer => {
   
        console.log(engineer)
        let engineerHtml = `
        <div class="employee" id="engineer">
        <div id="engineer-card" class="card">
            <div class="card-header">
                 ${engineer.name} 
                 <br>
                <i>Engineer</i>    
            </div>
           
            <div class="card-info">
                <ul>
                    <li>ID: ${engineer.id}</li>
                    <li>Email: <a href="${engineer.email}">${engineer.email}</a> </li>
                    <li>GitHub: <a href="${engineer.github}">${engineer.github}</a> </li>
                </ul>  
            </div>
          
        </div>

    </div>
        `
        html.push(engineerHtml)
    }

    const generateIntern = intern => {

          console.log(intern)
          let internHtml = `
          <div class="employee" id="intern">
          <div id="intern-card" class="card">
              <div class="card-header">
                  ${intern.name} 
                  <br>
                  <i>Intern</i>  
              </div>
              
              <div class="card-info">
                  <ul>
                      <li>ID: ${intern.id}</li>
                      <li>Email: <a href="${intern.email}">${intern.email}</a> </li>
                      <li>School: ${intern.school}</li>
                  </ul>  
              </div>
         
          </div>
       
      </div>
          `
          html.push(internHtml)
    }
 
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i])
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i])
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i])
        }
    }
    return html.join('')
}


module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Profile Generator</title>
</head>
<body>
    <header>
        <h1> My Team </h1> 
    </header>
    <section>
      ${generateTeam(team)} 
    </section>
</body>
</html>
    
`
}