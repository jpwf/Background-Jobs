import 'dotenv/config';
import express from 'express';

import BullBoard from 'bull-board';

import Usercontroller from './app/controller/Userscontroller';
import Queue from './app/lib/Queue'


const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json()); //faz meu app aceitar requisições no formato json

app.post('/users', Usercontroller.store);

app.use('/admin/queues', BullBoard.UI)

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});