//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class SalesTerritoryHistoryConfig : IEntityTypeConfiguration<SalesTerritoryHistory>
    {
        public void Configure(EntityTypeBuilder<SalesTerritoryHistory> c)
        {
            c.ToTable("SalesTerritoryHistory", "Sales")
             .HasKey(e => new { e.BusinessEntityId, e.StartDate, e.TerritoryId });

            // configure relationships

            c.HasOne(e => e.BusinessEntityObject)
             .WithMany()
             .HasForeignKey(e => e.BusinessEntityId);

            c.HasOne(e => e.TerritoryObject)
             .WithMany()
             .HasForeignKey(e => e.TerritoryId);

            // configure properties
          
            c.Property(e => e.BusinessEntityId)
             .HasColumnName("BusinessEntityID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.StartDate)
             .HasColumnName("StartDate")
             .HasColumnType("datetime")
             .IsRequired();

            c.Property(e => e.TerritoryId)
             .HasColumnName("TerritoryID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.EndDate)
             .HasColumnName("EndDate")
             .HasColumnType("datetime");

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