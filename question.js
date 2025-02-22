const topics = {
    "Arithmetic": [
      {
        question: "What is 10% of 50?",
        options: ["5", "10", "15", "20"],
        answer: "5",
        explanation: "10% of 50 is calculated as (10/100) * 50 = 5."
      },
      {
        question: "What is 20 + 30?",
        options: ["40", "50", "60", "70"],
        answer: "50",
        explanation: "20 + 30 equals 50."
      },
      {
            question: "What is 15% of 120?",
            options: ["18", "20", "22", "25"],
            answer: "18",
            explanation: "15% of 120 is calculated as (15/100) * 120 = 18."
          },
          {
            question: "What is the result of 50 × 0.5?",
            options: ["10", "20", "25", "30"],
            answer: "25",
            explanation: "50 × 0.5 = 25."
          },
          {
            question: "A man buys a book for Rs. 250 and sells it for Rs. 300. What is the profit percentage?",
            options: ["15%", "20%", "25%", "30%"],
            answer: "20%",
            explanation: "Profit = Selling Price - Cost Price = 300 - 250 = 50. Profit Percentage = (50 / 250) * 100 = 20%."
          },
          {
            question: "The sum of a number and its half is 72. What is the number?",
            options: ["48", "50", "54", "60"],
            answer: "48",
            explanation: "Let the number be x. The equation is x + x/2 = 72. Solving for x gives x = 48."
          },
          {
            question: "What is 25% of 200?",
            options: ["30", "40", "50", "60"],
            answer: "50",
            explanation: "25% of 200 is calculated as (25/100) * 200 = 50."
          },
          {
            question: "If a car travels 120 kilometers in 3 hours, what is its average speed?",
            options: ["30 km/h", "35 km/h", "40 km/h", "45 km/h"],
            answer: "40 km/h",
            explanation: "Average speed = Total distance / Total time = 120 km / 3 hours = 40 km/h."
          },
          {
            question: "What is the perimeter of a rectangle with length 15 cm and width 10 cm?",
            options: ["40 cm", "50 cm", "60 cm", "70 cm"],
            answer: "50 cm",
            explanation: "Perimeter = 2 × (Length + Width) = 2 × (15 + 10) = 50 cm."
          },
          {
            question: "If the cost price of 12 articles is Rs. 480, what is the cost price of 5 articles?",
            options: ["Rs. 160", "Rs. 180", "Rs. 200", "Rs. 220"],
            answer: "Rs. 200",
            explanation: "Cost price of 1 article = 480 / 12 = 40. Cost price of 5 articles = 5 × 40 = Rs. 200."
          },
         
        ],
    "Algebra": [
      {
        question: "Solve for x: 2x + 3 = 7",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "Subtract 3 from both sides: 2x = 4. Then divide by 2: x = 2."
      },
          {
            question: "Solve for x: 3x - 5 = 16",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            answer: "x = 7",
            explanation: "Add 5 to both sides: 3x = 21. Then divide by 3: x = 7."
          },
          {
            question: "Solve for x: 4(x + 3) = 24",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            answer: "x = 3",
            explanation: "First, expand: 4x + 12 = 24. Then subtract 12 from both sides: 4x = 12. Now divide by 4: x = 3."
          },
          {
            question: "Solve for x: 2x/3 + 5 = 11",
            options: ["x = 12", "x = 9", "x = 8", "x = 6"],
            answer: "x = 9",
            explanation: "First, subtract 5 from both sides: 2x/3 = 6. Then multiply both sides by 3: 2x = 18. Finally, divide by 2: x = 9."
          },
          {
            question: "Solve for x: x/5 - 4 = 2",
            options: ["x = 10", "x = 12", "x = 15", "x = 20"],
            answer: "x = 30",
            explanation: "First, add 4 to both sides: x/5 = 6. Then multiply both sides by 5: x = 30."
          },
          {
            question: "Solve for x: 5(x - 2) = 3x + 4",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            answer: "x = 4",
            explanation: "First, expand: 5x - 10 = 3x + 4. Then, subtract 3x from both sides: 2x - 10 = 4. Add 10 to both sides: 2x = 14. Finally, divide by 2: x = 7."
          },
          {
            question: "Solve for x: 2x^2 - 8 = 0",
            options: ["x = -2", "x = 0", "x = 2", "x = ±2"],
            answer: "x = ±2",
            explanation: "First, add 8 to both sides: 2x^2 = 8. Then divide by 2: x^2 = 4. Finally, take the square root of both sides: x = ±2."
          },
          {
            question: "Solve for x: 3(x - 4) = 2x + 6",
            options: ["x = 4", "x = 6", "x = 8", "x = 10"],
            answer: "x = 18",
            explanation: "First, expand: 3x - 12 = 2x + 6. Then subtract 2x from both sides: x - 12 = 6. Add 12 to both sides: x = 18."
          },
          {
            question: "Solve for x: 4x - 5 = 3x + 7",
            options: ["x = 3", "x = 2", "x = 1", "x = 4"],
            answer: "x = 12",
            explanation: "First, subtract 3x from both sides: x - 5 = 7. Then add 5 to both sides: x = 12."
          },
          {
            question: "Solve for x: x^2 - 6x + 9 = 0",
            options: ["x = 0", "x = 3", "x = -3", "x = 6"],
            answer: "x = 3",
            explanation: "This is a perfect square trinomial: (x - 3)^2 = 0. So, x = 3."
          },
    ],
    "Profit and Loss": [
      {
        question: "A man buys an article for Rs. 1500 and sells it for Rs. 1800. What is his profit percentage?",
        options: ["15%", "20%", "25%", "30%"],
        answer: "20%",
        explanation: "Profit = Selling Price - Cost Price = 1800 - 1500 = 300. Profit Percentage = (Profit / Cost Price) * 100 = (300 / 1500) * 100 = 20%."
      },
      {
        question: "A shopkeeper buys 50 articles for Rs. 2500 and sells each article for Rs. 60. What is his total profit?",
        options: ["Rs. 500", "Rs. 600", "Rs. 700", "Rs. 800"],
        answer: "Rs. 800",
        explanation: "Cost Price per article = 2500 / 50 = 50. Selling Price per article = 60. Profit per article = 60 - 50 = 10. Total profit = 10 * 50 = 500."
      },
      {
        question: "If a man sells an item at a loss of 10%, and the selling price is Rs. 270, what was the cost price?",
        options: ["Rs. 300", "Rs. 320", "Rs. 280", "Rs. 250"],
        answer: "Rs. 300",
        explanation: "Let the cost price be 'C'. Selling price = Cost price - 10% of Cost price = 0.9C. So, 0.9C = 270, which gives C = 270 / 0.9 = 300."
      },
      {
        question: "A man sells a bicycle at Rs. 1200, making a profit of 20%. What is the cost price of the bicycle?",
        options: ["Rs. 1000", "Rs. 1100", "Rs. 1200", "Rs. 1300"],
        answer: "Rs. 1000",
        explanation: "Let the cost price be 'C'. Selling price = Cost price + Profit. The profit is 20% of the cost price, so 1200 = C + 0.2C, which simplifies to 1200 = 1.2C. Hence, C = 1200 / 1.2 = 1000."
      },
      {
        question: "A man sold a watch for Rs. 1500 at a profit of 25%. What was the cost price of the watch?",
        options: ["Rs. 1200", "Rs. 1250", "Rs. 1300", "Rs. 1400"],
        answer: "Rs. 1200",
        explanation: "Selling Price = Cost Price + Profit. Profit is 25% of the cost price. Let the cost price be C. 1500 = C + 0.25C, which simplifies to 1500 = 1.25C. So, C = 1500 / 1.25 = 1200."
      },
      {
        question: "A trader buys 10 books for Rs. 300 and sells each book for Rs. 35. What is his percentage profit?",
        options: ["5%", "10%", "15%", "20%"],
        answer: "16.67%",
        explanation: "Cost price per book = 300 / 10 = 30. Selling price per book = 35. Profit per book = 35 - 30 = 5. Profit percentage = (5 / 30) * 100 = 16.67%."
      },
      {
        question: "A person bought an article for Rs. 4000 and sold it for Rs. 3600. What is the percentage loss?",
        options: ["10%", "15%", "20%", "25%"],
        answer: "10%",
        explanation: "Loss = Cost Price - Selling Price = 4000 - 3600 = 400. Loss percentage = (400 / 4000) * 100 = 10%."
      },
      {
        question: "A man sells an article at Rs. 450 and gains 12%. What is the cost price of the article?",
        options: ["Rs. 400", "Rs. 420", "Rs. 430", "Rs. 440"],
        answer: "Rs. 402.68",
        explanation: "Let the cost price be 'C'. Selling price = Cost price + Profit. The profit is 12% of the cost price. So, 450 = C + 0.12C, which simplifies to 450 = 1.12C. Hence, C = 450 / 1.12 = 402.68."
      },
      {
        question: "A shopkeeper bought an article for Rs. 800 and sold it at a loss of 15%. What was the selling price?",
        options: ["Rs. 680", "Rs. 700", "Rs. 720", "Rs. 740"],
        answer: "Rs. 680",
        explanation: "Loss = 15% of Rs. 800 = 0.15 * 800 = 120. Selling price = 800 - 120 = 680."
      },
      {
        question: "A person buys a laptop for Rs. 20,000 and sells it for Rs. 22,000. What is his profit percentage?",
        options: ["10%", "15%", "20%", "25%"],
        answer: "10%",
        explanation: "Profit = Selling Price - Cost Price = 22,000 - 20,000 = 2,000. Profit Percentage = (2,000 / 20,000) * 100 = 10%."
      }
    ],
  "Percentage": [
    {
      question: "What is 25% of 200?",
      options: ["30", "40", "50", "60"],
      answer: "50",
      explanation: "25% of 200 is calculated as (25/100) * 200 = 50."
    },
    {
      question: "If a number is increased by 20% and the result is 120, what was the original number?",
      options: ["100", "110", "115", "125"],
      answer: "100",
      explanation: "Let the original number be x. x + 20% of x = 120. This simplifies to x + 0.2x = 120, or 1.2x = 120. Solving for x gives x = 100."
    },
    {
      question: "A product's price is reduced by 15% to Rs. 850. What was the original price?",
      options: ["Rs. 900", "Rs. 950", "Rs. 1000", "Rs. 1050"],
      answer: "Rs. 1000",
      explanation: "Let the original price be x. After a 15% reduction, the price becomes 85% of x, which equals Rs. 850. So, 0.85x = 850. Solving for x gives x = Rs. 1000."
    },
    {
      question: "A student scored 45 out of 60 in an exam. What is his percentage score?",
      options: ["70%", "75%", "80%", "85%"],
      answer: "75%",
      explanation: "Percentage score = (45 / 60) * 100 = 75%."
    },
    {
      question: "If a number is decreased by 30% and the result is 140, what was the original number?",
      options: ["200", "210", "220", "230"],
      answer: "200",
      explanation: "Let the original number be x. x - 30% of x = 140. This simplifies to x - 0.3x = 140, or 0.7x = 140. Solving for x gives x = 200."
    },
    {
      question: "A shopkeeper offers a 10% discount on an item priced at Rs. 500. What is the selling price?",
      options: ["Rs. 450", "Rs. 460", "Rs. 470", "Rs. 480"],
      answer: "Rs. 450",
      explanation: "Discount = 10% of Rs. 500 = Rs. 50. Selling price = Rs. 500 - Rs. 50 = Rs. 450."
    },
    {
      question: "A population increases by 5% annually. If the current population is 10,000, what will it be after one year?",
      options: ["10,500", "10,600", "10,700", "10,800"],
      answer: "10,500",
      explanation: "Population after one year = 10,000 + 5% of 10,000 = 10,000 + 500 = 10,500."
    },
    {
      question: "A student needs to score at least 60% to pass an exam. If the exam is out of 200 marks, what is the minimum score required?",
      options: ["100", "110", "120", "130"],
      answer: "120",
      explanation: "Minimum score = 60% of 200 = (60/100) * 200 = 120."
    },
    {
      question: "A car's value depreciates by 8% annually. If its current value is Rs. 50,000, what will it be after one year?",
      options: ["Rs. 45,000", "Rs. 46,000", "Rs. 47,000", "Rs. 48,000"],
      answer: "Rs. 46,000",
      explanation: "Depreciation = 8% of Rs. 50,000 = Rs. 4,000. Value after one year = Rs. 50,000 - Rs. 4,000 = Rs. 46,000."
    },
    {
      question: "A student answered 80 questions correctly out of 100. What is his percentage accuracy?",
      options: ["75%", "80%", "85%", "90%"],
      answer: "80%",
      explanation: "Percentage accuracy = (80 / 100) * 100 = 80%."
    }
  ]
  };
  