document.addEventListener('DOMContentLoaded', function() {
   //insert year
   var yearIs = function() {
      var year = document.querySelector('footer .year');
      var date = new Date();
      date = date.getFullYear();
      year.textContent = date;
      return year;

   };yearIs();




   document.querySelector('ul.main-nav li.right')
      .addEventListener('click',function(e) {
         //side-handle
         var si = document.getElementById('sidebar');
         if(si.style.display == 'none') {
            si.style.display = 'block';
         } else {
            si.style.display = 'none';
         }


      },false); //.click-evt

});  //•.DOMContentLoaded





