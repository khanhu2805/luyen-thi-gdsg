'use client';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';

export default function ExamCountdown({ targetDate, examName }: { targetDate: string, examName: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-[#1f2a4a] text-white py-4 px-6 flex flex-col md:flex-row items-center justify-center gap-6 shadow-md w-full">
      <h2 className="font-heading text-lg font-bold flex items-center gap-2 font-montserrat">
        Chỉ còn cách kỳ thi {examName}:
      </h2>
      <div className="flex gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center min-w-[60px]">
            <div className="bg-white/10 rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold backdrop-blur-sm">
              {value.toString().padStart(2, '0')}
            </div>
            <span className="text-xs mt-1 uppercase opacity-80">{unit}</span>
          </div>
        ))}
      </div>
      {/* <Button 
        variant="contained" 
        color="error" // Tạo màu đỏ nổi bật tương đương bg-red-600
        sx={{ borderRadius: 8, px: 3, py: 1, fontWeight: 'bold', textTransform: 'none' }}
      >
        Đăng ký ôn tốc chiến
      </Button> */} 
    </div>
  );
}