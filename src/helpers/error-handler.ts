import { Request, Response, NextFunction } from 'express';

let errorHandler = (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    message: new Error('requested url not found').message,
  });

  next();
};

export {errorHandler as defaultErrorHandler}
