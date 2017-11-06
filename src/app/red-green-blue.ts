
export class RedGreenBlue {

    public red = 0;
    public green = 0;
    public blue = 0;

    public get style(): string {
        return 'rgb(' +
            this.red + ',' +
            this.green + ',' +
            this.blue + ')';
    }
}
