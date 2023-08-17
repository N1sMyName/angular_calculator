// export class OperationStrategyContext {
//   constructor(private strategy: OperationStrategy) {
//   }
//
//   public setStrategy(strategy: OperationStrategy) {
//     this.strategy = strategy
//   }
//
//   public setOperation(operations: string, newOperation: string): string {
//     return newOperation;
//   };
// }
//
// export class OperationStrategy {
//   setOperation: (operations: string, newOperation: string) => string
// }
//
// export class ConcreteStrategyNumber implements OperationStrategy {
//   public setOperation(operations: string, newOperation: string): string {
//     return newOperation
//   };
// }
//
// export class ConcreteStrategyBinary implements OperationStrategy {
//   public setOperation(operations: string, newOperation: string): string {
//     if (this.checkPreviousOperation(operations)) {
//       return newOperation + ' ' + newOperation
//     }
//     return operations;
//   };
//
//   public checkPreviousOperation(operations: string): boolean {
//     const trimmedOperations = operations.trim();
//     const lastOperation = trimmedOperations.at(-1);
//     return !!(lastOperation && /[0-9]/g.test(lastOperation));
//   };
// }
//
// export class ConcreteStrategySpecial implements OperationStrategy {
//   public setOperation(operations: string, newOperation: string): string {
//     if (newOperation.toLowerCase() === 'ac') {
//       return ''
//     }
//     return operations;
//   };
// }
//
// export class ConcreteStrategyBraces implements OperationStrategy {
//   public setOperation(operations: string, newOperation: string): string {
//     if (newOperation === '(' || newOperation === ')') {
//       return operations + ' ' + newOperation
//     }
//     return operations;
//   };
// }
//
//
