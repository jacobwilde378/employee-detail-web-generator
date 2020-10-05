function CreateHTML(empArray) {
    console.log('made it')

    let a = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>`

    let b = 
    `   <body>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></script>
    </body>
    </html>`

    let c = a + '\r' + b

    return c
     
    
};

module.exports = CreateHTML