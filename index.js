const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('./config/keys');
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, { useNewUrlParser: true });

require('./models/Coupon');
require('./models/Demand');
require('./models/Registration');

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);

app.listen(5000);