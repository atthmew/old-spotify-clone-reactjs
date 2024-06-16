<h3 align="center">
  Old Spotify Clone- ReactJS
</h3>

<p align="center"></p>

<p align="center">
  <!-- <img alt="Project Top Language" src="https://img.shields.io/badge/98.2%25-yellow?style=for-the-badge&logo=javascript&label=JavaScript&labelColor=black"> -->
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/atthmew/old-spotify-clone-reactjs?style=for-the-badge">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/atthmew/old-spotify-clone-reactjs?style=for-the-badge">
  <img alt="Project Top Language" src="https://img.shields.io/github/last-commit/atthmew/old-spotify-clone-reactjs?style=for-the-badge">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/atthmew/old-spotify-clone-reactjs?style=for-the-badge">
</p>

<p align="center">
  <a href="#-about-the-project">About The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;
  <br/>
  <br/>
  
  <!-- <img alt="Demo" src="https://github.com/eltonlazzarin/reactjs-rocketfy-app/blob/master/screenshot/demo.png" target="_blank"></img> -->
</p>

## 📱 About this Project

<p align="center">
<img alt="Discord logo" src="https://github.com/atthmew/old-spotify-clone-reactjs/blob/main/screenshots/spot1.png" height="350px" width="400px" /> 
<img alt="Discord logo" src="https://github.com/atthmew/old-spotify-clone-reactjs/blob/main/screenshots/spot2.png" height="350px" width="400px" /> 
<br/>
  <button>
    <a href="https://atthmew.github.io/old-spotify-clone-reactjs"> 
      <img alt="Spotify" src="https://img.shields.io/badge/Spotify-white?style=for-the-badge&labelColor=red"/>
    </a>
  </button>
</p>

<p>Introducing, a clone of the classic Spotify app design, developed using ReactJS and the Spotify API. With this app, you can connect to your Spotify account in real-time, allowing you to browse and play your favorite music seamlessly. Experience the familiar interface and enjoy your playlists just like on the original Spotify app. </p>

## 🚀 Technologies

Technologies that I used to develop the app

- [ReactJS](https://react.dev/)
- [React-Router-Dom](https://reactrouter.com/en/main)
- [React-Icons](https://github.com/wwayne/react-tooltip)
- [Spotify-API](https://developer.spotify.com/documentation/web-api)
- [VS Code](https://code.visualstudio.com) with [Prettier RC](https://github.com/prettier/prettier)

## 👨🏼‍💻 Getting Started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

#### Step 1: Clone the repository

```bash
git clone https://github.com/atthmew/mov-i-e-it.git
```

```bash
cd mov-i-e-it
```

#### Step 2: Install Dependencies

Open a new terminal window , and run the following command to install the frontend dependencies:

```bash
npm install
```

#### Step 3: Run the Frontend Server

After installing the frontend dependencies, run the following command in the same terminal to start the frontend server:

```bash
npm run dev
```

This command will start the frontend server, and you'll be able to access the website on localhost:3000 in your web
browser.

:exclamation:
:warning:` If you encounter an OpenSSL error while running the frontend server, follow these additional steps:`

Reason behind error: This is caused by the node.js V17 compatible issues with OpenSSL, see
[this](https://github.com/nodejs/node/issues/40547) and [this](https://github.com/webpack/webpack/issues/14532) issue on
GitHub.

Try one of these and error will be solved

- > upgrade to Node.js v20.

- > Enable legacy OpenSSL provider

Here is how you can enable legacy OpenSSL provider

- On Unix-like (Linux, macOS, Git bash, etc.)

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

- On Windows command prompt:

```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

- On PowerShell:

```bash
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

Here is [reference](https://github.com/webpack/webpack/issues/14532#issuecomment-947012063) about enabling legacy
OpenSSL provider

After trying above solutions, run below command

```bash
npm run dev
```

> If you still facing issue, then follow
> [this stackoverflow thread](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported).
> It has so many different types of opinions. You definitely have solution after going through the thread.
