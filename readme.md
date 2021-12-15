# First Intelligent Prometheus or short FIP
FIP is an open-source project to create a __machine learning robot__ that can move and complete simple tasks.
I strongly believe robotization is our path to a better and sustainable future for humankind.
To get to that point we don't need just machines that can complete our tasks, but that can also think their way. 

![logo](/Fip-app-logo.jpg)

- [What should be FIP?](#What-should-be-FIP)
- [Why Open Source?](#Why-Open-Source)
- [How we survive?](#Do-we-have-any-sort-of-business-or-funding)
- [What will be next?](#What-will-be-next)
- ### [Get started](#Get-started)
## What should be FIP?
Right now FIP doesn't exist, but it should be a bunch of servo motors with at his earth, an old android phone. Since creating an OS is a very complicated thing and we want to concentrate on the interesting part, we'll focus on creating an app that can give the output to the motors to make them move and read their data, with the data of the phone itself (GPS, accelerometer), process it with a machine learning algorithm.
With a sim card on the phone, we'll be able to connect it to the internet and command it remotely.

## Why Open Source?
I do believe in the power of community and it has no sense to close knowledge to the rest of the world. Community and opening knowledge are what brought us on top of this daily technological discovery. __Prometheus__ is the titan who __brought the knowledge of fire__ to the humans, at the cost of his eternal punishment. Homo Sapiens is on top of the food chain because of that. __That's why we want you to help__, not just me, nor this project but __the whole of humankind__. And at the end let's be honest, there are already barriers to creating your FIP (deep technical knowledge required, money, and others). 

> Prometheus is the titan who brought the knowledge of fire to the humans, at the cost of his eternal punishment. Homo Sapiens is on top of the food chain because of that. That's why we want you to help, not just me, nor this project but the whole of humankind.

## Do we have any sort of business or funding?
Nope, at the moment there is just me, a full-stack software developer, with 0 to no money. I don't plan to make anyone pay for the software we create, __this is free to use__, even for the competitors. No problem. More competitors more innovation, hoping they do the same way. In any case, in the future, if the product will be completed and working fine, we may pay our living __by selling the hardware__ stuff, the robot itself, but if anyone has the capabilities to build their own, they should do so and then install freely our app!

> Right now you could help us either contributing to the code, or think about donating [here](https://paypal.me/OrtaE?country.x=IT&locale.x=it_IT).

## What will be next? 
Firstly we have to get FIP done, but the plan would be then to modify the app to support __being part of a blockchain__ where the FIPs support each other by __connecting data__ via Bluetooth and the biggest and more powerful phones could __in a decentralized way develop stronger algorithms__ which would be always through Bluetooth passed to the older or weaker FIPs. 

# Get started
You need to have node.js and the android emulator installed on your computer. You can check if you have node and npm by running `node -v` and `npm -version` in your terminal. My version of node is v14.18.1 and of npm 6.14.15.
Firstly you need to clone the repository in the folder you want it in.

> `git clone https://github.com/EOTheDev/first-intelligent-prometheus`

After that you need go to the app directory and run `npm install` to install all the dependencies.

> `cd first-intelligent-prometheus && npm install`

Then you can run the app with the android emulator (which you need to have installed) by running `npm run android`.