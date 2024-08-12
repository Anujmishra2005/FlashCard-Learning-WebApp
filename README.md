<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://flash-card-learning-web-app.vercel.app/">
    <img src="https://socialify.git.ci/Anujmishra2005/FlashCard-Learning-WebApp/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Logo">
  </a>

  <h3 align="center">FlashCard-Learning-WebApp</h3>

  <p align="center">
    An interactive web app for creating, managing, and testing knowledge with flashcards, featuring timed quizzes and progress tracking.
    <br />
    <a href="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://flash-card-learning-web-app.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<div align="center">
  <a href="https://flash-card-learning-web-app.vercel.app/">
    <img src="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/blob/main/Screenshots/SC1.png">
    <img src="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/blob/main/Screenshots/SC2.png">
    <img src="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/blob/main/Screenshots/SC3.png">
    <img src="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/blob/main/Screenshots/SC4.png">
    <img src="https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/blob/main/Screenshots/SC5.png">
  </a>
</div>

## Features of Project

*View Flashcards: Browse through flashcards to study and reinforce knowledge.<br>
*Add Flashcards: Create new flashcards with custom questions and answers.<br>
*Edit Flashcards: Modify existing flashcards to update or correct information.<br>
*Delete Flashcards: Remove flashcards that are no longer needed.<br>
*Test Mode: Engage in a timed challenge to test your knowledge and improve recall speed.<br>
*Scoreboard: View the number of clicks for each flashcard during Test Mode.<br>
*Timer Reset: Reset the timer and flashcard index to start the test over.<br>
*Instruction Modal: Access detailed instructions on how to use the app at any time.<br>
*Dashboard: Navigate to the Dashboard for additional settings and functionalities.<br>
*Number of Clicks: Track how many times each flashcard was clicked in Test Mode.<br><br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Technologies Used 

*React: A JavaScript library for building user interfaces.<br>
*React Router: Used for navigating between different views in the application.<br>
*Tailwind CSS: For styling the app with a modern, responsive design.<br>
*React Toastify: For displaying notifications and alerts within the app.<br>
*React Icons: For including iconography in the user interface.<br>
*AWS S3: For deployment and hosting.<br><br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your system:

*Node.js: Download and install Node.js from here.<br>
*npm or yarn: npm is installed with Node.js. You can also install yarn if you prefer.<br><br>

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/AnujMishra2005/FlashCard-Learning-WebApp.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin AnujMishra2005/FlashCard-Learning-WebApp
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Usage
1) Test Mode and Timed Quizzes :---<br>
*Test Your Knowledge:- Enter Test Mode to challenge yourself with timed quizzes. Each flashcard has a 10-second timer, pushing you to recall information quickly.<br>
*Track Your Progress:- Use the scoreboard to review how many times each flashcard was clicked during Test Mode, helping you identify areas where you might need more practice.<br><br>
2) Flashcard Management :---<br>
*Create and Customize Flashcards:- Easily add, edit, and delete flashcards to tailor your learning experience to your needs.<br>
*Reset Functionality:- Reset your flashcards and timer with a single click, allowing you to start fresh anytime.<br><br>
3) Instruction Modal :---<br>
*Guided Learning: Access the instruction modal for detailed guidance on using the app effectively, including tips for maximizing your learning efficiency.<br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/issues/new?labels=enhancement&template=feature-request---.md) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Anuj Mishra - [@AnujMishra2022_twitter](https://twitter.com/AnujMishra2005) - anujmishraan2005@gmail.com

Linkedin : [https://www.linkedin.com/in/anujmishra05](https://www.linkedin.com/in/anujmishra05)

Portfolio Link: [https://anujmishra.xyz](https://professional-portfolio-plum.vercel.app/)

Project Link: [https://github.com/Anujmishra2005/FlashCard-Learning-WebApp](https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/tree/main)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AnujMishra2005/FlashCard-Learning-WebApp.svg?style=for-the-badge
[contributors-url]: https://github.com//graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AnujMishra2005/FlashCard-Learning-WebApp.svg?style=for-the-badge
[forks-url]: https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/network/members
[stars-shield]: https://img.shields.io/github/stars/AnujMishra2005/FlashCard-Learning-WebApp.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/Anujmishra2005/FlashCard-Learning-WebApp.svg?style=for-the-badge
[issues-url]: https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/issues
[license-shield]: https://img.shields.io/github/license/Anujmishra2005/FlashCard-Learning-WebApp.svg?style=for-the-badge
[license-url]: https://github.com/Anujmishra2005/FlashCard-Learning-WebApp/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/anujmishra05

