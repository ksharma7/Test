//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "XomegaJS Data Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

import { DataObject, TextProperty } from 'xomega';

export class SalesCustomerLookupObject extends DataObject {

    // Properties
    public PersonName: TextProperty;
    public StoreName: TextProperty;

    // Construction and initialization
    init() {
        this.PersonName = new TextProperty();
        this.StoreName = new TextProperty();
    }
}
