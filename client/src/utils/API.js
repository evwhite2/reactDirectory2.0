
export default {
   
    searchID: function(value, array){
        return array.filter(emp => emp.ID===value)
    },
    searchFN: function(value, array){
        return array.filter(emp => emp.first_name===value)
    },
    searchLN: function(value, array){
        return array.filter(emp => emp.last_name===value)
    },
    searchEmail: function(value, array){
        return array.filter(emp=> emp.email===value)
    },
    searchTitle: function(value, array){
        return array.filter(emp => emp.Title===value)
    }
};