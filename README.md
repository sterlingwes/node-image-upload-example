# node-image-upload-example

Quick example of image uploads using Node (Express) on the backend, and a form file input on the front (using the capture=camera option).

## Setup / Installation

[Get node.js](http://nodejs.org) if you don't have it already.

Run the following terminal commands:

`git clone https://github.com/sterlingwes/node-image-upload-example foldername`

`cd foldername`

`mkdir uploads`

`npm install`

## Running

`npm start`

You should now see `Server running on port 9000`.

### In a desktop browser

Open [http://localhost:9000](http://localhost:9000) in your browser.

Try uploading an image.

It should be saved in the `uploads` folder now, and you'll see it by running `ls uploads`.

### In your phone's browser

With the server running on your desktop, open the link on your phone using your local IP address (your phone will need to be on the same WIFI network).

Find your local IP with `ipconfig getifaddr en1`.

Go to `192.168.XXX.XXX:9000` in your mobile browser (replacing the IP address with your local one).

Try the camera upload. That file should now be on your computer (`ls uploads`).