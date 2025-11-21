import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, timestamp, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  name: text("name"),
  subscriptionTier: text("subscription_tier").notNull().default("free"),
  creditsRemaining: integer("credits_remaining").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const generations = pgTable("generations", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  sessionId: text("session_id"),
  originalImageUrl: text("original_image_url"),
  generatedImageUrls: jsonb("generated_image_urls").$type<string[]>(),
  bodyType: text("body_type").notNull(),
  renderQuality: text("render_quality").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const enterpriseLeads = pgTable("enterprise_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  inquiryType: text("inquiry_type").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertGenerationSchema = createInsertSchema(generations).omit({
  id: true,
  createdAt: true,
  status: true,
});

export const insertEnterpriseLeadSchema = createInsertSchema(enterpriseLeads).omit({
  id: true,
  createdAt: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Generation = typeof generations.$inferSelect;
export type InsertGeneration = z.infer<typeof insertGenerationSchema>;

export type EnterpriseLead = typeof enterpriseLeads.$inferSelect;
export type InsertEnterpriseLead = z.infer<typeof insertEnterpriseLeadSchema>;
