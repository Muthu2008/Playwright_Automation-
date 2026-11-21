const { loginPage } =require('./LoginPage.js');
const { dashBoard } =require('./dashBoar.js');
const { checkOut } =require('./checkOut.js');
const { PlaceOrder } =require('./PLaceOrder.js');
const { OrderConfromation } =require('./OrderConfromation.js');
const { MyOrder } =require('./MyOrder.js');

class POManager{

    constructor(page)
    {
        this.page=page;
        this.loginpage = new loginPage(this.page);
       this.db= new dashBoard(this.page);
      this.ck=new checkOut(this.page);
       this.placeorder=new PlaceOrder(this.page);
      this.oc=new OrderConfromation(this.page);
     this.myOrderpage=new MyOrder(this.page);
    }

     getLoginPage()
    {
        return this.loginpage;
    }
     getDashBoardPage()
    {
        return this.db;
    }
     getcheckOutPage()
    {
        return this.ck;
    }
    getplaceOderPage()
    {
        return this.placeorder;
    }
    getorderConformationPage()
    {
        return this.oc;
    }
    getMyOderPage()
    {
        return this.myOrderpage;
    }
    


}
module.exports={POManager};