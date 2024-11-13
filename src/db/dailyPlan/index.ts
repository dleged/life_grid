import Database from '@tauri-apps/plugin-sql';
import { DAILY_PLAN_DB } from '../constant';


class DailyPlanDB {
  dbName: string = DAILY_PLAN_DB;
  constuctor() {
    this.dbName = DAILY_PLAN_DB;
  }

  async loadDb() {
    return await Database.load(this.dbName);
  }

  async getData() {
    const db = await this.loadDb();

    debugger;
    let result = await db.select('SELECT COUNT(*) FROM daily');
    return result;
  };

  async updateData() {
    const db = await this.loadDb();
    await db.execute('INSERT into daily (date, plan, status, mark) VALUES ($1, $2, $3, $3)', ['2024-11-13', '学习', 'Done', '无']);
    const result = this.getData();
    return result;
  }

}


const dailyPlanDb = new DailyPlanDB();

export default dailyPlanDb;
