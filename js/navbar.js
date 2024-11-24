$(document).ready(function () {
    // Data for each section
    const data = {
      "deal-finder": {
        leftMenu: ["Deal Finder"],
        middleContent: {
          "Deal Finder":"Find best deals"
          
        },
        rightImage: "../assets/navbar/n1.jpg",
      },
      furniture: {
        leftMenu: ["Living Room", "Bedroom", "Office Furniture"],
        middleContent: {
          "Living Room": "Explore sofas, coffee tables, and more.",
          "Bedroom": "Find beds, wardrobes, and nightstands.",
          "Office Furniture": "Upgrade your workspace with desks and chairs.",
        },
        rightImage: "../assets/navbar/n2.jpg",
            },
      mattresses: {
        leftMenu: ["King Size", "Queen Size", "Twin Size"],
        middleContent: {
          "King Size": "Luxury mattresses for a perfect night's sleep.",
          "Queen Size": "Comfortable queen-size mattresses.",
          "Twin Size": "Compact and affordable twin mattresses.",
        },
        rightImage: "../assets/navbar/n3.jpg",

      },
      dining: {
        leftMenu: ["Dining Tables", "Chairs", "Bar Stools"],
        middleContent: {
          "Dining Tables": "Elegant dining tables for every home.",
          "Chairs": "Stylish chairs to complete your dining set.",
          "Bar Stools": "Modern bar stools for your kitchen counter.",
        },
        rightImage: "../assets/navbar/n4.jpg",

      },
      homeoffice: {
        leftMenu: ["Office Furniture", "Office Decor", "Office Furniture Set", "Sale Office Furniture"],
        middleContent: {
          "Office Furniture": "Stylish and functional furniture to enhance your workspace.",
          "Office Decor": "Decorative items to add a personal touch to your office.",
          "Office Furniture Set": "Complete furniture sets tailored for your office needs.",
          "Sale Office Furniture": "Grab amazing deals on office furniture!"
        },
        rightImage: "../assets/navbar/n6.jpg",
      },
      outdoor: {
        leftMenu: ["Outdoor Sitting", "Outdoor Table", "Outdoor Decor", "Outdoor Sets", "Outdoor Sale"],
        middleContent: {
          "Outdoor Sitting": "Comfortable outdoor seating for your patio or garden.",
          "Outdoor Table": "Durable and elegant tables for your outdoor dining experience.",
          "Outdoor Decor": "Accessories to make your outdoor spaces inviting.",
          "Outdoor Sets": "Complete outdoor furniture sets for effortless style.",
          "Outdoor Sale": "Exciting discounts on outdoor furniture and decor!"
        },
        rightImage: "../assets/navbar/n7.jpg",
      },
      rugs: {
        leftMenu: ["Rugs", "Lighting", "Accessories & Accents", "Bedding", "Sale Decor"],
        middleContent: {
          "Rugs": "Beautiful rugs to enhance the charm of any room.",
          "Lighting": "Stylish lighting solutions for your home.",
          "Accessories & Accents": "Unique accents to personalize your spaces.",
          "Bedding": "Comfortable and luxurious bedding for a perfect night's sleep.",
          "Sale Decor": "Special offers on decor items!"
        },
        rightImage: "../assets/navbar/black friday.jpg",
      },
      baby: {
        leftMenu: ["Nursery", "Kids Bedroom", "Kids Study & Playroom", "Baby & Kids Decor"],
        middleContent: {
          "Nursery": "Adorable and functional furniture for your baby’s room.",
          "Kids Bedroom": "Creative and cozy designs for your child's bedroom.",
          "Kids Study & Playroom": "Study tables and playroom essentials for kids.",
          "Baby & Kids Decor": "Whimsical decor to add charm to kids' spaces."
        },
        rightImage: "../assets/navbar/n7.jpg",
      },
      friday: {
        leftMenu: ["Black Friday Sale", "All Items Sale"],
        middleContent: {
          "Black Friday Sale": "Exclusive Black Friday deals you don’t want to miss!",
          "All Items Sale": "Sitewide discounts on everything you love."
        },
        rightImage: "../assets/navbar/n3.jpg",
      },
      holidays: {
        leftMenu: ["Christmas Shop", "Guest Prep", "Thanksgiving & Fall"],
        middleContent: {
          "Christmas Shop": "Festive decorations and gifts for a memorable Christmas.",
          "Guest Prep": "Essentials to prepare your home for guests.",
          "Thanksgiving & Fall": "Warm and inviting decor for the season."
        },
        rightImage: "../assets/navbar/n2.jpg",
      },
      inspiration: {
        leftMenu: ["Trends & Sale", "Shop by Style", "Stories"],
        middleContent: {
          "Trends & Sale": "Discover the latest home trends and exciting offers.",
          "Shop by Style": "Browse curated collections to match your style.",
          "Stories": "Inspiring stories to spark your creativity."
        },
        rightImage: "../assets/navbar/n4.jpg",
      }
    };
  
    // Show dropdown on hover
    $(".nav-item").hover(
      function () {
        const menuId = $(this).data("menu");
        const dropdownContainer = $(".dropdown-container");
        const selectedNavItem = $(this);
        $(".nav-item").removeClass("active");
        selectedNavItem.addClass("active");
        // Populate dropdown with data
        populateDropdown(menuId);
  
        // Show the dropdown
        dropdownContainer.stop().slideDown();
      },
      function () {
        // Leave hover effect for navbar item
      }
    );
    const dropdownContainer = $(".dropdown-container");
    $(".navbar, .dropdown-container").mouseleave(function () {
      // Check if cursor is outside both the navbar and dropdown-container
      if (!$(".navbar").is(":hover") && !dropdownContainer.is(":hover")) {
        dropdownContainer.stop().slideUp();  // Hide the dropdown
        $(".nav-item").removeClass("active"); // Remove active class when hiding
      }
    });

    $(".dropdown-container").mouseenter(function () {
      isHoveringDropdown = true;  // Mark that the cursor is inside the dropdown container
    });
    // Populate dropdown content
    function populateDropdown(menuId) {
      const menuData = data[menuId];
      if (!menuData) return;
  
      // Populate Left Menu
      let leftMenuHtml = "<ul>";
      menuData.leftMenu.forEach((item) => {
        leftMenuHtml += `<li data-item="${item}">${item}</li>`;
      });
      leftMenuHtml += "</ul>";
      $(".left-menu").html(leftMenuHtml);
  
      // Populate Middle Content
      let middleContentHtml = "";
      Object.entries(menuData.middleContent).forEach(([key, value]) => {
        middleContentHtml += `<div class="middle-content" data-item="${key}">${value}</div>`;
      });
      $(".middle-content").html(middleContentHtml);
  
      // Populate Right Content
      $(".right-content").html(
        `<img src="${menuData.rightImage}" alt="${menuId} Image">`
      );
  
      // Handle Left Menu Hover
      $(".left-menu li").hover(function () {
        const selectedItem = $(this).data("item");
  
        $(".middle-content > div").hide();
        $(`.middle-content > div[data-item="${selectedItem}"]`).show();
      });
  
      // Activate the first item by default
      $(".left-menu li").first().trigger("mouseenter");
    }
  });
  