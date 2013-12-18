www.harmoneye.com
=================

This is the source for the website of the [HarmonEye](http://www.harmoneye.com/) application. It allows you to analyze the music and visualize it.

This website is built using the [Middleman](http://middlemanapp.com/) site static generator with the [Compass Haml (Uhu!) Boilerplate Bootstrap Sass Template](https://github.com/theblacksmith/chubbs)  and some other cool libraries and tools.

You may fork this repo and take it as an inspiration to use Middleman for your own site. On the other hand the content is under copyright of the author. In other words you might not claim you have created this content.

You need Ruby and Middleman to build this.

	\curl -sSL https://get.rvm.io | bash -s stable --ruby --gems=middleman

Then in the project directory run this command to install all necessary ruby gems:

	bundle install

To run a local server:

	middleman server

To publish the committed changes to GitHub Pages (to the gh-pages branch):

	rake publish
