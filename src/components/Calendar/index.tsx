import React, { useEffect, useState } from 'react';
import './index.css';

interface CalendarProps {
  year?: number;
}

const Calendar: React.FC<CalendarProps> = ({ year = 2024 }) => {
  const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六'];
  const DAYS_IN_WEEK = 7;
  const ROWS_IN_MONTH = 6;
  const [cellSize, setCellSize] = useState(30);

  useEffect(() => {
    const calculateSize = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      
      // 计算可用空间
      const availableHeight = vh - 60; // 减去标题和padding的空间
      const availableWidth = vw - 40; // 减去左右padding
      
      // 计算单个月份的最大可用空间
      const monthWidth = (availableWidth / 4) - 8; // 4列，减去间距
      const monthHeight = (availableHeight / 3) - 8; // 3行，减去间距
      
      // 计算单个格子的大小（取较小值以确保完全显示）
      const maxCellWidth = (monthWidth - 24) / 7; // 7列，减去间距
      const maxCellHeight = (monthHeight - 40) / 7; // 7行（包括星期），减去标题和间距
      
      const newCellSize = Math.floor(Math.min(maxCellWidth, maxCellHeight));
      setCellSize(newCellSize);
    };

    calculateSize();
    window.addEventListener('resize', calculateSize);
    return () => window.removeEventListener('resize', calculateSize);
  }, []);

  // 获取上个月的最后几天
  const getPreviousMonthDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const startDay = firstDay.getDay();
    const lastDayOfPrevMonth = new Date(year, month, 0);
    const daysInPrevMonth = lastDayOfPrevMonth.getDate();
    
    const days = [];
    for (let i = 0; i < startDay; i++) {
      const day = daysInPrevMonth - startDay + i + 1;
      days.push(
        <div key={`prev-${i}`} className="calendar-cell other-month">
          {day}
        </div>
      );
    }
    return days;
  };

  // 获取下个月的头几天
  const getNextMonthDays = (year: number, month: number, startingDay: number) => {
    const totalCells = DAYS_IN_WEEK * ROWS_IN_MONTH;
    const days = [];
    let dayCounter = 1;
    
    while (startingDay < totalCells) {
      days.push(
        <div key={`next-${dayCounter}`} className="calendar-cell other-month">
          {dayCounter}
        </div>
      );
      dayCounter++;
      startingDay++;
    }
    return days;
  };

  // 生成月份日期
  const generateMonthDays = (month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    
    const days = [
      // 添加上个月的日期
      ...getPreviousMonthDays(year, month)
    ];
    
    // 添加当月日期
    for (let i = 1; i <= totalDays; i++) {
      const isWeekend = new Date(year, month, i).getDay() === 0 || 
                       new Date(year, month, i).getDay() === 6;
      
      days.push(
        <div 
          key={i} 
          className={`calendar-cell ${isWeekend ? 'weekend' : ''}`}
        >
          {i}
        </div>
      );
    }

    // 添加下个月的日期
    const nextMonthDays = getNextMonthDays(year, month, days.length);
    days.push(...nextMonthDays);
    
    return days;
  };

  return (
    <div className="calendar" style={{'--cell-size': `${cellSize}px`} as React.CSSProperties}>
      <h1>{year}年</h1>
      <div className="months-grid">
        {Array.from({ length: 12 }, (_, month) => (
          <div key={month} className="month">
            <h3 className="month-title">{`${month + 1}月`}</h3>
            <div className="month-grid">
              {WEEKDAYS.map(day => (
                <div key={day} className="weekday">
                  {day}
                </div>
              ))}
              {generateMonthDays(month)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar; 