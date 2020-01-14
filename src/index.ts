import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import SchoolService from "./service/SchoolService";

createConnection().then(async connection => {
    let schoolService = new SchoolService();
    schoolService.addSchoolWithStudent(getConnection().manager).catch(reason => {
        console.log('Error > ', reason);
    });
}).catch(error => console.log(error));

