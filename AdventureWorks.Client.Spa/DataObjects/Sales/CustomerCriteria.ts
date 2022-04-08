//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "XomegaJS Data Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

import { CriteriaObject, TextProperty, OperatorProperty, EnumProperty } from 'xomega';

export class CustomerCriteria extends CriteriaObject {

    // Properties
    public AccountNumber: TextProperty;
    public AccountNumberOperator: OperatorProperty;
    public PersonName: TextProperty;
    public PersonNameOperator: OperatorProperty;
    public StoreName: TextProperty;
    public StoreNameOperator: OperatorProperty;
    public TerritoryId: EnumProperty;

    // Construction and initialization
    init() {
        this.AccountNumber = new TextProperty();
        this.AccountNumber.Size = 10;
        this.AccountNumberOperator = new OperatorProperty();
        this.AccountNumberOperator.Size = 25;
        this.AccountNumberOperator.EnumType = "operators";
        this.PersonName = new TextProperty();
        this.PersonNameOperator = new OperatorProperty();
        this.PersonNameOperator.Size = 25;
        this.PersonNameOperator.EnumType = "operators";
        this.PersonNameOperator.HasNullCheck = true;
        this.StoreName = new TextProperty();
        this.StoreNameOperator = new OperatorProperty();
        this.StoreNameOperator.Size = 25;
        this.StoreNameOperator.EnumType = "operators";
        this.StoreNameOperator.HasNullCheck = true;
        this.TerritoryId = new EnumProperty();
        this.TerritoryId.EnumType = "sales territory";
    }
}