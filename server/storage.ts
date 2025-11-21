import { db } from "../db/index";
import { users, generations, enterpriseLeads, type User, type InsertUser, type Generation, type InsertGeneration, type EnterpriseLead, type InsertEnterpriseLead } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createUser(user: InsertUser): Promise<User>;
  getUserByEmail(email: string): Promise<User | undefined>;
  
  createGeneration(generation: InsertGeneration): Promise<Generation>;
  getGenerationById(id: number): Promise<Generation | undefined>;
  getGenerationsByUserId(userId: string): Promise<Generation[]>;
  getGenerationsBySessionId(sessionId: string): Promise<Generation[]>;
  updateGenerationStatus(id: number, status: string, generatedImageUrls?: string[]): Promise<void>;
  
  createEnterpriseLead(lead: InsertEnterpriseLead): Promise<EnterpriseLead>;
}

export class DatabaseStorage implements IStorage {
  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createGeneration(insertGeneration: InsertGeneration): Promise<Generation> {
    const [generation] = await db.insert(generations).values(insertGeneration).returning();
    return generation;
  }

  async getGenerationById(id: number): Promise<Generation | undefined> {
    const [generation] = await db.select().from(generations).where(eq(generations.id, id));
    return generation;
  }

  async getGenerationsByUserId(userId: string): Promise<Generation[]> {
    return db.select().from(generations).where(eq(generations.userId, userId));
  }

  async getGenerationsBySessionId(sessionId: string): Promise<Generation[]> {
    return db.select().from(generations).where(eq(generations.sessionId, sessionId));
  }

  async updateGenerationStatus(id: number, status: string, generatedImageUrls?: string[]): Promise<void> {
    await db.update(generations)
      .set({ status, ...(generatedImageUrls && { generatedImageUrls }) })
      .where(eq(generations.id, id));
  }

  async createEnterpriseLead(insertLead: InsertEnterpriseLead): Promise<EnterpriseLead> {
    const [lead] = await db.insert(enterpriseLeads).values(insertLead).returning();
    return lead;
  }
}

export const storage = new DatabaseStorage();
