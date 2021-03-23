const express = require('express')

const app = express();

const port = procces.env.PORT || 3000;
app.listen(port, () => console.log(`Server Listening on port ${port}`))