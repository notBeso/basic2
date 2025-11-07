class Product{ 
    constructor(ID, name, categoryID, saleDate, quality, isDelete){
        this.ID = ID;
        this.name = name;
        this.categoryID = categoryID;
        this.saleDate= saleDate;
        this.quality = quality;
        this.isDelete = isDelete;
    }

    /**
     * print product info
     * @param null
     * @return null
     */
    print(){
        // console.log(this.ID + this.name + this.categoryID +this.saleDate + this.quality + this.isDelete);
        console.log(
            `ID: ${this.ID}   name: ${this.name}\ncategoryID: ${this.categoryID}   date: ${this.saleDate.toDateString()}   quality: ${this.quality}   Delete: ${this.isDelete}\n` )
    }
}

    const listProduct = [];
    listProduct.push( new Product(343232,"xmvn",1,new Date(2025, 10, 5, 14, 30, 0, 0),-9,true));
    listProduct.push( new Product(245346,"fdbfdb",2,new Date(2035, 10, 5, 14, 30, 0, 0),5,false));
    listProduct.push( new Product(353353,"fddc",1,new Date(2065, 10, 5, 14, 30, 0, 0),2,true));
    listProduct.push( new Product(453663,"dfhgxc",2,new Date(2015, 10, 5, 14, 30, 0, 0),-3,false));
    listProduct.push( new Product(875344,"fdsf",1,new Date(2005, 9, 5, 14, 30, 0, 0),6,true));
    listProduct.push( new Product(123435,"aojc",1,new Date(2015, 10, 5, 14, 30, 0, 0),4,false));
    listProduct.push( new Product(708907,"rhbg",2,new Date(2005, 10, 5, 14, 30, 0, 0),9,true));
    listProduct.push( new Product(432523,"occj",1,new Date(2025, 10, 5, 14, 30, 0, 0),1,true));
    listProduct.push( new Product(435778,"ergfvc",2,new Date(2045, 10, 5, 14, 30, 0, 0),7,false));
    listProduct.push( new Product(697867,"xbvcdg",2,new Date(2015, 10, 5, 14, 30, 0, 0),8,true));

    /**
     * print the given array
     * @param {*} listProduct 
     */
    function printList(listProduct){
        for (let p of listProduct){
             p.print();
        }
    }

    /**
     * get product name with match id using ES6
     * @param array listProduct
     * @param number idProduct
     * @returns 
     */
    function filterProductById1 (listProduct, idProduct){
        return listProduct.find(product => product.ID == idProduct);
    }

// console.log(filterProductById1(listProduct,343232));

    /**
     * get product name with match id using for loop
     * @param array listProduct
     * @param number idProduct
     * @returns 
     */
    function filterProductById2 (listProduct, idProduct){
        let result = null ;
        for (let p of listProduct) {
            p.ID == idProduct? (result = p.name ) : "" ; 
        }
        return result;
    }
// console.log(filterProductById2(listProduct,254435));

    /**
     * find all product that have have quality > 0 using ES6
     * @param array listProduct
     * @return array result
     */
    function filterProductByQulity1 (listProduct){
        return listProduct.filter(product => product.quality > 0);
    } 
// printList(filterProductByQulity1(listProduct));

    /**
     * find all product that have have quality > 0 using for loop
     * @param array listProduct
     * @return array result
     */
    function filterProductByQulity2 (listProduct){
        let result = [] ;
        for (let p of listProduct) {
            p.quality > 0 && !p.isDelete ? result.push(p) : "" ; 
        }
        return result;
    }
// printList(filterProductByQulity2(listProduct));

    /**
     * find all products that have saleDate less than current time using ES6
     * @param array listProduct
     * @return array result
     */
    function filterProductBySaleDate1 (listProduct) {
        return listProduct.filter(product => product.saleDate.getTime() > new Date().getTime() && !product.isDelete);
    }
// printList(filterProductBySaleDate1(listProduct)); 

    /**
     * find all products that have saleDate less than current time using for loop
     * @param array listProduct
     * @return array result
     */
    function filterProductBySaleDate2 (listProduct){
        let result = [] ;
        for (let p of listProduct) {
            p.saleDate.getTime() > new Date().getTime() && !p.isDelete ? result.push(p) : "" ; 
        }
        return result;
    }
// printList(filterProductBySaleDate2(listProduct)); 

    /**
     * count number of product hasnt been delete using steam's reduce
     * @param array listProduct
     * @return number result
     */
    function totalProduct1 (listProduct){
        return listProduct.reduce((total, currentProduct) => 
             !currentProduct.isDelete? total+=1 : total
        ,0);
    } 
// console.log(totalProduct1(listProduct));

    /**
     * count number of product hasnt been delete for loop
     * @param array listProduct
     * @return number result
     */
    let totalProduct2 = (listProduct) => {
        let result = 0 ;
        for(let p of listProduct){
            if(!p.isDelete){
                result+=1;
            }
        }
        return result;
    }
// console.log(totalProduct2(listProduct));

    /** 
     * check if there is product match with given categoryID using ES6
     * @param array listProduct
     * @param number categoryId
     * @return boolean result
    */
    function isHaveProductInCategory1 (listProduct, categoryId){
        return listProduct.some(product => product.categoryID == categoryId);
    } 
// console.log(isHaveProductInCategory1(listProduct,2));

    /** 
     * check if there is product match with given categoryID using for
     * @param array listProduct
     * @param number categoryId
     * @return boolean result
    */
    function isHaveProductInCategory2 (listProduct, categoryId){
        let result = false;
        for(let p of listProduct){
            if(p.categoryID == categoryId){
                result = true;
                break;
            }
        }
        return result;
    }
// console.log(isHaveProductInCategory2(listProduct,3));

    /** 
     * find all product with saleDate > current time and quality > 0 using ES6
     * @param array listProduct
     * return map result
    */
    function filterProductBySaleDateAndQulity1 (listProduct){
        return listProduct.filter(product => product.saleDate.getTime() > new Date().getTime() && product.quality > 0);
    } 
console.log(filterProductBySaleDateAndQulity1(listProduct));

    /** 
     * find all product with saleDate > current time and quality > 0 using ES6
     * @param array listProduct
     * return map result
    */
    let filterProductBySaleDateAndQulity2 = (listProduct) => {
        let result = new Map() ;
        for (let p of listProduct) {
            p.saleDate.getTime() > new Date().getTime() && p.quality > 0 ? result.set(p.ID,p.name) : "" ; 
        }
        return result;
    }
console.log(filterProductBySaleDateAndQulity1(listProduct));

