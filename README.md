<!-- Banner Image -->
<p align="center">
  <a href="https://expo.dev/">
    <img alt="expo sdk" height="128" src="./assets/images/banner.png">
    <h1 align="center">Expo Router v2 </h1>
    <h2 align="center">step by step tutorial </h2>
    <h3>If you're in search of a template for an adaptive static website built with React, featuring search engine optimization and day-night theme switching capabilities, feel free to utilize this open-access source file at absolutely no cost.</h3>
  </a>
<h5 align="center"> <a aria-label="expo documentation" href="https://maps.menu">We are revamping this: maps.menu 📚</a></h5>
</p>

<p align="center">
  <a aria-label="try expo with snack" href="https://github.com/bolshiyanov/expo-router-v2-step6"><b>Go back to 6 step</b></a>
 | <a aria-label="try expo with snack" href="https://expo-router-v2-step-by-step7.vercel.app/"><b>Look web site for 7 step</b></a>
 |
  <a aria-label="Redux toolkil for expo-router v2 with typeScript" href="https://github.com/bolshiyanov/expo-router-v2-step8">Next 8 step 📚</a>
</p>
<img align="center" alt="Start template navigators Expo-Router v2" height="80%" src="./assets/images/Scr2.png">
---

- [📚 About this step](#-documentation)
- [🗺 Stack of this step](#-Stack-of-this-step)
- [🏅 Why expo-router v2](#-Why-expo-router)
- [❓ Task](#-task)
- [💙 The Team](#-the-team)
- [License](#license)

<h2 align="center">At this stage, we will complete the setup of theme control, enabling you to swiftly create stunning websites and mobile applications. This will empower you to flexibly customize their color schemes.</h2>

In the Theme Settings, we employed:

1) The useState hook to track the day-night button's state.
 
2) LocalStorage to preserve the theme state within the browser's storage.
 
3) Redux Toolkit to disseminate the button's state across all application components.
 
4) The `Colors.ts` as `Config` file to instantly modify color scheme settings throughout all components. Details on this are provided below:



## 📚 About this step

At this step, we will be linking the color configuration file to each component and observe the final outcome.

<img align="center" alt="Start template navigators Expo-Router v2" height="80%" src="./assets/images/Scr1.png">

## 🗺  Step-by-Step Guide:<br/>

1) Let's begin by revisiting how our components are aware of whether the theme is `dark` or `light`. To achieve this, we employ the `useAppSelector` hook, which retrieves the state from our `Store`.

(And if you don't recall how the theme ends up in the Store, please refer back to the previous step.)

<img align="center" alt="Start template navigators Expo-Router v2" height="80%" src="./assets/images/Scr3.png">

2) In order to be able to swiftly modify the style across all components whenever necessary, let's create a dedicated file where we will define all the settings for both the dark and light themes. We'll name this file `Colors.ts`.

Now, we can import this file into any component.

<img align="center" alt="Start template navigators Expo-Router v2" height="80%" src="./assets/images/Scr4.png">

At this stage, we've developed a straightforward mechanism to switch themes and configure their color schemes. However, currently, we only have two predefined models. In the future, we will introduce a control panel for this project. In one of the upcoming steps, we will learn to create and save custom color schemes. We'll expand our approach to include gradients and animations. So, keep following this tutorial step by step to learn more about Expo Router 2 and its capabilities.

 <h2 align="center">Next step  </h2>

In the next step, we will make our website multilingual and implement automatic and manual language switching

We will incorporate 10 popular languages and delve into the search engine optimization aspects of multilingual websites.

We'll explore the various types of optimization strategies available, discuss the differences between multilingual and multi-regional SEO, and examine the tools and techniques used for promoting websites in multiple languages and regions.

## ❓ Task

Create a custom color scheme for your application. Modify the settings in the `Colors.ts` file.

## 🗺 Stack of this step
`new`
- [`reduxjs/toolkit`](reduxjs/toolkit) A Comprehensive Library for Efficient State Management and Development.

`earlier versions`
- [`local storage`](local-storage) Browser local storage is a feature that allows websites to store data locally on a user's device.
- [`scss`](scss) Supported scss for web.
- [`react-native-svg-transformer`](react-native-svg-transformer) Supported SVG images.
- [`expo-router-v2`](expo-router-v2) Supported static web generation, css , seo.
- [`expo-router`]( expo-router) There is no specific package called "expo-router." Expo uses React Navigation for routing
- [`expo`](expo) Expo is a platform simplifying React Native development through tools, libraries, and workflow enhancements.
- [`react-dom`](react-dom)React package enabling rendering of components in the web browser's DOM (Document Object Model).
- [`react native`](react-native) JavaScript framework for building cross-platform mobile applications.
- [`react`](react) JavaScript library for building user interfaces, maintained by Facebook and a community.
- [`typescript`](typescript) TypeScript is a superset of JavaScript adding static typing for enhanced code quality and tooling.
- [`gitHub`](gitHub) GitHub is a web-based platform for version control and collaboration using Git.
- [`netlify`](netlify) Netlify is a web hosting platform for deploying and managing modern web projects.

## 🏅 Why expo-router v2

 landscape of modern business, the effectiveness of customer acquisition and retention takes on profound importance. The intersection where the cost of drawing in initial customers converges with the metrics of retention and Lifetime Value establishes a pivotal nexus for real-world enterprises. It's within this context that businesses frequently navigate towards the realm of search engine optimization, leveraging its potential to tap into organic traffic from behemoths like Google.<br/>

Undoubtedly, a website serves as an inviting initial point of contact between the business and potential clientele. However, its true value shines when users willingly return, reinforcing the need for a captivating and compelling platform. This brings us to the second interaction with customers, where the objective shifts to providing a seamless, native application experience tailored for iPhones and Android devices. Hence, discerning businesses harmonize their approach by upholding a static website for search engine visibility and a dynamic mobile application for app marketplaces.<br/>

Until recently, achieving such intricate synergy was primarily the domain of expansive teams like Twitter. This involved intricate orchestration of web and native components by scores of developers. Yet, the landscape has metamorphosed with the emergence of Expo Router Version 2. This paradigm shift has overhauled the development process, empowering developers to craft code within a unified ecosystem and effortlessly export the final product as both a static website and a feature-rich app available on the Play Store.<br/>

Moreover, the realm of possibilities has expanded to encompass wearable gadgets, such as the Apple Watch, thanks to Expo Router's extended support. In mere minutes, updates can be seamlessly integrated, thereby revolutionizing the agility with which businesses can refine their offerings. This ushers in an unmatched opportunity to harness the complete potential of the internet, propelling businesses towards the attainment of their goals.<br/>

The democratization of this robust framework marks a monumental stride forward. The once imposing barriers that impeded smaller entities from realizing their digital ambitions have now dissolved. Expo Router introduces an era of accessibility, bestowing entrepreneurs and businesses alike with the means to bridge the gap between their vision and its actualization. As businesses embark on this journey, they gain the capability to enthrall audiences, nurture loyalty, and elevate their digital footprint – all while streamlining the development process in ways that were once the exclusive domain of a select few.<br/>

In a world where triumph pivots on the symbiotic interplay between innovation and execution, Expo Router stands as a testament to technology's power to democratize opportunities. It embodies the shift that has unfolded in the landscape of app and web development – transitioning from the intricate and unwieldy to the intuitive and efficient. As businesses embrace this evolution, they set out on a transformative trajectory, shedding the constraints of the past and venturing into a future where every aspiration for digital resonance and engagement can be woven into reality.<br/>

## 💙 Author

Roman Bolshiyanov < status : open for cooperation, look job >

## License

The Expo source code is made available under the [MIT license](LICENSE). Some of the dependencies are licensed differently, with the BSD license, for example.


<img alt="Star the Expo repo on GitHub to support the project" src="https://user-images.githubusercontent.com/9664363/185428788-d762fd5d-97b3-4f59-8db7-f72405be9677.gif" width="50%">
