function calcAverageCalories(days) {
    if (days.length === 0) {
      return 0;
    }
  
  
    const totalCalories = days.reduce((acc, day) => acc + day.calories, 0);
    const numberOfDays = days.length;
  
  
    const averageCalories = totalCalories / numberOfDays;
  
  
    return Math.round(averageCalories);
    
  }
  