function CreateHTML(empArray) {
    let htmlTop = `
 <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Document</title>
    </head>
    
    <body>
        <div class="container">
            <div class="row header">
                <h1>My Team</h1>
            </div>
            <div class="row card-deck main-content">
 `

    var htmlMiddle = ''

    empArray.forEach(element => {
        if (element.role === 'Manager') {
            var fieldName = "Office Number:  " + element.office
            var imgSrc = '../src/coffee-cup.png' 
            var imgAlt = "Coffee Cup icon"
        } else if (element.role === 'Engineer') {
            var fieldName = `GitHub:  ` + `<a href='https://github.com/${element.git}' target='_blank'>${element.git}</a>`
            var imgSrc = '../src/sunglasses.png' 
            var imgAlt = "Glasses Icon"
        } else {
            var fieldName = "School:  " + element.school
            var imgSrc = '../src/graduation-hat.png' 
            var imgAlt = "Graduation Cap Icon"
        }
        htmlMiddle = htmlMiddle +  `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
                    <div class="card-header">
                        <h2>${element.name}</h2>
                        <div class="container">
                            <div class="row">
                                <img src="${imgSrc}" alt="${imgAlt}">
                                <div class="col-sm">
                                    <h3>${element.role}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body container">
                        <div class="row card-body-sub">Employee ID:  ${element.id}</div>
                        <div class="row card-body-sub">
                            Email:
                            <a class="col-sm" href="mailto: ${element.email}">${element.email}</a>
                        </div>
                        <div class="row card-body-sub">${fieldName}</div>
                    </div>
                </div>
        `
    })
    
   

    let htmlBottom = `
</div>
        </div>
    </body>
    
    </html>
`

    return htmlTop + htmlMiddle + htmlBottom


};

module.exports = CreateHTML