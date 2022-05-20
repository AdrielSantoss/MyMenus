import { Application, Request, Response } from 'express';

module.exports = (application: Application) => {
  application.get('/api/users', (req: Request, res: Response) => {
    (application as any).app.controllers.users.GetUsers(application, req, res);
  });

  application.post('/api/users', (req: Request, res: Response) => {
    (application as any).app.controllers.users.PostUser(application, req, res);
  });
};
