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

  $(document).ready(function () {
    const $headerTop = $('.header-top');
    const $links = $('.header-links');
    let currentIndex = 0;
    const totalLinks = $links.length;
  
    // Function to show the current link
    function showLink(index) {
      const translateX = -index * 100;
      $headerTop.css({
        transform: `translateX(${translateX}%)`,
        transition: 'transform 0.5s ease-in-out',
      });
    }
  
    // Auto-slide every 3 seconds
    setInterval(function () {
      currentIndex = (currentIndex + 1) % totalLinks;
      showLink(currentIndex);
    }, 3000);
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


// code for shop new brands section

$(document).ready(function () {
  // Load the shops section
  $("#shop-section").load("components/shop.html", function () {
    const scrollContent = $("#shops-content");
    const indicatorLine = $("#indicator-line-s");

    // Update scroll indicator
    function updateIndicatorLine() {
      const contentWidth = scrollContent[0].scrollWidth;
      const visibleWidth = scrollContent[0].clientWidth;
      const scrollLeft = scrollContent.scrollLeft();
      const movementRatio = scrollLeft / (contentWidth - visibleWidth);
      const indicatorMaxOffset = $(".scroll-indicator-s").width() - indicatorLine.width();
      const newOffset = Math.min(Math.max(0, movementRatio * indicatorMaxOffset), indicatorMaxOffset);
      indicatorLine.css("transform", `translateX(${newOffset}px)`);
    }

    scrollContent.on("scroll", updateIndicatorLine);

    // Scroll Buttons
    $("#scroll-left-s").click(function () {
      scrollContent.animate({ scrollLeft: "-=300" }, 300, updateIndicatorLine);
    });

    $("#scroll-right-s").click(function () {
      scrollContent.animate({ scrollLeft: "+=300" }, 300, updateIndicatorLine);
    });

    updateIndicatorLine();

    // Shop Cards Data
    const shopCardsData = [
      {
        brand: "One Kings Lane",
        brandImage:"../assets/kinglane.jpg",
        title: "Margot Grey Turkish Knot Rug",
        availble:"Available to be shipped",
        price: "$3,149.00",
        oldPrice: "",
        imageDefault: "../assets/shop/sh1_1.jpg",
        imageHover: "../assets/shop/sh1_2.jpg",
        colors: [
         
        ],
      },
      {
        brand: "One Kings Lane",
        
        brandImage:"../assets/kinglane.jpg",
        title: "Marth Stewart Logan Chair - Lily Pond Linen...",
        price: "$3,149.98",
        oldPrice: "$4,500.00",
        imageDefault: "../assets/shop/sh2_1.jpg",
        imageHover: "../assets/shop/sh2_2.jpg",
        availble:"Available to be shipped",
        colors: [
        
          { color: "#7E7666", image: "../assets/shop/sh2_1.jpg" },
          { color: "#ABBEBF", image: "../assets/shop/sh2-5.jpg" },
          { color: "#E9DDCA", image: "../assets/shop/sh2_4.jpg" },
          { color: "#CF1020", image: "../assets/shop/sh2-3.jpg" },
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"../assets/kinglane.jpg",
        title: "Leyla Floral Pillow - Olive",
        price: "$3,149.98",
        oldPrice: "$4,500.00",
        imageDefault: "../assets/shop/sh3_1.jpg",
        imageHover: "../assets/shop/sh3_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"../assets/kinglane.jpg",
        title: "Hugo Oak Bed - Walnut - Tulsi Home - Brown",
        price: "$1719.98",
        oldPrice: "$2650.00",
        imageDefault: "../assets/shop/sh4_1.jpg",
        imageHover: "../assets/shop/sh4_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"../assets/kinglane.jpg",
        title: "Sukie 1-Drawer Nightstand - Navy",
        price: "$3,149.98",
        oldPrice: "$4,500.00",
        imageDefault: "../assets/shop/sh5_1.jpg",
        imageHover: "../assets/shop/sh5_2.jpg",
        availble:"Available to be shipped",
        colors: [
         
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"../assets/kinglane.jpg",

        title: "Hourglass Side Table",
        price: "$242.10",
        oldPrice: "$269.00",
        imageDefault: "../assets/shop/sh7_1.jpg",
        imageHover: "../assets/shop/sh7_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
      {
        brand: "One Kings Lane",
        brandImage:"../assets/kinglane.jpg",

        title: "Promenade Chair in Ivory Boucle",
        price: "$242.10",
        oldPrice: "$269.00",
        imageDefault: "../assets/shop/sh8_1.jpg",
        imageHover: "../assets/shop/sh8_2.jpg",
        availble:"Available to be shipped",
        colors: [
          
        ],
      },
    ];
    

    // Render Cards
    shopCardsData.forEach((data) => {
      const colorOptions = data.colors
        .map(
          (color) =>
            `<span class="color-option" style="background:${color.color}" data-image="${color.image}"></span>`
        )
        .join("");
    
      const cardHtml = `
        <div class="shop-card">
          <div class="image-container">
            <img src="${data.imageDefault}" class="default-image"  alt="${data.title}">
            <img src="${data.imageHover}" class="hover-image" style="display:none" alt="${data.title}">
          </div>
          <div class="content">

            <span class="brand"><img src="${data.brandImage}" class="brand-image"  alt="${data.title}"> <span> ${data.brand}</span></span>
            <p>${data.title}</p>
            <div class="price">
              <span>${data.price}</span>
              <span class="old-price">${data.oldPrice}</span>
            </div>
            <div class="color-options">
              ${colorOptions}
            </div>
             <p>${data.availble}</p>
          </div>
        </div>
      `;
    
      $("#shops-content").append(cardHtml);
    });
    
    // Add Hover Effects
    $(".shop-card .image-container").hover(
      function () {
        $(this).find(".default-image").css("display", "none");
        $(this).find(".hover-image").css("display", "block");
      },
      function () {
        $(this).find(".default-image").css("display", "block");
        $(this).find(".hover-image").css("display", "none");
      }
    );
    

    // Handle Color Selection
    $(".color-options span").click(function () {
      const selectedImage = $(this).data("image"); // Get the image URL associated with the color
      const card = $(this).closest(".shop-card"); // Get the closest card
      card.find(".default-image").attr("src", selectedImage); // Update the default image with the new image
    });
    

    updateIndicatorLine();
  });
});
