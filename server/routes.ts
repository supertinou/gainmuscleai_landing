import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGenerationSchema, insertEnterpriseLeadSchema, insertUserSchema } from "@shared/schema";
import multer from "multer";
import { z } from "zod";

const upload = multer({ storage: multer.memoryStorage() });

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Create or get anonymous user session
  app.post("/api/session", async (req, res) => {
    const sessionId = req.body.sessionId || `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    res.json({ sessionId });
  });

  // Create generation request
  app.post("/api/generations", upload.single("image"), async (req, res) => {
    try {
      const { bodyType, renderQuality, userId, sessionId } = req.body;
      
      const validatedData = insertGenerationSchema.parse({
        userId: userId || null,
        sessionId: sessionId || null,
        bodyType,
        renderQuality,
        originalImageUrl: null, // In production, upload to S3/Cloud Storage
        generatedImageUrls: null,
      });

      const generation = await storage.createGeneration(validatedData);
      
      // Simulate AI processing (in production, queue this to a background job)
      setTimeout(async () => {
        const mockGeneratedUrls = [
          "/api/placeholder-result-1.jpg",
          "/api/placeholder-result-2.jpg",
          "/api/placeholder-result-3.jpg"
        ];
        await storage.updateGenerationStatus(generation.id, "completed", mockGeneratedUrls);
      }, 2000);

      res.json(generation);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create generation" });
      }
    }
  });

  // Get generation by ID
  app.get("/api/generations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const generation = await storage.getGenerationById(id);
      
      if (!generation) {
        return res.status(404).json({ error: "Generation not found" });
      }
      
      res.json(generation);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch generation" });
    }
  });

  // Get user generations
  app.get("/api/users/:userId/generations", async (req, res) => {
    try {
      const generations = await storage.getGenerationsByUserId(req.params.userId);
      res.json(generations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch generations" });
    }
  });

  // Get session generations
  app.get("/api/sessions/:sessionId/generations", async (req, res) => {
    try {
      const generations = await storage.getGenerationsBySessionId(req.params.sessionId);
      res.json(generations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch generations" });
    }
  });

  // Submit enterprise lead
  app.post("/api/enterprise-leads", async (req, res) => {
    try {
      const validatedData = insertEnterpriseLeadSchema.parse(req.body);
      const lead = await storage.createEnterpriseLead(validatedData);
      res.json(lead);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create enterprise lead" });
      }
    }
  });

  // Create user (simple registration endpoint)
  app.post("/api/users", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const existingUser = await storage.getUserByEmail(validatedData.email);
      
      if (existingUser) {
        return res.status(409).json({ error: "User already exists" });
      }
      
      const user = await storage.createUser(validatedData);
      res.json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create user" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
