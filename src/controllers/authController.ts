import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import { RegisterDTO, LoginDTO } from '../types/auth';

export const register = async (req: Request, res: Response) => {
  const { email, password }: RegisterDTO = req.body;
  console.log("body");
  console.log(req.body);
  try {
    const user = await registerUser(email, password);
    res.status(201).json(user);
  } catch (error) {
    console.log("ERROR REGISTER:", error);
    res.status(400).json({ message: 'Error al registrar' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: LoginDTO = req.body;

  try {
    const token = await loginUser(email, password);
    res.json({ token });
  } catch {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
};