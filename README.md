# HTTP Access

this is a simple app meant for testing HTTP operations while developing. It is currently very basic, most useful to students learning HTTP and developing simple CRUD applications.

Most importantly, it is accessible to screen reader users, unlike Postman or Hoppscotch.io (at the present time).

## Usage

This app is very much a work in progress, but can be used to make JSON GET, POST, PUT, and DELETE requests. If you are testing a server/API hosted on the web, this app should work online. 

### Online (Remote Servers/APIs Only)

Visit [HTTP Access](https://http-access.herokuapp.com) to use this app remotely. Simply choose your request method, enter your endpoint and any body or header information you might need, and click "Send". The status code/text, response body, and response headers will show up under the "Response" section (on the right if you can see, after the request fields if you can't).

**NOTE:** Remember, the request body/headers must be valid JSON. This app doesn't support anything else at present.

### Run Locally (Testing Locally run servers)

If you need to test a server you're running on your local machine/network, you'll have to clone this repo and run this app as a full stack application. This is a bit more complicated, but if you're entirely unable to use tools like Postman as I am, the initial setup is worth it for the speed of testing.

#### Requirements

You must have a current version of Node installed along with NPM. These instructions also assume you have Git installed, but if not, you can ignore the cloning step and simply download the .zip and extract it.

#### Install and Run Locally

1. Click the "Code" button on this repo and click "Copy" to copy the URL
2. Open your chosen command prompt and navigate to wherever you want this app to live
3. Clone the repository:
		
		git clone <paste the url here without the angle brackets>
		
4. Run the following series of commands to install all necessary dependencies (the install bits might take a while):
		
		cd http-access
		npm install
		cd client
		npm install
		
5. Lastly, you'll need to start the server, which will also build the client:
		
		cd ..
		npm start
		
6. Now you'll have the app running on local port 8000. Open your browser and navigate to <https://localhost:8000/>

And that's it! You should be able to test your locally run servers from this local version of the app. From now on, all you'll need to do is navigate to the http-access folder and run `npm start` to boot it up.

## But, why?

Yes, I know Postman already does this and much, much more, and there is currently an open source version of Postman called Hoppschotch that is available on the web. However, I am a blind programmer and have been struggling through my education on the subject of HTTP and full stack JavaScript development because neither of these apps are very friendly to screen readers. Yes, I could try contributing to Hoppscotch, and I still might, but for now, making a very basic app was a much simpler solution for me than trying to sift through someone else's code. I really hope this helps people like myself, and I also hope to expand, improve, and create an application version that doesn't require so many steps to install.

## Happy Coding!