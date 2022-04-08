//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "Web API Controllers" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Xomega.Framework;
using Xomega.Framework.Services;

namespace AdventureWorks.Services.Rest
{
    ///<summary>
    /// Lookup table of customer purchase reasons.
    ///</summary>
    public partial class SalesReasonController : ControllerBase
    {
        private ErrorList currentErrors;
        private ErrorParser errorsParser;
        private ISalesReasonService svc;

        public SalesReasonController(ErrorList errorList, ErrorParser errorParser, ISalesReasonService service)
        {
            currentErrors = errorList;
            errorsParser = errorParser;
            svc = service;
        }

        ///<summary>
        /// Reads a list of Sales Reason objects based on the specified criteria.
        ///</summary>
        [Route("sales-reason")]
        [HttpGet]
        public ActionResult ReadList()
        {
            ActionResult response = null;
            try
            {
                if (ModelState.IsValid)
                {
                    Output<ICollection<SalesReason_ReadListOutput>> output = svc.ReadList();
                    response = StatusCode((int)output.HttpStatus, output);
                    return response;
                }
                else
                {
                    ModelValidation.AddModelErrors(currentErrors, ModelState);
                }
            }
            catch (Exception ex)
            {
                currentErrors.MergeWith(errorsParser.FromException(ex));
            }
            response = StatusCode((int)currentErrors.HttpStatus, new Output(currentErrors));
            return response;
        }
    }
}