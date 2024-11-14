export interface Holiday {
  date: string; // 格式：MM-DD
  name: string;
  type: 'holiday' | 'workday'; // holiday: 放假, workday: 调休上班
}

export const HOLIDAYS_2024: Holiday[] = [
  // 元旦
  { date: '01-01', name: '元旦', type: 'holiday' },
  
  // 春节
  { date: '02-10', name: '春节', type: 'holiday' },
  { date: '02-11', name: '春节', type: 'holiday' },
  { date: '02-12', name: '春节', type: 'holiday' },
  { date: '02-13', name: '春节', type: 'holiday' },
  { date: '02-14', name: '春节', type: 'holiday' },
  { date: '02-15', name: '春节', type: 'holiday' },
  { date: '02-16', name: '春节', type: 'holiday' },
  { date: '02-17', name: '春节', type: 'holiday' },
  
  // 清明节
  { date: '04-04', name: '清明节', type: 'holiday' },
  { date: '04-05', name: '清明节', type: 'holiday' },
  { date: '04-06', name: '清明节', type: 'holiday' },
  
  // 劳动节
  { date: '05-01', name: '劳动节', type: 'holiday' },
  { date: '05-02', name: '劳动节', type: 'holiday' },
  { date: '05-03', name: '劳动节', type: 'holiday' },
  { date: '05-04', name: '劳动节', type: 'holiday' },
  { date: '05-05', name: '劳动节', type: 'holiday' },
  
  // 端午节
  { date: '06-10', name: '端午节', type: 'holiday' },
  
  // 中秋节
  { date: '09-15', name: '中秋节', type: 'holiday' },
  { date: '09-16', name: '中秋节', type: 'holiday' },
  { date: '09-17', name: '中秋节', type: 'holiday' },
  
  // 国庆节
  { date: '10-01', name: '国庆节', type: 'holiday' },
  { date: '10-02', name: '国庆节', type: 'holiday' },
  { date: '10-03', name: '国庆节', type: 'holiday' },
  { date: '10-04', name: '国庆节', type: 'holiday' },
  { date: '10-05', name: '国庆节', type: 'holiday' },
  { date: '10-06', name: '国庆节', type: 'holiday' },
  { date: '10-07', name: '国庆节', type: 'holiday' },
  
  // 调休工作日
  { date: '02-04', name: '调休', type: 'workday' },
  { date: '02-18', name: '调休', type: 'workday' },
  { date: '04-07', name: '调休', type: 'workday' },
  { date: '05-11', name: '调休', type: 'workday' },
  { date: '09-14', name: '调休', type: 'workday' },
  { date: '09-29', name: '调休', type: 'workday' },
  { date: '10-12', name: '调休', type: 'workday' },
]; 