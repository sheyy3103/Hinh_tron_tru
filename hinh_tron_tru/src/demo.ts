class HinhTron{

    banKinh: number;

    constructor(banKinh:number){
        this.banKinh = banKinh;
    }

    chuVi():number{
        return this.banKinh * 2 * 3.14;
    }    

    dienTich():number{
        return this.banKinh * this.banKinh * 3.14;
    }
}

class HinhTru extends HinhTron{
    
    chieuCao: number;

    constructor(banKinh:number,chieuCao:number){
        super(banKinh);
        this.chieuCao = chieuCao;
    }

    theTich():number{
       return this.dienTich() * this.chieuCao;
    }
}
var tron1 = new HinhTron(4);

console.log(tron1.banKinh);
console.log(tron1.chuVi());
console.log(tron1.dienTich());

var tru1 = new HinhTru(5,7);

console.log(tru1.banKinh);
console.log(tru1.chieuCao);
console.log(tru1.theTich());
