"use strict";
(function() {

  /**
   * Name: Robin Luo
   * Date: November 17, 2021
   * Section: CSE 154 AB
   * This is the index.js script for interactivity on my friends generator website. It primarily
   * contains the functions for buttons response and fetchs data from my API.
   */

  window.addEventListener("load", init);

  const BASE_URL = "/friend/";

  /** this function initiates the code when the page loads and adds event listeners to my buttons */
  function init() {
    id("bears").addEventListener("click", bears);
    id("birds").addEventListener("click", birds);
    id("etc").addEventListener("click", etc);
    id("reset").addEventListener("click", reset);
  }

  /** this function fetches data from my API for a random bear and then displays it */
  function bears() {
    fetch(BASE_URL + "bears")
      .then(statusCheck)
      .then(resp => resp.json())
      .then(displayFriend)
      .catch(console.error);
  }

  /** this function fetches data from my API for a random bird and then displays it */
  function birds() {
    fetch(BASE_URL + "birds")
      .then(statusCheck)
      .then(resp => resp.json())
      .then(displayFriend)
      .catch(console.error);
  }

  /** this function fetches data from my API for a random stuffed toy and then displays it */
  function etc() {
    fetch(BASE_URL + "etc")
      .then(statusCheck)
      .then(resp => resp.json())
      .then(displayFriend)
      .catch(console.error);
  }

  /**
   * this function adds a friend photo to the page
   * @param {*} param - data from the API
   */
  function displayFriend(param) {
    let friend = gen("img");
    friend.src = param.image;
    friend.alt = param.alt;
    if (id("photos").childNodes.length === 0) {
      id("photos").appendChild(friend);
    }
    id("photos").insertBefore(friend, id("photos").firstChild);
  }

  /** this function removes all the images from the page */
  function reset() {
    let all = id("photos");
    all.innerHTML = "";
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }
})();