// uso el protocolo http como cliente servidor
const http = require("http");
const readline = require("readline");
const { taskList, genId, addTask } = require("./tasklist");

// creo el hosting y el puerto

const host = "localhost";
const port = 8000;

// creo la funcion requestListener como en el lab
const menu = readline.createInterface(process.stdin, process.stdout);

function selectMenu() {
  console.log("1. to add Task");
  console.log("2. to close.");

  menu.question("select option: ", (option) => {
    switch (option) {
      case "1":
        menu.question("enter name :", (name) => {
          menu.question("enter description :", (description) => {
            addTask(name, description).then(() => {
              console.log(taskList);
            });
          });
          setTimeout(() => {
            selectMenu();
          }, 2500);
        });
        break;
      case "2":
        menu.close();
    }
  });
}

selectMenu() 

const requestListener = function (req, res) {
  // creo la url
  const url = new URL(req.url, `http://localhost:${port}/`);
  if(url.pathname === '/') {
      res.write("<h1> servidor 1</h1>");
  } 
  if (url.pathname === "/tasks") {
    const jsonres = JSON.stringify(taskList);
    res.writeHead(200);
    res.write(jsonres);
  }

  res.end();
};

// creo el servidor
const server = http.createServer(requestListener);

//utilizo el listen para ver como esta el servidor

server.listen(port, () => {
  console.log("servidor abierto");
});
