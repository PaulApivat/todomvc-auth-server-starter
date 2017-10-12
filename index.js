const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const Appbase = require('appbase-js');

// middlewares
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

const checkJwt = jwt({
	// Dynamically provide a signing key
	// based on the kid in the header and
	// the singing keys provided by the JWKS endpoint.
	secret: jwksRsa.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: 'https://divyanshu.auth0.com/.well-known/jwks.json',
	}),

	// Validate the audience and the issuer.
	audience: 'https://todomvappbase',
	issuer: 'https://divyanshu.auth0.com/',
	algorithms: ['RS256']
});

const appbaseRef = new Appbase({
	url: "https://scalr.api.appbase.io",
	app: "todomvc-auth",
	credentials: "QiqJNlwfU:41a45e61-f761-44fe-947a-6f47de32ae0a"
});

const ES_TYPE = "todo_reactjs";

// routes logic goes here
app.post('/', checkJwt, (req, res) => {
    
})

app.put('/', checkJwt, (req, res) => {
    
})

app.delete('/', checkJwt, (req, res) => {
	
})

app.listen(8000, () => {
	console.log('Node middleware listening on port 8000!');
});