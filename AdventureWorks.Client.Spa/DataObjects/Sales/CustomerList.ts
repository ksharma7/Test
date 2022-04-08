//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "XomegaJS Data Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

import { CustomerCriteria } from 'DataObjects/Sales/CustomerCriteria';
import { Customer_ReadListInput_Criteria, ICustomerService } from 'ServiceContracts/Sales/ICustomerService';
import { DataListObject, TextProperty, IntegerProperty, EnumProperty, ErrorList } from 'xomega';

export class CustomerList extends DataListObject {

    // Properties
    public AccountNumber: TextProperty;
    public CustomerId: IntegerProperty;
    public PersonId: IntegerProperty;
    public PersonName: TextProperty;
    public StoreId: IntegerProperty;
    public StoreName: TextProperty;
    public TerritoryId: EnumProperty;

    // Construction and initialization
    init() {
        this.AccountNumber = new TextProperty();
        this.AccountNumber.Required(true);
        this.AccountNumber.Size = 10;
        this.AccountNumber.Editable(false);
        this.CustomerId = new IntegerProperty();
        this.CustomerId.Required(true);
        this.CustomerId.Editable(false);
        this.PersonId = new IntegerProperty();
        this.PersonId.Editable(false);
        this.PersonName = new TextProperty();
        this.PersonName.Editable(false);
        this.StoreId = new IntegerProperty();
        this.StoreId.Editable(false);
        this.StoreName = new TextProperty();
        this.StoreName.Editable(false);
        this.TerritoryId = new EnumProperty();
        this.TerritoryId.EnumType = "sales territory";
        this.TerritoryId.Editable(false);
    }

    protected doReadAsync(options?): JQueryPromise<any> {
        return $.when(
            $.ajax(this.getCustomer_ReadListRequest(
                !this.CriteriaObject ? null : (this.CriteriaObject as CustomerCriteria).toStruct(Customer_ReadListInput_Criteria), options)),
        );
    }

    protected getCustomer_ReadListRequest(_criteria: Customer_ReadListInput_Criteria, options?): JQueryAjaxSettings {
        let obj = this;
        let req = ICustomerService.getReadListRequest(_criteria);
        req.success = (_data, _status, xhr) => {
            obj.fromJSON(_data.Result, options);
            obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, null));
        }
        req.error = (xhr, _status, error) => obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, error));
        return req;
    }
}