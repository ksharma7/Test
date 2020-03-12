//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "Service Implementations" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated
// unless they are placed between corresponding CUSTOM_CODE_START/CUSTOM_CODE_END lines.
//
// This file can be DELETED DURING REGENERATION IF NO LONGER NEEDED, e.g. if it gets renamed.
// To prevent this and preserve manual custom changes please remove the line above.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using Xomega.Framework.Services;
// CUSTOM_CODE_START: add namespaces for custom code below
// CUSTOM_CODE_END

namespace AdventureWorks.Services.Entities
{
    public partial class ShipMethodService : BaseService, IShipMethodService
    {
        protected AdventureWorksEntities ctx;

        public ShipMethodService(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            ctx = serviceProvider.GetService<AdventureWorksEntities>();
        }

        public virtual Output<ICollection<ShipMethod_ReadListOutput>> ReadList()
        {
            // CUSTOM_CODE_START: add custom security checks for ReadList operation below
            // CUSTOM_CODE_END
            ICollection<ShipMethod_ReadListOutput> res = null;
            try
            {
                var src = from obj in ctx.ShipMethod select obj;

                // CUSTOM_CODE_START: add custom filter criteria to the source query for ReadList operation below
                // src = src.Where(o => o.FieldName == VALUE);
                // CUSTOM_CODE_END

                var qry = from obj in src
                          select new ShipMethod_ReadListOutput() {
                              ShipMethodId = obj.ShipMethodId,
                              Name = obj.Name,
                          };

                // CUSTOM_CODE_START: add custom filter criteria to the result query for ReadList operation below
                // qry = qry.Where(o => o.FieldName == VALUE);
                // CUSTOM_CODE_END

                currentErrors.AbortIfHasErrors();
                res = qry.ToList();
            }
            catch (Exception ex)
            {
                currentErrors.MergeWith(errorParser.FromException(ex));
            }
            return new Output<ICollection<ShipMethod_ReadListOutput>>(currentErrors, res);
        }
    }
}