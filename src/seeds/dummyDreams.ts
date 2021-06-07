import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import Dream from "../entities/DreamsModel";

/**
 * FIXME
 * - Populate the database with users defined in `src/seeds/users.json`
 *
 * Tip!
 * - Consult the documentation listed in **Refs** above
 */

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const dreams = require("./dreams.json");
    await connection.createQueryBuilder().insert().into(Dream).values(dreams).execute();
  }
}
