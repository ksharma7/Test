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
    /// Products sold or used in the manfacturing of sold products.
    ///</summary>
    public partial class ProductController : ControllerBase
    {
        private ErrorList currentErrors;
        private ErrorParser errorsParser;
        private IProductService svc;

        public ProductController(ErrorList errorList, ErrorParser errorParser, IProductService service)
        {
            currentErrors = errorList;
            errorsParser = errorParser;
            svc = service;
        }

        ///<summary>
        /// Reads a list of Product objects based on the specified criteria.
        ///</summary>
        [Route("product")]
        [HttpGet]
        public ActionResult ReadList()
        {
            ActionResult response = null;
            try
            {
                if (ModelState.IsValid)
                {
                    Output<ICollection<Product_ReadListOutput>> output = svc.ReadList();
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