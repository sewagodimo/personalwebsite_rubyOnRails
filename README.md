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

Kind Regards
****************************************************************************************************

TIPS: 
to generate a controller
>	rails g controller <Name of controlelr, eg Pages> <name of pages: about contact home>
link: http://www.newthinktank.com/2015/03/ruby-rails-tutorial-3/
link to something in this page
>    <%= link_to '#contactheading', :id => 'Header' do %> <div id="headerlogo" onclick="toContact()">CONTACT</div> <% end %>