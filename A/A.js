function A()
{
    this.A = 0;

    this.RAM = [];
    this.ROM = ["01110000"];

    this.Serial = 0;

    this.Cycles = 0;
    this.IP = 0;
    this.Running = false;

    this.Reset = function(ROMData="01110000") /* String */
    {

        this.A = 0;

        this.RAM = [];
    
        this.JumpPoints = [];

        this.Serial = 0;

        this.Cycles = 0;
        this.IP = 0;
        this.Running = false;

        this.ROM = ROMData.match(/.{1,8}/g);
    }

    this.Step = function()
    {

        if (this.Running == true)
        {
            this.Opcode(this.IP);
            this.IP++;
        } else {
            console.log("Computation complete! Cycles: " + this.Cycles);

            this.IP = 0;
            this.Cycles = 0;
        }
    }

    this.Compute = function()
    {

        while (this.Running)
        {
            this.Opcode(this.IP);
            this.IP++;
        }

        console.log("Computation complete! Cycles: " + this.Cycles);

        this.IP = 0;
        this.Cycles = 0;
    }

    this.Opcode = function(ip)
    {
        var Code = this.Split(this.ROM[ip]);

        switch (Code[0])
        {
            case "0000":
                this.A = Code[1];
            break;
            case "0001":
                this.RAM[Code[1]] = this.A;
            break;
            case "0010":
                this.A = this.RAM[Code[1]];
            break;
            case "0011":
                this.Serial = this.RAM[Code[1]];
            break;
            case "0100":
                if (this.Serial != 0)
                    this.RAM[Code[1]] = this.Serial;
            break;
            case "0101":
                this.IP = Code[1] - 1;
            break;
            case "0110":
                /* Nothing here yet... */
            break;
            case "0111":
                this.Running = false;
            break;
            case "1000":
                this.A = this.A + this.RAM[Code[1]];
            break;
            case "1001":
                this.A = this.A - this.RAM[Code[1]];
            break;
            case "1010":
                this.A = this.A ^ this.RAM[Code[1]];
            break;
            case "1011":
                this.A = this.A || this.RAM[Code[1]];
            break;
            case "1100":
                this.A = this.A && this.RAM[Code[1]];
            break;
            case "1101":
                if (this.A)
                    this.IP = Code[1] - 1;
            break;
            case "1110":
                this.RAM[Code[1]] = this.RAM[Code[1]] / 2
            break;
            case "1111":
                this.RAM[Code[1]] = this.RAM[Code[1]] * 2
            break;
        }
        this.Cycles++;
    }

    this.Split = function(Instruction = "") /* String */
    {
        var Final = [];
        Final[0] = Instruction.substring(0, 4);
        Final[1] = this.Bin2Dec(Instruction.substring(4, 8));
        return Final;
    }

    this.Bin2Dec = function(Binary) /* String */
    {
        var Final = parseInt(Binary, 2);
        return Final;
    }
}
