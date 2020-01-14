import {EntityManager} from "typeorm";
import School from "../entity/School";

export default class SchoolDao {
    public save(manager: EntityManager, school: School) {
        return manager.save(school).catch(reason => {
            throw new Error("failed to add school")
        });
    }
}