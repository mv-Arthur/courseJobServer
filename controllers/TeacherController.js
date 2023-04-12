import TeacherModel from "../models/Teacher.js";

export class TeacherController {
  static async getAll(req, res) {
    try {
      const teachers = await TeacherModel.find();
      res.json(teachers);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "не удалось получить преподавателей",
      });
    }
  }

  static async getOne(req, res) {
    try {
      const teacherId = req.params.id;
      const teacher = await TeacherModel.findById(teacherId);
      if (!teacher) {
        return res.status(404).json({
          message: "не удалось найти билет",
        });
      }
      res.status(200).json(teacher);
    } catch (err) {
      res.status(500).json({
        message: "не удалось вернуть преподавателя",
      });
    }
  }

  static async remove(req, res) {
    try {
      const teacherId = req.params.id;

      const teacher = await TeacherModel.findOneAndDelete({
        _id: teacherId,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "не удалось удалить преподавателя",
      });
    }
  }

  static async create(req, res) {
    try {
      const doc = new TeacherModel({
        name: req.body.name,
        surname: req.body.surname,
        patronimyc: req.body.patronimyc,
        seniority: req.body.seniority,
        seriesPasport: req.body.seriesPasport,
        numberPasport: req.body.numberPasport,
        dateIssue: req.body.dateIssue,
        unitCode: req.body.unitCode,
        whoIssued: req.body.whoIssued,
        sex: req.body.sex,
        bornDate: req.body.bornDate,
        bornPlace: req.body.bornPlace,
        registration: req.body.registration,
        actualLiving: req.body.actualLiving,
        SNILS: req.body.SNILS,
        education: req.body.education,
        course: req.body.course,
        lesson: req.body.lesson,
        family: req.body.family,
        imageUrl: req.body.imageUrl,
      });
      const teacher = await doc.save();

      res.json(teacher);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "не удалось добавить преподавателя",
      });
    }
  }

  static async update(req, res) {
    try {
      const teacherId = req.params.id;
      await TeacherModel.updateOne(
        {
          _id: teacherId,
        },
        {
          name: req.body.name,
          surname: req.body.surname,
          patronimyc: req.body.patronimyc,
          seniority: req.seniority,
          seriesPasport: req.body.seriesPasport,
          numberPasport: req.body.numberPasport,
          dateIssue: req.body.dateIssue,
          unitCode: req.body.unitCode,
          whoIssued: req.body.whoIssued,
          sex: req.body.sex,
          bornDate: req.body.bornDate,
          bornPlace: req.body.bornPlace,
          registration: req.body.registration,
          actualLiving: req.body.actualLiving,
          SNILS: req.body.SNILS,
          education: req.body.education,
          course: req.body.course,
          lesson: req.body.lesson,
          family: req.body.family,
          imageUrl: req.body.imageUrl,
        }
      );

      res.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "не удалось обновить карточку преподавателя",
      });
    }
  }
}
