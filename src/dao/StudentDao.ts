import {EntityManager} from "typeorm";
import Student from "../entity/Student";

export default class StudentDao {
    public save(manager: EntityManager, user: Student) {
        return manager.save(user).catch(reason => {
            //throw an error you want
            throw new Error("failed to add user");
        });
    }
}