const express = require('express');
const pddiktiRoutes = require('./routes/pddiktiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/pddikti', pddiktiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
