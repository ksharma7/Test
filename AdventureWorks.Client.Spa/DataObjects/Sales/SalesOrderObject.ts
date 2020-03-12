//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "XomegaJS Data Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

import { SalesOrderCustomerObject } from 'DataObjects/Sales/SalesOrderCustomerObjectCustomized';
import { SalesOrderDetailList } from 'DataObjects/Sales/SalesOrderDetailList';
import { SalesOrderPaymentObject } from 'DataObjects/Sales/SalesOrderPaymentObject';
import { SalesOrderSalesObject } from 'DataObjects/Sales/SalesOrderSalesObjectCustomized';
import { ISalesOrderService, SalesOrder_CreateInput, SalesOrder_UpdateInput_Data } from 'ServiceContracts/Sales/ISalesOrderService';
import { DataObject, TextProperty, DateTimeProperty, BooleanProperty, DateProperty, IntegerProperty, EnumProperty, ErrorList } from 'xomega';

export class SalesOrderObject extends DataObject {

    // Properties
    public AccountNumber: TextProperty;
    public Comment: TextProperty;
    public ModifiedDate: DateTimeProperty;
    public OnlineOrderFlag: BooleanProperty;
    public OrderDate: DateProperty;
    public PurchaseOrderNumber: TextProperty;
    public RevisionNumber: IntegerProperty;
    public SalesOrderId: IntegerProperty;
    public SalesOrderNumber: TextProperty;
    public ShipDate: DateProperty;
    public Status: EnumProperty;

    // Child Objects
    public CustomerObject: SalesOrderCustomerObject;
    public DetailList: SalesOrderDetailList;
    public PaymentObject: SalesOrderPaymentObject;
    public SalesObject: SalesOrderSalesObject;

    // Construction and initialization
    init() {
        this.AccountNumber = new TextProperty();
        this.AccountNumber.Size = 15;
        this.Comment = new TextProperty();
        this.Comment.Size = 128;
        this.ModifiedDate = new DateTimeProperty();
        this.ModifiedDate.Required(true);
        this.ModifiedDate.Editable(false);
        this.OnlineOrderFlag = new BooleanProperty();
        this.OnlineOrderFlag.Required(true);
        this.OrderDate = new DateProperty();
        this.OrderDate.Required(true);
        this.OrderDate.Editable(false);
        this.PurchaseOrderNumber = new TextProperty();
        this.PurchaseOrderNumber.Size = 25;
        this.RevisionNumber = new IntegerProperty();
        this.RevisionNumber.Required(true);
        this.RevisionNumber.Editable(false);
        this.SalesOrderId = new IntegerProperty();
        this.SalesOrderId.Required(true);
        this.SalesOrderId.Editable(false);
        this.SalesOrderNumber = new TextProperty();
        this.SalesOrderNumber.Required(true);
        this.SalesOrderNumber.Size = 25;
        this.SalesOrderNumber.Editable(false);
        this.ShipDate = new DateProperty();
        this.Status = new EnumProperty();
        this.Status.Required(true);
        this.Status.EnumType = "sales order status";

        // create child objects
        this.CustomerObject = new SalesOrderCustomerObject();
        this.DetailList = new SalesOrderDetailList();
        this.PaymentObject = new SalesOrderPaymentObject();
        this.SalesObject = new SalesOrderSalesObject();
    }

    protected doReadAsync(options?): JQueryPromise<any> {
        return $.when(
            $.ajax(this.getSalesOrder_ReadRequest(options)),
            this.CustomerObject.readAsync(options),
            this.DetailList.readAsync(options),
            this.PaymentObject.readAsync(options),
            this.SalesObject.readAsync(options),
        );
    }

    protected doSaveAsync(options?): JQueryPromise<any> {
        if (this.IsNew()) return $.when(
            $.ajax(this.getSalesOrder_CreateRequest(options)),
            this.CustomerObject.saveAsync(options),
            this.DetailList.saveAsync(options),
            this.PaymentObject.saveAsync(options),
            this.SalesObject.saveAsync(options),
        );
        return $.when(
            $.ajax(this.getSalesOrder_UpdateRequest(options)),
            this.CustomerObject.saveAsync(options),
            this.DetailList.saveAsync(options),
            this.PaymentObject.saveAsync(options),
            this.SalesObject.saveAsync(options),
        );
    }

    protected doDeleteAsync(options?): JQueryPromise<any> {
        return $.when(
            $.ajax(this.getSalesOrder_DeleteRequest(options)),
        );
    }

    protected getSalesOrder_ReadRequest(options?): JQueryAjaxSettings {
        let obj = this;
        let _salesOrderId: any = obj.SalesOrderId.TransportValue();
        let req = ISalesOrderService.getReadRequest(_salesOrderId);
        req.success = (_data, _status, xhr) => {
            obj.fromJSON(_data.Result, options);
            obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, null));
        }
        req.error = (xhr, _status, error) => obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, error));
        return req;
    }

    protected getSalesOrder_CreateRequest(options?): JQueryAjaxSettings {
        let obj = this;
        let _data: SalesOrder_CreateInput = obj.toStruct(SalesOrder_CreateInput, options);
        let req = ISalesOrderService.getCreateRequest(_data);
        req.success = (_data, _status, xhr) => {
            obj.fromJSON(_data.Result, options);
            obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, null));
        }
        req.error = (xhr, _status, error) => obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, error));
        return req;
    }

    protected getSalesOrder_UpdateRequest(options?): JQueryAjaxSettings {
        let obj = this;
        let _salesOrderId: any = obj.SalesOrderId.TransportValue();
        let _data: SalesOrder_UpdateInput_Data = obj.toStruct(SalesOrder_UpdateInput_Data, options);
        let req = ISalesOrderService.getUpdateRequest(_salesOrderId, _data);
        req.success = (_data, _status, xhr) => {
            obj.fromJSON(_data.Result, options);
            obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, null));
        }
        req.error = (xhr, _status, error) => obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, error));
        return req;
    }

    protected getSalesOrder_DeleteRequest(options?): JQueryAjaxSettings {
        let obj = this;
        let _salesOrderId: any = obj.SalesOrderId.TransportValue();
        let req = ISalesOrderService.getDeleteRequest(_salesOrderId);
        req.success = (_data, _status, xhr) => {
            obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, null));
        }
        req.error = (xhr, _status, error) => obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, error));
        return req;
    }
}
