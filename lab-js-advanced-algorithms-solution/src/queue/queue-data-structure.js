class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    if (this.queueControl.length == this.MAX_SIZE) return false;
    return true;
  }

  isEmpty() {
    if (this.queueControl.length > 0) return false;
    return true;
  }

  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl;
    }
    throw new Error('QUEUE_OVERFLOW');
  }

  dequeue() {
    if (this.queueControl.length === 0) throw new Error('QUEUE_UNDERFLOW');
    return this.queueControl.shift();
  }

}

// class Queue {
//   constructor() {
//     this.queueControl = [];
//     this.MAX_SIZE = 10;
//   }

//   canEnqueue() {
//     // ... your code goes here
//   }

//   isEmpty() {
//     // ... your code goes here
//   }

//   enqueue(item) {
//     // ... your code goes here
//   }

//   dequeue() {
//     // ... your code goes here
//   }

//   display() {
//     // ... your code goes here
//   }  
// }
