# qwiktionary
## Play a game of pictionary with your friends 
[![Stories in Ready](https://badge.waffle.io/jmhill/pictionary.svg?label=ready&title=Ready)](http://waffle.io/jmhill/pictionary)

### Project Description
Users will be able to spin up a quick game of pictionary that friends can join just by using a shared link.

### Development Flow

_Set-up_: After cloning repo and `npm install`, run `grunt` from within project directory to start server using development configuration. Note: grunt-cli must be installed globally via npm.

_Workflow_:

1. Issues and status of work-in-progress can be viewed at https://waffle.io/jmhill/pictionary. 
2. Issues are tagged with a label describing the type of work:
  - __feat__: new features and enhancements
  - __task__: maintenance, refactoring, and other general tasks
  - __bug__: problems in need of fixing
3. When starting work on an issue, create new branch (from `development`) with format `{issue-type}/{issue-number}-{description}`, e.g., `task/#1-description`. This format will automatically move the issue to 'in progress' on the waffle board.
4. When work on issue complete, create pull request to merge topic branch back into development. This will automatically create a review app on heroku for reviewing changes.
5. When ready for release, merge development back into master. Changes to master automatically update the staging app.
6. Once tested in staging app, promote to production from within heroku dashboard (or using heroku pipeline cli).

### Background

This project started as a simple demo for a node.js course that was offered through Thinkful. The intent of the demo was to get the student acquainted with socket.io; however, little attention was paid to the application architecture. In its original iteration, the entire functionality of the app was contained within a single javascript file that used JQuery to set up event listeners that would send corresponding events to the server via socket.io. In order to make the application more easily extensible and support future growth, we are moving the front-end application over to react, and the back-end application shall be more neatly divided between self-contained game logic and the actual server-side app.
