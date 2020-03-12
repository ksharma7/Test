//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "TS Service Contracts" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

import { CustomerInfo, PaymentInfo, SalesInfo, CustomerUpdate, PaymentUpdate } from 'ServiceContracts/Sales/SalesStructures';
import * as $ from 'jquery';
import { AuthManager } from 'xomega';

export class ISalesOrderService {

    public static getReadRequest(_salesOrderId: any): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'GET';
        req.url += `sales-order/${ _salesOrderId }`;
        return req;
    }

    public static getCreateRequest(_data: SalesOrder_CreateInput): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'POST';
        req.url += `sales-order`;
        req.data = JSON.stringify(_data);
        return req;
    }

    public static getUpdateRequest(_salesOrderId: any, _data: SalesOrder_UpdateInput_Data): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'PUT';
        req.url += `sales-order/${ _salesOrderId }`;
        req.data = JSON.stringify(_data);
        return req;
    }

    public static getDeleteRequest(_salesOrderId: any): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'DELETE';
        req.url += `sales-order/${ _salesOrderId }`;
        return req;
    }

    public static getReadListRequest(_criteria: SalesOrder_ReadListInput_Criteria): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'GET';
        req.url += `sales-order?${ $.param(_criteria, true) }`;
        return req;
    }

    public static getDetail_ReadRequest(_salesOrderDetailId: any): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'GET';
        req.url += `sales-order/detail/${ _salesOrderDetailId }`;
        return req;
    }

    public static getDetail_CreateRequest(_salesOrderId: any, _data: SalesOrderDetail_CreateInput_Data): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'POST';
        req.url += `sales-order/${ _salesOrderId }/detail`;
        req.data = JSON.stringify(_data);
        return req;
    }

    public static getDetail_UpdateRequest(_salesOrderDetailId: any, _data: SalesOrderDetail_UpdateInput_Data): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'PUT';
        req.url += `sales-order/detail/${ _salesOrderDetailId }`;
        req.data = JSON.stringify(_data);
        return req;
    }

    public static getDetail_DeleteRequest(_salesOrderDetailId: any): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'DELETE';
        req.url += `sales-order/detail/${ _salesOrderDetailId }`;
        return req;
    }

    public static getDetail_ReadListRequest(_salesOrderId: any): JQueryAjaxSettings {
        let req: JQueryAjaxSettings = AuthManager.Current.createAjaxRequest();
        req.type = 'GET';
        req.url += `sales-order/${ _salesOrderId }/detail`;
        return req;
    }
}

export class SalesOrder_ReadOutput {
    public SalesOrderNumber: any;
    public OrderDate: any;
    public Status: any;
    public OnlineOrderFlag: any;
    public PurchaseOrderNumber: any;
    public AccountNumber: any;
    public Customer: CustomerInfo;
    public ShipDate: any;
    public Payment: PaymentInfo;
    public Sales: SalesInfo;
    public Comment: any;
    public RevisionNumber: any;
    public ModifiedDate: any;
}

export class SalesOrder_CreateInput {
    public Status: any = null;
    public OnlineOrderFlag: any = null;
    public PurchaseOrderNumber: any = null;
    public AccountNumber: any = null;
    public Customer: CustomerUpdate = new CustomerUpdate();
    public ShipDate: any = null;
    public Payment: PaymentUpdate = new PaymentUpdate();
    public Sales: SalesInfo = new SalesInfo();
    public Comment: any = null;
}

export class SalesOrder_CreateOutput {
    public SalesOrderId: any;
    public SalesOrderNumber: any;
    public OrderDate: any;
    public RevisionNumber: any;
    public ModifiedDate: any;
}

export class SalesOrder_UpdateInput_Data {
    public Status: any = null;
    public OnlineOrderFlag: any = null;
    public PurchaseOrderNumber: any = null;
    public AccountNumber: any = null;
    public Customer: CustomerUpdate = new CustomerUpdate();
    public ShipDate: any = null;
    public Payment: PaymentUpdate = new PaymentUpdate();
    public Sales: SalesInfo = new SalesInfo();
    public Comment: any = null;
}

export class SalesOrder_UpdateOutput {
    public RevisionNumber: any;
    public ModifiedDate: any;
}

export class SalesOrder_ReadListInput_Criteria {
    public SalesOrderNumberOperator: any = null;
    public SalesOrderNumber: any = null;
    public StatusOperator: any = null;
    public Status: Array<any> = null;
    public OrderDateOperator: any = null;
    public OrderDate: any = null;
    public OrderDate2: any = null;
    public DueDateOperator: any = null;
    public DueDate: any = null;
    public DueDate2: any = null;
    public TotalDueOperator: any = null;
    public TotalDue: any = null;
    public TotalDue2: any = null;
    public CustomerStoreOperator: any = null;
    public CustomerStore: any = null;
    public CustomerNameOperator: any = null;
    public CustomerName: any = null;
    public GlobalRegion: any = null;
    public TerritoryIdOperator: any = null;
    public TerritoryId: any = null;
    public SalesPersonIdOperator: any = null;
    public SalesPersonId: Array<any> = null;
}

export class SalesOrder_ReadListOutput {
    public SalesOrderId: any;
    public SalesOrderNumber: any;
    public Status: any;
    public OrderDate: any;
    public ShipDate: any;
    public DueDate: any;
    public TotalDue: any;
    public OnlineOrderFlag: any;
    public CustomerStore: any;
    public CustomerName: any;
    public SalesPersonId: any;
    public TerritoryId: any;
}

export class SalesOrderDetail_ReadOutput {
    public SalesOrderId: any;
    public CarrierTrackingNumber: any;
    public OrderQty: any;
    public SpecialOfferId: any;
    public ProductId: any;
    public UnitPrice: any;
    public UnitPriceDiscount: any;
    public LineTotal: any;
    public Rowguid: any;
    public ModifiedDate: any;
}

export class SalesOrderDetail_CreateInput_Data {
    public CarrierTrackingNumber: any = null;
    public OrderQty: any = null;
    public SpecialOfferId: any = null;
    public ProductId: any = null;
    public UnitPrice: any = null;
    public UnitPriceDiscount: any = null;
    public LineTotal: any = null;
    public Rowguid: any = null;
    public ModifiedDate: any = null;
}

export class SalesOrderDetail_CreateOutput {
    public SalesOrderDetailId: any;
}

export class SalesOrderDetail_UpdateInput_Data {
    public CarrierTrackingNumber: any = null;
    public OrderQty: any = null;
    public SpecialOfferId: any = null;
    public ProductId: any = null;
    public UnitPrice: any = null;
    public UnitPriceDiscount: any = null;
    public LineTotal: any = null;
    public Rowguid: any = null;
    public ModifiedDate: any = null;
}

export class SalesOrderDetail_ReadListOutput {
    public SalesOrderDetailId: any;
    public Product: any;
    public OrderQty: any;
    public UnitPrice: any;
    public UnitPriceDiscount: any;
    public SpecialOffer: any;
    public LineTotal: any;
    public CarrierTrackingNumber: any;
}