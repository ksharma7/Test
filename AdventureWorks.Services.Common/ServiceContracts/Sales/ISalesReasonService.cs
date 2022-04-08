//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "Service Contracts" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using Xomega.Framework;
using Xomega.Framework.Services;

namespace AdventureWorks.Services
{
    #region ISalesReasonService interface

    ///<summary>
    /// Lookup table of customer purchase reasons.
    ///</summary>
    [ServiceContract]
    public interface ISalesReasonService
    {

        ///<summary>
        /// Reads a list of Sales Reason objects based on the specified criteria.
        ///</summary>
        [OperationContract]
        [FaultContract(typeof(ErrorList))]
        Output<ICollection<SalesReason_ReadListOutput>> ReadList();

    }
    #endregion

    #region SalesReason_ReadListOutput structure

    ///<summary>
    /// The output structure of operation ISalesReasonService.ReadList.
    ///</summary>
    [DataContract]
    public class SalesReason_ReadListOutput
    {
        
        [DataMember]
        public int SalesReasonId { get; set; }
        
        ///<summary>
        /// Sales reason description.
        ///</summary>
        [DataMember]
        public string Name { get; set; }
    }
    #endregion

}