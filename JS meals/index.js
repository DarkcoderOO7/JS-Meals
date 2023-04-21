
$.ajax({
    type:'get',
    url:'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success: function(responce)
	{
        console.log(responce)
        
        for(var i=0;i<responce.meals.length;i++){  //values has to change

         var card=`<div class="col-md-3 shadow-lg p-3 mb-5 bg-white rounded justify-content-center">
          
         <p class="mealname">${responce.meals[i].strMeal}</p>
         
         <img src="${responce.meals[i].strMealThumb}" class="img-fluid">
         
         <p class="mealid">${responce.meals[i].idMeal}</p>
         
         </div>`
         
         $('#maindiv').append(card)
        }
    },
    error: function(error){
        console.log(error)
    }
})