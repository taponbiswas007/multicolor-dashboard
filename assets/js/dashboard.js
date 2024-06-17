$(document).ready(function () {

    //side bar header color change function
    $("#logobarwhite").click(function () {
        $("#sidebarLogoArea").addClass("sidelogobar-white-bg");
        $("#sidebarLogoArea").removeClass("sidelogobar-black-bg");
    });
    $("#logobarBlack").click(function () {
        $("#sidebarLogoArea").addClass("sidelogobar-black-bg");
        $("#sidebarLogoArea").removeClass("sidelogobar-white-bg");
    });
    //side bar navbar color change function
    $("#sidenavbarwhite").click(function () {
        $("#sideNavitem").addClass("sidelogobar-white-bg");
        $("#sideNavitem").removeClass("sidelogobar-black-bg");
    });
    $("#sidenavbarBlack").click(function () {
        $("#sideNavitem").addClass("sidelogobar-black-bg");
        $("#sideNavitem").removeClass("sidelogobar-white-bg");
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




});