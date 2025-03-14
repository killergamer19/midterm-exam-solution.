function delayedGreeting(name) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2000); // 2 seconds delay
  }
  
  // Example usage:
  delayedGreeting("Alice");
  