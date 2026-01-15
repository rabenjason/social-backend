import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "./prisma.ts";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const inscription = async (email: string, motDePasse: string) => {
  const hash = await bcrypt.hash(motDePasse, 10);

  const utilisateur = await prisma.utilisateur.create({
    data: { email, motDePasse: hash },
  });

  const token = jwt.sign({ id: utilisateur.id }, JWT_SECRET);

  return { token, utilisateur };
};

export const connexion = async (email: string, motDePasse: string) => {
  const utilisateur = await prisma.utilisateur.findUnique({
    where: { email },
  });

  if (!utilisateur) throw new Error("Utilisateur introuvable");

  const ok = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
  if (!ok) throw new Error("Mot de passe incorrect");

  const token = jwt.sign({ id: utilisateur.id }, JWT_SECRET);

  return { token, utilisateur };
};
