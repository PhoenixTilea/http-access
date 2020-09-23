# HTTP Access

this is a simple web app meant for testing HTTP operations while developing. It is currently very basic, most useful to students learning HTTP and developing simple CRUD applications.

Most importantly, it is accessible to screen reader users, unlike Postman or Hoppscotch.io (at the present time).

## Usage

Current, this application only supports the four main CRUD methods: GET, POST, PUT, and DELETE. It also operates purely with JSON (ContentType = application/json).

It's usage is simple enough: Choose your method from the dropdown, enter the url to your endpoint, and fill in the body and header fields with JSON notation as needed. Then, just click "Send" an and you'll receive the response status, body, and headers in the Response section.

## But, why?

Yes, I know Postman already does this and much, much more, and there is currently an open source version of Postman called Hoppschotch that is available on the web. However, I am a blind programmer and have been struggling through my education on the subject of HTTP and full stack JavaScript development because neither of these apps are very friendly to screen readers. Yes, I could try contributing to Hoppscotch, and I still might, but for now, making a very basic app was a much simpler solution for me.