import PDFDocument from "pdfkit";
import TeacherModel from "../models/Teacher.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildPDF(dataCallback, endCallback, req) {
  const doc = new PDFDocument({ bufferPages: true });
  const teacherId = req.params.id;
  const teacher = await TeacherModel.findById(teacherId);
  console.log(teacher);
  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.fontSize(20).text("");

  doc.fontSize(20).text("");

  doc
    .fontSize(30)
    .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
    .text(" Общие сведения:");

  doc
    .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
    .fontSize(12)
    .text(
      `
        имя: ${teacher.name}\n
        фамилия:${teacher.surname}\n
        отчество:${teacher.patronimyc}\n
        стаж:${teacher.seniority}\n
        серия паспорта:${teacher.seriesPasport}\n
        номер паспорта:${teacher.numberPasport}\n
        дата выдачи:${teacher.dateIssue}\n
        код подразделения:${teacher.unitCode}\n
        кем выдан:${teacher.whoIssued}\n
        пол:${teacher.sex}\n
        дата рождения:${teacher.bornDate}\n
        место рождения:${teacher.bornPlace}\n
        место проживания по прописке:${teacher.registration}\n
        фактическое место проживания:${teacher.actualLiving}\n
        СНИЛС:${teacher.SNILS}\n`
    );

  doc
    .fontSize(30)
    .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
    .text(" Образование:");

  teacher.education.forEach((e) => {
    doc
      .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
      .fontSize(12)
      .text(
        `
        номер свидетельства: ${e.certificationNumber}\n
        дата выдачи:${e.dataReceipt}\n
        специальность:${e.speciality}\n
        наименование учебного заведения:${e.universityName}\n
        -------------------------------------\n`
      );
  });

  doc
    .fontSize(30)
    .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
    .text(" Курсы повышения квалификации:");

  teacher.course.forEach((e) => {
    doc
      .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
      .fontSize(12)
      .text(
        `
        номер свидетельства: ${e.number}\n
        дата окончания:${e.dateEnd}\n
        время прохождения:${e.hours}\n
        специальность:${e.speciality}\n
        -------------------------------------\n`
      );
  });

  doc
    .fontSize(30)
    .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
    .text("Учебные дисциплины");

  teacher.lesson.forEach((e) => {
    doc
      .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
      .fontSize(12)
      .text(
        `
            наименование предмета: ${e.name}\n 
            -------------------------------------\n`
      );
  });

  doc
    .fontSize(30)
    .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
    .text("Состав семьи");

  teacher.family.forEach((e) => {
    doc
      .font(path.resolve(__dirname, "fonts", "Roboto-Black.ttf"))
      .fontSize(12)
      .text(
        `
            Фамилия: ${e.surname}\n
            Имя:${e.name}\n
            отчество:${e.patronimyc}\n
            родство:${e.kinship}\n
            дата рождения:${e.bornDate}\n
            -------------------------------------\n
            `
      );
  });

  doc.end();
}

export default buildPDF;
