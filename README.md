Flickr feed viewer and search

This application fetches pubic images from flickr ans hows it to the user. The user can also enter tags and search for images based on these tags.

Demo : http://ec2-52-53-167-255.us-west-1.compute.amazonaws.com
Deployed o aws EC2 instance and running it using forever.

The application is designed using nodejs, react, semantic ui( as a css framework), babel, webpack, jest etc.

After npm install. Following are the commands.

For running the app    : npm start

For building the app   : npm run build

For running unit tests : npm test

Features of the App
1) Shows images in a property ordered image gallery.
2) Responsive. Can open in mobile, tablets, desktop etc.
3) Shows loadig screen when images are being fetched.
4) Shows error on failing to fetch images.


Unit testing
All react components along with nodejs restful api test cases are written using following libraries.

1)	Jest  is used mainly as a test task runner ,helper functions and code coverage.
2)	Chai has been used for assertions. 
3)	Enzyme used for mount / shallow rendering the various react components and performing operations on them functions.
4)	axios-mock-adapter for mocking the axios calls/backend calls.
5)  chai-http for nodejs rest api testing.

Following are the code coverage results.
Test Suites: 5 passed, 5 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        25.375s
Ran all test suites.
------------------|----------|----------|----------|----------|----------------|
File              |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------------|----------|----------|----------|----------|----------------|
All files         |    95.24 |       75 |       88 |    95.24 |                |
 src              |    88.89 |       70 |     62.5 |    88.89 |                |
  config.js       |      100 |      100 |      100 |      100 |                |
  routes.js       |      100 |      100 |      100 |      100 |                |
  server.js       |     91.3 |     62.5 |      100 |     91.3 |          27,57 |
  test-setup.js   |    66.67 |      100 |        0 |    66.67 |              3 |
 src/components   |      100 |       90 |      100 |      100 |                |
  ImageViewer.js  |      100 |      100 |      100 |      100 |                |
  IndexPage.js    |      100 |       75 |      100 |      100 |             36 |
  Layout.js       |      100 |      100 |      100 |      100 |                |
  SearchBox.js    |      100 |      100 |      100 |      100 |                |
 src/services     |      100 |       50 |      100 |      100 |                |
  ImageService.js |      100 |       50 |      100 |      100 |          11,20 |
------------------|----------|----------|----------|----------|----------------|
