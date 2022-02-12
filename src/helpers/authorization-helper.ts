import { Request, Response, NextFunction } from 'express';
import { ROLES } from './roles';

let authorize = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const role = authHeader && authHeader.split(' ')[0];

  // TODO: Implement jwt verification
  if (role !== ROLES.ADMIN) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};

export { authorize as authorizeUser };
