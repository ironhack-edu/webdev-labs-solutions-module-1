class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length === this.MAX_SIZE) return false;
    return true;
  }

  display() {
    return this.stackControl;
  }

  isEmpty() {
    if (this.stackControl.length > 0) return false;
    return true;
  }

  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error('STACK_OVERFLOW');
    }
  }

  
  pop() {
    if (this.stackControl.length === 0) {
      throw new Error('STACK_UNDERFLOW');
    } else {
      return this.stackControl.pop();
    }
  }
}