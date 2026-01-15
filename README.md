# 🔐 Social Backend – Auth GraphQL

Backend simple et sécurisé pour l’authentification utilisateur  
(conçu pour l’apprentissage et les projets juniors).

---

## 📌 About

Ce projet est un **backend GraphQL** permettant :
- l’inscription d’un utilisateur
- la connexion sécurisée
- la récupération de l’utilisateur connecté (`me`)

L’objectif est de comprendre :
- l’authentification JWT
- l’utilisation de Prisma avec PostgreSQL
- le fonctionnement de GraphQL côté backend

---

## ⚙️ Features

- ✅ Inscription utilisateur
- ✅ Connexion utilisateur
- ✅ Mots de passe hashés (bcrypt)
- ✅ Authentification JWT
- ✅ Query protégée `me`
- ✅ PostgreSQL + Prisma
- ✅ Structure simple (junior-friendly)

---

## 🧱 Project Structure

```txt
social-backend/
│── prisma/
│   └── schema.prisma
│
│── src/
│   ├── prisma.ts      # Connexion à PostgreSQL
│   ├── auth.ts        # Logique d'authentification
│   ├── schema.ts      # Schéma GraphQL
│   └── server.ts      # Lancement du serveur
│
│── .env.example
│── package.json
│── tsconfig.json
│── README.md
