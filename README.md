Final Release, really struggling with GitHub still
Source files have front end svelte and back end hapi folders.
In order to deploy to heroku I brought each into a separate repo to deploy. 

The front end did not work in heroku, so I have just deployed the backend on Heroku, and the front end (linked to the backend using the heruku url) to Netify.

Front end app on Netilfy allows user to sign up, login and create a POI on map using lat and long and also submit a volume of liquid to the associated location. (this would be a sales person supply a land owner with some pesticide chemicals) 

The app tracks then the amount of chemical supplied to each associated location, ie a farm yard, or if wanted could drop the lat and lng into middle of a field. 

There are 2 products that can be supplied, in 2 different ways. The products are RoundUp Gold and RoundUp silver. They can be supplied in a drum or in a bottle. The analytics will show 2 charts, to show volume in litres of each product sold in total, in a bar chart. 
The second chart is a pie chart which shows the volume of product sold as drums versus volume of product sold as bottles. 
(The volumes for the pie chart would take the total of both products (RoundUP silver and RoundUp gold) and divide out the split between supplied method of either drum or bottle. 

I took the approach to start again froom assignment1 as I was getting way too many errors trying to bring in svelte set up. Also my approach in Assignemtn1 
had on extra input beofore adding placemarks for farms, so it was adding a placemark and tehn adding farms with address for that placemark. I wanted to change this
to allow user to be able to simplyfy the POI input, adding in farm details with product supplied and then use this for some analytics.

It worked reasonably well, all though I still stuggled with errors and ended up loosing some areas such as images. The hash/salt passwords are not perfect on the front end as they dont seem
to be linked with the back end implementation (also bcrypt would not uplpoad to heroku so ended up using bcryptjs instead from some research on stack overflow)

There is miniumum JWT implemented (following labs for donation). i had to remove attempt with joi as something went wrong with server side, I ran out of time to reimplement it, 
I had it in assignment1. 

Git flow did not work out this time, I have 2 tagged realeases though.

Implementation is on Netilfy (back end using heruko. 
