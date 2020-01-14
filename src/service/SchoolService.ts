import {EntityManager, Transaction, TransactionManager} from "typeorm";
import School from "../entity/School";
import SchoolDao from "../dao/SchoolDao";
import Student from "../entity/Student";
import StudentDao from "../dao/StudentDao";

export default class MyCLass {
    @Transaction({isolation: "SERIALIZABLE"})
    public async addSchoolWithStudent(@TransactionManager() manager: EntityManager) {

        const schoolDao = new SchoolDao();
        const school = new School();
        school.name = "school-1";
        let addedSchool = await schoolDao.save(manager, school);
        console.log('addedSchool is  ', addedSchool);

        const studentDao = new StudentDao();
        const student = new Student();
        student.firstName = "Mafei";
        student.lastName = "SL";
        let addedStudent1 = await studentDao.save(manager, student);
        console.log('addedStudent-1 is  ', addedStudent1);


        //try to add 2nd user also same name,
        //then the database throws an error because of firstName is unique
        //then transaction begin to rollback the data we added before using this transaction


        const student1 = new Student();
        student1.firstName = "Mafei";
        student1.lastName = "SL";
        let addedStudent2 = await studentDao.save(manager, student1);
        console.log('addedStudent-2 is  ', addedStudent2);
    }
}
