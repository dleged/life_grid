import { useState, useEffect } from 'react';
import './index.css'; // 引入自定义样式

const LifeGrid = () => {
  const [colors, setColors] = useState(Array(900).fill('bg-gray-200'));
  const [descriptions, setDescriptions] = useState(Array(900).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);

  const colorOptions = [
    { color: 'bg-red-500', description: '重要事件' },
    { color: 'bg-blue-500', description: '快乐时光' },
    { color: 'bg-green-500', description: '平静时光' },
    // 添加更多颜色和描述
  ];

  useEffect(() => {
    if (currentIndex < 900) {
      const timer = setTimeout(() => {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[currentIndex] = colorOptions[currentIndex % colorOptions.length].color;
          return newColors;
        });
        setDescriptions((prevDescriptions) => {
          const newDescriptions = [...prevDescriptions];
          newDescriptions[currentIndex] = colorOptions[currentIndex % colorOptions.length].description;
          return newDescriptions;
        });
        setCurrentIndex(currentIndex + 1);
      }, 1); // 动画速度
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleColorChange = (index: number, colorIndex: number) => {
    setColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = colorOptions[colorIndex].color;
      return newColors;
    });
    setDescriptions((prevDescriptions) => {
      const newDescriptions = [...prevDescriptions];
      newDescriptions[index] = colorOptions[colorIndex].description;
      return newDescriptions;
    });
  };

  return (
    <div className="grid grid-cols-30">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`w-6 h-6 ${color} border border-gray-300 cursor-pointer`} // 设置格子大小为 32px
          title={descriptions[index]}
          onClick={() => handleColorChange(index, (index + 1) % colorOptions.length)}
        />
      ))}
    </div>
  );
};

export default LifeGrid;
