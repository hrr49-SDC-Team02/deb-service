const faker = require('faker');
const path = require('path');
const fs = require('fs');

// Array of photo urls from s3
var photoUrls = ['https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/031dcb9df9b7f59febe978bf8ccdcc3d.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/08cd1c223709821d4833dd004e4d35e2-p_e.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/1_p1zBnv11CSx_EII8sB9Uaw.jpeg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/1407953244000-177513283.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/27514080792_6371181022_o.0.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/42beb0625d2c8673ce3d8317d495454b.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/960x0.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/airbnb-tips-greenwich-village-apt.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/amish-prefab-cabins-and-log-home-for-sale.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/blueground-apartment-2-2-2.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/d062d4a3c20ed27f4a8bf843a449dc68.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/d55b10d433b07982c487b40d9e27420f.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/detail-EXP-header.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/Donnas-Premier-Lodging-Cabin-Google.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/fecc83ebe360dcf44233210ebf29f958.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/harman-s-luxury-log-cabins.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/Log-Cabin-Homes-Stunning-Log-Cabin.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/log-cabin-master-result-standard.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/log-cabin-master-result-standard.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/Modular-Cabin3-scaled.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/Villa-Homes-Photos-by-Chris-web-2.jpg', 'https://fec-photos-beartnt.s3-us-west-1.amazonaws.com/fec_pictures/Winchester-Homes-uncategorized-2710.jpg'];


// house types reflecting real airbnb house types
var houseTypes = ['Entire house', 'Hotel room', 'Entire apartment', 'Tent', 'Private room', 'Entire condominium'];

// semi real potential list titles for users
var favoriteTitles = ['Favorites', 'Beach Homes', 'Weekend Getaways', 'Ski Spots', 'Campsites', 'Good Nightlife'];

const relatedListingsWrite = fs.createWriteStream('db/relatedListings.csv');
//relatedListingsWrite.write('type,numOfBeds,photoUrl,superhost,rating,numOfRatings,description, price,ListingId\n', 'utf8');

for (let i = 0; i <= 10000000; i++) {
  let obj = {}
  obj.id = i;
  obj.type = houseTypes[Math.floor(Math.random() * houseTypes.length)];
  obj.numOfBeds = Math.ceil(Math.random() * 5);
  obj.photoUrl = photoUrls[Math.floor(Math.random() * photoUrls.length)];
  obj.superhost = faker.random.boolean();
  obj.favorite = faker.random.boolean();
  obj.rating = (Math.random() * 5).toFixed(2);
  obj.numOfRatings = faker.random.number({'min': 1, 'max': 500});
  obj.description = faker.lorem.sentence();
  obj.price = faker.random.number({'min': 30, 'max': 500});
  obj.listID = faker.random.number({'min': 0, 'max': 10000});
  relatedListingsWrite.write(`${obj.id},${obj.type},${obj.numOfBeds},${obj.photoUrl},${obj.superhost},${obj.favorite},${obj.rating},${obj.numOfRatings},${obj.description},${obj.price},${obj.listID}\n`, 'utf8');
}

const listingsWrite = fs.createWriteStream('db/listings.csv');
//listingsWrite.write('type,numOfBeds,photoUrl,superhost,rating,numOfRatings,description,price,FavoriteListId\n', 'utf8')

for (let i = 0; i <= 10000; i++) {
  let obj = {}
  obj.id = i;
  obj.type = houseTypes[Math.floor(Math.random() * houseTypes.length)];
  obj.numOfBeds = Math.ceil(Math.random() * 5);
  obj.photoUrl = photoUrls[Math.floor(Math.random() * photoUrls.length)];
  obj.superhost = faker.random.boolean();
  obj.rating = (Math.random() * 5).toFixed(2);
  obj.numOfRatings = faker.random.number({'min': 1, 'max': 500});
  obj.description = faker.lorem.sentence();
  obj.price = faker.random.number({'min': 30, 'max': 500});
  obj.favListID = faker.random.number({'min': 0, 'max': 500});
  listingsWrite.write(`${obj.id},${obj.type},${obj.numOfBeds},${obj.photoUrl},${obj.superhost},${obj.favorite},${obj.rating},${obj.numOfRatings},${obj.description},${obj.price},${obj.favListID}\n`, 'utf8');
}

const favoritesWrite = fs.createWriteStream('db/favorites.csv');
//favoritesWrite.write('UserId\n', 'utf8')
for (let i = 0; i <= 500; i++) {
  let obj = {};
  obj.id = i;
  obj.uID = faker.random.number({'min': 0, 'max': 500});
  obj.listID = faker.random.number({'min': 0, 'max': 10000});
  favoritesWrite.write(`${obj.id},${obj.uID},${obj.listID}\n`, 'utf8');
}

const favoriteListingWrite = fs.createWriteStream('db/favListings.csv');
//favoriteListingWrite.write('name,photoUrl,listingId\n');

for (let i = 0; i <= 500; i++) {
  let obj = {};
  obj.id = i;
  obj.name = favoriteTitles[Math.floor(Math.random() * favoriteTitles.length)];
  obj.photoUrl = photoUrls[Math.floor(Math.random() * photoUrls.length)];
  obj.favID = faker.random.number({'min': 0, 'max': 500});
  obj.uID = faker.random.number({'min': 0, 'max': 500});
  favoriteListingWrite.write(`${obj.id},${obj.name},${obj.photoUrl},${obj.favID},${obj.uID}\n`, 'utf8');
}

const userWrite = fs.createWriteStream('db/users.csv');
//userWrite.write('userName\n', 'utf8');

for (let i = 0; i <= 500; i++) {
  let obj = {};
  obj.id = i;
  obj.userName = faker.internet.userName();
  userWrite.write(`${obj.id},${obj.userName}\n`, 'utf8');
}

