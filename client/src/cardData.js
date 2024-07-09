const cardData = [
  {
    image:
      "https://www.svetoutdooru.cz/wp-content/uploads/sites/3/2021/03/greater-patagonian-trail-03-1500x880.jpg",
    title: "Greater Patagonian Track",
    location: "Chile and Argentina",
    length: "140 KM",
    difficulty: 3,
    description:
      "The Greater Patagonian Trail (GPT) is a long-distance route network in the southern Andes that spans from the outskirts of Santiago all the way to southern Patagonia. It’s a stunningly beautiful and diverse trail system that guides you from the semi-desert of the Precordillera into scenic Andes valleys. The trails cross numerous dormant and active volcanos with partially healed volcanic scars and fresh open wounds from recent eruptions. You can take a dip in more than a dozen hot springs along the way to draw from this energy.",
  },
  {
    image:
      "https://floridahikes.com/wp-content/uploads/2019/04/05-OTL-30-e1696255095360-800x451.jpg",
    title: "Ocean to Lake Trail",
    location: "Florida",
    length: "98 KM",
    difficulty: 1,
    description:
      "61 miles. The Ocean to Lake Hiking Trail near Jupiter is one of the more beautiful and difficult backpacking routes in South Florida. It is a surprising introduction to wild spaces that you wouldn’t expect to still exist on this heavily populated coast of Florida. Created and maintained by the Loxahatchee chapter of the Florida Trail Association, it is a spur off the Florida Trail.",
  },
  {
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/924077ca4ea496dc28d44444f252cd6f062a08a8d42ba9b37709be7ceab76216.jpg",
    title: "Hayduke Trail",
    location: "Utah and Arizona",
    length: "1300 KM",
    difficulty: 3,
    description:
      "The Hayduke Trail is an extremely challenging, 800-mile backcountry route through some of the most rugged and breathtaking landscapes on earth. Located entirely on public land, the trail links six of the National Parks on the Colorado Plateau in Southern Utah and Northern Arizona with the lesser known, but equally splendid, lands in between them.",
  },
  {
    image:
      "https://preview.redd.it/jl7kka3l4m751.jpg?width=1080&crop=smart&auto=webp&s=43432e5b6cb751887d3be0da415dd68c762078cc",
    title: "Lycian Way",
    location: "Turkey",
    length: "760 KM",
    difficulty: 3,
    description:
      "The Lycian Way (Turkish: Likya Yolu) is a marked long-distance hiking trail in southwestern Turkey around part of the coast of ancient Lycia.[1] It is approximately 520 km (320 mi) in length and stretches from Hisarönü (Ovacık), near Fethiye, to Aşağı Karaman in Konyaaltı, about 20 km (12 mi) from Antalya. It is waymarked with red and white stripes of the GR footpath convention. The trail, which was conceived by Briton Kate Clow, takes its name from the ancient civilization that once ruled the region.",
  },
  {
    image:
      "https://newzealandtrails.com/assets/Uploads/rakiura-track-stewart-island2.jpg",
    title: "Rakiura Track",
    location: "New Zealand",
    length: "32 KM",
    difficulty: 2,
    description:
      "Escape on an island adventure, and exchange the hustle and bustle of the mainland for the tranquility of the Rakiura Track. Located in Rakiura National Park on Stewart Island/Rakiura, this is a leisurely hike suitable for anyone with a moderate level of fitness. Relax and unwind in the peaceful surroundings, with the bush, birds and beach at your side.",
  },
  {
    image:
      "https://www.gap360.com/tpl/lib/img/private/media/peru-machu-picchu-group-exploring-img7116-lg-rgb.jpeg",
    title: "Inca Trail to Machu Picchu",
    location: "Peru",
    length: "43 KM",
    difficulty: 4,
    description:
      "There are three ways to get to Machu Picchu: with the classic train trip, with the alternative route by Hydroelectric and with the Inca Trail. This last route is considered the most incredible, the most surprising of all. In 4 days of hiking and 3 nights of camping, cross 39 kilometers of trails that the Incas built hundreds of years ago. The goal is the Intipunku, the gateway to Machu Picchu used by the Incas and that only tourists who do the Inca Trail can see. In ‘Icaminoinca’ you can find all the advice you need on this route.The Inca Trail is the best hiking route in Peru.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwt8h9a7pv9AhwfVtGdQB3iyrEMyry83tL05ERfrJ7w&s",
    title: "Route K - Plitvice Lakes N.P.",
    location: "Croatia",
    length: "17 KM",
    difficulty: 4,
    description:
      "Plitvice Lakes is an astonishing national park in central Croatia, home to arguably some of the most spectacular lakes in Europe. There are 16 lakes here, to be precise, and each varies in colour — from deep blue to emerald green to vibrant turquoise — depending on the algae, mineral and microorganism content of the water.",
  },
  {
    image:
      "https://caminodesantiago20.es/imagenes/Descubre-la-historia-del-Camino-de-Santiago.jpg",
    title: "Camino du Santiago",
    location: "Spain",
    length: "790 KM",
    difficulty: 3,
    description:
      "Traditionally your pilgrimage to Santiago would have started from your home, nowadays, these nine routes to the Catedral de Santiago de Compostela have become the most popular Camino Ways. Whether you travel for quality time with friends and family, to get away from everyday worries, or for personal fulfilment and enrichment, the memories you build on the Camino will stay with you forever. Each route has its own unique history and spectacular sights.",
  },
  {
    image:
      "https://cdn-adventures-live.azureedge.net/adventurescache/a/8/2/f/a/7/a82fa774df62f45106fd6540cb390531b2663214.webp",
    title: "Mont Blanc Trail",
    location: "France, Italy, and Switzerland",
    length: "170 KM",
    difficulty: 3,
    description:
      "The Tour du Mont Blanc is a walking trail in the French, Italian and Swiss Alps making a 180km circuit of Mont Blanc, starting and finishing in Les Houches near Chamonix.The highest point reached by the standard route is 2,584m and the height gain (and therefore loss) around the whole Tour is around 10,600m.",
  },
  {
    image:
      "https://www.switchbacktravel.com/sites/default/files/image_fields/field_imgs_inline/West%20Coast%20Trail%20%28trail%29.jpg",
    title: "The West Cost Trail",
    location: "Vancouver Island, Canada",
    length: "75 KM",
    difficulty: 2,
    description:
      "The West Coast Trail (WCT) is an iconic backcountry, multi-day backpacking trail that is a bucket list challenge for many hikers. It is an experience that can bring even the most experienced hikers to their knees. Those who are well prepared physically, mentally, and equipment-wise, come away with tales of grit.Hikers climb more than 100 ladders with a heavy pack, trudge through deep mud, wade through mountain-fed rivers in fast-flowing hip-deep waters, and push through whatever weather the wild West Coast delivers — often driving wind and rain.",
  },
];

export default cardData;
