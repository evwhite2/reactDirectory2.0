
export default {
   
    searchID: function(value, array){
        array.filter(emp=>{
            if(emp.ID===value){
                return emp;
            }   
        })
    },
    searchFN: function(value, array){
        array.filter(emp=>{
            if(emp.first_name===value){
                return emp
            }
        })
    },
    searchLN: function(value, array){
        array.filter(emp=>{
            if(emp.last_name===value){
                return emp
            }
        })
    },
    searchEmail: function(value, array){
        array.filter(emp=>{
            if(emp.email===value){
                return emp
            }
        })
    },
    searchTitle: function(value, array){
        array.filter(emp=>{
            if(emp.Title===value){
                console.log(emp)
            }
        })
    }
};