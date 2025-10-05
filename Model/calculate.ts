export interface dataCalculateInterface 
{
    a: number;
    b: number;
    c: number;

    result1: string;
    result2: string;
}

export class dataCalculate 
{
    private data: dataCalculateInterface;

    constructor(data: dataCalculateInterface) {
        this.data = data;
    }

    public calculate(): boolean { 
        const { a, b, c } = this.data;
        
        if (a === 0) {
            this.data.result1 = '';
            this.data.result2 = '';
            return false;
        }

        const discriminant = b * b - 4 * a * c;
        
        if (discriminant > 0) {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            this.data.result1 = root1.toFixed(2);
            this.data.result2 = root2.toFixed(2);
            return true;
        } else if (discriminant === 0) {
            const root = -b / (2 * a);
            this.data.result1 = root.toFixed(2);
            this.data.result2 = root.toFixed(2);
            return true;
        } else {
            const realPart = -b / (2 * a);
            const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            this.data.result1 = `${realPart.toFixed(2)} + ${imaginaryPart.toFixed(2)}i`;
            this.data.result2 = `${realPart.toFixed(2)} - ${imaginaryPart.toFixed(2)}i`;
            return true;
        }
    }

    public getRoot1(): string {
        return this.data.result1;
    }

    public getRoot2(): string {
        return this.data.result2;
    }
}