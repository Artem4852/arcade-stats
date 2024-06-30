# Arcade Stats

## Introduction

Arcade Stats project helps to visualize some interesting statistics about Hack Club's [Arcade project](https://hackclub.com/arcade/).

## Live demo

Check out the webpage here: https://artem4852.github.io/arcade-stats/

## What's This All About?

This project creates a web page that displays various statistics about the Arcade project. It pulls most of data from Slack (because why would I want to overload Hack Club's API?) and presents it in a visually appealing way using charts and animations. Specific data about users is scraped by hand (by scrolling through the list manually and saving HAR, which is then processed automatically).

## The Tech Stack

- **HTML** for the structure
- **SASS** for styling
- **JavaScript** for interactivity and charts (using Chart.js)
- **Python** for scraping, processing, and updating data

## Key Features

1. **Dynamic Data**: The stats can be updated easily to keep things fresh.
2. **Interactive Charts**: Chart.js is used create pie charts and bar graphs for various metrics.
3. **Responsive Design**: The layout adjusts for different screen sizes.
4. **Custom Font**: Slackey font is used just like in other Arcade websites.
5. **Animated Number Counters**: Because who doesn't love a cool animation?

## The Data We're Looking At

Some of the stats I've included are:

- Total users and sessions
- Daily session
- Finished/ended early rates
- Approval/rejection rates
- Timezone distribution of users
- User naming patterns (Did you know how many usernames start with 'A'?)
- New user growth
