export class AddOperation {
  static readonly type = '[Root] AddOperation';
  public operation: string | null;

  constructor(operation: string, operations: string) {
    if (this.checkIfPreviousBinary(operations, operation)) {
      this.operation = operation
      return
    }
    if (/[0-9]/g.test(operation)) {
      this.operation = operation;
      return
    }
    this.operation = ''

  }

  public checkIfPreviousBinary(operations: string, current: string): boolean {
    const trimmedOperations = operations.trim();
    const lastOperation = trimmedOperations.at(-1);
    return !(current && /[0-9]/g.test(current)) && lastOperation !== current;
  };
}
