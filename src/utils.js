export const subtractSecond = ({ hours, minutes, seconds }) => {
  if (seconds === 0) {
    if (minutes === 0) {
      if (hours === 0) {
        return { hours, minutes, seconds };
      }
      return {
        hours: hours - 1,
        minutes: 59,
        seconds: 59,
      };
    }
    return { hours, minutes: minutes - 1, seconds: 59 };
  }
  return { hours, minutes, seconds: seconds - 1 };
};
