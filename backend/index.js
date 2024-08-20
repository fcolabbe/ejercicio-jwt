import express from 'express';
import userRoutes from './routes/userRoutes.js';
const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
