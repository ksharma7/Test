//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class SalesPersonQuotaHistoryConfig : IEntityTypeConfiguration<SalesPersonQuotaHistory>
    {
        public void Configure(EntityTypeBuilder<SalesPersonQuotaHistory> c)
        {
            c.ToTable("SalesPersonQuotaHistory", "Sales")
             .HasKey(e => new { e.BusinessEntityId, e.QuotaDate });

            // configure relationships

            c.HasOne(e => e.BusinessEntityObject)
             .WithMany()
             .HasForeignKey(e => e.BusinessEntityId);

            // configure properties
          
            c.Property(e => e.BusinessEntityId)
             .HasColumnName("BusinessEntityID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.QuotaDate)
             .HasColumnName("QuotaDate")
             .HasColumnType("datetime")
             .IsRequired();

            c.Property(e => e.SalesQuota)
             .HasColumnName("SalesQuota")
             .HasColumnType("money")
             .IsRequired();

            c.Property(e => e.Rowguid)
             .HasColumnName("rowguid")
             .HasColumnType("uniqueidentifier")
             .IsRequired();

            c.Property(e => e.ModifiedDate)
             .HasColumnName("ModifiedDate")
             .HasColumnType("datetime")
             .IsRequired();

        }
    }
}