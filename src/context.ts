import { PrismaClient } from "@prisma/client";
import { PubSub } from "graphql-subscriptions";
import { Request } from "apollo-server-express";

const prisma = new PrismaClient();

export interface Context {
  request: Request & any;
  prisma: PrismaClient;
  pubsub: PubSub;
  appSecret: string;
}

const pubsub = new PubSub();

export function createContext(request: Request): Context {
  return {
    request,
    prisma,
    pubsub,
    appSecret: process.env.JWT_SECRET,
  };
}
