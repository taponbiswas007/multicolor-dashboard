$(document).ready(function () {

   // show full screen area start
   $('#fullscreenToggle').on('click', function() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        $('.maximize').hide();
        $('.minimize').show();
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          $('.maximize').show();
          $('.minimize').hide();
        });
      }
    }
  });

  // Additional event listeners to handle fullscreen changes
  $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
    if (!document.fullscreenElement) {
      $('.maximize').show();
      $('.minimize').hide();
    } else {
      $('.maximize').hide();
      $('.minimize').show();
    }
  });

    //full body color change function
    $("#fullbodyGray").click(function () {
        $("#fullWrapper").addClass("full-gray-bg");
        $("#fullWrapper").removeClass("full-black-bg");
    });
    $("#fullbodyBlack").click(function () {
        $("#fullWrapper").addClass("full-black-bg");
        $("#fullWrapper").removeClass("full-gray-bg");
    });
    //side bar header color change function
    $("#logobarwhite").click(function () {
        $("#sidebarLogoArea").addClass("white-bg");
        $("#sidebarLogoArea").removeClass("black-bg");
    });
    $("#logobarBlack").click(function () {
        $("#sidebarLogoArea").addClass("black-bg");
        $("#sidebarLogoArea").removeClass("white-bg");
    });
    //side bar navbar color change function
    $("#sidenavbarwhite").click(function () {
        $("#sideNavitem").addClass("white-bg");
        $("#sideNavitem").removeClass("black-bg");
    });
    $("#sidenavbarBlack").click(function () {
        $("#sideNavitem").addClass("black-bg");
        $("#sideNavitem").removeClass("white-bg");
    });
    //top navbar color change function
    $("#topnavbarwhite").click(function () {
        $("#topheader").addClass("white-bg");
        $("#topheader").removeClass("black-bg");
        $("#responsivetopheader").addClass("white-bg");
        $("#responsivetopheader").removeClass("black-bg");
        $("#topbarpopup1").addClass("white-bg");
        $("#topbarpopup1").removeClass("black-bg");
        $("#topbarpopup2").addClass("white-bg");
        $("#topbarpopup2").removeClass("black-bg");
        $("#topbarpopup3").addClass("white-bg");
        $("#topbarpopup3").removeClass("black-bg");
        $("#topbarpopupr1").addClass("white-bg");
        $("#topbarpopupr1").removeClass("black-bg");
        $("#topbarpopupr2").addClass("white-bg");
        $("#topbarpopupr2").removeClass("black-bg");
        $("#topbarpopupr3").addClass("white-bg");
        $("#topbarpopupr3").removeClass("black-bg");
    });
    $("#topnavbarBlack").click(function () {
        $("#topheader").addClass("black-bg");
        $("#topheader").removeClass("white-bg");
        $("#responsivetopheader").addClass("black-bg");
        $("#responsivetopheader").removeClass("white-bg");
        $("#topbarpopup1").addClass("black-bg");
        $("#topbarpopup1").removeClass("white-bg");
        $("#topbarpopup2").addClass("black-bg");
        $("#topbarpopup2").removeClass("white-bg");
        $("#topbarpopup3").addClass("black-bg");
        $("#topbarpopup3").removeClass("white-bg");
        $("#topbarpopupr1").addClass("black-bg");
        $("#topbarpopupr1").removeClass("white-bg");
        $("#topbarpopupr2").addClass("black-bg");
        $("#topbarpopupr2").removeClass("white-bg");
        $("#topbarpopupr3").addClass("black-bg");
        $("#topbarpopupr3").removeClass("white-bg");
    });

    //sidebar function start
    $("#toggleBar").click(function(){
        $(".responsivetopheader").slideToggle();
       $(".closeicon ,.baricon").toggle();
       
    });
    $(".sidebarclose").click(function(){
        $(".sidebar").animate({
            "left":"-100%"
        }, 400);
       $(this).hide();
    });
    $(".sortsidebar").click(function () {
        $("#sideBar").addClass("custom-col-1");
        $("#sideBar").removeClass("custom-col-3");
       
        $("#mainPanel").addClass("custom-col-11");
        $("#mainPanel").removeClass("custom-col-9");
      
        $(".bigsidebar").css({
            "display": "block"
        });
        $(this).css({
            "display": "none"
        });
        $(".submenuitem").css({
            "display": "none"
        });
       
        $(".navitem-text").css({
            "display": "none"
        });
       
        $(".sidebarlogo").hide();
        $("#sideBar").css({
            "position":"",
            
        });
       
    });

    $(".bigsidebar").click(function () {
        $("#sideBar").addClass("custom-col-3");
        $("#sideBar").removeClass("custom-col-1");
       
        $("#mainPanel").addClass("custom-col-12");
        $("#mainPanel").removeClass("custom-col-11");
        $(".sortsidebar").css({
            "display": "block"
        });
        $(this).css({
            "display": "none"
        });
        $(".submenuitem").css({
            "display": "block"
        });
        $(".navitem-text").css({
            "display": "block"
        });
        $(".sidebarlogo").show();
        $("#sideBar").css({
            "position":"fixed",
            "top":"0",
            "left":"0",
            "z-index":"99"
        });

    });
   



function checkWidth() {
    var width = $(window).width();
    if (width <= 991) {
        $('#sideBar').addClass('custom-col-1').removeClass('custom-col-3');
        $('#mainPanel').addClass('custom-col-11').removeClass('custom-col-9');
        $(".bigsidebar").css({
            "display":"block"
        });
        $(".sidenavitem").click(function () {
            $("#sideBar").addClass("custom-col-3");
            $("#sideBar").removeClass("custom-col-1");
           
            $("#mainPanel").addClass("custom-col-12");
            $("#mainPanel").removeClass("custom-col-9");
            $("#mainPanel").removeClass("custom-col-11");
            $(".sortsidebar").css({
                "display": "block"
            });
            $(".bigsidebar").css({
                "display": "none"
            });
            $(".submenuitem").css({
                "display": "block"
            });
            $(".navitem-text").css({
                "display": "block"
            });
            $(".sidebarlogo").show();
            $("#sideBar").css({
                "position":"fixed",
                "top":"0",
                "left":"0",
                "z-index":"99"
            });
    
        });
    } else {
        $('#sideBar').addClass('custom-col-3').removeClass('custom-col-1');
        $('#mainPanel').addClass('custom-col-9').removeClass('custom-col-11');

        $(".sidenavitem").click(function () {
            $("#sideBar").addClass("custom-col-3");
            $("#sideBar").removeClass("custom-col-1");
           
            $("#mainPanel").addClass("custom-col-9");
            $("#mainPanel").removeClass("custom-col-12");
            $("#mainPanel").removeClass("custom-col-11");
            $(".sortsidebar").css({
                "display": "block"
            });
            $(".bigsidebar").css({
                "display": "none"
            });
            $(".submenuitem").css({
                "display": "block"
            });
            $(".navitem-text").css({
                "display": "block"
            });
            $(".sidebarlogo").show();
            $("#sideBar").css({
                "position":"",
                "top":"0",
                "left":"0",
                "z-index":"99"
            });
    
        });
            //side bar hover area
    let isSidebarExpanded = false;

    $("#sideBar").on("mouseenter", function () {
        if ($(this).hasClass("custom-col-1")) {
            $(this).addClass("custom-col-3");
            $(this).removeClass("custom-col-1");
            $("#mainPanel").addClass("custom-col-9");
           
            $("#mainPanel").removeClass("custom-col-11");
            $(".sortsidebar").css("display", "block");
            $(".bigsidebar").css("display", "none ");
            $(".submenuitem").css("display", "block");
            $(".navitem-text").css("display", "block");
            $(".sidebarlogo").show();
            // $(this).css({
            //     "position":"fixed",
            //     "top":"0",
            //     "left":"0",
            //     "z-index":"99"
            // });
            isSidebarExpanded = true;
        }
    });
    
    $("#sideBar").on("mouseleave", function () {
        if (isSidebarExpanded) {
            $(this).addClass("custom-col-1");
            $(this).removeClass("custom-col-3");
            $("#mainPanel").addClass("custom-col-11");
            $("#mainPanel").removeClass("custom-col-9");
            // $("#mainPanel").css({
            //     "transition":" none"
            // })
            $(".sortsidebar").css("display", "none");
            $(".bigsidebar").css("display", "block");
            $(".submenuitem").css("display", "none");
            $(".navitem-text").css("display", "none");
            $(".sidebarlogo").hide();
            // $(this).css({
            //     "position":"",
               
            // });
            isSidebarExpanded = false;
        }
    });
    }
}

// Call checkWidth on window resize
$(window).resize(checkWidth);

// Initial call to set the correct classes
checkWidth();


    //submenu visible area start
    $(".sidenavitem").click(function() {
        $(this).find(".submenuarrow").toggleClass("rotated");
    });
    
  
    

    //top bar item area
    $('.topbar-item').on('click', function(event) {
        // Prevent the click event from bubbling up to the document
        event.stopPropagation();

        // Find the associated popup
        var $popup = $(this).find('.information-details-area');

        // Hide other popups
        $('.information-details-area').not($popup).hide();

        // Toggle the current popup
        $popup.toggle();
    });

    // Hide popups when clicking outside
    $(document).on('click', function() {
        $('.information-details-area').hide();
    });

    // Prevent the popup from closing when clicking inside
    $('.information-details-area').on('click', function(event) {
        event.stopPropagation();
    });

    //theme manu area
    $(".settingbtn").click(function() {
        let themeSettingArea = $(".theme-setting-area");
        let currentRight = themeSettingArea.css("right");
        
        if (currentRight === "0px" || currentRight === "0") {
            themeSettingArea.animate({
                "right": "-250px"
            }, 500);
        } else {
            themeSettingArea.animate({
                "right": "0"
            }, 500);
        }
    });

    
});