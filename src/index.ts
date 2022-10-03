import { AppDataSource } from "./data-source"
import { Person } from "./entity/Person"

AppDataSource.initialize().then(async () => {

    

}).catch(error => console.log(error))
