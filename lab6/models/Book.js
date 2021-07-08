
const Products=[]
module.exports = class Book{

    constructor(id, title, isbn, publishedDate, author){
        this.id = id;
        this.title= title ;
        this.isbn= isbn;
        this.publishedDate=publishedDate;
        this.author= author;
    }

   static getAll(){
       return Products;
   }

   save(){
       this.id = Math.random().toString();
       Products.push(this)
       return this;

   }

   static findById(bookId){
       const index = Products.findIndex(p=>p.id===bookId);
       if(index>-1){
           return Products[index];
    
       }else{
           throw new Error("Not found");
       }
   }

   update() {
    const index = Products.findIndex(p => p.id === this.id);
    if (index > -1) {
        Products.splice(index, 1, this);
        return this;
    } else {
        throw new Error('NOT Found');
    }
   }

    static deleteById(bookId) {
        const index = Products.findIndex(p => p.id === bookId);
        if (index > -1) {
            Products = Products.filter(p => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }


}

