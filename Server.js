const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
 const PORT = 3000;
  app.get("/big.txt", async (req, res) =>
     { try { const response = await fetch("http://norvig.com/big.txt");
   const data = await response.text(); res.send(data);
 } catch (error)
  { console.error("Error fetching data:", error);
   res.status(500).send("Error fetching data"); }
 }); app.listen(PORT,
     () => { console.log(`server listening on port ${PORT}`); });