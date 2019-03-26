$(document).ready(function(){//this part mainly controls the triggers to the applcation functionality
 
    $(".sidenav").sidenav();//initializing the sidenav
     
    $(".materialboxed").materialbox();//initializing the zoom to full screen function

    $(".parallax").parallax();//initializing the parallax

    $(".tabs").tabs();//initializing the tabs

    $(".datepicker").datepicker({//initializing the date paicker and then disabing weekends
        disableWeekends: true
    });

    $(".tooltipped").tooltip();//iniitializing the tooltip

    $(".scrollspy").scrollSpy();//initializing the scroll spy
  }); 