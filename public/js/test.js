document.addEventListener('DOMContentLoaded', function() {
   //insert year
   var yearIs = function() {
      var year = document.querySelector('footer .year');
      var date = new Date();
      date = date.getFullYear();
      year.textContent = date;
      return year;

   };yearIs();

   function doFrame() {
      var width;
      var wrapper = document.querySelectorAll('.wrapper');
      if(typeof window.innerWidth != 'undefined') {
         width = parseInt(window.innerWidth);
         //if-less-than-1300-check whether-frame-exists
         if(width < 1300) {
            for(var i=0; i < wrapper.length; i++) {
               if(wrapper[i].className.indexOf('frame') > -1) {
                  //remove it
                  wrapper[i].classList.remove('frame');
                  console.log('class removed');
               }
            }

         }//if-under-1300
         //over-1300
         else {
            //do-not-duplicate-check-whether-exists
            for(var i=0; i < wrapper.length; i++) {
               if(wrapper[i].className.indexOf('frame') == -1) {
                  //not there- add-frame-class
                  wrapper[i].classList.add('frame');
                  console.log('class added');

               }
            }
         }//over-1300

      }//typeof w.i.w

   }//doFrame fn


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

   
   
   /*
   **°°·
   **  on-window-resize-calls-frame-fn-to-add/remove-class.
   **  ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
   **  (A media-query would make more sense here btw)   
   */
   window.addEventListener('resize',doFrame,false);   




});  //•.DOMContentLoaded





