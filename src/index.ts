import express from "express";
const app = express();
const port = 4000; // default port to listen

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello!" );
    console.log(new Date(), "{app: hello, visitor: victorargento}")
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
