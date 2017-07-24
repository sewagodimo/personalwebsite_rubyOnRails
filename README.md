# README

Made by Ednecia Matlapeng for Iexperience, 2017/06/27.
mtledn001@myuct.ac.za

instructions

download the zipped folder that i have sent,
unzip it
go to the iexp directory
open up the terminal here or "git bash here" on windows
copy the following text into the terminal:  rails server -p 3000
(if it gives you problems just change the 3000, another program may be using the port)

then go to your browser of choice (I like chrome)
type: http://localhost:3000/
or : http://localhost:3000/welcome/index
you will see the webbie that I made
There is an image of me and my name at the top
followed by a tab that I made in case you dont want to view 100 numbers at once
but if you do I included the all option

if there is a file not found error restart the server

Kind Regards
****************************************************************************************************

TIPS: 
to generate a controller
>	rails g controller <Name of controlelr, eg Pages> <name of pages: about contact home>
link: http://www.newthinktank.com/2015/03/ruby-rails-tutorial-3/
link to something in this page
>    <%= link_to '#contactheading', :id => 'Header' do %> <div id="headerlogo" onclick="toContact()">CONTACT</div> <% end %>

				MAKING A BLOG CODE and TIPS
****************************************************************************************************
> 	rails new blogname -T
//this will make the blog, minus the tests
> 	rails g model Post title:string body:text tags:string
//this will make the model, we do not add the image yet, but for now you can just do the strings thing
>	rake db:migrate
//this will migrate the database, this is the go to when you have errors, wait for the migrated message

//Installing Simple Form and Bootstrap-Sass

#In the Gemfile copy the next two lines

gem 'simple_form', '~> 3.2'
gem 'bootstrap-sass', '~> 3.3'
//back to the terminal
>	bundle install
//no errors so far
JAVASCRIPT 
#app/assets/javascripts/application.js
Just below the line that requires jquery.

//= require bootstrap-sprockets

//Rename app/assets/stylesheets/application.css to app/assets/stylesheets/application.scss to create our Sass file. Paste in    //the following and save:
#app/assets/stylesheets/application.scss

@import "bootstrap-sprockets";
@import "bootstrap";

/Generate a simple form
>	rails generate simple_form:install --bootstrap
//again wait for the positive message from the terminal

/Creating a posts controller, you dont have to list them because you can copy them from, eddy-blog


> 	rails g controller Posts
//Copy and paste the code in eddy-blog/ app/controllers/posts_controller.rb into app/controllers/posts_controller.rb:
Views for the Posts
likke the post_controller copy these files from eddy to the app/views/posts folders
	_FORM
//A partial allows us to reuse our layouts across multiple pages. 
//It starts with the underscore _ symbol.
//Check that the form folder includes everything in your model declaration, line 37 (Post title:string body:text tags:string)

index.html in posts determines how the posts view page looks

//Routes in app/config/routes.rb
#config/routes.rb

Rails.application.routes.draw do
  root to: "posts#index" #test the root of your application

  resources :posts
end

#Installing CKeditor
#Gemfile
gem 'ckeditor', '~> 4.1'

//on the terminal
>	bundle install
>	rails generate ckeditor:install --orm=active_record --backend=carrierwave
//allows us to also uplaod images, creates some migrage files so---
>	rake db:migrate

//ADD CKeditor to javascript files
#app/assets/javascripts/application.js
just above the tree line (the last one)
//= require ckeditor/init

Create a directory called ckeditor in app/assets/javascripts, then create a new file called config.js in the directory you just created. Paste in the code below:

//http://localhost:3000/posts/new

				AND WE HAVE A BLOG
****************************************************************************************************