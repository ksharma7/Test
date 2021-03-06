//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "XomegaJS Data Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

import { SalesOrderObject } from 'DataObjects/Sales/SalesOrderObjectCustomized';
import { ISalesOrderService } from 'ServiceContracts/Sales/ISalesOrderService';
import { DataListObject, TextProperty, MoneyProperty, IntegerProperty, EnumProperty, ErrorList } from 'xomega';

export class SalesOrderDetailList extends DataListObject {

    // Properties
    public CarrierTrackingNumber: TextProperty;
    public LineTotal: MoneyProperty;
    public OrderQty: IntegerProperty;
    public Product: EnumProperty;
    public SalesOrderDetailId: IntegerProperty;
    public SpecialOffer: EnumProperty;
    public UnitPrice: MoneyProperty;
    public UnitPriceDiscount: MoneyProperty;

    // Construction and initialization
    init() {
        this.CarrierTrackingNumber = new TextProperty();
        this.CarrierTrackingNumber.Size = 25;
        this.CarrierTrackingNumber.Editable(false);
        this.LineTotal = new MoneyProperty();
        this.LineTotal.Required(true);
        this.LineTotal.Editable(false);
        this.OrderQty = new IntegerProperty();
        this.OrderQty.Required(true);
        this.OrderQty.Editable(false);
        this.Product = new EnumProperty();
        this.Product.Required(true);
        this.Product.EnumType = "product";
        this.Product.Editable(false);
        this.SalesOrderDetailId = new IntegerProperty();
        this.SalesOrderDetailId.Required(true);
        this.SalesOrderDetailId.Editable(false);
        this.SpecialOffer = new EnumProperty();
        this.SpecialOffer.Required(true);
        this.SpecialOffer.EnumType = "special offer";
        this.SpecialOffer.Editable(false);
        this.UnitPrice = new MoneyProperty();
        this.UnitPrice.Required(true);
        this.UnitPrice.Editable(false);
        this.UnitPriceDiscount = new MoneyProperty();
        this.UnitPriceDiscount.Required(true);
        this.UnitPriceDiscount.Editable(false);
    }

    protected doReadAsync(options?): JQueryPromise<any> {
        return $.when(
            $.ajax(this.getSalesOrder_Detail_ReadListRequest(
                !this.Parent() ? null : (this.Parent() as SalesOrderObject).SalesOrderId.TransportValue(), options)),
        );
    }

    protected getSalesOrder_Detail_ReadListRequest(_salesOrderId: any, options?): JQueryAjaxSettings {
        let obj = this;
        let req = ISalesOrderService.getDetail_ReadListRequest(_salesOrderId);
        req.success = (_data, _status, xhr) => {
            obj.fromJSON(_data.Result, options);
            obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, null));
        }
        req.error = (xhr, _status, error) => obj.ValidationErrors.mergeWith(ErrorList.fromErrorResponse(xhr, error));
        return req;
    }
}
