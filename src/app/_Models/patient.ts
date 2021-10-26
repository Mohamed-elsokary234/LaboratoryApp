export class patient{

    constructor(
        public pat_Id:number,
        public pat_f_name:string,
        public pat_l_name:string,
        public pat_gender:string,
        public pat_age:number,
        public dis_Id_fk:number,
        public date:Date,
        public pat_password:string,
        public pat_address:string,
        public pat_mail:string,
    
    ){

    }
}