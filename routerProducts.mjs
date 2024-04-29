import express from "express";
import multer from "multer";

const app = express.Router();
const upload = multer();

app.get("/api/products", (req, res) => {
  res.status(200).json({ message: "得到所有產品" });
});

app.post("/api/products", upload.none(), (req, res) => {
  res.status(200).json({ message: "新增一個產品" });
});

app.get("/api/products/search", (req, res) => {
  const id = req.query.id;
  res.status(200).json({ message: `使用ID為${id}作為條件搜尋產品` });
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `得到產品ID為${id}的產品` });
});

app.put("/api/products/:id", upload.none(), (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `更新ID為${id}的產品` });
});

app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `刪除ID為${id}的產品` });
});

export default app;
