$(document).ready(function () {
    // Load the header HTML dynamically
    $("header").load("components/header.html", function (response, status, xhr) {
      if (status === "error") {
        console.error("Error loading header:", xhr.statusText);
      } else {
        console.log("Header loaded successfully!");
      }
    });
  
    // Dynamically load the header CSS
    $("<link>", {
      rel: "stylesheet",
      type: "text/css",
      href: "css/header.css"
    }).appendTo("head");
  });


  // Navbar Section

  $(document).ready(function () {
    $("#navbar-container").load("components/navbar.html");
  });

  // (document).ready(function () {
  //   $(".nav-item").hover(
  //     function () {
  //       // Show dropdown menu when mouse enters
  //       $(this).find(".dropdown-menu").stop(true, true).fadeIn(200);
  //     },
  //     function () {
  //       // Hide dropdown menu when mouse leaves
  //       $(this).find(".dropdown-menu").stop(true, true).fadeOut(200);
  //     }
  //   );
  // });
  


  // Popular furniture section
  $(document).ready(function () {
    $("#popular-content").load("components/popular.html", function () {
      // Add image data to the slider dynamically
      const images = [
        { src: "../assets/p1.jpg", name: "All Furniture" },
        { src: "../assets/p2.jpg", name: "Sofas" },
        { src: "../assets/p3.jpg", name: "Sectionals" },
        { src: "../assets/p4.jpg", name: "Beds" },
        { src: "../assets/p5.jpg", name: "Accent Chairs" },
        { src: "../assets/p6.jpg", name: "Dining Tables" },
        { src: "../assets/p7.jpg", name: "Furniture Sets" },
        { src: "../assets/p8.jpg", name: "Recliners" },
        { src: "../assets/p9.jpg", name: "Storage" },
        { src: "../assets/p10.jpg", name: "Lighting" },
        { src: "../assets/p11.jpg", name: "Rugs" },
        { src: "../assets/p12.jpg", name: "Decor" }
      ];

      const slider = $(".popular-slider");

      images.forEach((image) => {
        slider.append(`
          
          <div class="item-card">
          <a href='#' class="link">
          <img src="${image.src}" alt="${image.name}">
            <div class="item-name">${image.name}</div>
          </a>
            
          </div>
        `);
      });
    });
  });

  $(document).ready(function () {
    $("#whats-new-section").load("components/whatsNew.html");
  });

// Savings section

$(document).ready(function () {
  // Load the savings component
  $("#savings-section").load("components/savings.html", function () {
    // After the component is loaded, attach the logic
    const scrollContent = $("#savings-content"); // Ensure #savings-content exists in savings.html
    const cardContainer=$("#cards-container")
    const indicatorLine = $("#indicator-line");

    function updateIndicatorLine() {
      const contentWidth = scrollContent[0].scrollWidth; // Total scrollable width
      const visibleWidth = scrollContent[0].clientWidth; // Width of the visible container
      const scrollLeft = scrollContent.scrollLeft(); // Current horizontal scroll position
      const movementRatio = scrollLeft / (contentWidth - visibleWidth);
      const indicatorMaxOffset = $(".scroll-indicator").width() - indicatorLine.width();
      const newOffset = Math.min(Math.max(0, movementRatio * indicatorMaxOffset), indicatorMaxOffset);
      indicatorLine.css("transform", `translateX(${newOffset}px)`);
    }

    scrollContent.on("scroll", updateIndicatorLine);

    // Buttons for scrolling
    $("#scroll-left").click(function () {
      scrollContent.animate({ scrollLeft: "-=300" }, 300, updateIndicatorLine);
    });

    $("#scroll-right").click(function () {
      scrollContent.animate({ scrollLeft: "+=300" }, 300, updateIndicatorLine);
    });

    updateIndicatorLine();

    // Add dynamic cards after loading the savings component
    const cardsData = [
      {
        brand: "Tempur Pedic",
        offer: "$500",
        description: "Save Up To $500 On Select Adjustable...",
        brandImage:"../assets/image (3).jpg",
        imagePath: "../assets/s1.jpg",
         bg:"#65C7CB"
      },
      {
        brand: "Antropologie",
        offer: "40%",
        description: "Up to 40% Off Sofas, Sectionals, & Accent...",
        brandImage:"../assets/image (3).jpg",
        imagePath: "../assets/s2.jpg",
        bg:"#00807A"
      },
      {
        brand: "One Kings Lane",
        offer: "40%",
        description: "Up to 40% Off Sofas, Sectionals, & Accent...",
        imagePath: "../assets/s2.jpg",
        brandImage:"../assets/image (5).jpg",
          bg:"#064E3B"
        
      },
      {
        brand: "Nectar",
        offer: "$800",
        description: "Save Up To $800 On Select Adjustable...",
        brandImage:"../assets/image (3).jpg",
        imagePath: "../assets/s1.jpg",
         bg:"#65C7CB"
      },
      {
        brand: "Arhaus",
        offer: "30%",
        description: "Up to 30% Off Sofas, Sectionals, & Accent...",
        brandImage:"../assets/image (3).jpg",
        imagePath: "../assets/s5.jpg",

        bg:"#84442E"
      },
      {
        brand: "Williams Sono..",
        offer: "30%",
        description: "Up to 30% Off Sofas, Sectionals, & Accent...",
        brandImage:"../assets/image (3).jpg",

        imagePath: "../assets/s7.jpg",
         bg:"#5A5A5A"
        
      },
      {
        brand: "Bed Gear",
        offer: "$500",
        description: "Up to $500 Off Performance Mattresses...",
        brandImage:"../assets/image (2).jpg",
        imagePath: "../assets/s1.jpg",
         bg:"#65C7CB"
      },
    ];

    cardsData.forEach((data) => {
      scrollContent.append(`
        <div class="savings-card" style="background-color:${data.bg} ;">
          <div class="card-content">
            <div class="text-content">

              <span class="brand">
              <img class="brand-image" src="${data.brandImage}" alt="${data.brand}">
              ${data.brand}
              </span>
              <h3>${data.offer}</h3>
              <p>${data.description}</p>
              <button class="visit-btn"> <img class="" src="${'../assets/arrow.png'}" style=" margin-right:4px "></i> Visit Site</button>
            </div>
            <div class="image-content">
              <img src="${data.imagePath}" alt="${data.brand}">
            </div>
          </div>
        </div>
      `);
    });

    // Recalculate the scroll indicator after adding cards
    updateIndicatorLine();
  });
});

// trending furniture section
$(document).ready(function () {
  $("#trending-section").load("components/trending.html");
});


$(document).ready(function () {
  $("#discover-section").load("components/discover.html");
});

$(document).ready(function () {
  $("#gallery-section").load("components/gallery.html");
});

$(document).ready(function () {
  $("#brands-section").load("components/brands.html");
});

$(document).ready(function () {
  $("#newsletter-section").load("components/newsletter.html");
});

$(document).ready(function () {
  $("#footer-container").load("components/footer.html");
});