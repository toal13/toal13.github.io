/**
 * Event listener for the DOMContentLoaded event.
 * Calls the main function when the DOM has finished loading.
 */
window.addEventListener("DOMContentLoaded", main);
  
/**
 * Main function to initialize the interactive scene renderer.
 */
function main() {
  renderScene();
}

/**
 * Renders the current scene on the webpage.
 * Updates background images, text content, and button event listeners.
 */
function renderScene() {
    /** @type {HTMLElement} */
    const text = document.getElementById("text");
    /** @type {HTMLElement} */
    const btn1 = document.getElementById("btn-1");
    /** @type {HTMLElement} */
    const btn2 = document.getElementById("btn-2");
    /** @type {HTMLElement} */
    const imageContainer = document.getElementById("image-container");

    /** @type {Scene} */
    const scene = scenes[activeSceneIndex];

    imageContainer.style.backgroundImage = `url('${scene.image}')`;
    text.textContent = scene.text;
    btn1.textContent = scene.button1.text;
    btn2.textContent = scene.button2.text;

    if (scene.hideButton2) {
      btn2.style.display = "none";
    } else {
      btn2.style.display = "inline-block";
    }
  
    /**
   * Event handler for the first button click.
   * Navigates to the next scene based on the provided scene index.
   * @param {MouseEvent} event - The click event.
   */
    btn1.onclick = function () {
        goToNextScene(scene.button1.nextSceneIndex);
      };

  /**
   * Event handler for the second button click.
   * Navigates to the next scene based on the provided scene index.
   * @param {MouseEvent} event - The click event.
   */
      btn2.onclick = function () {
          goToNextScene(scene.button2.nextSceneIndex);
      };
  }

  /**
   * Navigates to the next scene based on the provided scene index.
   * If the game is over, displays a game over message.
   * @param {number} sceneIndex - The index of the next scene.
   */
function goToNextScene(sceneIndex) {
  activeSceneIndex = sceneIndex;

  // If the game ends, display an alert and interrupt the process.
  if (activeSceneIndex === -1) {
      Swal.fire("Game over!");
      return;
  }

   localStorage.setItem("activeSceneIndex", activeSceneIndex);

  renderScene();
}