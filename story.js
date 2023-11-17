 /** 
 * Gets the active scene index. If not stored in local storage, defaults to 0.
 * @type {number}
 */
  let activeSceneIndex = localStorage.getItem("activeSceneIndex") || 0;
  // let activeSceneIndex = 0;

/** 
 * Definition of a scene
 * @typedef {Object} Scene
 * @property {string} image - URL of the scene's background image
 * @property {string} text - Description text of the scene
 * @property {Object} button1 - Object representing the first button
 * @property {string} button1.text - Display text of the first button
 * @property {number} button1.nextSceneIndex - Index of the next scene when the first button is clicked
 * @property {Object} button2 - Object representing the second button
 * @property {string} button2.text - Display text of the second button
 * @property {number} button2.nextSceneIndex - Index of the next scene when the second button is clicked
 */

/** 
 * Array of scenes
 * @type {Scene[]}
 */
const scenes = [
    {
      image: "https://images.unsplash.com/photo-1545460463-afdcfb3a3e53?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "The vacation you've been waiting for is about to begin. After a long flight, you arrived at a small airport on a remote island. You need to head into town to find the hotel you booked before it gets dark. What is your choice of transport?",
      button1: { text: "I'll take the bus", nextSceneIndex: 1},
      button2: { text: "Taxi is faster", nextSceneIndex: 4}
    },
    {
    image: "https://images.unsplash.com/photo-1656486579907-43cca750cb61?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "The roads on this island are very bumpy and narrow. You started drifting away and fall asleep when all of the sudden you hear a loud noise and the bus starts skidding left and right. Finally the driver can get the bus to a halt. Without understanding the language, you notice something is very wrong. With the help of sign language and drawings in the dirt road, you understand that it will take a long time for the bus to be repaired. You are tired, and just want to go to the hotel as quickly as possible. What do you want to do?",
      button1: { text: "Wait for the bus to be repaired", nextSceneIndex: 3 },
      button2: { text: "Hitchhike - it will be much faster", nextSceneIndex: 2 }
    },
    {
      image: "https://images.unsplash.com/photo-1582038715054-adba011b2da2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Luckily, a car just passed by and you raised your hand trying to get the attention of the driver. An old, kind looking man in a red Mazda stopped and opened the driver window. You explained your situation and the kind man offered you a ride. While sitting in the car, the man asked if you would rather join him for dinner in his house instead of going to the hotel. Even though you were a bit scared, it was also interesting to meet a local and his family. What is your answer to the old man?",
      button1: { text: "I appreciate your offer, but I am meeting a friend at the hotel.", nextSceneIndex: 6 },
      button2: { text: "Yes, that sounds lovely! Let's go.", nextSceneIndex: 5 }
    },
    {
       image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       text: "While you were waiting for the bus to be repaired, a herd of tigers came from the mountains looking for food. With no place to escape, and the tigers being too fast you quickly understood that this was the end..",
       button1: { text: "Play again", nextSceneIndex: 0 },
       button2: { text: "Start over", nextSceneIndex: 0 },
       hideButton2: true
    },
    {
       image: "https://images.unsplash.com/photo-1694070781623-629e71966431?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "The island roads are very narrow and bumpy. Because of the heavy rainfall the past few weeks, the ground was very loose. All of the sudden the mountain on the side of the road started moving. A stone fell from the mountain onto the only road on the island. The taxi turned to the left and ended up hitting a big tree while trying to avoid getting crushed by the stone. You hit your head hard. 3 weeks later you woke up at the island hospital, and it was soon time for you to head back home. That was the end of this vacation..",
      button1: { text: "Play again", nextSceneIndex: 0 },
      button2: { text: "The end", nextSceneIndex: -1 },
      hideButton2: true
    },
    {
      image: "https://images.unsplash.com/photo-1641116694964-58f5e37e25c9?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     text: "The driver was actually the owner of the whole island. His family let you stay at their guest house. It had a spectacular view, a large pool and a private chef. During your stay, he took you on a tour of the island by helicopter, brought you along on a trip with one of his yachts and much more. It was like a dream.",
     button1: { text: "Play again", nextSceneIndex: 0 },
     button2: { text: "The end", nextSceneIndex: -1 },
     hideButton2: true
   },
   {
    image: "https://images.unsplash.com/photo-1682686581295-7364cabf5511?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   text: "We managed to find the hotel and I could finally start to enjoy my vacation. Eating at local restaurants, scuba diving and hiking for 3 whole weeks.",
   button1: { text: "Play again", nextSceneIndex: 0 },
   button2: { text: "The end", nextSceneIndex: -1 },
   hideButton2: true
 }

  ];

