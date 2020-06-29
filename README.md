# Stock Picker <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

<br>

### Description

_**Stock Picker**_ The stock picker app is an application that will provide data for each ticker searched that will help the user decide if they'd like to invest in the company. The app will provide different metrics such as RSI and options data for the user to make an informed decision. The app will also have a mathmetical equation for 2-3 different options metrics that wil help with purchasing on a specific strike price/data.

<br>

### Wireframes

![https://wireframe.cc/OTQuyE](url)

- Desktop Landing

![https://wireframe.cc/T8Pqj1](url)

- Desktop individual stock page

![https://wireframe.cc/Ad4Rez](url)

- Desktop recommendation page.

![https://wireframe.cc/OTQuyE](url)

- Mobile landing page

!-[https://wireframe.cc/T8Pqj1](url)


<br>

### MVP

_The Stock Picker app will pull individual stock data from an api. It will then render that data onto a separate page that lays out some stats that help the user decide if the stock is a good investment._

<br>

#### MVP Goals

- _Render data from an api that links to a separate page in a readable and user-friendly format_
- _Use drop pop-ups to describe what some of the acronyms mean_
- _Incorporate high quality background images that give the site a technical feel_
- _Tell the user a good story about the company through data_

<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| tiingoFianance |      yes      | _https://api.tiingo.com/documentation/general/overview_ | _https://cors-anywhere.herokuapp.com/https://api.tiingo.com/tiingo/daily/CHK?token=e4935cc561753620b9e111e26ada8c8dbf493643_ |

Sample Query Results:

![https://imgur.com/a/AcOSsaz](url)

<br>

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Lorem ipsum dolor sit amet, consectetur._ |
| React Router | _Lorem ipsum dolor sit amet, consectetur._ |
| React Spring | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### MVP Components
```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ App.js
      |__ stockPage.js
      |__ buyPage.js
      |__ Nav.js
      |__ Footer.js
```

<br>

#### MVP Breakdown


|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   n   |   n   |   y   | _This will act as the homepage_ |
|    stockPage.js   | functional |   n   |   y   |   y   | _This page will bring in props from App.js and render specific stock data._ |
|  buyPage.js  | functional |   n   |   y   |   y   | _This page will render an overview fo info from the stockpage with a buy or sell recommendation_ |
|     Nav.js     | functional |   n   |   n   |   y   | _This will be my header/nav compoenent to appear on each page_ |
|    Footer.js    | functional |   n   |   n   |   y   | _This will be my footer component that will appear on each page_ |


<br>

#### MVP Timeframes


| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Create search bar that renders data from API call |    H    |     4 hrs      |       |       |
| Create stock page      |    H     |     8 hrs     |     TBD    |     TBD     |
| Create buy/sell page      |    H     |     4 hrs      |     TBD |     TBD     |
| Style all pages      |    H     |     8 hrs      |     TBD    |     TBD     |
| Add options data/pricing      |    H     |     6 hrs      |     TBD   |     TBD     |
| TOTAL            |          |     30 hrs      |     TBD    |     TBD     |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Use the 5 greeks to create a mathmetical equation that gives real time buy/sell options data_
- _Connect a live news api that relates to finance_

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
