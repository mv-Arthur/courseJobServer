import express from "express";
import buildPDF from "../service/pdf-service.js";
import TeacherModel from "../models/Teacher.js";
const router = express.Router();
router.get("/invoice/:id", async (req, res, next) => {
  const teacherId = req.params.id;
  const teacher = await TeacherModel.findById(teacherId);
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf;charset=utf-8",
    "Content-Disposition": `attachment;filename=${"example"}.pdf`,
  });
  buildPDF(
    (chunk) => stream.write(chunk),
    () => stream.end(),
    req
  );
});

export default router;
