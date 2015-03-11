# mend-d3
This repository contains instructions and code to bootstrap a D3 demo website with [Drywall](https://github.com/jedireza/drywall).
It was created to accelerate the deployment of websites 
that expose D3 visualization and data workflow designs to a private audience.

Use in combination with Drywall and deploy on Heroku. 
Mend-d3 adds 1) admin-managed user registration and 2) d3 demo pages in the account route. 
Each pass through the script creates one website for one demo. 
Add as many users as you want to have access to the site and give each the role of Account.

This bootstrap method was presented at the March 10, 2015 d3.oakland() meetup.
Please refer to the slides from that event ("Bootstrap-D3-Web-Demos.pdf" in the repo) for project motivation and installation detail.

### Notes
* Watch for Drywall dependencies and the need for proprer smtp server credentials in the configuration file.  
* Add a root user with admin privileges before you can register demo visitors. 
* Users are assigned by email address.  Let them "forget" their password and enter their own. 
* For each new user, create an Account with their name and link it to their userid.  When they signin, they will be routed to account pages.  Remember, you get one demo per deployed website.
