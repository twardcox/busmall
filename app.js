'use strict';

// Build Object Constructor
var TestItem = function(name, imageSrc) {
  this.name = name;
  this.url = imageSrc;
  this.clickedCount = 0;
  this.shownCount = 0;
  TestItem.allItems.push(this);
};

TestItem.allItems = [];

new TestItem('R2D2 Travel Case', './img/bag.jpg');
new TestItem('Banana Slicer', './img/banana.jpg');
new TestItem('Bathroom Attendant', './img/bathroom.jpg');
new TestItem('Freestyling Galoshes', './img/boots.jpg');
new TestItem('50\'s Luxury Bachelor', './img/breakfast.jpg');
new TestItem('Italy Treats', './img/bubblegum.jpg');
new TestItem('M.C. Escher Chair', './img/chair.jpg');
new TestItem('Dark Lord Cthulhu', './img/cthulhu.jpg');
new TestItem('GMA Creative Pets', './img/dog-duck.jpg');
new TestItem('Fresh Slayed', './img/dragon.jpg');
new TestItem('Executive Canteen Kit', './img/pen.jpg');
new TestItem('Pet Sweep', './img/pet-sweep.jpg');
new TestItem('Pieca\'a Pie Scissors', './img/scissors.jpg');
new TestItem('Shark Attack Sleeper', './img/shark.jpg');
new TestItem('Junior Sweep', './img/sweep.jpg');
new TestItem('Luke\'s Dreams Sleeper', './img/tauntaun.jpg');
new TestItem('Unicorn Meat', './img/unicorn.jpg');
new TestItem('Dark Lords Messenger App', './img/usb.jpg');
new TestItem('Self Watering Can', './img/water-can.jpg');
new TestItem('Wine Sniffer', './img/wine-glass.jpg');

// Get document entry points
var itemsImageSectionTag = document.getElementById('allItems');
var leftItemImageTag = document.getElementById('leftItemImg');
var rightItemImageTag = document.getElementById('rightItemImg');
var centerItemImageTag = document.getElementById('centerItemImg');

// holds total number of clicked items
var totalClicks = 0;

// holds current items
var rightItemBucket = null;
var leftItemBucket = null;
var centerItemBucket = null;

// generates a random number between 0 and a max number of items - 1 hard set to 3 during development
var randNum = function(3) {
  return Math.floor(Math.random() * Math.floor(max));
};

// function that randomly selects a number of Items from TestItem.allItems.
// var randSelectItems = function(numItems) {
//   var currentDisplayIndexs = [];
//   for (var i = 0; i < numItems; i++) {
//     var itemIndex = randNum(numItems);
//     while (currentDisplayIndexs.indexOf(itemIndex)) {
//       itemIndex = randNum(numItems);
//     }
//     currentDisplayIndexs.push(itemIndex);
//   }
//   return currentDisplayIndexs;
// };

var renderNewItems = function(leftIndex, rightIndex, centerIndex) {
  leftItemImageTag.src = TestItem.allItems[leftIndex].url;
  rightItemImageTag.src = TestItem.allItems[rightIndex].url;
  centerItemImageTag.src = TestItem.allItems[centerIndex].url;
};

var pickNewItems = function() {
  var leftIndex = Math.round(Math.random() * TestItem.allItems.length);
  var centerIndex = Math.round(Math.random() * TestItem.allItems.length);

  do {
    var rightIndex = Math.round(Math.random() * TestItem.allItems.length);
  } while (rightIndex === leftIndex);
  console.log(TestItem.allItems[leftIndex].name, TestItem.allItems[rightIndex].name, TestItem.allItems[centerIndex].name);

  leftItemBucket = TestItem.allItems[leftIndex];
  rightItemBucket = TestItem.allItems[rightIndex];
  centerItemBucket = TestItem.allItems[centerIndex];

  renderNewItems(leftIndex, rightIndex, centerIndex);
};

var handleClickOnItem = function(event) {
  console.log('im still alive');
  // if they can still click, do clicky things
  if (totalClicks < 10) {
    var thingWeClickedOn = event.target;
    var id = thingWeClickedOn.id;

    if (id === 'leftItemImg' || id === 'rightItemImg' || id === 'centerItemImg') {
      //track the goats
      // increment the goat image in the left_goat_image slot's clicks
      // if goat is the left goat, increment the left goat)
      if (id === 'leftItemImg') {
        leftItemBucket.clicks++;
      }

      if (id === 'rightItemImg') {
        rightItemBucket.clicks++;
        centerItemBucket;
      }
      if (id === 'centerItemImg') {
        rightItemBucket.clicks++;
        centerItemBucket;
      }

      leftItemBucket.timesShown++;
      rightItemBucket.timesShown++;
      centerItemBucket++;

      //after we update the old, pick new pictures
      pickNewItems();
    }
    console.log(event.target.id);
  }
  // increment amount of clicks
  totalClicks++;
  //when they reach total max clicks, remove the clicky function
  if (totalClicks === 4) {
    itemImageSectionTag.removeEventListener('click', handleClickOnItem);
  }
};

// leftGoatImageTag.addEventListener('click', handleClickOnItem);
// rightGoatImageTag.addEventListener('click', handleClickOnItem);

itemImageSectionTag.addEventListener('click', handleClickOnItem);
// itemImageSectionTag.removeEventListener('click', handleClickOnItem);

// Instantiate my image objects

//Track the default goats;

leftItemBucket = TestItem.allItems[3];
rightItemBucket = TestItem.allItems[0];
centerItemBucket = TestItem.allItems[2];
centerItemBucket;

pickNewItems();
