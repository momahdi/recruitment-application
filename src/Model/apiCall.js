    
    
    const axios =require('axios').default;
    export default class ApiCall{
        constructor(){
           
        
        }
    
         apiCall(body) {
          return  fetch('https://restapikth.herokuapp.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => {return response;})
        .catch(error => console.log( error))
    }


      applicationPost({start,end,competence}){
        const body={
          startPeriod:start ,
          competence:end, 
          endPeriod:competence}
        return this.apiCall(body)
        .then(response => console.log(response))
        .catch(error => console.log( error))
      }

      testAPI(){
        const body={
          startPeriod:"nu funkar allt" ,
          competence:[{name:"testfg1",year:5}], 
          endPeriod:"testg1" }
        return this.apiCall(body)
        .then(response => console.log(response))
        .catch(error => console.log( error))
      }
}