import brassDiyaImg from '@/assets/brass-diya.jpg';
import pashminaImg from '@/assets/pashmina-shawl.jpg';
import woodenElephantImg from '@/assets/wooden-elephant.jpg';
import bluePotteryImg from '@/assets/blue-pottery.jpg';
import madhubaniImg from '@/assets/madhubani-art.jpg';
import bidriBoxImg from '@/assets/bidri-box.jpg';
import souvenirsImg from '@/assets/souvenirs.jpg';

export interface Souvenir {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  artisan: string;
  origin: string;
}

const imgs = [brassDiyaImg, pashminaImg, woodenElephantImg, bluePotteryImg, madhubaniImg, bidriBoxImg, souvenirsImg];
const pick = (i: number) => imgs[i % imgs.length];

export const souvenirs: Souvenir[] = [
  // === AGRA, Uttar Pradesh (Taj Mahal, Agra Fort) ===
  { id: 'agra-marble-inlay', name: 'Marble Inlay Tabletop', price: 5499, image: pick(0), description: 'Pietra dura marble inlay work inspired by Taj Mahal craftsmanship', category: 'Decor', artisan: 'Agra Stone Artisans', origin: 'Agra, Uttar Pradesh' },
  { id: 'agra-miniature-taj', name: 'Miniature Taj Mahal', price: 1999, image: pick(1), description: 'Handcrafted white marble replica of the iconic Taj Mahal', category: 'Sculpture', artisan: 'Agra Marble Workers', origin: 'Agra, Uttar Pradesh' },

  // === AYODHYA, Uttar Pradesh (Ram Mandir) ===
  { id: 'ayodhya-wood-carving', name: 'Ram Darbar Wood Carving', price: 3299, image: pick(2), description: 'Intricate wooden carving depicting Ram Darbar scene', category: 'Sculpture', artisan: 'Ayodhya Woodworkers', origin: 'Ayodhya, Uttar Pradesh' },
  { id: 'ayodhya-chikankari', name: 'Chikankari Kurta Fabric', price: 2499, image: pick(3), description: 'Hand-embroidered Lucknowi Chikankari on fine cotton', category: 'Textiles', artisan: 'Lucknow Embroiderers', origin: 'Uttar Pradesh' },

  // === AURANGABAD, Maharashtra (Ellora Caves) ===
  { id: 'ellora-paithani', name: 'Paithani Silk Stole', price: 4999, image: pick(4), description: 'Traditional Paithani silk stole with peacock motifs', category: 'Textiles', artisan: 'Paithan Weavers', origin: 'Aurangabad, Maharashtra' },
  { id: 'ellora-himroo', name: 'Himroo Shawl', price: 3799, image: pick(5), description: 'Handwoven Himroo brocade shawl with Ajanta-inspired patterns', category: 'Textiles', artisan: 'Aurangabad Weavers', origin: 'Aurangabad, Maharashtra' },

  // === AURANGABAD, Maharashtra (Ajanta Caves) ===
  { id: 'ajanta-mural-print', name: 'Ajanta Mural Art Print', price: 1499, image: pick(6), description: 'High-quality reproduction of iconic Ajanta cave paintings', category: 'Art', artisan: 'Maharashtra Artists', origin: 'Aurangabad, Maharashtra' },
  { id: 'ajanta-warli-frame', name: 'Warli Art Frame', price: 1899, image: pick(0), description: 'Traditional Warli tribal painting on handmade paper', category: 'Art', artisan: 'Warli Tribal Artists', origin: 'Maharashtra' },

  // === MUMBAI, Maharashtra (Elephanta Caves) ===
  { id: 'elephanta-bronze', name: 'Nataraja Bronze Figurine', price: 4599, image: pick(1), description: 'Lost-wax cast bronze Nataraja inspired by Elephanta sculptures', category: 'Sculpture', artisan: 'Mumbai Bronze Casters', origin: 'Mumbai, Maharashtra' },
  { id: 'elephanta-kolhapuri', name: 'Kolhapuri Leather Chappal', price: 1699, image: pick(2), description: 'Handcrafted vegetable-tanned leather Kolhapuri sandals', category: 'Accessories', artisan: 'Kolhapur Cobblers', origin: 'Maharashtra' },

  // === THANJAVUR, Tamil Nadu (Chola Temple) ===
  { id: 'thanjavur-painting', name: 'Thanjavur Gold Painting', price: 6999, image: pick(3), description: 'Traditional Thanjavur painting with 22k gold foil and semi-precious stones', category: 'Art', artisan: 'Thanjavur Artists', origin: 'Thanjavur, Tamil Nadu' },
  { id: 'thanjavur-bobblehead', name: 'Thanjavur Bobblehead Doll', price: 1299, image: pick(4), description: 'Classic Thanjavur dancing doll with bobbing head', category: 'Decor', artisan: 'Thanjavur Craftsmen', origin: 'Thanjavur, Tamil Nadu' },

  // === KHAJURAHO, Madhya Pradesh ===
  { id: 'khajuraho-stone', name: 'Sandstone Temple Carving', price: 2999, image: pick(5), description: 'Miniature sandstone carving inspired by Khajuraho temple sculptures', category: 'Sculpture', artisan: 'Khajuraho Stone Carvers', origin: 'Khajuraho, Madhya Pradesh' },
  { id: 'khajuraho-tribal', name: 'Gond Tribal Painting', price: 2499, image: pick(6), description: 'Vibrant Gond art painting on canvas depicting nature and mythology', category: 'Art', artisan: 'Gond Tribal Artists', origin: 'Madhya Pradesh' },

  // === BHIMBETKA, Madhya Pradesh ===
  { id: 'bhimbetka-cave-art', name: 'Cave Art Reproduction', price: 1799, image: pick(0), description: 'Hand-painted reproduction of prehistoric Bhimbetka rock art', category: 'Art', artisan: 'MP Tribal Artists', origin: 'Raisen, Madhya Pradesh' },
  { id: 'bhimbetka-bell-metal', name: 'Dhokra Bell Metal Art', price: 2899, image: pick(1), description: 'Ancient lost-wax Dhokra casting of tribal figurines', category: 'Sculpture', artisan: 'Bastar Dhokra Artists', origin: 'Madhya Pradesh' },

  // === CHITTORGARH, Rajasthan ===
  { id: 'chittorgarh-lac-bangles', name: 'Rajasthani Lac Bangles Set', price: 599, image: pick(2), description: 'Colorful handmade lac bangles with mirror work', category: 'Accessories', artisan: 'Rajasthan Bangle Makers', origin: 'Chittorgarh, Rajasthan' },
  { id: 'chittorgarh-miniature', name: 'Mewar Miniature Painting', price: 3999, image: pick(3), description: 'Royal Mewar school miniature painting on silk', category: 'Art', artisan: 'Udaipur Artists', origin: 'Rajasthan' },

  // === JAIPUR, Rajasthan ===
  { id: 'jaipur-blue-pottery', name: 'Jaipur Blue Pottery Vase', price: 1899, image: bluePotteryImg, description: 'Traditional blue pottery vase with Persian-inspired patterns', category: 'Pottery', artisan: 'Jaipur Potters', origin: 'Jaipur, Rajasthan' },
  { id: 'jaipur-block-print', name: 'Block Print Table Runner', price: 999, image: pick(4), description: 'Hand block-printed cotton table runner with traditional motifs', category: 'Textiles', artisan: 'Sanganer Printers', origin: 'Jaipur, Rajasthan' },

  // === GOA (Churches & Convents) ===
  { id: 'goa-azulejo', name: 'Goan Azulejo Tile Set', price: 1599, image: pick(5), description: 'Hand-painted Portuguese-style ceramic tiles', category: 'Decor', artisan: 'Goa Tile Artists', origin: 'Old Goa' },
  { id: 'goa-coconut-craft', name: 'Coconut Shell Lamp', price: 899, image: pick(6), description: 'Carved coconut shell lamp with intricate jali patterns', category: 'Decor', artisan: 'Goan Artisans', origin: 'Goa' },

  // === DHOLAVIRA, Gujarat ===
  { id: 'dholavira-bandhani', name: 'Kutchi Bandhani Dupatta', price: 1999, image: pick(0), description: 'Traditional tie-dye Bandhani work on fine cotton', category: 'Textiles', artisan: 'Kutch Artisans', origin: 'Kutch, Gujarat' },
  { id: 'dholavira-rogan', name: 'Rogan Art Painting', price: 3499, image: pick(1), description: 'Rare Rogan art on cloth using castor oil paint — a dying craft', category: 'Art', artisan: 'Nirona Village Artists', origin: 'Kutch, Gujarat' },

  // === AHMEDABAD, Gujarat ===
  { id: 'ahmedabad-patola', name: 'Patola Silk Saree Piece', price: 7999, image: pick(2), description: 'Double ikat Patan Patola silk fabric piece', category: 'Textiles', artisan: 'Patan Weavers', origin: 'Ahmedabad, Gujarat' },
  { id: 'ahmedabad-wooden-toy', name: 'Lacquered Wooden Toy Set', price: 699, image: pick(3), description: 'Colorful lacquered wooden toy set in traditional style', category: 'Decor', artisan: 'Gujarat Toy Makers', origin: 'Gujarat' },

  // === NALANDA, Bihar ===
  { id: 'nalanda-madhubani', name: 'Madhubani Painting', price: 3499, image: madhubaniImg, description: 'Authentic hand-painted Madhubani artwork on handmade paper', category: 'Art', artisan: 'Bihar Artists', origin: 'Bihar' },
  { id: 'nalanda-sujni', name: 'Sujni Embroidery Wall Hanging', price: 2799, image: pick(4), description: 'Layered Sujni embroidery depicting folk tales of Bihar', category: 'Textiles', artisan: 'Bihar Embroiderers', origin: 'Bihar' },

  // === DELHI (Humayun\'s Tomb, Qutub Minar, Red Fort) ===
  { id: 'delhi-zardozi', name: 'Zardozi Embroidered Clutch', price: 2999, image: pick(5), description: 'Gold thread Zardozi embroidery on velvet clutch bag', category: 'Accessories', artisan: 'Old Delhi Craftsmen', origin: 'Delhi' },
  { id: 'delhi-brass-diya', name: 'Traditional Brass Diya', price: 1299, image: brassDiyaImg, description: 'Handcrafted brass oil lamp with intricate peacock design', category: 'Decor', artisan: 'Moradabad Craftsmen', origin: 'Delhi' },
  { id: 'delhi-meenakari', name: 'Meenakari Jewelry Box', price: 1899, image: pick(6), description: 'Enameled brass jewelry box with Mughal floral patterns', category: 'Decor', artisan: 'Delhi Meenakari Artists', origin: 'Delhi' },

  // === HAMPI, Karnataka ===
  { id: 'hampi-sandalwood', name: 'Sandalwood Carved Elephant', price: 2499, image: woodenElephantImg, description: 'Intricately carved sandalwood elephant figurine', category: 'Sculpture', artisan: 'Mysore Artisans', origin: 'Karnataka' },
  { id: 'hampi-channapatna', name: 'Channapatna Wooden Toys', price: 799, image: pick(0), description: 'GI-tagged lacquered wooden toys in vibrant colors', category: 'Decor', artisan: 'Channapatna Artisans', origin: 'Karnataka' },
  { id: 'hampi-bidri', name: 'Bidriware Jewelry Box', price: 4299, image: bidriBoxImg, description: 'Black metal box with silver inlay work', category: 'Decor', artisan: 'Bidar Craftsmen', origin: 'Karnataka' },

  // === KONARK, Odisha ===
  { id: 'konark-pattachitra', name: 'Pattachitra Painting', price: 2999, image: pick(1), description: 'Traditional Odisha Pattachitra scroll painting on cloth', category: 'Art', artisan: 'Raghurajpur Artists', origin: 'Odisha' },
  { id: 'konark-silver-filigree', name: 'Silver Filigree Pendant', price: 3499, image: pick(2), description: 'Delicate Cuttack silver filigree jewelry piece', category: 'Accessories', artisan: 'Cuttack Silversmiths', origin: 'Odisha' },

  // === KAZIRANGA, Assam ===
  { id: 'kaziranga-muga-silk', name: 'Assamese Muga Silk Stole', price: 5499, image: pick(3), description: 'Golden Muga silk stole — exclusive to Assam', category: 'Textiles', artisan: 'Sualkuchi Weavers', origin: 'Assam' },
  { id: 'kaziranga-bamboo', name: 'Bamboo & Cane Basket', price: 899, image: pick(4), description: 'Handwoven bamboo and cane craft basket', category: 'Decor', artisan: 'Assam Bamboo Artisans', origin: 'Assam' },

  // === SUNDARBANS, West Bengal ===
  { id: 'sundarbans-terracotta', name: 'Bishnupur Terracotta Panel', price: 1999, image: pick(5), description: 'Terracotta temple panel replica from Bishnupur', category: 'Sculpture', artisan: 'Bankura Potters', origin: 'West Bengal' },
  { id: 'sundarbans-dokra', name: 'Dokra Brass Figurine', price: 2299, image: pick(6), description: 'Ancient Dokra lost-wax brass tribal figurine', category: 'Sculpture', artisan: 'Bengal Dokra Artists', origin: 'West Bengal' },

  // === WESTERN GHATS (Multi-state) ===
  { id: 'western-ghats-spices', name: 'Kerala Spice Gift Box', price: 1299, image: pick(0), description: 'Curated box of cardamom, pepper, cinnamon & clove from Munnar', category: 'Specialty', artisan: 'Kerala Spice Farmers', origin: 'Kerala' },
  { id: 'western-ghats-coorgi', name: 'Coorgi Silver Jewelry', price: 3999, image: pick(1), description: 'Traditional Kodava silver coin necklace (Jomale)', category: 'Accessories', artisan: 'Coorg Silversmiths', origin: 'Coorg, Karnataka' },

  // === VALLEY OF FLOWERS, Uttarakhand ===
  { id: 'valley-wool-shawl', name: 'Garhwali Wool Shawl', price: 2999, image: pashminaImg, description: 'Handwoven pure wool shawl with traditional Garhwali patterns', category: 'Textiles', artisan: 'Chamoli Weavers', origin: 'Uttarakhand' },
  { id: 'valley-ringal-craft', name: 'Ringal Bamboo Craft', price: 799, image: pick(2), description: 'Himalayan ringal bamboo craft — baskets and decor', category: 'Decor', artisan: 'Uttarakhand Artisans', origin: 'Uttarakhand' },

  // === GREAT HIMALAYAN NP, Himachal Pradesh ===
  { id: 'himalayan-kullu-shawl', name: 'Kullu Handloom Shawl', price: 3499, image: pick(3), description: 'GI-tagged Kullu handloom shawl with geometric patterns', category: 'Textiles', artisan: 'Kullu Weavers', origin: 'Kullu, Himachal Pradesh' },
  { id: 'himalayan-chamba-rumal', name: 'Chamba Rumal Embroidery', price: 4999, image: pick(4), description: 'Miniature Pahari painting embroidered on muslin cloth', category: 'Art', artisan: 'Chamba Artisans', origin: 'Himachal Pradesh' },

  // === KANGCHENJUNGA, Sikkim ===
  { id: 'sikkim-thangka', name: 'Sikkimese Thangka Painting', price: 7499, image: pick(5), description: 'Buddhist Thangka scroll painting with natural mineral pigments', category: 'Art', artisan: 'Sikkim Monastery Artists', origin: 'Sikkim' },
  { id: 'sikkim-bamboo-craft', name: 'Lepcha Bamboo Container', price: 999, image: pick(6), description: 'Traditional Lepcha tribe bamboo woven container', category: 'Decor', artisan: 'Lepcha Artisans', origin: 'Sikkim' },
];
