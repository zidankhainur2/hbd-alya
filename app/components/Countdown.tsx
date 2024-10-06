import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDownDate = new Date("Aug 30, 2027 18:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor(((distance % 1000) * 60) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div className="flex justify-center items-center py-6 bg-black">
      <Card className="max-w-xs md:max-w-md w-full shadow-lg rounded-lg bg-white/70 backdrop-blur-md p-4 md:p-6">
        <CardHeader>
          <CardTitle className="text-center text-xl md:text-2xl font-bold text-gray-800">
            Menghitung Hari Alya Balik Ke Home
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around text-2xl md:text-4xl font-semibold text-gray-700">
            <div className="flex flex-col items-center">
              <span>{timeLeft.days}</span>
              <span className="text-xs md:text-sm font-light">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{timeLeft.hours}</span>
              <span className="text-xs md:text-sm font-light">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{timeLeft.minutes}</span>
              <span className="text-xs md:text-sm font-light">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span>{timeLeft.seconds}</span>
              <span className="text-xs md:text-sm font-light">Seconds</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Countdown;
