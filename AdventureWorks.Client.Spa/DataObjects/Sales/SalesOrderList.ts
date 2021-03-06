//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "XomegaJS Data Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

import { SalesOrderCriteria } from 'DataObjects/Sales/SalesOrderCriteriaCustomized';
import { SalesOrder_ReadListInput_Criteria, ISalesOrderService } from 'ServiceContracts/Sales/ISalesOrderService';
import { DataListObject, TextProperty, DateProperty, EnumProperty, IntegerProperty, MoneyProperty, ErrorList } from 'xomega';

export class SalesOrderList extends DataListObject {

    // Properties
    public CustomerName: TextProperty;
    public CustomerStore: TextProperty;
    public DueDate: DateProperty;
    public OnlineOrderFlag: EnumProperty;
    public OrderDate: DateProperty;
    public SalesOrderId: IntegerProperty;
    public SalesOrderNumber: TextProperty;
    public SalesPersonId: EnumProperty;
    public ShipDate: DateProperty;
    public Status: EnumProperty;
    public TerritoryId: EnumProperty;
    public TotalDue: MoneyProperty;

    // Construction and initialization
    init() {
        this.CustomerName = new TextProperty();
        this.CustomerName.Editable(false);
        this.CustomerStore = new TextProperty();
        this.CustomerStore.Editable(false);
        this.DueDate = new DateProperty();
        this.DueDate.Required(true);
        this.DueDate.Editable(false);
        this.OnlineOrderFlag = new EnumProperty();
        this.OnlineOrderFlag.Required(true);
        this.OnlineOrderFlag.EnumType = "yesno";
        this.OnlineOrderFlag.Editable(false);
        this.OrderDate = new DateProperty();
        this.OrderDate.Required(true);
        this.OrderDate.Editable(false);
        this.SalesOrderId = new IntegerProperty();
        this.SalesOrderId.Required(true);
        this.SalesOrderId.Editable(false);
        this.SalesOrderNumber = new TextProperty();
        this.SalesOrderNumber.Required(true);
        this.SalesOrderNumber.Size = 25;
        this.SalesOrderNumber.Editable(false);
        this.SalesPersonId = new EnumProperty();
        this.SalesPersonId.EnumType = "sales person";
        this.SalesPersonId.Editable(false);
        this.ShipDate = new DateProperty();
        this.ShipDate.Editable(false);
        this.Status = new EnumProperty();
        this.Status.Required(true);
        this.Status.EnumType = "sales order status";
        this.Status.Editable(false);
        this.TerritoryId = new EnumProperty();
        this.TerritoryId.EnumType = "sales territory";
        this.TerritoryId.Editable(false);
        this.TotalDue = new MoneyProperty();
        this.TotalDue.Required(true);
        this.TotalDue.Editable(false);
    }

    protected doReadAsync(options?): JQueryPromise<any> {
        return $.when(
            $.ajax(this.getSalesOrder_ReadListRequest(
                !this.CriteriaObject ? null : (this.CriteriaObject as SalesOrderCriteria).toStruct(SalesOrder_ReadListInput_Criteria), options)),
        );
    }

    protected getSalesOrder_ReadListRequest(_criteria: SalesOrder_ReadListInput_Criteria, options?): JQueryAjaxSettings {
        let obj = this;
        let req = ISalesOrderService.getReadListRequest(_criteria);
        req.success = (_data, _status, xhr) => {
            obj.fromJSON(_data.Result, options);
            obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, null));
        }
        req.error = (xhr, _status, error) => obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, error));
        return req;
    }
}
