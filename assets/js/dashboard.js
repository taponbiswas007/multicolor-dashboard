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

    $(".sortsidebar").click(function () {
        $("#sideBar").addClass("col-lg-1");
        $("#sideBar").removeClass("col-lg-3");
        $("#mainPanel").addClass("col-lg-11");
        $("#mainPanel").removeClass("col-lg-9");
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
    });

    $(".bigsidebar").click(function () {
        $("#sideBar").addClass("col-lg-3");
        $("#sideBar").removeClass("col-lg-1");
        $("#mainPanel").addClass("col-lg-9");
        $("#mainPanel").removeClass("col-lg-11");
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

    });

    //side bar hover area
    let isSidebarExpanded = false;

    $("#sideBar").on("mouseenter", function () {
        if ($(this).hasClass("col-lg-1")) {
            $(this).addClass("col-lg-3");
            $(this).removeClass("col-lg-1");
            $("#mainPanel").addClass("col-lg-9");
            $("#mainPanel").removeClass("col-lg-11");
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
            isSidebarExpanded = true;
        }
    });

    $("#sideBar").on("mouseleave", function () {
        if (isSidebarExpanded) {
            $(this).addClass("col-lg-1");
            $(this).removeClass("col-lg-3");
            $("#mainPanel").addClass("col-lg-11");
            $("#mainPanel").removeClass("col-lg-9");
            $(".sortsidebar").css({
                "display": "none"
            });
            $(".bigsidebar").css({
                "display": "block"
            });
            $(".submenuitem").css({
                "display": "none"
            });
            $(".navitem-text").css({
                "display": "none"
            });
            isSidebarExpanded = false;
        }
    });


    //submenu visible area start
    $(".sidenavitem").click(function() {
        $(this).find(".submenuarrow").toggleClass("rotated");
    });
    
    $("#navmenuitem1").click(function(){
        $("#submenu1").slideToggle();
    });
    $("#navmenuitem2").click(function(){
        $("#submenu2").slideToggle();
    });
    $("#navmenuitem3").click(function(){
        $("#submenu3").slideToggle();
    });
    $("#navmenuitem4").click(function(){
        $("#submenu4").slideToggle();
    });
    $("#navmenuitem5").click(function(){
        $("#submenu5").slideToggle();
    });
    $("#navmenuitem6").click(function(){
        $("#submenu6").slideToggle();
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