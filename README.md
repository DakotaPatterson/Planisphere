# Planisphere

**Where every event find its orbit.**

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Process](#process)
- [Future Development](#future-development)
- [License](#license)
- [Authors](#authors)
- [Credits](#credits)
- [Links](#links)

## Description

Planishpere is a comprehensive event planning application designed to help users organize and manage events seamlessley. Whethere it's a birthday party, wedding, graduation, or any other special occasionan, Planisphere offers an intuitve platform to organize venues, budget, and track tasks for your events. 

## Features

- **User Authentication:** Secure registration and user login using JWT
- **User Authentication:** Secure registration and user login using JWT
- **Event Management:** Create, update, delete, and view events.
- **Budget Tracking:**
- **Responsive Design:** App is responsive on mobile using Chakra classes
- **Frontend:**
  - React
  - CSS Styling: Chakra
- **Backend:**
  - Node.js
  - Express.js
  - GraphQL
  - MongoDB
  - Mongoose
- **Authentication:**
  - JWTntication:**
    - JWT
- **Deployment:**
Deployed on Render

## Process

### Description:

Event planning app → Planisphere is a comprehensive event planning application designed to help users organize and manage events seamlessly. Whether it's a birthday party, wedding, graduation, or any other special occasions, Planisphere offers an intuitive platform to organize venues, budget, and track tasks for your events.

### Wireframe

We began by making the process with a wireframe. We have that included here:

![Wireframe](./client/src/shared/images/wireframe.png)

Here was the beginning of our building the site -- we started with the wireframe that included a header, navigation, login/logout, event tabs and a footer.

### Our User Story is included here:

![user-story](./client/src/shared/images/user-story.jpg)

As a user, I need to plan an event.

I want a single place to organize my event,
So that I can organize my thoughts and keep track of venue, budget, and tasks. 

Given an event planner site,
When I log into the site,
Then I am shown my home page w/ my events.

When I click to add an event,
Then I am presented with a page to get started.

When I go to organize my tasks,
Then I am apple to go to a separate area for setting tasks.

When I need to sort my budget,
Then I go to the budget section to set and manage my expenses or tasks.

When I need to find a venue,
Then I can look at multiple venues to choose from.

Next, we started building the site. Here's a few screenshots of our working process:

![process](./client/src/shared/images/process.png)

We had fun picking out images for the Home page:

![images](./client/src/shared/images/image-selection.png)

Here are the color palettes we liked:

![color-palette](./client/src/shared/images/color-palette.png)

And even made a temporary logo for inspiration:

![logo](./client/src/shared/images/planisphere_logo.png)

The images were added and adjusted to be in the box + responsive:

![image-process](./client/src/shared/images/process-2.png)

Eventually, we created an application that looks like this: 

![home-page](./client/src/shared/images/landing-home-page.png)

The app is responsive with Chakra CSS, as seen below:

![mobile](./client/src/shared/images/mobile.png)

Our group really struggled with errors like these that hindered our progress deploying it to render and finishing the project on the local host, but we worked through them collaboratively with class resources, such as our teachers:

![error-1](./client/src/shared/images/error.png)

![error-render](./client/src/shared/images/error-2.png)

We used a Google API for the venues functioning page.

(image will go here)

We used our knowledge we learned from the task list challenge earlier in the semester to create a functioning task list that saves your to-do list:

![task-list](./client/src/shared/images/task-list.png)

We created an interactive budget page that lets users plan out their trip in-detail:

![budget-page](./client/src/shared/images/budget-page.png)

![budget-page-cont.](./client/src/shared/images/budget-page-2.png)

The individual event tabs take you to a specific venue for that type of event:

![budget-page](./client/src/shared/images/wedding-event-page.png)

## In conclusion

In conclusion, we built an application from the ground-up that meets the project requirements. We worked collaboratively to create a really cool portfolio piece.

It:
- Uses react for the front end
- Uses GraphQL with a Node.js and Express.js server
- Uses MongoDB and the Mongoose ODM for the database
- Is deployed successfully with Render
- Is responsive + Interactive
- Includes authentication with a JWT
- Protects sensitive API key information on the server
- Has a clean repository that meets coding standards
- Has a high-quality README
- Uses a suggested UI -- Chakra

## Future Development
For future development, we wanted to create additional features such as:
- Turn it into a Progressive Web Application so people can use it on their local device + make it installable
- Add in a Stripe payment platform
- Be able to contact and book caterers, venues and other event-specific things like photographers

## License

## Authors
This application was created by Mason Carr, Dakota Patterson, Kailee Segarra and Stephanie Zolton

## Credits

Credit goes to our class resources like mdn articles and our teachers for helping us troubleshoot on the fly in class, as well as to the team for working together productively:
- Mason Carr
- Dakota Patterson
- Kailee Segarra
- Stephanie Zolton

## Links

Please follow the links below to our deployed application on Render, and our GitHub:

[Deployment with Render](https://planisphere.onrender.com/)

[Github](https://github.com/DakotaPatterson/Planisphere)