  export default class ApiCall{
        constructor(){

        }
    


         apiCallPost(body,Params) {
          return  fetch('https://restapikth.herokuapp.com/'+Params, {
            method:'POST',
              credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => {return response;})
        .catch(error => console.log( error))
        }

        apiCallGet(Params) {
          return  fetch('https://restapikth.herokuapp.com/'+Params, {
            method:'GET',
              credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
          },
        })
        .then(response => {return response.json()})
        .catch(error => console.log( error))
      }










    testGET(){
      return this.apiCallGet("posts")
      .then(response => {return response})
      .catch(error => console.log( error))
    }

      applicationPost({start,end,competence}){
        const body={
          startPeriod:start ,
          competence:competence, 
          endPeriod:end}
        return this.apiCallPost(body,"posts")
        .then(response => console.log(response))
        .catch(error => console.log( error))
      }

      testAPI(){
        const body={
          startPeriod:"nu funkar allt" ,
          competence:[{name:"testfg1",year:5}], 
          endPeriod:"testg1" }
        return this.apiCallPost(body,"posts")
        .then(response => console.log(response))
        .catch(error => console.log( error))
      }
}