import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('Creating Message Board...');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}!`);
});
