const { promises } = require("dns");

getText("Deepak");

const filename =  (file) => {
    console.log("name of file: "+ file);
}

function getText(string){
    console.log("print text: "+string);
    
}






const fetchData = async()=>{
    try {
        const response =  fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = response.json();
        console.log(data);
        
    } catch (error) {
        console.log('error while fetching: ', error);
        
    }
}


filename("example.txt")
fetchData();

