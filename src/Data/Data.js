const data = [
  {
    name: "AMALA",
    price: "350",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-27-450x450.jpg",
    category: "SWALLOW",
  },
  {
    name: "ASUN",
    price: "1800",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-9-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "BEEF",
    price: "550",
    image: "https://mamacassng.com/wp-content/uploads/2020/12/beef-1.jpg",
    category: "PROTEIN",
  },
  {
    name: "BOILED PLANTAIN",
    price: "900",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/BOILED-PLANTAIN-450x450.jpg",
    category: "SIDE MEAL",
  },
  {
    name: "CATFISH",
    price: "2200",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/P1060165-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "CATFISH HEAD",
    price: "2500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-11-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "CELEBRATION CAKE",
    price: "7000",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/CELEBRATION-CAKE-450x450.jpg",
    category: "SIDE MEAL",
  },
  {
    name: "CELEBRATION CAKE MEDIUM",
    price: "8000",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/DSC_6788-copy-450x450.jpg",
    category: "SIDE MEAL",
  },
  {
    name: "CHAPMAN",
    price: "300",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/drinks-450x450.jpg",
    category: "DRINKS",
  },
  {
    name: "CHICKEN IN STEW",
    price: "800",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/12/CHICKEN-IN-STEW.jpg",
    category: "SOUP",
  },
  {
    name: "CHICKEN PIE",
    price: "800",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/CHICKEN-PIE-450x450.jpg",
    category: "PASTRIES",
  },
  {
    name: "CHILLY CHICKEN",
    price: "800",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/P1050469-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "COKE (CAN)",
    price: "300",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/CAN-COKE-MAMAMCASS-450x450.jpg",
    category: "DRINKS",
  },
  {
    name: "COKE PET",
    price: "350",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/coke-mama-cass-768x768.jpg",
    category: "DRINKS",
  },
  {
    name: "COOKIES",
    price: "50",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/COOKIES-1-450x450.jpg",
    category: "PASTRIES",
  },
  {
    name: "COW LEG",
    price: "1150",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/COW-LEG-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "EBA",
    price: "350",
    image: "https://mamacassng.com/wp-content/uploads/2020/10/EBA-450x450.jpg",
    category: "SWALLOW",
  },
  {
    name: "EDIKAIKONG",
    price: "900",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-19-450x450.jpg",
    category: "SOUP",
  },
  {
    name: "EFO RIRO",
    price: "1050",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/MAMA-CASS-1-768x768.png",
    category: "SOUP",
  },
  {
    name: "EGUSI",
    price: "500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/egusi.apng_-1-450x450.png",
    category: "SOUP",
  },
  {
    name: "EWA RIR0 (BEANS)",
    price: "500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-29-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "FANTA",
    price: "350",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/12/FANTA-MAMAMCASS-450x450.jpg",
    category: "DRINKS",
  },
  {
    name: "FARM PRIDE JUICE ( 500ML )",
    price: "500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/juice-768x768.jpg",
    category: "DRINKS",
  },
  {
    name: "FARM PRIDE YOGHURT (500ML)",
    price: "500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/juic2-768x768.jpg",
    category: "DRINKS",
  },
  {
    name: "FIVE ALIVE (BIG)",
    price: "1000",
    image: "https://mamacassng.com/wp-content/uploads/2020/10/five-768x768.jpg",
    category: "DRINKS",
  },
  {
    name: "FRENCH FRIES",
    price: "700",
    image:
      "https://mamacassng.com/wp-content/uploads/2021/05/mamacass-chicken1-450x450.jpg",
    category: "SIDE MEAL",
  },
  {
    name: "FRIED PLANTAIN (DODO)",
    price: "700",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/P1060479-450x450.jpg",
    category: "SIDE MEAL",
  },
  {
    name: "FRIED RICE COMBO",
    price: "700",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/rice-1-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "GOAT MEAT",
    price: "1150",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/GOAT-MEAT-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "HOLLANDIA YOGHURT (1Ltr)",
    price: "1400",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/jui1cw-768x768.jpg",
    category: "DRINKS",
  },
  {
    name: "HOLLANDIA YOGHURT (500ML)",
    price: "800",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/jui1cw-768x768.jpg",
    category: "DRINKS",
  },
  {
    name: "HOT BREAD",
    price: "400",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/mamacass1-768x768.jpg",
    category: "PASTRIES",
  },
  {
    name: "ICE CREAM",
    price: "300",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/orvcgin-768x768.jpg",
    category: "ICE CREAM",
  },
  {
    name: "JAM DOUGHNUT",
    price: "250",
    image: "https://mamacassng.com/wp-content/uploads/2020/10/doughnut.jpg",
    category: "SIDE MEAL",
  },
  {
    name: "JOLLOF RICE COMBO",
    price: "1600",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/fried-1-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "Jollof Rice+ Solo drink",
    price: "2200",
    image:
      "https://mamacassng.com/wp-content/uploads/2023/02/mama-cass-combo-jollof.jpg",
    category: "MEAL",
  },
  {
    name: "LUXURY RICE (COCONUT RICE)",
    price: "1850",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/LUXURY-COCONUT-RICE-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "MEAT PIE",
    price: "500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/mamacass-3-450x450.png",
    category: "SIDE MEAL",
  },
  {
    name: "MEXICAN FISH",
    price: "2750",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/MEXICAN-FISH-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "MINI LOAF CAKE",
    price: "950",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/whXWWte-1-768x768.jpg",
    category: "PASTRIES",
  },
  {
    name: "MIXED SALAD",
    price: "400",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/P1080101-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "MOI MOI with a whole egg in it.",
    price: "650",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-21-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "Moi Moi, Hot Bread + Solo drink",
    price: "1300",
    image:
      "https://mamacassng.com/wp-content/uploads/2023/02/mama-cass-combo-moi-moi.jpg",
    category: "MEAL",
  },
  {
    name: "NATIVE JOLLOF RICE",
    price: "1600",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/FOOD-RICE-768x768.png",
    category: "MEAL",
  },
  {
    name: "NOBLE RICE (FRIED RICE)",
    price: "1500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/NOBLE-FRIED-RICE-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "Noble Rice + Solo drink",
    price: "1750",
    image:
      "https://mamacassng.com/wp-content/uploads/2023/02/mama-cass-combo-noble-rice.jpg",
    category: "MEAL",
  },
  {
    name: "OFADA RICE",
    price: "800",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/P1050610-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "OFADA SAUCE",
    price: "1500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/P1050758-450x450.jpg",
    category: "SOUP",
  },
  {
    name: "OKRO SOUP",
    price: "650",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/MAMA-CASS-OKRO-450x450.jpg",
    category: "SOUP",
  },
  {
    name: "OMELETTE",
    price: "900",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/P1070685-450x450.jpg",
    category: "PASTRIES",
  },
  {
    name: "PEPPERED SNAIL",
    price: "1800",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/P1050657-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "PEPPERED TURKEY",
    price: "3900",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-13-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "PONMO",
    price: "450",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/NEW-PIX-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "POP CORN",
    price: "200",
    image:
      "https://mamacassng.com/wp-content/uploads/2021/05/popcorn-450x450.jpg",
    category: "PASTRIES",
  },
  {
    name: "PORRIDGE YAM",
    price: "600",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-36-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "POOUNDED YAM",
    price: "450",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/POUNDED-YAM-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "RISSI BISSI",
    price: "1150",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/RISSI-BISSI-RICE-BEANS-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "ROASTED CHICKEN",
    price: "2300",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-8-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "SAUSAGE-ROLL WITH SATIS",
    price: "450",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/SAUSAGE-ROLL-WITH-SATIS-450x450.jpg",
    category: "PASTRIES",
  },
  {
    name: "SCOTCH EGG",
    price: "450",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/mamacass-1-768x768.png",
    category: "PROTEIN",
  },
  {
    name: "SCRAMBLED EGGS",
    price: "550",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/P1060833-450x450.jpg",
    category: "PROTEIN",
  },
  {
    name: "SEAFOOD RICE",
    price: "900",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-28-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "SEMOVITA",
    price: "350",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/P1070100-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "SHAKI",
    price: "550",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/P1050540-450x450.jpg",
    category: "SIDE MEAL",
  },
  {
    name: "SMOKEY JOLLOF RICE",
    price: "1150",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/SMOKEY-JOLLOF-RICE-450x450.jpg",
    category: "MEAL",
  },
  {
    name: " SPAGETTI",
    price: "1050",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/SPAGETTI-450x450.jpg",
    category: "MEAL",
  },
  {
    name: " SPRITE",
    price: "300",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/12/SPIRIT-450x450.jpg",
    category: "DRINK",
  },
  {
    name: "SWALLOW COMBO",
    price: "1500",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/june-posts-768x768.jpg",
    category: "DRINK",
  },
  {
    name: "TITUS FISH IN STEW",
    price: "1250",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-5-450x450.jpg",
    category: "SOUP",
  },
  {
    name: "WATER 75cl",
    price: "200",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/WATER-768x768.jpg",
    category: "DRINK",
  },
  {
    name: "WHEAT BREAD",
    price: "850",
    image:
      "https://mamacassng.com/wp-content/uploads/2022/07/wheat-450x450.jpg",
    category: "PASTRIES",
  },
  {
    name: "WHITE BREAD",
    price: "1150",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/10/mamacass-4-450x384.png",
    category: "PASTRIES",
  },
  {
    name: "WHITE RICE",
    price: "600",
    image:
      "https://mamacassng.com/wp-content/uploads/2020/11/mamacass-restaurant-26-450x450.jpg",
    category: "MEAL",
  },
  {
    name: "YAMARITA",
    price: "1250",
    image:
      "https://mamacassng.com/wp-content/uploads/2022/07/yamarita-450x450.jpg",
    category: "PROTEIN",
  },
];

export default data;
