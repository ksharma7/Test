//---------------------------------------------------------------------------------------------
// This file was AUTO-GENERATED by "EF Domain Objects" Xomega.Net generator.
//
// Manual CHANGES to this file WILL BE LOST when the code is regenerated.
//---------------------------------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureWorks.Services.Entities
{
    public class SalesOrderDetailInmemConfig : IEntityTypeConfiguration<SalesOrderDetailInmem>
    {
        public void Configure(EntityTypeBuilder<SalesOrderDetailInmem> c)
        {
            c.ToTable("SalesOrderDetail_inmem", "Sales")
             .HasKey(e => new { e.SalesOrderId, e.SalesOrderDetailId });

            // configure relationships

            c.HasOne(e => e.SalesOrderObject)
             .WithMany()
             .HasForeignKey(e => e.SalesOrderId);

            c.HasOne(e => e.SpecialOfferProductInmemObject)
             .WithMany()
             .HasForeignKey(e => new { e.SpecialOfferId, e.ProductId });

            // configure properties
          
            c.Property(e => e.SalesOrderId)
             .HasColumnName("SalesOrderID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.SalesOrderDetailId)
             .HasColumnName("SalesOrderDetailID")
             .HasColumnType("bigint")
             .IsRequired()
             .ValueGeneratedOnAdd();

            c.Property(e => e.CarrierTrackingNumber)
             .HasColumnName("CarrierTrackingNumber")
             .HasColumnType("nvarchar")
             .HasMaxLength(25)
             .IsUnicode();

            c.Property(e => e.OrderQty)
             .HasColumnName("OrderQty")
             .HasColumnType("smallint")
             .IsRequired();

            c.Property(e => e.SpecialOfferId)
             .HasColumnName("SpecialOfferID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.ProductId)
             .HasColumnName("ProductID")
             .HasColumnType("int")
             .IsRequired();

            c.Property(e => e.UnitPrice)
             .HasColumnName("UnitPrice")
             .HasColumnType("money")
             .IsRequired();

            c.Property(e => e.UnitPriceDiscount)
             .HasColumnName("UnitPriceDiscount")
             .HasColumnType("money")
             .IsRequired();

            c.Property(e => e.ModifiedDate)
             .HasColumnName("ModifiedDate")
             .HasColumnType("datetime2")
             .IsRequired();

        }
    }
}