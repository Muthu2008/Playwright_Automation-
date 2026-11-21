import { DashBoard } from './dashBoar';


import { Locator, Page } from "@playwright/test";
import { loginPage } from "../pageobject_ts/LoginPage.ts";
import { checkOut } from "../pageobject_ts/checkOut.ts";
import { PlaceOrder } from "../pageobject_ts/PLaceOrder.ts";
import { MyOrder} from "../pageobject_ts/MyOrder.ts";
import { dashBoard } from '../pageobject/dashBoar.js';
import {OrderConfromation} from '../pageobject/OrderConfromation.js';




export class POManager{

    page:any;
    loginpage:loginPage;
    db:dashBoard;
    placeorder:PlaceOrder;
    ck:checkOut;
    oc:OrderConfromation;
    myOrderpage:MyOrder;

    constructor(page:Page)
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
//module.exports={POManager};