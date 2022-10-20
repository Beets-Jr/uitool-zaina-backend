import { Router, Request, Response } from 'express';

import { accountsRoutes } from './accounts.routes';
import { questionsRoutes } from './questions.routes';
import { toolsRoutes } from './tools.routes';

const router = Router();

router.get('/', (request: Request, response: Response) => {
  response.send('🖌️  Server Online!');
});

router.use('/account', accountsRoutes);
router.use('/questions', questionsRoutes);
router.use('/tools', toolsRoutes);

export { router };
