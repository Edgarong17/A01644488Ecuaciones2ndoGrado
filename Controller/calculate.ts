import {dataCalculate, dataCalculateInterface} from '../Model/calculate';

export class calculateController
{
    private data: dataCalculateInterface;

    constructor(data: dataCalculateInterface) {
        this.data = data;
    }

    performCalculation(): boolean {
        const calculator = new dataCalculate(this.data);
        return calculator.calculate();
    }
    
    changeA(a: number): void {
        this.data.a = a;
    }
    changeB(b: number): void {
        this.data.b = b;
    }
    changeC(c: number): void {
        this.data.c = c;
    }

    getResult1(): string {
        return this.data.result1;
    }

    getResult2(): string {
        return this.data.result2;
    }

    setResult1(value: string): void {
        this.data.result1 = value;
    }

    setResult2(value: string): void {
        this.data.result2 = value;
    }

}