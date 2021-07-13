import { Router } from 'express';

// export let todoList = []

import { create, todoList } from '../controllers/creating.controller.js';
import { read } from '../controllers/reading.controller.js';
import { update } from '../controllers/updating.controller.js';
import { del } from '../controllers/deleting.controller.js';


const router = Router();

router.post('/create', create);
router.get('/read', read);
router.delete('/del', del);
router.put('/update', update);

export default router;